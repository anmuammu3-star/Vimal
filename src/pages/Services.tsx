import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, MapPin, TrendingUp,
  Mail, MessageSquare, FileText, Globe, Briefcase, User, Layout,
  ShoppingBag, Terminal, Settings, Compass, BookOpen, Image, PenTool,
  Video, Layers, Zap
} from 'lucide-react';
import { Facebook, Youtube, Linkedin } from '../components/ui/BrandIcons';
import useSEO from '../hooks/useSEO';
import { dataService } from '../services/dataService';
import type { ServiceItem } from '../services/mockData';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const ServiceIcon: React.FC<{ name: string; className?: string; size?: number }> = ({ name, className = '', size = 24 }) => {
  switch (name) {
    case 'Search': return <Search className={className} size={size} />;
    case 'MapPin': return <MapPin className={className} size={size} />;
    case 'TrendingUp': return <TrendingUp className={className} size={size} />;
    case 'Facebook': return <Facebook className={className} size={size} />;
    case 'Youtube': return <Youtube className={className} size={size} />;
    case 'Linkedin': return <Linkedin className={className} size={size} />;
    case 'Mail': return <Mail className={className} />;
    case 'MessageSquare': return <MessageSquare className={className} />;
    case 'FileText': return <FileText className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'User': return <User className={className} />;
    case 'Layout': return <Layout className={className} />;
    case 'ShoppingBag': return <ShoppingBag className={className} />;
    case 'Terminal': return <Terminal className={className} />;
    case 'Settings': return <Settings className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    case 'Image': return <Image className={className} />;
    case 'PenTool': return <PenTool className={className} />;
    case 'Video': return <Video className={className} />;
    case 'Layers': return <Layers className={className} />;
    default: return <Zap className={className} />;
  }
};

type CategoryFilter = 'all' | 'marketing' | 'development' | 'branding';

export const Services: React.FC = () => {
  useSEO({
    title: 'Custom Marketing & Development Services | Sakrix',
    description: 'Explore Sakrix Services. We offer search engine optimization (SEO), custom React/TS websites, B2B campaigns, Meta ads, WhatsApp messaging, and premium branding identity designs.'
  });

  const [services, setServices] = useState<ServiceItem[]>([]);
  const [activeTab, setActiveTab] = useState<CategoryFilter>('all');

  useEffect(() => {
    const fetchServices = async () => {
      const data = await dataService.getServices();
      setServices(data);
    };
    fetchServices();
  }, []);

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter((s) => s.category === activeTab);

  const tabs = [
    { label: 'All Services', value: 'all' as CategoryFilter },
    { label: 'Digital Marketing', value: 'marketing' as CategoryFilter },
    { label: 'Web Development', value: 'development' as CategoryFilter },
    { label: 'Branding & Design', value: 'branding' as CategoryFilter },
  ];

  return (
    <div className="py-12 space-y-16">
      {/* 1. HERO HEADER */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100/50 rounded-full"
        >
          <span className="text-xs font-extrabold text-blue-700 uppercase tracking-widest">
            Growth Suite
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-secondary font-display max-w-4xl mx-auto leading-tight"
        >
          Specialized Services to <span className="text-gradient">Scale Your Business</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you need to secure top Google spots, build a high-performance React application, or rebrand your corporate identity, we deliver results.
        </motion.p>
      </section>

      {/* 2. FILTER TABS */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 flex justify-center">
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl md:rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-bold transition-all relative cursor-pointer ${
                activeTab === tab.value
                  ? 'text-white bg-blue-600 shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                className="h-full"
              >
                <Card className="h-full flex flex-col items-start relative overflow-hidden group" variant="default">
                  {/* Category Indicator Tag */}
                  <span className="absolute top-4 right-4 text-xxs font-extrabold uppercase tracking-widest text-slate-400">
                    {service.category}
                  </span>

                  {/* Icon wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <ServiceIcon name={service.iconName} size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-secondary font-display mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  <div className="h-px bg-slate-100 w-full my-4" />

                  <h4 className="text-xxs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    What we deliver:
                  </h4>
                  <ul className="space-y-2.5 mb-8 text-xs font-semibold text-slate-700">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="w-full mt-auto">
                    <Button variant="outline" fullWidth>
                      Get Started
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. FOOTER CALLOUT */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center bg-slate-50 rounded-3xl border border-slate-100">
        <h3 className="text-xl md:text-2xl font-bold text-secondary font-display mb-2">
          Need a Custom Integrated Package?
        </h3>
        <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto leading-relaxed">
          We draft custom business packages connecting CRM pipelines, custom database designs, and omnichannel marketing retainers. Let's speak.
        </p>
        <Link to="/contact">
          <Button variant="primary">Schedule a Consultation</Button>
        </Link>
      </section>
    </div>
  );
};

export default Services;
