-- Fix 1: Remove public SELECT on chat_bans, make admin-only
DROP POLICY IF EXISTS "Anyone can read bans" ON chat_bans;

CREATE POLICY "Admins can read bans"
ON chat_bans FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Fix 2: Add INSERT, UPDATE, DELETE policies for chat_bans (admin only)
CREATE POLICY "Admins can create bans"
ON chat_bans FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update bans"
ON chat_bans FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete bans"
ON chat_bans FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Fix 3: Create function to check if session is banned (for chat messages)
CREATE OR REPLACE FUNCTION public.is_session_banned(p_session_id TEXT)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM chat_bans
    WHERE session_id = p_session_id
    AND (expires_at IS NULL OR expires_at > NOW())
  )
$$;

-- Fix 4: Update chat_messages INSERT policy to enforce bans
DROP POLICY IF EXISTS "Anyone can send messages" ON chat_messages;

CREATE POLICY "Non-banned users can send messages"
ON chat_messages FOR INSERT
WITH CHECK (
  session_id IS NULL 
  OR NOT public.is_session_banned(session_id)
);