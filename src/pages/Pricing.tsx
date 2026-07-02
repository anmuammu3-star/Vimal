import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Shield, Star, Crown } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface PlanProps {
  name: string;
  price: string;
  desc: string;
  icon: React.ReactNode;
  popular?: boolean;
  features: string[];
}

const plans: PlanProps[] = [
  {
    name: 'Starter Tier',
    price: '$499',
    desc: 'Perfect for local shops, clinics, and school admissions looking to establish local authority.',
    icon: <Shield className="text-slate-500" size={24} />,
    features: [
      'Google Business Profile Setup & Local SEO',
      'High-converting Single Landing Page',
      'WhatsApp Consultation Link Integration',
      'Basic Monthly Performance Analytics',
      'Email Customer Support (24h response)',
    ]
  },
  {
    name: 'Professional Tier',
    price: '$1,299',
    desc: 'Configured for growing companies aiming to scale B2B/B2C leads and organic search rankings.',
    icon: <Star className="text-blue-500" size={24} />,
    popular: true,
    features: [
      'Full Competitor SEO & Content Hub (2 blogs/mo)',
      '5-Page Custom-Coded React (Vite) Website',
      'Google Paid Search & Meta Retargeting campaigns',
      'WhatsApp API Marketing & automated chatbot setups',
      'Weekly Live Sprint Dashboards (Supabase)',
      'Priority Email & Slack Channel Support',
    ]
  },
  {
    name: 'Enterprise Tier',
    price: '$2,999',
    desc: 'Engineered for large-scale operations requiring customized database infrastructures and full branding.',
    icon: <Crown className="text-indigo-500" size={24} />,
    features: [
      'Custom React Web Application & Cloud Database (Supabase)',
      'Enterprise-grade SEO Retainer (5 blogs/mo + link-building)',
      'High-budget PPC, ABM LinkedIn & YouTube Campaigning',
      'Unified EmailJS automation & custom CRM integrations',
      'Omnichannel support (SMS, Broadcast broadcasts API)',
      'Dedicated Strategy Account Lead',
      '24/7 Critical Hotfix Developer Support',
    ]
  }
];

const comparisonFeatures = [
  { feature: 'Custom React Web Pages', starter: '1 Page', professional: '5 Pages', enterprise: 'Unlimited (Apps)' },
  { feature: 'Core Web Vitals Speed (Lighthouse)', starter: '90+ Score', professional: '95+ Score', enterprise: '98+ Score' },
  { feature: 'Ad Platform Targetings', starter: 'Local Maps PPC', professional: 'Search, Meta Retarget', enterprise: 'Search, Meta, LinkedIn ABM' },
  { feature: 'WhatsApp Automations', starter: 'Direct Link', professional: 'Chatbot (Auto-reply)', enterprise: 'Custom Flow API & Broadcasts' },
  { feature: 'Database Sync (Supabase)', starter: '❌ None', professional: '✔️ Read/Write Forms', enterprise: '✔️ Custom Relational Schema' },
  { feature: 'EmailJS Workflows', starter: '❌ None', professional: '✔️ Basic Alerts', enterprise: '✔️ Automated CRM Handover' },
  { feature: 'Content SEO Retainer', starter: '❌ None', professional: '2 Articles / Month', enterprise: '5 Articles + Backlinks' },
  { feature: 'Weekly Sprint Dashboards', starter: '❌ None', professional: '✔️ Included', enterprise: '✔️ Included' },
  { feature: 'Dedicated Account Manager', starter: '❌ None', professional: '❌ None', enterprise: '✔️ Included' },
];

export const Pricing: React.FC = () => {
  useSEO({
    title: 'Marketing Pricing Plans | Sakrix Digital Marketing',
    description: 'Explore the Sakrix digital growth tiers. Compare pricing features across Starter, Professional, and Enterprise packages. Book a growth consult session.'
  });

  return (
    <div className="py-12 space-y-24">
      {/* 1. HERO TITLE */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100/50 rounded-full"
        >
          <span className="text-xs font-extrabold text-blue-700 uppercase tracking-widest">
            Fair Pricing
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-secondary font-display max-w-4xl mx-auto leading-tight"
        >
          Flexible Growth Retainers, <span className="text-gradient">No Hidden Contracts</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          Choose a plan that matches your current business goals. Adjust or pause your marketing support as your sales pipeline adapts.
        </motion.p>
      </section>

      {/* 2. PLANS CARDS */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch text-left">
        {plans.map((plan, idx) => (
          <Card
            key={idx}
            className={`flex flex-col relative h-full ${
              plan.popular ? 'border-2 border-blue-500 ring-4 ring-blue-500/5 shadow-xl' : ''
            }`}
            variant={plan.popular ? 'default' : 'default'}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 right-6 px-3 py-1 bg-blue-500 text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full">
                RECOMMENDED
              </span>
            )}

            {/* Plan Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 shrink-0">
                {plan.icon}
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl text-secondary">
                {plan.name}
              </h3>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl md:text-5xl font-extrabold text-secondary font-display">
                {plan.price}
              </span>
              <span className="text-xs font-bold text-slate-400">/ month</span>
            </div>

            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-8 flex-grow">
              {plan.desc}
            </p>

            <div className="h-px bg-slate-100 w-full mb-6" />

            {/* Features list */}
            <ul className="space-y-4 mb-8 text-xs font-semibold text-slate-700">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="shrink-0 text-blue-500 mt-0.5" size={15} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA action buttons */}
            <Link to="/contact" className="w-full mt-auto">
              <Button variant={plan.popular ? 'gradient' : 'outline'} fullWidth>
                Select {plan.name}
              </Button>
            </Link>
          </Card>
        ))}
      </section>

      {/* 3. COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
        <h3 className="text-2xl font-bold text-center text-secondary font-display">
          Full Feature Comparison
        </h3>

        <div className="overflow-x-auto border border-slate-100 rounded-2xl bg-white shadow-sm shadow-slate-100/50">
          <table className="w-full text-left text-xs md:text-sm border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-5 font-bold text-secondary">Growth Features</th>
                <th className="p-5 font-bold text-secondary">Starter</th>
                <th className="p-5 font-bold text-secondary">Professional</th>
                <th className="p-5 font-bold text-secondary">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
              {comparisonFeatures.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-5 font-bold text-secondary">{row.feature}</td>
                  <td className="p-5">{row.starter}</td>
                  <td className="p-5">{row.professional}</td>
                  <td className="p-5">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
