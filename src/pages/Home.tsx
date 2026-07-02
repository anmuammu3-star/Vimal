import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search, MapPin, TrendingUp, Globe, PenTool,
  Zap, BarChart3, Clock, ArrowRight, ShieldCheck
} from 'lucide-react';
import { Facebook } from '../components/ui/BrandIcons';
import useSEO from '../hooks/useSEO';
import { dataService } from '../services/dataService';
import type { ServiceItem, PortfolioProject, BlogPost, Testimonial } from '../services/mockData';
import StatCounter from '../components/ui/StatCounter';
import TestimonialSlider from '../components/marketing/TestimonialSlider';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Helper component to resolve service icons dynamically
const ServiceIcon: React.FC<{ name: string; className?: string; size?: number }> = ({ name, className = '', size = 24 }) => {
  switch (name) {
    case 'Search': return <Search className={className} size={size} />;
    case 'MapPin': return <MapPin className={className} size={size} />;
    case 'TrendingUp': return <TrendingUp className={className} size={size} />;
    case 'Facebook': return <Facebook className={className} size={size} />;
    case 'Globe': return <Globe className={className} size={size} />;
    case 'Compass': return <PenTool className={className} size={size} />;
    default: return <Zap className={className} size={size} />;
  }
};

export const Home: React.FC = () => {
  useSEO({
    title: 'Sakrix Digital Marketing | Grow Your Business with Powerful Solutions',
    description: 'Grow your business with Sakrix Digital Marketing. Premium React website development, ROI-focused Google search, Meta Ads, WhatsApp API marketing, and local SEO services.'
  });

  const [services, setServices] = useState<ServiceItem[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<PortfolioProject[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [latestBlogs, setLatestBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadHomeData = async () => {
      const sData = await dataService.getServices();
      // Only display first 6 on Home Page
      setServices(sData.slice(0, 6));

      const pData = await dataService.getPortfolioProjects();
      setFeaturedProjects(pData.slice(0, 3));

      const tData = await dataService.getTestimonials();
      setTestimonials(tData);

      const bData = await dataService.getBlogPosts();
      setLatestBlogs(bData.slice(0, 3));
    };

    loadHomeData();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION WITH ANIMATED GRADIENTS */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 px-6 md:px-8">
        {/* Animated Glow Blobs Background */}
        <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl animate-float pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100/50 rounded-full"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-extrabold text-blue-700 uppercase tracking-widest">
                Blueprinting Business Growth
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-secondary leading-[1.08] font-display"
            >
              Grow Your Business with{' '}
              <span className="text-gradient">Powerful Marketing</span> Solutions
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 max-w-xl font-medium leading-relaxed"
            >
              We craft sub-second web platforms, manage high-ROAS paid media campaigns, and design luxury brand identities that multiply your customer revenue.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link to="/contact">
                <Button variant="gradient" size="lg">
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" size="lg" icon={<ArrowRight size={16} />}>
                  Explore Case Studies
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Premium UI Mockup Mock image / layout preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glassmorphic dashboard container */}
              <div className="bg-slate-500/5 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 shadow-2xl relative z-10 overflow-hidden">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/30">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-xxs font-bold text-slate-400 uppercase tracking-widest">
                    Campaign ROI Tracker
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Dashboard stat row */}
                  <div>
                    <div className="text-xs font-semibold text-slate-400 mb-1">
                      ORGANIC TRAFFIC
                    </div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-extrabold text-secondary font-display">
                        148.5K
                      </span>
                      <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        +240%
                      </span>
                    </div>
                  </div>

                  {/* Dashboard graph visualization */}
                  <div className="h-32 flex items-end gap-2 pt-4">
                    {[35, 45, 30, 60, 50, 75, 90, 85, 110].map((height, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.08 }}
                        className="flex-grow bg-blue-500/20 border-t-2 border-blue-500 rounded-t-sm"
                      />
                    ))}
                  </div>

                  {/* Dashboard sub stat cards */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3 bg-white rounded-2xl border border-slate-100">
                      <div className="text-xxs font-semibold text-slate-400 mb-1">
                        PAID PPC ROAS
                      </div>
                      <div className="text-lg font-bold text-slate-800 font-display">
                        4.8x
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-2xl border border-slate-100">
                      <div className="text-xxs font-semibold text-slate-400 mb-1">
                        LEADS CONVERTED
                      </div>
                      <div className="text-lg font-bold text-slate-800 font-display">
                        8.4k
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating widgets */}
              <div className="absolute -top-6 -right-6 w-32 p-3 glassmorphism rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="text-xxs font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Speed Index
                </div>
                <div className="text-xl font-extrabold text-gradient-purple font-display">
                  0.8s
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED BY REEL */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-8">
            Empowering Growth for Innovators Worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {['Apex Health', 'Vanguard Realty', 'Novomed', 'Terra Dev', 'ScribeSaaS', 'L\'Atelier'].map((logo, idx) => (
              <span
                key={idx}
                className="text-base font-extrabold tracking-wider font-display text-slate-500 select-none hover:text-blue-500 transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
            What We Do
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-secondary font-display">
            Comprehensive Growth Services
          </h3>
          <p className="text-base md:text-lg text-slate-500 font-medium">
            We cover the entire customer acquisition lifecycle, bridging high-speed web code with conversion-focused paid advertising strategies.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full flex flex-col items-start text-left" variant="default">
                {/* Service Icon */}
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6">
                  <ServiceIcon name={service.iconName} size={24} />
                </div>
                
                <h4 className="text-xl font-bold text-secondary font-display mb-3">
                  {service.title}
                </h4>
                
                <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8 text-xs font-semibold text-slate-700">
                  {service.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline mt-auto"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline">View All Custom Services</Button>
          </Link>
        </div>
      </section>

      {/* 4. WHY CHOOSE US & CORE STATS */}
      <section className="py-24 bg-slate-50 px-6 md:px-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Key Differentiators */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
              Why Choose Sakrix
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-secondary font-display">
              Built Differently for Measurable ROI
            </h3>
            <p className="text-base text-slate-500 leading-relaxed font-medium">
              Most agencies use slow builders and copy-paste marketing. We write custom React/TS code, build secure databases, and run conversion A/B targeting tests to ensure sub-second loads and maximum conversion rates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary font-display text-base mb-1">
                    Sub-second Speeds
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    React-Vite structures score 95+ on Lighthouse, increasing conversions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary font-display text-base mb-1">
                    Transparent Analytics
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Sync metrics dynamically with Supabase. Trace every click and lead source.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary font-display text-base mb-1">
                    Enterprise Security
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Secure databases, HIPAA-compliant flows, and protected authentication.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-secondary font-display text-base mb-1">
                    Rapid Execution
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Launch campaigns and portals in weeks, with daily build updates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats count-up widgets */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 relative">
            <div className="space-y-6">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col items-center">
                <StatCounter value={150} suffix="+" />
                <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wide">
                  Clients Managed
                </span>
              </div>
              
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col items-center">
                <StatCounter value={24} suffix="M+" />
                <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wide">
                  Client Revenue
                </span>
              </div>
            </div>

            <div className="space-y-6 pt-8">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col items-center">
                <StatCounter value={4} suffix=".8x" />
                <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wide">
                  Avg Ad ROAS
                </span>
              </div>

              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col items-center">
                <StatCounter value={99} suffix=".9%" />
                <span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wide">
                  Uptime Delivered
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. FEATURED PORTFOLIO PROJECTS */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
            Case Studies
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-secondary font-display">
            Our Featured Success Stories
          </h3>
          <p className="text-base md:text-lg text-slate-500 font-medium">
            Real clients. Verifiable revenue growth. Click to see detailed project strategy plans and technology implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full overflow-hidden p-0" variant="borderless">
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={project.bannerImage}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-xxs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">
                  {project.industry}
                </span>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
                <h4 className="text-xl font-bold text-secondary font-display mb-3">
                  {project.title}
                </h4>
                
                <p className="text-sm text-slate-500 line-clamp-3 mb-6">
                  {project.description}
                </p>

                {/* Key results banner */}
                <div className="bg-blue-50 border border-blue-100/50 rounded-2xl p-4 grid grid-cols-2 gap-4 mb-6">
                  {project.marketingResults.slice(0, 2).map((res, i) => (
                    <div key={i}>
                      <div className="text-xxs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                        {res.label}
                      </div>
                      <div className="text-lg font-extrabold text-blue-600 font-display">
                        {res.value}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/portfolio`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline mt-auto"
                >
                  View Case Details
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS Carousel */}
      <section className="py-24 bg-slate-50 px-6 md:px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
              Testimonials
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-secondary font-display">
              What Businesses Say About Us
            </h3>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* 7. LATEST BLOG PREVIEW */}
      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="text-left space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
              Insights & Blogs
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-secondary font-display">
              Latest from Digital Insights
            </h3>
          </div>
          <Link to="/blog">
            <Button variant="outline">Browse All Articles</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestBlogs.map((blog) => (
            <Card key={blog.id} className="flex flex-col h-full overflow-hidden p-0" variant="borderless">
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xxs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
                <div className="flex gap-4 text-xxs font-bold text-slate-400 mb-3">
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>

                <h4 className="text-lg font-bold text-secondary font-display mb-3 line-clamp-2">
                  {blog.title}
                </h4>

                <p className="text-xs text-slate-500 line-clamp-3 mb-6 leading-relaxed">
                  {blog.excerpt}
                </p>

                <Link
                  to={`/blog`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline mt-auto"
                >
                  Read Full Article
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 8. FREE CONSULTATION CTA BANNER */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto bg-accent-gradient rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
          {/* Decorative backdrop shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight">
              Ready to Multiply Your Sales & Organic Lead Pipeline?
            </h2>
            <p className="text-base md:text-lg text-blue-100/90 font-medium leading-relaxed max-w-xl mx-auto">
              Our strategic digital audit scans your keywords, page performance speeds, and competitors to blueprint a growth strategy. Free of cost.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-slate-50 transition-colors shadow-lg cursor-pointer">
                  Book Free Strategy Session
                </button>
              </Link>
              <Link to="/services">
                <button className="px-8 py-4 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 transition-colors border border-blue-400/20 cursor-pointer">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
