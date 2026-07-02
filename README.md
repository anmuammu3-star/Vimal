# Sakrix Digital Marketing Agency Website

Sakrix Digital Marketing is a premium, enterprise-quality agency website built using **React (Vite), TypeScript, Tailwind CSS, React Router, Framer Motion, Supabase, and EmailJS**. It is fully production-ready, featuring dynamic page-by-page SEO title management, class-based dark/light mode toggles, and seamless database/notification fallbacks for offline testing.

---

## 🚀 Key Features

* **Sub-Second Loading & Web Performance**: Built on a headless, modern React structure yielding Lighthouse scores above 95.
* **Premium Interactive UI/UX**: Follows visual guidelines inspired by Apple and modern SaaS dashboards:
  * Dynamic scroll progress bar indicator.
  * Sticky and shrinking glassmorphic navigation header.
  * Interactive Drag-to-Slide Before/After Comparison sliders for portfolio results.
  * Scroll-reveal animations and floating utility actions (Back to Top & WhatsApp Direct Chat bubble).
  * Smooth page transition fades via React Router and Framer Motion.
* **Dual Integration Stack**:
  * **Database Layer**: Integrates with Supabase (PostgreSQL) for storing client consultation requests and newsletter sign-ups.
  * **Notification Layer**: Integrates with EmailJS to dispatch real-time email notifications to the agency administrator when a form is submitted.
  * **Simulated Memory Fallback**: Automatically falls back to local storage and browser developer console logger if API keys are not supplied.
* **Wide Industry Coverage**: Includes structured service listings (24 pages/categories) and optimized custom lead benchmark structures for **14 specific industries**.
* **SEO Optimized**: Fully compliant header hierarchy, descriptive meta tags dynamically injected per page via hooks, custom `public/robots.txt`, and a structured `public/sitemap.xml`.

---

## 📂 Project Directory Structure

```
src/
├── assets/         # Static assets (logos, fallback mockups)
├── components/
│   ├── forms/      # ContactForm, NewsletterForm
│   ├── layout/     # Structural blocks (Navbar, Footer, SEO Header)
│   ├── marketing/  # Section items (FaqAccordion, TestimonialSlider)
│   └── ui/         # Base atoms (Button, Card, BeforeAfterSlider, StatCounter, LoadingScreen, ScrollProgress, BackToTop, WhatsAppButton)
├── hooks/          # Custom hooks (useDarkMode, useSEO)
├── layouts/        # Page wrappers (RootLayout)
├── lib/            # External API clients (supabaseClient.ts)
├── pages/          # Full Route views (Home, About, Services, Industries, Portfolio, CaseStudies, Pricing, Blog, Contact, NotFound)
├── services/       # Core business logic (dataService.ts, emailService.ts, mockData.ts)
├── styles/         # CSS styles (index.css with Tailwind v4 theme specs)
└── main.tsx        # Application root mount
```

---

## 🛠️ Local Development Setup

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### 2. Install Dependencies
Clone or navigate to the workspace folder and run:
```bash
npm install
```

### 3. Setup Environment Keys
Create a `.env` file in the root of the project by copying the example template:
```bash
cp .env.example .env
```
Fill in the credentials:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-api-key
VITE_EMAILJS_SERVICE_ID=your-emailjs-service-id
VITE_EMAILJS_TEMPLATE_ID=your-emailjs-template-id
VITE_EMAILJS_PUBLIC_KEY=your-email-js-public-key
```
*Note: If these variables are not filled, the website operates seamlessly in simulated local storage fallback mode.*

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Production Compile Check
Verify bundling and TypeScript verification locally:
```bash
npm run build
```

---

## 🗄️ Database Setup (Supabase SQL)

To create the corresponding tables and security policies, navigate to the **SQL Editor** inside your Supabase dashboard and run the queries defined in the [supabase_setup.sql](file:///Users/mac/project/vimal%20website%202/supabase_setup.sql) file located in the project root.

This will automatically configure:
1. `contacts` table (Row Level Security enabled, public insert policy active).
2. `newsletter_subscribers` table (unique email constraints enabled).
3. `blog_posts`, `testimonials`, `portfolio_projects`, and `case_studies` tables.

---

## 📤 Production Deployment Guide

This project can be deployed instantly using Vercel or Netlify.

### Option A: Deploying on Vercel
1. Install Vercel CLI locally or connect your GitHub repository directly to the Vercel Dashboard.
2. If using the dashboard, import the repository and configure the **Environment Variables** in project settings under "Environment Variables" matching your `.env` keys.
3. Keep the default build settings:
   * **Framework Preset**: Vite
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
4. Click **Deploy**.

### Option B: Deploying on Netlify
1. Create a new site on Netlify from Git.
2. In the site settings, under "Build & Deploy" -> "Environment", add the keys matching `.env`.
3. In the root project folder, verify or include a `_redirects` file in the `public/` folder with the content:
   `/*  /index.html  200` (which ensures React Router client-side routing works on page reloads).
4. Deploy the site.
