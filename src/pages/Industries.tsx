import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity, School, GraduationCap, Utensils, Hotel, HardHat,
  Home, Store, Gem, DollarSign, Car, Rocket, Cpu, UserCheck, Zap
} from 'lucide-react';
import useSEO from '../hooks/useSEO';
import { dataService } from '../services/dataService';
import type { IndustryItem } from '../services/mockData';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

// Icon resolver for industries
const IndustryIcon: React.FC<{ name: string; className?: string; size?: number }> = ({ name, className = '', size = 24 }) => {
  switch (name) {
    case 'Activity': return <Activity className={className} size={size} />;
    case 'School': return <School className={className} size={size} />;
    case 'GraduationCap': return <GraduationCap className={className} size={size} />;
    case 'Utensils': return <Utensils className={className} size={size} />;
    case 'Hotel': return <Hotel className={className} size={size} />;
    case 'HardHat': return <HardHat className={className} size={size} />;
    case 'Home': return <Home className={className} size={size} />;
    case 'Store': return <Store className={className} size={size} />;
    case 'Gem': return <Gem className={className} size={size} />;
    case 'DollarSign': return <DollarSign className={className} size={size} />;
    case 'Car': return <Car className={className} size={size} />;
    case 'Rocket': return <Rocket className={className} size={size} />;
    case 'Cpu': return <Cpu className={className} size={size} />;
    case 'UserCheck': return <UserCheck className={className} size={size} />;
    default: return <Zap className={className} size={size} />;
  }
};

export const Industries: React.FC = () => {
  useSEO({
    title: 'Industries We Serve | Sakrix Digital Marketing',
    description: 'Explore the 14 industries we specialize in. From healthcare and universities to startups, real estate, and finance, we build target conversions and ad results.'
  });

  const [industries, setIndustries] = useState<IndustryItem[]>([]);

  useEffect(() => {
    const fetchIndustries = async () => {
      const data = await dataService.getIndustries();
      setIndustries(data);
    };
    fetchIndustries();
  }, []);

  return (
    <div className="py-12 space-y-16">
      {/* 1. HERO TITLE */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100/50 rounded-full"
        >
          <span className="text-xs font-extrabold text-blue-700 uppercase tracking-widest">
            Niche Expertise
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-secondary font-display max-w-4xl mx-auto leading-tight"
        >
          Tailored Blueprints for <span className="text-gradient">14 Target Industries</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          We don't believe in generic campaigns. We operate industry-specific funnels, keyword sets, and structural layouts configured to address your sector's buyers.
        </motion.p>
      </section>

      {/* 2. INDUSTRIES CARDS GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.length > 0 ? (
            industries.map((ind, idx) => (
              <Card
                key={ind.id}
                delay={idx * 0.05}
                className="flex flex-col items-start text-left h-full group"
                variant="default"
              >
                {/* Industry icon */}
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <IndustryIcon name={ind.iconName} size={22} />
                </div>

                <h3 className="text-lg font-bold text-secondary font-display mb-2">
                  {ind.name}
                </h3>

                <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                  {ind.description}
                </p>

                {/* Highlight metric result */}
                <div className="w-full mt-auto pt-4 border-t border-slate-100">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                    Benchmark Result
                  </div>
                  <div className="text-sm font-extrabold text-blue-600 font-display">
                    {ind.metrics}
                  </div>
                </div>
              </Card>
            ))
          ) : (
            // Fallback in case state hasn't resolved
            <div className="col-span-full py-12 text-center text-slate-400">Loading industries list...</div>
          )}
        </div>
      </section>

      {/* 3. CTA FORM ANCHOR */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center bg-slate-50 rounded-3xl border border-slate-100">
        <h3 className="text-xl md:text-2xl font-bold text-secondary font-display mb-2">
          Want a Custom Campaign For Your Sector?
        </h3>
        <p className="text-sm text-slate-500 mb-6 max-w-lg mx-auto">
          Schedule a brief discovery call with our segment leads. We will demo actual dashboard returns from your specific vertical.
        </p>
        <Link to="/contact">
          <Button variant="primary">Schedule Strategy Meeting</Button>
        </Link>
      </section>
    </div>
  );
};

export default Industries;
