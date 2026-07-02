import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Heart, Award, Compass, Eye, Users } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import Card from '../components/ui/Card';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: 'Vikram Aditya',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
    bio: 'B2B strategist with 12+ years directing scaling media campaigns and enterprise consulting.'
  },
  {
    name: 'Elena Rostova',
    role: 'VP of Engineering & SEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    bio: 'Pioneering search optimization architect. Specialized in headless React speeds.'
  },
  {
    name: 'Marcus Dubois',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    bio: 'Brand design expert who has directed visual identities for international retail groups.'
  },
  {
    name: 'Sakshi Sharma',
    role: 'Head of Social Media & Ads',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=300',
    bio: 'Paid acquisition lead. Has optimized over $6M in ad-spend on Meta and Google portfolios.'
  }
];

const timeline = [
  { year: '2021', title: 'Agency Foundation', desc: 'Sakrix was founded by a team of engineers and marketers looking to replace template designs with high-speed code.' },
  { year: '2023', title: 'Expansion to Enterprise', desc: 'Acquired our 50th corporate client. Expanded operations across hospitals, real estate developers, and school portfolios.' },
  { year: '2025', title: 'AI Integration Rollout', desc: 'Launched AI-driven dynamic personalization models for landing pages, doubling average customer lead conversions.' },
  { year: '2026', title: 'Present & Beyond', desc: 'Operating as a top-tier development and digital marketing agency with a global remote team and unified data systems.' }
];

export const About: React.FC = () => {
  useSEO({
    title: 'About Our Digital Agency | Sakrix Digital Marketing',
    description: 'Learn about Sakrix Digital Marketing. Discover our founding story, core values of transparency and innovation, timeline, certifications, and our executive team.'
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
            Who We Are
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-secondary font-display max-w-4xl mx-auto leading-tight"
        >
          We Bridge the Gap Between <span className="text-gradient">High-Performance Tech</span> and Digital Marketing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          Sakrix was established with a singular vision: to build custom-coded, search-native web portals that serve as conversion anchors for high-ROI advertising campaigns.
        </motion.p>
      </section>

      {/* 2. COMPANY STORY, MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-lg border border-slate-200/50">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
            alt="Office workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex items-end p-8 text-white">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-1">FOUNDING PHILOSOPHY</p>
              <h4 className="text-xl font-bold font-display">Code Speed Meets Campaign ROI</h4>
            </div>
          </div>
        </div>

        <div className="space-y-8 text-left">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-extrabold text-secondary font-display">
              Our Journey & Mission
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              We realized that businesses were wasting millions on ad-spend that directed prospects to slow, template-based websites that load in 6+ seconds. By combining software engineering with digital marketing strategy, we help brands increase conversions, secure organic search rankings, and scale predictable revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="borderless" className="p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <Target size={20} />
              </div>
              <h4 className="font-bold text-secondary font-display mb-2">Our Mission</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                To engineer ultra-fast, high-converting digital platforms and execute data-driven campaigns that yield tangible ROI for growing companies.
              </p>
            </Card>

            <Card variant="borderless" className="p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <Eye size={20} />
              </div>
              <h4 className="font-bold text-secondary font-display mb-2">Our Vision</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                To be the global authority in tech-first digital marketing, helping enterprise and small businesses lead their respective search categories.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="bg-slate-50 py-24 px-6 md:px-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
              Core Principles
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-secondary font-display">
              The Principles That Guide Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { icon: <ShieldCheck size={24} />, title: 'Uncompromising Integrity', desc: 'No smoke and mirrors. We share live dashboards tracking actual leads, conversions, and exact search ranks.' },
              { icon: <Compass size={24} />, title: 'Tech-Driven Innovation', desc: 'We do not rest on old templates. We write React, integrate AI chatbots, and constantly optimize speed indexes.' },
              { icon: <Heart size={24} />, title: 'Client-Centric Success', desc: 'We treat your business budgets like our own. Our focus is never on traffic numbers, but on net profit margins.' },
              { icon: <Users size={24} />, title: 'Radical Transparency', desc: 'Weekly sprints, Slack check-ins, and direct access to developers and campaign specialists.' }
            ].map((val, idx) => (
              <Card key={idx} variant="default" className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold text-secondary font-display mb-3">
                  {val.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed flex-grow">
                  {val.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPANY TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
            Our Progression
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-secondary font-display">
            Company Timeline
          </h3>
        </div>

        <div className="relative border-l-2 border-slate-100 max-w-3xl mx-auto pl-8 space-y-12 text-left">
          {timeline.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Year dot overlay */}
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md flex items-center justify-center" />
              
              <div className="space-y-2">
                <span className="font-display font-extrabold text-xl text-blue-600">
                  {step.year}
                </span>
                <h4 className="text-lg font-bold text-secondary font-display">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TEAM MEMBERS */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
            Meet Leadership
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-secondary font-display">
            Meet Our Team
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {team.map((member, idx) => (
            <Card key={idx} className="p-0 overflow-hidden" variant="borderless">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-2">
                <h4 className="text-lg font-bold text-secondary font-display">
                  {member.name}
                </h4>
                <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed pt-2 border-t border-slate-100">
                  {member.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 6. AWARDS & CERTIFICATIONS */}
      <section className="bg-slate-50 py-24 px-6 md:px-8 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-secondary font-display">
              Partner Certifications
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              We maintain top-tier partner status and individual developer certifications with leading cloud infrastructure and ad platforms.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Google Ads Partner', issuer: 'Google LLC' },
                { name: 'Meta Marketing Partner', issuer: 'Meta Platforms' },
                { name: 'HubSpot Solution Certified', issuer: 'HubSpot Inc.' },
                { name: 'Supabase Developer Cert', issuer: 'Supabase Co.' }
              ].map((cert, idx) => (
                <div key={idx} className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-3 shadow-xxs">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-secondary">{cert.name}</h4>
                    <p className="text-xxs text-slate-400 font-semibold">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-secondary font-display">
              Agency Recognition
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our commitment to speed optimization, design metrics, and transparent ad dashboards has earned us recognition.
            </p>
            <div className="space-y-4">
              {[
                { award: 'Best Digital Performance Agency 2025', body: 'Global Digital Awards' },
                { award: 'Top Web Development Team 2026', body: 'Clutch B2B Platform' }
              ].map((rec, idx) => (
                <div key={idx} className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-4 shadow-xxs">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-secondary">{rec.award}</h4>
                    <p className="text-xs text-slate-400 font-semibold">{rec.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. OFFICE GALLERY */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
            Our Environment
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-secondary font-display">
            Office Gallery
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400"
              alt="Conference room"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400"
              alt="Co-working space"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=400"
              alt="Engineering desk"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
