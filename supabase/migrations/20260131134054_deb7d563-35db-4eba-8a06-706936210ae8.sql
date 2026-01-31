-- Drop existing RESTRICTIVE policies on bookings table
DROP POLICY IF EXISTS "Admins can delete bookings" ON public.bookings;
DROP POLICY IF EXISTS "Admins can update bookings" ON public.bookings;
DROP POLICY IF EXISTS "Admins can view bookings" ON public.bookings;
DROP POLICY IF EXISTS "Anyone can submit bookings" ON public.bookings;

-- Recreate as PERMISSIVE policies (default behavior, secure)
-- Only admins can view booking submissions (protects customer data)
CREATE POLICY "Admins can view bookings"
ON public.bookings
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update bookings
CREATE POLICY "Admins can update bookings"
ON public.bookings
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete bookings
CREATE POLICY "Admins can delete bookings"
ON public.bookings
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Anyone can submit a booking (public form)
CREATE POLICY "Anyone can submit bookings"
ON public.bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (true);