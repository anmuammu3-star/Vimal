-- Sakrix Digital Marketing Database Setup Script
-- Paste this script into your Supabase SQL Editor to set up all tables and security policies.

-- 1. Contacts Table
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new'
);

-- Enable RLS (Row Level Security) for Contacts
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone (public/anonymous) to submit contact requests
CREATE POLICY "Allow public inserts" ON contacts
  FOR INSERT WITH CHECK (true);

-- Allow authenticated users (agency staff) to view/modify submissions
CREATE POLICY "Allow authenticated read/write" ON contacts
  FOR ALL TO authenticated USING (true);


-- 2. Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  email TEXT UNIQUE NOT NULL,
  active BOOLEAN DEFAULT true
);

-- Enable RLS for Newsletter Subscribers
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow public to subscribe
CREATE POLICY "Allow public subscriptions" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Allow authenticated reads
CREATE POLICY "Allow authenticated reads" ON newsletter_subscribers
  FOR SELECT TO authenticated USING (true);


-- 3. Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  category TEXT NOT NULL,
  read_time INT NOT NULL,
  published BOOLEAN DEFAULT true,
  author JSONB NOT NULL,
  tags TEXT[]
);

-- Enable RLS for Blogs
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read of published blog posts
CREATE POLICY "Allow public blog read" ON blog_posts
  FOR SELECT USING (published = true);

-- Allow full access to authenticated users
CREATE POLICY "Allow auth full control on blogs" ON blog_posts
  FOR ALL TO authenticated USING (true);


-- 4. Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  image_url TEXT,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  review TEXT NOT NULL,
  success_story TEXT
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public testimonial read" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Allow auth control testimonials" ON testimonials FOR ALL TO authenticated USING (true);


-- 5. Portfolio Projects Table
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  title TEXT NOT NULL,
  client_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  services_used TEXT[] NOT NULL,
  duration TEXT NOT NULL,
  technology TEXT[] NOT NULL,
  marketing_results JSONB NOT NULL,
  before_after JSONB NOT NULL,
  banner_image TEXT NOT NULL,
  gallery TEXT[] NOT NULL,
  description TEXT NOT NULL,
  featured BOOLEAN DEFAULT false
);

ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public portfolio read" ON portfolio_projects FOR SELECT USING (true);
CREATE POLICY "Allow auth control portfolio" ON portfolio_projects FOR ALL TO authenticated USING (true);


-- 6. Case Studies Table
CREATE TABLE IF NOT EXISTS case_studies (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  title TEXT NOT NULL,
  client_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  background TEXT NOT NULL,
  challenge TEXT NOT NULL,
  research TEXT NOT NULL,
  strategy TEXT NOT NULL,
  execution JSONB NOT NULL,
  analytics TEXT NOT NULL,
  final_results JSONB NOT NULL,
  client_review JSONB NOT NULL
);

ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public case study read" ON case_studies FOR SELECT USING (true);
CREATE POLICY "Allow auth control case study" ON case_studies FOR ALL TO authenticated USING (true);


-- 7. Seed Sample Blog Post (Optional test data)
INSERT INTO blog_posts (title, slug, excerpt, content, cover_image, category, read_time, published, author, tags)
VALUES (
  'The Ultimate Guide to Technical SEO in 2026: Crushing the Core Web Vitals',
  'technical-seo-core-web-vitals-2026',
  'Google is prioritizing user experience more than ever. Learn how to optimize LCP and INP to skyrocket rankings.',
  '# The Ultimate Guide to Technical SEO in 2026...',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  'SEO',
  6,
  true,
  '{"name": "Elena Rostova", "role": "Head of SEO Strategy", "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"}'::jsonb,
  ARRAY['SEO', 'Core Web Vitals', 'INP', 'Page Speed']
) ON CONFLICT (slug) DO NOTHING;
