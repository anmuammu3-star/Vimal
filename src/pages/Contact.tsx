import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import ContactForm from '../components/forms/ContactForm';
import Card from '../components/ui/Card';

export const Contact: React.FC = () => {
  useSEO({
    title: 'Book a consultation | Sakrix Digital Marketing',
    description: 'Contact Sakrix Digital Marketing. Submit our consultation request form, locate our office address, view support business hours, or chat directly on WhatsApp.'
  });

  const supportChannels = [
    {
      icon: <Mail className="text-blue-500" size={20} />,
      label: 'Email Inquiries',
      value: 'info@sakrix.com',
      sub: 'Replies within 2 hours',
      href: 'mailto:info@sakrix.com'
    },
    {
      icon: <Phone className="text-blue-500" size={20} />,
      label: 'Direct Consultation',
      value: '+1 (555) 019-2834',
      sub: 'Mon-Fri from 9 AM to 6 PM',
      href: 'tel:+15550192834'
    },
    {
      icon: <MapPin className="text-blue-500" size={20} />,
      label: 'Office Headquarters',
      value: 'Suite 400, 100 Innovation Way',
      sub: 'Tech City, NY 10001',
      href: '#'
    }
  ];

  const businessHours = [
    { days: 'Monday – Friday', hours: '9:00 AM – 6:00 PM EST' },
    { days: 'Saturday', hours: '10:00 AM – 2:00 PM EST' },
    { days: 'Sunday', hours: 'Closed (Emergency support active)' }
  ];

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-6 md:px-8 text-left">
      
      {/* 1. HERO TITLE */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100/50 rounded-full">
          <span className="text-xs font-extrabold text-blue-700 uppercase tracking-widest">
            Connect
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-secondary font-display leading-tight">
          Let's Blueprint Your <span className="text-gradient">Growth Roadmap</span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
          Have questions about SEO timelines, custom React web developments, or ad budgets? Drop us a line and let's structure an audit for your business.
        </p>
      </section>

      {/* 2. FORM & METADATA GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Form (8 cols) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right Column: Support Details (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Quick coordinates cards */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-secondary font-display">
              Inquiry Channels
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {supportChannels.map((channel, idx) => (
                <a
                  key={idx}
                  href={channel.href}
                  className="p-5 bg-white border border-slate-100 rounded-2xl flex gap-4 hover:border-blue-500/20 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center shrink-0">
                    {channel.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                      {channel.label}
                    </h4>
                    <p className="text-sm font-bold text-secondary mt-0.5">
                      {channel.value}
                    </p>
                    <p className="text-xxs text-slate-400 font-medium mt-0.5">
                      {channel.sub}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Business Hours Panel */}
          <Card variant="borderless" className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-secondary">
              <Clock className="text-blue-500" size={18} />
              <h3 className="text-base font-bold font-display">Business Hours</h3>
            </div>
            <div className="space-y-3">
              {businessHours.map((row, idx) => (
                <div key={idx} className="flex justify-between text-xs font-semibold pb-2 border-b border-slate-200/20 last:border-b-0">
                  <span className="text-slate-500">{row.days}</span>
                  <span className="text-secondary">{row.hours}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* WhatsApp Direct Consult Launcher */}
          <Card variant="default" className="p-6 flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-dashed border-blue-500/20">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-bold text-secondary font-display text-sm">Need Instant Support?</h4>
              <p className="text-xxs md:text-xs text-slate-400 leading-relaxed font-semibold">
                Chat directly with an online strategist via WhatsApp messenger.
              </p>
            </div>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full text-xs font-bold flex items-center gap-2 shadow-md cursor-pointer shrink-0"
            >
              <MessageSquare size={14} />
              Chat Strategist
            </a>
          </Card>
        </div>
      </section>

      {/* 3. INTERACTIVE GOOGLE MAPS MOCKUP */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-secondary font-display">
          Office Location
        </h3>
        
        {/* Mock Map canvas */}
        <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-slate-100 shadow-sm bg-slate-100 flex items-center justify-center">
          {/* Decorative Grid Map background dots */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          {/* Map Pin Mockup Indicator */}
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="relative flex h-10 w-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <div className="relative rounded-full h-10 w-10 bg-blue-600 flex items-center justify-center text-white shadow-xl">
                <MapPin size={20} />
              </div>
            </div>
            <div className="bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 text-white text-center shadow-lg">
              <h4 className="text-xs font-bold">Sakrix HQ office</h4>
              <p className="text-[10px] text-slate-300 font-semibold mt-0.5">100 Innovation Way, Tech City, NY</p>
            </div>
          </div>

          {/* Map Navigation Controls Mockup */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-1">
            <button className="w-8 h-8 rounded-lg bg-white text-secondary font-bold flex items-center justify-center shadow hover:bg-slate-50 border border-slate-100 pointer-events-none">+</button>
            <button className="w-8 h-8 rounded-lg bg-white text-secondary font-bold flex items-center justify-center shadow hover:bg-slate-50 border border-slate-100 pointer-events-none">-</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
