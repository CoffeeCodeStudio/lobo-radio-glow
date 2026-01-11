-- Create site_branding table to store all customizable branding settings
CREATE TABLE public.site_branding (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Images
  hero_image_url TEXT,
  logo_url TEXT,
  background_image_url TEXT,
  profile_image_url TEXT,
  
  -- Colors (stored as HSL values)
  primary_glow_color TEXT DEFAULT '300 100% 50%',
  secondary_glow_color TEXT DEFAULT '180 100% 50%',
  accent_color TEXT DEFAULT '270 100% 60%',
  
  -- Site info
  site_name TEXT DEFAULT 'DJ Lobo Radio',
  tagline TEXT DEFAULT 'Bringing the best of 80s and 90s music'
);

-- Enable RLS
ALTER TABLE public.site_branding ENABLE ROW LEVEL SECURITY;

-- Anyone can read branding (needed for public site)
CREATE POLICY "Anyone can read branding"
ON public.site_branding
FOR SELECT
USING (true);

-- Only admins can modify branding
CREATE POLICY "Admins can insert branding"
ON public.site_branding
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update branding"
ON public.site_branding
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete branding"
ON public.site_branding
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_site_branding_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_site_branding_updated_at
BEFORE UPDATE ON public.site_branding
FOR EACH ROW
EXECUTE FUNCTION public.update_site_branding_updated_at();

-- Insert default branding row
INSERT INTO public.site_branding (site_name, tagline)
VALUES ('DJ Lobo Radio', 'Bringing the best of 80s and 90s music');

-- Create storage bucket for branding assets
INSERT INTO storage.buckets (id, name, public)
VALUES ('branding', 'branding', true);

-- Storage policies for branding bucket
CREATE POLICY "Anyone can view branding images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'branding');

CREATE POLICY "Admins can upload branding images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'branding' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update branding images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'branding' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete branding images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'branding' AND public.has_role(auth.uid(), 'admin'));