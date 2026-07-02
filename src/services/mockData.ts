// Professional Mock Data for Sakrix Digital Marketing

export interface ServiceItem {
  id: string;
  title: string;
  category: 'marketing' | 'development' | 'branding';
  description: string;
  features: string[];
  iconName: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  metrics: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  servicesUsed: string[];
  duration: string;
  technology: string[];
  marketingResults: {
    label: string;
    value: string;
  }[];
  beforeAfter: {
    beforeText: string;
    afterText: string;
    beforeLabel: string;
    afterLabel: string;
    beforeMetric: string;
    afterMetric: string;
  };
  bannerImage: string;
  gallery: string[];
  description: string;
  featured: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  background: string;
  challenge: string;
  research: string;
  strategy: string;
  execution: {
    seo: string;
    paidAds: string;
    socialMedia: string;
  };
  analytics: string;
  finalResults: {
    metric: string;
    value: string;
    description: string;
  }[];
  clientReview: {
    rating: number;
    text: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  imageUrl: string;
  rating: number;
  review: string;
  successStory: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: 'SEO' | 'Google Ads' | 'AI Marketing' | 'Branding' | 'Website Development' | 'Business Growth' | 'Social Media Tips';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// 1. SERVICES DATA
export const servicesData: ServiceItem[] = [
  // Digital Marketing
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    category: 'marketing',
    description: 'Dominate search results and capture high-intent organic traffic with our data-driven SEO strategies, keyword optimization, and technical enhancements.',
    features: ['Technical SEO Audits', 'Keyword Research & Mapping', 'On-Page Optimization', 'High-Authority Backlink Acquisition', 'Rank Tracking & Reporting'],
    iconName: 'Search'
  },
  {
    id: 'local-seo',
    title: 'Local SEO & Google Maps',
    category: 'marketing',
    description: 'Ensure local customers find you first. We optimize your Google Business Profile and local citations to drive foot traffic and local phone calls.',
    features: ['Google Business Profile Setup', 'Local Citation Building', 'Review Generation Strategy', 'Hyper-local Keyword Targeting', 'Structured Schema Implementation'],
    iconName: 'MapPin'
  },
  {
    id: 'google-ads',
    title: 'Google Paid Search (PPC)',
    category: 'marketing',
    description: 'Launch targeted paid campaigns that show up exactly when prospects are searching. Maximize ROI through keyword bids and optimized landing pages.',
    features: ['Search & Display Ads', 'Shopping Campaign Setup', 'Remarketing Strategy', 'A/B Ad Copy Testing', 'Bid & Budget Optimization'],
    iconName: 'TrendingUp'
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram)',
    category: 'marketing',
    description: 'Reach your target audience based on demographics, behaviors, and interests with visually stunning, high-converting social advertising campaigns.',
    features: ['Audience Retargeting', 'Creative Concept Development', 'Lookalike Audience Setup', 'Pixel Tracking Integration', 'ROAS Analysis'],
    iconName: 'Facebook'
  },
  {
    id: 'youtube-marketing',
    title: 'YouTube Marketing & Ads',
    category: 'marketing',
    description: 'Leverage the power of video marketing to educate, inspire, and convert. We handle video ad placement, targeting, and channel growth strategies.',
    features: ['Video Ad Production', 'Pre-roll/In-feed Ads Placement', 'Channel Authority Optimization', 'Viewer Demographics Targeting', 'Performance Analytics'],
    iconName: 'Youtube'
  },
  {
    id: 'linkedin-marketing',
    title: 'LinkedIn B2B Marketing',
    category: 'marketing',
    description: 'Establish thought leadership and generate premium B2B leads. We execute highly targeted campaigns for decision-makers and C-suite executives.',
    features: ['B2B Lead Gen Forms', 'Account-Based Marketing (ABM)', 'Executive Personal Branding', 'Sponsored Content Campaigns', 'InMail Outreach Automation'],
    iconName: 'Linkedin'
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing Automation',
    category: 'marketing',
    description: 'Nurture leads and drive repeat purchases with personalized email sequences. We construct flows, design layouts, and execute newsletter lists.',
    features: ['Drip Campaign Setup', 'List Segmentation', 'Interactive Newsletters', 'Abandoned Cart Flows', 'Deliverability Optimization'],
    iconName: 'Mail'
  },
  {
    id: 'whatsapp-marketing',
    title: 'WhatsApp Marketing & Broadcasts',
    category: 'marketing',
    description: 'Engage customers directly in their most-used app. Send personalized offers, transactional updates, and automate queries using WhatsApp API bots.',
    features: ['WhatsApp API Integration', 'Broadcast Campaign Setup', 'Chatbot Auto-responders', 'Opt-in List Building', 'Interactive Buttons'],
    iconName: 'MessageSquare'
  },
  {
    id: 'content-marketing',
    title: 'Inbound Content Marketing',
    category: 'marketing',
    description: 'Attract and engage prospects with rich blog posts, whitepapers, and infographics that answer user queries and establish authority.',
    features: ['Content Strategy & Calendar', 'High-quality Blog Writing', 'Lead Magnet Creation', 'SEO-focused Content Hubs', 'Social Media Copywriting'],
    iconName: 'FileText'
  },
  // Website Development
  {
    id: 'business-website',
    title: 'High-Impact Business Website',
    category: 'development',
    description: 'Stunning, fast, and fully responsive websites that represent your brand, build trust, and serve as the perfect anchor for marketing campaigns.',
    features: ['Custom UI/UX Prototypes', 'Responsive Layout (Mobile-first)', 'Speed Optimization (LCP < 2.5s)', 'SEO Schema Markup Integration', 'Interactive Web Animations'],
    iconName: 'Globe'
  },
  {
    id: 'corporate-portal',
    title: 'Enterprise Corporate Portals',
    category: 'development',
    description: 'Scalable corporate portals built with state-of-the-art architectures, integrating user directories, internal tools, and client areas securely.',
    features: ['Role-based User Auth', 'API & Legacy System Integrations', 'Multilingual Support', 'Highly Secure Infrastructures', 'Analytics Dashboard Integration'],
    iconName: 'Briefcase'
  },
  {
    id: 'portfolio-website',
    title: 'Interactive Portfolio Platforms',
    category: 'development',
    description: 'Showcase your work, agency case studies, or design samples using fluid page transitions, video showcases, and custom user journeys.',
    features: ['Visual Case Studies Layout', 'High-resolution Galleries', 'Smooth Parallax Scroll', 'Interactive Custom Cursors', 'Video Background Integrations'],
    iconName: 'User'
  },
  {
    id: 'landing-page',
    title: 'Conversion-Focused Landing Pages',
    category: 'development',
    description: 'Sleek, lightweight single-page sites built specifically to support active ad campaigns and maximize lead conversion rates.',
    features: ['Persuasive Layout Copy', 'Optimized Forms & CTAs', 'A/B Testing Integrations', 'Lightweight Assets (INP Optimized)', 'Instant Loading Speeds'],
    iconName: 'Layout'
  },
  {
    id: 'ecommerce-website',
    title: 'E-commerce Solutions',
    category: 'development',
    description: 'Performant shopping platforms built for modern commerce. Secure checkout, flexible payment gateways, inventory management, and fast browsing.',
    features: ['Product Filters & Search', 'Secure Payment Gateway Sync', 'Cart Abandonment Hookups', 'Discount & Coupon Engines', 'Mobile-first Shopping UI'],
    iconName: 'ShoppingBag'
  },
  {
    id: 'web-application',
    title: 'Custom Web Applications',
    category: 'development',
    description: 'Full-stack application development utilizing modern frameworks (React/Next.js) and cloud backends. Built to solve specific business processes.',
    features: ['Dynamic Database Systems', 'Real-time Data Fetching', 'Interactive Custom Dashboards', 'Third-party Software Sync', 'Automated Workflows'],
    iconName: 'Terminal'
  },
  {
    id: 'website-maintenance',
    title: 'Ongoing Web Support & Maintenance',
    category: 'development',
    description: 'Keep your website secure, updated, and lightning-fast. Includes security audits, feature updates, backups, and regular optimization reports.',
    features: ['Weekly Backup Routines', 'Security Patch Monitoring', 'Core Web Vitals Optimizing', 'Content & Copy Updates', 'Priority Tech Support'],
    iconName: 'Settings'
  },
  // Branding
  {
    id: 'logo-design',
    title: 'Minimalist & Modern Logo Design',
    category: 'branding',
    description: 'Create a memorable symbol for your business. We draft distinct, vector-perfect, and modern logos that scale across all digital media.',
    features: ['Creative Concept Brainstorming', 'Vector Files & Scalable Outputs', 'Dark/Light/Monochrome Variants', 'Brand Iconography', 'Logo Usage Guidelines'],
    iconName: 'Compass'
  },
  {
    id: 'brand-identity',
    title: 'Corporate Brand Identity Systems',
    category: 'branding',
    description: 'Go beyond the logo. We craft a comprehensive visual system including typography, color palettes, tone of voice, and corporate stationary guidelines.',
    features: ['Style Guide & Design System', 'Brand Book Creation', 'Business Cards & Letterheads', 'Presentation Templates (PPT)', 'Email Signature Designs'],
    iconName: 'BookOpen'
  },
  {
    id: 'graphic-design',
    title: 'Digital & Print Graphic Design',
    category: 'branding',
    description: 'Premium designs that elevate your brand across physical and digital touchpoints. Brochures, posters, flyers, and premium packaging designs.',
    features: ['Marketing Collateral Design', 'Packaging & Label Design', 'Banners & Signage layouts', 'Print Production Hand-off', 'Vector Illustrations'],
    iconName: 'Image'
  },
  {
    id: 'social-media-design',
    title: 'Social Media Grid & Templates',
    category: 'branding',
    description: 'Stand out on the feed. We design custom post templates, Instagram grids, cover images, and reusable Canva files that keep your branding cohesive.',
    features: ['Custom Feed Templates', 'Instagram Grid Planning', 'Story & Highlight Covers', 'Platform Banner Optimization', 'Editable Asset Handover'],
    iconName: 'PenTool'
  },
  {
    id: 'motion-graphics',
    title: 'Brand Motion Graphics',
    category: 'branding',
    description: 'Animate your identity. We build dynamic logo intros, title screens, interactive UI animations, and animated explainers that grab attention.',
    features: ['Animated Logo Reveals', 'Kinetic Typography Vid', 'Lottie Animations for Web', 'Social Promo Snippets', 'Custom UI/UX Micro-motions'],
    iconName: 'Video'
  },
  {
    id: 'video-editing',
    title: 'Commercial Video Editing & Reels',
    category: 'branding',
    description: 'Transform raw footage into highly engaging vertical reels, shorts, or corporate films with professional transitions, sound design, and color grading.',
    features: ['Short-form Reels & Shorts', 'Sound Design & Royalty music', 'Color Grading & Styling', 'Subtitles & Closed Captions', 'Corporate Promotional Vids'],
    iconName: 'Layers'
  }
];

// 2. INDUSTRIES DATA
export const industriesData: IndustryItem[] = [
  { id: 'hospitals', name: 'Hospitals & Clinics', description: 'Healthcare lead generation, patient appointment automation, and HIPAA-compliant digital trust building.', iconName: 'Activity', metrics: '+180% Patient Inquiries' },
  { id: 'schools', name: 'Schools & Academies', description: 'Student admissions campaigns, parent communication portals, and modern educational branding.', iconName: 'School', metrics: '3.4x Online Admissions' },
  { id: 'colleges', name: 'Colleges & Universities', description: 'Higher education enrollment funnel setups, campus branding, and virtual tour interactive portals.', iconName: 'GraduationCap', metrics: '450+ Enrolled Students' },
  { id: 'restaurants', name: 'Restaurants & Cafes', description: 'Google Local search ranking, online ordering integrations, and high-quality food photography promo.', iconName: 'Utensils', metrics: '+220% Direct Table Bookings' },
  { id: 'hotels', name: 'Hotels & Resorts', description: 'Direct booking optimization, TripAdvisor review strategies, and luxury travel influencer campaigns.', iconName: 'Hotel', metrics: '45% Reduction in OTA fees' },
  { id: 'construction', name: 'Construction Companies', description: 'Enterprise project bidding portfolios, regional local SEO, and video progress documentation.', iconName: 'HardHat', metrics: '12M+ B2B Tender Pipeline' },
  { id: 'realestate', name: 'Real Estate Developers', description: 'Lead generation for luxury villas, virtual walkthrough sites, and high-budget social retargeting.', iconName: 'Home', metrics: '$14M Property Sales Closed' },
  { id: 'retail', name: 'Retail Shops', description: 'Drive foot traffic via Google Business Profile optimization and flash promotion campaigns.', iconName: 'Store', metrics: '+85% Increase in Foot Traffic' },
  { id: 'jewellery', name: 'Jewellery Showrooms', description: 'Premium visual brand campaigns, local rich snippets, and high-value catalog web apps.', iconName: 'Gem', metrics: '4.2x ROAS on Meta Ads' },
  { id: 'finance', name: 'Finance & Banking', description: 'High-security financial apps, trust-focused content marketing, and premium B2B lead generation.', iconName: 'DollarSign', metrics: '+140% Qualified Inquiries' },
  { id: 'automobile', name: 'Automobile Dealers', description: 'Test drive booking funnels, dynamic vehicle catalogs, and hyper-targeted zip code search ads.', iconName: 'Car', metrics: '320+ Test Drives Booked' },
  { id: 'startups', name: 'SaaS & Tech Startups', description: 'Growth hacking, conversion rate optimization, VC presentation designs, and rapid product launch webs.', iconName: 'Rocket', metrics: '10k+ SaaS Sign-ups' },
  { id: 'itcompanies', name: 'IT & Software Companies', description: 'B2B whitepaper campaigns, LinkedIn client targeting, and modern developer-branding portals.', iconName: 'Cpu', metrics: '82 Qualified B2B Leads' },
  { id: 'freelancers', name: 'Freelancers & Creators', description: 'Sleek portfolio websites, email list setups, and personal brand identity guidelines.', iconName: 'UserCheck', metrics: '+150% Inbound Job Requests' }
];

// 3. TESTIMONIALS DATA
export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Sarah Mitchell',
    company: 'Apex Healthcare Group',
    role: 'Medical Director & Founder',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    review: 'Sakrix transformed our local clinics visibility. We were struggling to rank on Google Maps. Within four months of their Local SEO push, our monthly appointment volume grew by 180%. The web portal they built is extremely fast and easy for elderly patients to navigate.',
    successStory: 'Achieved #1 Local Google Search Ranking for Healthcare in the metropolitan area, shifting patient bookings from manual phones to our website.'
  },
  {
    id: 'test-2',
    name: 'Vikram R. Singhania',
    company: 'Vanguard Realty Group',
    role: 'Managing Partner',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    review: 'Sakrix delivered an e-commerce catalog website and combined it with dynamic Meta Ads targeting. The ROAS on our luxury residential projects was a solid 4.2x. Their attention to animation detail on the web development side and precision targeting on ads was exceptional.',
    successStory: 'Closed 12 high-value luxury apartment sales through website-sourced leads within the first quarter, totaling over $14M in transaction volume.'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    company: 'ScribeSaaS Inc.',
    role: 'VP of Marketing & Growth',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    review: 'The development of our custom SaaS web application by Sakrix was top-notch. Clean React-TypeScript code, smooth Lottie transitions, and a solid Supabase database integration. On the marketing side, their SEO content hub helped us double our organic sign-ups in 90 days.',
    successStory: 'Built and launched a highly interactive analytics dashboard app with sub-second page loads, yielding a 98 Lighthouse performance score.'
  },
  {
    id: 'test-4',
    name: 'Chef Marcus Dubois',
    company: 'L\'Atelier Bistros Group',
    role: 'Executive Chef & Owner',
    imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    review: 'Their team redesigned our digital ordering portal and handled our local social media promos. Table bookings skyrocketed during off-peak weekdays due to their smart geofenced Google Ads. Extremely professional group!',
    successStory: 'Drove a 220% increase in online reservations via table-booking widget, eliminating third-party aggregator commissions.'
  }
];

// 4. PORTFOLIO DATA
export const portfolioData: PortfolioProject[] = [
  {
    id: 'project-1',
    title: 'Aura Premium Jewelry Platform',
    clientName: 'Aura Diamonds Ltd.',
    industry: 'Jewellery Showrooms',
    servicesUsed: ['E-commerce Website', 'Logo Design', 'Meta Ads', 'Search Engine Optimization'],
    duration: '5 Months',
    technology: ['React (Vite)', 'Tailwind CSS', 'Framer Motion', 'Supabase'],
    marketingResults: [
      { label: 'Return on Ad Spend (ROAS)', value: '4.8x' },
      { label: 'E-commerce Conversion Rate', value: '+142%' },
      { label: 'Monthly Online Revenue', value: '$85,000+' }
    ],
    beforeAfter: {
      beforeText: 'Slow, outdated WordPress store with high cart abandonment (82%) and zero mobile optimization.',
      afterText: 'Sub-second React storefront with integrated payment gateway, 3D product preview, and optimized checkout flow.',
      beforeLabel: '$18k Monthly Sales',
      afterLabel: '$85k Monthly Sales',
      beforeMetric: '82% Cart Abandonment',
      afterMetric: '31% Cart Abandonment'
    },
    bannerImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'Aura Diamonds wanted to bridge the gap between their brick-and-mortar showroom experience and digital sales. We built a premium, glassmorphism-themed e-commerce experience using React and Supabase, optimized their payment integration, and ran localized Meta Ads campaigns that targeted high-net-worth buyers within a 30-mile radius.',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Zenith School Online Portal',
    clientName: 'Zenith International Academies',
    industry: 'Schools & Academies',
    servicesUsed: ['Business Website', 'Local SEO', 'Brand Identity', 'WhatsApp Marketing'],
    duration: '3 Months',
    technology: ['React', 'Framer Motion', 'Tailwind CSS', 'Node.js'],
    marketingResults: [
      { label: 'New Admissions Registered', value: '430+' },
      { label: 'Google Search Impressions', value: '+350%' },
      { label: 'WhatsApp Query Inquiries', value: '1,200+' }
    ],
    beforeAfter: {
      beforeText: 'Generic, unorganized website layout with PDF admission forms. Parents had to physically visit the school for basic queries.',
      afterText: 'Modern onboarding portal with dynamic virtual tour, direct WhatsApp chatbot integration, and paperless online enrollment.',
      beforeLabel: 'Paper Admissions',
      afterLabel: '100% Paperless Portal',
      beforeMetric: '8-day Query Time',
      afterMetric: 'Instantly Answered (Bot)'
    },
    bannerImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'We created an all-in-one virtual admissions platform for Zenith International. By simplifying the application flow and setting up a WhatsApp broadcast campaign linked directly to automated customer support, we eliminated administrative friction and helped Zenith exceed their annual enrollment targets two months ahead of schedule.',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Novomed Hospital Care Engine',
    clientName: 'Novomed Multispecialty Hospital',
    industry: 'Hospitals & Clinics',
    servicesUsed: ['Web Application', 'Google Ads', 'Local SEO', 'Email Marketing'],
    duration: '6 Months',
    technology: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase PostgreSQL'],
    marketingResults: [
      { label: 'Patient Appointment Growth', value: '+190%' },
      { label: 'Google Maps Phone Calls', value: '+280%' },
      { label: 'Patient No-Show Rate', value: '-65%' }
    ],
    beforeAfter: {
      beforeText: 'Outdated portal with manual phone booking system. Highly inefficient and led to high appointment cancellations.',
      afterText: 'Secure Patient Care engine database showing live slot availabilities, automated SMS reminders, and integrated telemedicine lobby.',
      beforeLabel: 'Manual Calendars',
      afterLabel: 'Auto-Synced System',
      beforeMetric: '18% Appointment No-Shows',
      afterMetric: '6% Appointment No-Shows'
    },
    bannerImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'Novomed Hospital partnered with us to digitize their patient experience and attract more specialist doctor appointments. We executed a double strategy: built a secure, lightning-fast patient scheduling app and ran targeted local Google Search campaigns focusing on niche specialties (cardiology, orthopedics), driving massive local ranking increases.',
    featured: true
  },
  {
    id: 'project-4',
    title: 'Terra & Co. Real Estate Campaign',
    clientName: 'Terra Developers Corp.',
    industry: 'Real Estate Developers',
    servicesUsed: ['Landing Page', 'Meta Ads', 'Graphic Design', 'Motion Graphics'],
    duration: '4 Months',
    technology: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    marketingResults: [
      { label: 'Qualified Investor Leads', value: '1,450+' },
      { label: 'Cost Per Lead (CPL) Reduced', value: '-35%' },
      { label: 'Conversion Rate', value: '4.8%' }
    ],
    beforeAfter: {
      beforeText: 'Unfocused PDFs, landing page loading in 6 seconds, and low-quality static image ads leading to fake/spam leads.',
      afterText: 'Lightweight landing page with immersive video backdrops, verified OTP lead collection form, and dynamic walkthrough animation.',
      beforeLabel: '$32 Cost Per Lead',
      afterLabel: '$21 Cost Per Lead',
      beforeMetric: '0.8% Landing Page Conv',
      afterMetric: '4.8% Landing Page Conv'
    },
    bannerImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=600',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'For Terra & Co.\'s luxury villa launch, we built a modern single-page showcase application that displays property floor plans, panoramic views, and amenities in a responsive format. We ran high-budget retargeting ads on Meta platforms featuring virtual walkthrough animations, yielding millions of dollars in closed home sales.',
    featured: false
  },
  {
    id: 'project-5',
    title: 'Bite & Co. Digital Dining App',
    clientName: 'Bite Bistros Inc.',
    industry: 'Restaurants & Cafes',
    servicesUsed: ['E-commerce Website', 'Social Media Design', 'Google Ads'],
    duration: '3 Months',
    technology: ['React', 'Tailwind CSS', 'Supabase'],
    marketingResults: [
      { label: 'Direct Deliveries Placed', value: '6,200+' },
      { label: 'Average Ticket Value Increase', value: '+35%' },
      { label: 'Google Search Traffic', value: '+180%' }
    ],
    beforeAfter: {
      beforeText: 'No direct ordering options. Relying fully on food aggregator apps charging 25% commissions on all orders.',
      afterText: 'Custom web menu with built-in delivery zones, digital payment sync, and customer loyalty dashboard program.',
      beforeLabel: '25% Aggregator Commission',
      afterLabel: '0% Direct Commission',
      beforeMetric: '$14 Average Order Value',
      afterMetric: '$21 Average Order Value'
    },
    bannerImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'We built a bespoke dining app for Bite & Co that bypasses delivery aggregators. An interactive menu allows instant checkout, custom additions, and updates the driver in real-time. Paired with localized search advertising, the bistros grew their customer database and direct orders.',
    featured: false
  },
  {
    id: 'project-6',
    title: 'CloudScale SaaS Landing Platform',
    clientName: 'CloudScale Technologies',
    industry: 'SaaS & Tech Startups',
    servicesUsed: ['Landing Page', 'Google Ads', 'Motion Graphics'],
    duration: '2 Months',
    technology: ['React', 'Tailwind CSS', 'Framer Motion'],
    marketingResults: [
      { label: 'Free Trial Sign-ups', value: '8,400+' },
      { label: 'Acquisition Cost (CAC) Drop', value: '-42%' },
      { label: 'Demo Bookings Scheduled', value: '450+' }
    ],
    beforeAfter: {
      beforeText: 'Dry, copy-heavy site with unclear value proposition. B2B visitors did not understand product workflows.',
      afterText: 'Premium site featuring interactive calculators, SVG animated layouts showcasing cloud scaling, and a single-click demo sched.',
      beforeLabel: '120 Free Trials/mo',
      afterLabel: '4,200 Free Trials/mo',
      beforeMetric: '$85 Customer Acq Cost',
      afterMetric: '$49 Customer Acq Cost'
    },
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600'
    ],
    description: 'CloudScale sought to increase their monthly sign-ups. We structured a conversion-focused landing page showcasing visual data graphs, code snippets, and testimonial slides. Coupled with a laser-focused search marketing campaign, their user acquisition exploded.',
    featured: false
  }
];

// 5. CASE STUDIES DATA
export const caseStudiesData: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'How Aura Premium Jewelry Scales Digital Sales by 370% inside 5 Months',
    clientName: 'Aura Diamonds Ltd.',
    industry: 'Jewellery Showrooms',
    background: 'Aura Diamonds is an elite family-owned jewelry showroom with over three decades of brick-and-mortar operations. However, during economic shifts, they realized they lacked a modern digital store that reflected their brand luxury, limiting their customer reach to local physical foot traffic.',
    challenge: 'Jewelry shopping is highly emotional and tactile. Replicating the physical showroom trust online requires stellar branding, responsive web performance, and dynamic visuals. Aura\'s previous website was a slow WordPress install that failed to handle high-resolution images, had a complicated checkout flow, and had no SEO authority.',
    research: 'We researched luxury buyer behaviors online and found that 78% of purchasers search for designs on mobile before visiting or ordering. Page speed was critical: a 1-second load lag dropped purchase intent by 20%. Trust factors (reviews, metal certifications, return policies) had to be visible at checkout.',
    strategy: 'We planned a multi-tier strategy:\n1. Rebuild the website from scratch as a headless storefront with React/TS for maximum performance (Lighthouse score 98).\n2. Write high-authority SEO hubs comparing diamond shapes, cut grades, and custom metal sizing.\n3. Configure dynamic Google search campaigns targeting "handcrafted engagement rings" and high-intent local queries.\n4. Build hyper-focused social retargeting ads featuring carousel videos of products reflecting light (motion graphics).',
    execution: {
      seo: 'Implemented custom schema markup for catalog items. Wrote 15 high-ranking education guides. Optimized product page loading and image metadata. Earned 45 high-authority backlinks in jewelry and lifestyle publications.',
      paidAds: 'Launched Google Search campaigns focusing on local zip codes with high disposable income. Set up Meta catalogs for dynamic retargeting, showing users the exact jewelry piece they viewed with client video reviews next to it.',
      socialMedia: 'Created visually compelling Instagram grids and Reels showcasing jewelry production, custom crafting, and real customer engagement videos.'
    },
    analytics: 'Installed Supabase databases to log purchase steps and track checkout drops. Configured Google Analytics with custom events logging image zoom clicks, color-variant swaps, and diamond weight selections.',
    finalResults: [
      { metric: 'Online Monthly Sales', value: '$85,000+', description: 'Grew from a baseline of $18,000 before project launch' },
      { metric: 'Return on Ad Spend (ROAS)', value: '4.8x', description: 'Average across Google Search and Meta dynamic campaigns' },
      { metric: 'Conversion Rate Increase', value: '+142%', description: 'Sub-second mobile loading speed reduced cart abandonment' },
      { metric: 'Organic Traffic growth', value: '+240%', description: 'Ranking in top 3 spots for key local engagement queries' }
    ],
    clientReview: {
      rating: 5,
      text: 'Sakrix transformed our legacy brand into a digital powerhouse. Our digital storefront is now generating as many sales as our main brick-and-mortar showroom. The transition was seamless, and the results exceeded our forecasts.',
      author: 'Jonathan Sterling',
      role: 'CEO & Founder',
      company: 'Aura Diamonds Ltd.'
    }
  },
  {
    id: 'case-2',
    title: 'Novomed Multispecialty Hospital Online Booking Patient Funnel System',
    clientName: 'Novomed Multispecialty Hospital',
    industry: 'Hospitals & Clinics',
    background: 'Novomed is a modern healthcare center offering specialty medical care across cardiology, neurology, and pediatrics. Despite top-tier medical facilities, their patient booking workflow was fully manual and call-center dependent, causing high cancellation rates, long queues, and dropped leads.',
    challenge: 'Medical booking is complex due to doctor schedules, variable consultation types, and patient anxiety. Healthcare marketing is also highly restricted by compliance guidelines on platforms like Google and Facebook. The site had to load immediately, assure security, and sync with live medical calendars.',
    research: 'We found that 62% of patients prefer scheduling consultations after regular business hours (between 6 PM and 8 AM) when call centers are closed. Adding immediate text notifications and slot confirmations reduced appointment no-shows by more than half.',
    strategy: 'Our strategic blueprint encompassed:\n1. Constructing a React-based scheduling web app synced to a secure PostgreSQL backend in Supabase.\n2. Writing a strict HIPAA-compliant information privacy framework.\n3. Creating hyper-targeted Google Local Service Search Ads mapping doctors to specific medical symptom queries.\n4. Implementing an automated SMS/WhatsApp reminder flow.',
    execution: {
      seo: 'Built out custom doctor bio pages, highlighting certifications and medical research. Ranked Novomed for local queries (e.g. "pediatrician near me") by optimizing Google Business Profile.',
      paidAds: 'Launched Google Search campaigns using keyword qualifiers reflecting high urgency. Placed click-to-call mobile extensions that routed inquiries directly to relevant departments.',
      socialMedia: 'Designed informational health-tips grids, video reels of doctors explaining common syndromes, and community health events.'
    },
    analytics: 'Monitored booking funnels to trace the exact drop-off points in medical forms. Logged no-show data, SMS response rates, and ad click-through rates (CTR).',
    finalResults: [
      { metric: 'Specialist Appointments Booked', value: '+190%', description: 'Drastic increase in booking volume within 6 months' },
      { metric: 'Patient No-Show Rate', value: '6%', description: 'Reduced from 18% through automated SMS/WhatsApp flows' },
      { metric: 'Google Maps Call Volume', value: '+280%', description: 'Optimized local profile rankings drove high inbound phone calls' },
      { metric: 'Website Loading Speed', value: '1.2s', description: 'Interactive React components optimized for low bandwidth' }
    ],
    clientReview: {
      rating: 5,
      text: 'Sakrix built a patient-first scheduler that completely freed up our clinic receptionist staff. Our specialist bookings have doubled, and our patients love receiving instant confirmations and directions on WhatsApp.',
      author: 'Dr. Sarah Mitchell',
      role: 'Medical Director',
      company: 'Novomed Multispecialty Hospital'
    }
  }
];

// 6. FAQ DATA (20 ITEMS)
export const faqData: FAQItem[] = [
  { id: 'faq-1', question: 'What services does Sakrix Digital Marketing offer?', answer: 'We offer an all-in-one suite of growth services split into three core categories: Digital Marketing (SEO, Google Ads, Meta Ads, Email automation, WhatsApp broadcasts), Website Development (business sites, e-commerce, custom web apps, landing pages), and Branding (logo design, identity styles, motion graphics, video editing).' },
  { id: 'faq-2', question: 'How long does it take to see results from SEO campaigns?', answer: 'SEO is a long-term compounding strategy. While technical fixes and local search optimizations can show positive rank changes in 4 to 8 weeks, significant competitive rankings and organic traffic growth typically require 4 to 6 months of consistent strategy, content output, and link building.' },
  { id: 'faq-3', question: 'Do you build custom websites or use simple templates?', answer: 'We build fully custom, high-performance websites using React (Vite), TypeScript, and Tailwind CSS. We avoid generic themes or templates to ensure your website is uniquely suited to your brand, loads under 2 seconds, complies with WCAG accessibility guidelines, and is built to convert traffic into leads.' },
  { id: 'faq-4', question: 'What database do you use for backend web applications?', answer: 'We utilize Supabase (which provides a secure, relational PostgreSQL database) as our default backend client. This allows us to handle user authentication, real-time data syncs, secure file storage, and data querying in a highly scalable and cost-effective format.' },
  { id: 'faq-5', question: 'How is the WhatsApp Marketing service set up?', answer: 'We configure your business using the official WhatsApp Business API. This allows us to set up automated drip campaigns, send broadcast notifications to opted-in users without risk of number blocks, integrate AI-driven customer support chatbots, and add interactive buttons that route customers directly to buy.' },
  { id: 'faq-6', question: 'What is your process for running paid ad campaigns?', answer: 'Our process starts with thorough competitor analysis and keyword research. We set up conversion pixels, build dedicated landing pages, draft multiple ad creatives (A/B testing), define lookalike/retargeting audiences, and actively adjust budget bids to ensure you capture the maximum ROAS.' },
  { id: 'faq-7', question: 'Will my website work perfectly on mobile phones?', answer: 'Absolutely. We adopt a strict mobile-first design strategy. Every button size, layout shift, interactive animation, and font scaling is designed and tested for phones first, ensuring an optimal, lightning-fast experience across iOS, Android, and tablets.' },
  { id: 'faq-8', question: 'What is the "Before & After" feature in your portfolio?', answer: 'Our Before & After section features an interactive visual slider that showcases our client\'s original metrics or website look compared to the new premium design and performance results. It highlights the direct growth in revenue, load speeds, or conversion rates.' },
  { id: 'faq-9', question: 'Can you handle email marketing automation?', answer: 'Yes. We design custom email templates that match your brand, build audience segments to send personalized newsletters, and write automated workflows (such as welcome sequences, lead nurturing, review requests, and abandoned cart reminders).' },
  { id: 'faq-10', question: 'How do you structure website maintenance plans?', answer: 'Our maintenance covers weekly database backups, security patch updates, hosting checks, Core Web Vitals optimization, and priority developer hours to update copy or add new sections as your digital marketing campaigns expand.' },
  { id: 'faq-11', question: 'How do you measure marketing campaign success?', answer: 'We trace tangible business metrics: Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), organic search ranks, e-commerce conversion rates, and qualified lead volume. We establish a live dashboard link using Supabase/Analytics so you can view results in real-time.' },
  { id: 'faq-12', question: 'What industries do you specialize in?', answer: 'We have tailored, industry-tested marketing blueprints for 14 sectors, including Hospitals, Schools, Colleges, Restaurants, Hotels, Real Estate, Construction, Retail, Finance, Jewellery, Automobile, IT Companies, Startups, and Freelancers.' },
  { id: 'faq-13', question: 'What makes Sakrix different from other marketing agencies?', answer: 'Unlike traditional agencies that outsource development or use slow, insecure builders, we combine world-class React development with conversion copywriting and paid marketing. We build custom, ultra-fast tech stacks that load instantly, rank natively, and turn visitors into buyers.' },
  { id: 'faq-14', question: 'Can you design a brand-new logo and brand identity system?', answer: 'Yes. We craft minimalist logos, typography systems, curated color palettes, brand books, business cards, social media assets, and motion graphics to establish a premium and cohesive corporate identity across all marketing channels.' },
  { id: 'faq-15', question: 'Do you charge a flat project rate or monthly retainers?', answer: 'For single projects (like a website launch or logo rebranding), we charge a fixed project rate. For ongoing marketing services (SEO, Google/Meta Ads management, monthly copywriting, WhatsApp marketing), we operate on a structured monthly retainer based on workload tiers.' },
  { id: 'faq-16', question: 'Are my contact form submissions secure?', answer: 'Yes. All form submissions are filtered for spam, processed securely via client-side validations, saved directly in your encrypted Supabase database, and immediately routed to your inbox using EmailJS integrations with secure access tokens.' },
  { id: 'faq-17', question: 'What technologies do you use for development?', answer: 'We build our frontend platforms with React, Vite, TypeScript, Tailwind CSS, and Framer Motion. Our database and cloud layers run on Supabase (PostgreSQL) and we integrate EmailJS, WhatsApp APIs, and Stripe payment systems.' },
  { id: 'faq-18', question: 'What are Core Web Vitals, and why do they matter?', answer: 'Core Web Vitals are a set of metrics created by Google to evaluate website user experience, focusing on loading performance (LCP), interactivity (INP), and visual stability (CLS). A website meeting these targets ranks higher in Google Search and converts more users due to sub-second load speeds.' },
  { id: 'faq-19', question: 'How does the newsletter subscription work?', answer: 'When users subscribe, they are added to the "newsletter_subscribers" table in Supabase. This automatically triggers a welcome sequence or syncs with your marketing list to deliver marketing updates, tips, and promotional offers.' },
  { id: 'faq-20', question: 'How do we book a free marketing consultation?', answer: 'You can book a consultation by clicking the "Book Free Consultation" CTA in our sticky header or footer. Fill out the contact form with your business goals, and a strategist will call you back within 24 hours with a custom marketing blueprint.' }
];

// 7. BLOGS DATA
export const blogsData: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Ultimate Guide to Technical SEO in 2026: Crushing the Core Web Vitals',
    slug: 'technical-seo-core-web-vitals-2026',
    excerpt: 'Google is prioritizing user experience more than ever. Learn how to optimize Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) to skyrocket your organic search rankings.',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'SEO',
    readTime: '6 min read',
    date: 'June 28, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Head of SEO Strategy',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100'
    },
    tags: ['SEO', 'Core Web Vitals', 'INP', 'Page Speed'],
    content: `
# The Ultimate Guide to Technical SEO in 2026: Crushing the Core Web Vitals

Search engines have evolved. In 2026, standard keyword stuffing and basic backlinks are no longer enough to secure the top spots on Google. Search algorithms prioritize **user experience (UX)**. The core pillars of this experience are defined by Google's **Core Web Vitals**.

In this guide, we will break down how to optimize your technical foundation to boost rankings, reduce bounce rates, and turn organic visits into paying clients.

## Understanding the New Core Web Vitals Metrics

Google evaluates page experience using three main indicators:

1. **Largest Contentful Paint (LCP)**: Measures *loading performance*. To provide a premium user experience, LCP should occur within **2.5 seconds** of when the page first starts loading.
2. **Interaction to Next Paint (INP)**: Measures *responsiveness*. This replaced FID (First Input Delay) as a core metric. It measures the latency of all interactions a user makes with the page. An INP of **200 milliseconds or less** indicates good responsiveness.
3. **Cumulative Layout Shift (CLS)**: Measures *visual stability*. To prevent annoying shifts of content during loading, pages should maintain a CLS score of **0.1 or less**.

## Step 1: Optimize your Largest Contentful Paint (LCP)

LCP is usually affected by slow server response times, render-blocking JavaScript and CSS, and resource load times. Here's how to fix it:

- **Adopt Headless Architectures**: Standard monolithic setups (like heavy WordPress builders) load massive asset bundles. Transitioning to modern frameworks like **React with Vite** or **Next.js** lets you compile clean, lightweight HTML.
- **Implement Fetch Priority**: Give Google a hint about which assets to load first. For your main hero banner, use the \`fetchpriority="high"\` attribute:
  \`\`\`html
  <img src="/hero-banner.jpg" fetchpriority="high" alt="Sakrix Hero" />
  \`\`\`
- **Preload Critical CSS**: Critical layout stylesheets should be inline or preloaded, while non-essential stylesheets can load asynchronously.

## Step 2: Elevate Your Interaction to Next Paint (INP)

INP measures how responsive your web app is when a user clicks a button, taps a link, or expands an accordion.

- **Break Up Long Tasks**: If a JavaScript event takes longer than 50ms, it blocks the main thread. Break large computational scripts into smaller asynchronous chunks using \`setTimeout\` or \`requestIdleCallback\`.
- **Minimize State Re-renders**: In React, optimize your state management. Avoid global states re-rendering large component trees upon simple click interactions. Use hooks like \`useMemo\` and \`useCallback\` where appropriate.
- **De-clutter Third-Party Scripts**: Heavy analytics and chat widgets are notorious for blocking interactions. Load them with the \`defer\` or \`async\` attributes, or initialize them only after the user starts scrolling.

## Conclusion

Technical SEO is the foundation of digital growth. A beautiful website that ranks #1 but loads in 6 seconds is a leaky funnel. By focusing on sub-second render speeds, smooth click interactions, and stable visual grids, you lay the groundwork for your advertising and social media campaigns to succeed.

*Need help auditing your site's Core Web Vitals? Book a Free Consultation with our engineering team today!*
    `
  },
  {
    id: 'blog-2',
    title: 'How to Maximize Your Google Ads ROAS: A B2B Conversion Strategy',
    slug: 'maximize-google-ads-roas-b2b-strategy',
    excerpt: 'Are you wasting budgets on broad keywords and spam lead forms? Discover the exact B2B campaign structures that drive qualified executive consultations.',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    category: 'Google Ads',
    readTime: '4 min read',
    date: 'June 25, 2026',
    author: {
      name: 'James Harrison',
      role: 'Director of Paid Media',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
    },
    tags: ['Google Ads', 'PPC', 'B2B Marketing', 'ROAS'],
    content: `
# How to Maximize Your Google Ads ROAS: A B2B Conversion Strategy

Unlike B2C e-commerce, where a purchase happens instantly, B2B lead generation involves long sales cycles, multiple stakeholders, and high deal values. Running broad Google Ads campaigns without precise targeting is a quick way to drain your marketing budget.

Here is our proven checklist to optimize your search campaigns and achieve a 4x+ Return on Ad Spend (ROAS).

## 1. Eliminate Broad Match Keywords

Broad match keywords are highly search-volume friendly but lead to wasted budget. Google will show your ads for searches that are loosely related, often capturing students, job seekers, or low-budget competitors.

- **Use Phrase and Exact Match**: Focus on high-intent terms like \`"corporate web application development company"\` or \`[SEO agency for real estate]\`.
- **Negative Keyword Lists**: Constantly update your negative keywords list with terms like "free", "jobs", "templates", "pdf", and "salary" to filter out low-value traffic.

## 2. Match Search Intent with Custom Landing Pages

Routing paid ad clicks to your homepage is a major conversion killer. Your homepage addresses a general audience; ad visitors seek answers to a specific query.

- **Build Custom Landing Pages**: If your ad promotes "Local Maps SEO", the landing page must focus exclusively on Local Maps rankings and feature local case studies.
- **Sub-Second Loading Speeds**: Paid search traffic is impatient. If your landing page takes longer than 3 seconds to render, 40% of your paid clicks will bounce before the form loads.

## 3. Qualify Leads in Your Forms

Capturing hundreds of leads looks great on paper, but if your sales team is calling spam numbers, your ROAS will flatline.

- **Add Qualifier Fields**: Ask for "Company Size", "Monthly Budget", or "Specific Service Needed".
- **Implement OTP Verification**: Use SMS or email verification steps on lead forms to filter out fake emails and phone numbers.
- **Conversion Tracking Sync**: Use offline conversion tracking to feed back sales closing data to Google Ads AI, training the bidding engine to target buyers who actually sign contracts.
    `
  },
  {
    id: 'blog-3',
    title: 'The AI Marketing Revolution: How to Scale Personalization and Copywriting',
    slug: 'ai-marketing-revolution-personalization-2026',
    excerpt: 'AI is no longer just a buzzword. From predictive analytics to automated content generation, explore how modern agencies deploy AI to cut client acquisition costs.',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800',
    category: 'AI Marketing',
    readTime: '5 min read',
    date: 'June 20, 2026',
    author: {
      name: 'Sakshi Sharma',
      role: 'VP of AI & Digital Innovation',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100'
    },
    tags: ['AI Marketing', 'Automation', 'Content Scaling', 'Growth Hacking'],
    content: `
# The AI Marketing Revolution: How to Scale Personalization

AI has transitioned from an experimental technology to an essential engine for digital marketing. In 2026, companies utilizing AI-driven workflows are out-competing traditional companies by delivering highly personalized messages at scale.

Here is how modern marketing teams incorporate AI to optimize client acquisition budgets.

## 1. Predictive Lead Scoring

Instead of treating all website traffic equally, AI algorithms evaluate user interactions (pages read, scroll depth, form field fills) in real-time.

- **Identify Intent Signals**: AI tags high-intent visitors who show patterns matching previous closed clients.
- **Dynamic Content Personalization**: The website can dynamically alter CTAs or showcase specific case studies matching the visitor\'s industry on the fly.

## 2. Automated Content and Copywriting Engines

AI is not about generating thousands of generic, robotic blog posts (which search engines quickly filter out). It is about setting up intelligent editing workflows:

- **Outline and Research Drafting**: Use AI to scan top ranking pages, synthesize information, and draft content layouts.
- **A/B Ad Variant Generation**: Feed AI a successful ad concept and generate 50 localized variants for specific cities or target brackets within seconds.
- **Micro-copy Optimization**: Run AI agents to optimize button hooks and micro-copy details to maximize landing page click-through rates.

## 3. Dynamic Customer Support Chatbots

Static FAQ blocks are helpful, but direct dialogue increases trust. Setting up advanced Large Language Model bots (like Gemini API through Firebase AI Logic) allows the site to answer complex visitor queries, book calendars, and qualify prospects 24/7.
    `
  }
];
