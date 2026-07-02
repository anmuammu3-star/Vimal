import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, TrendingUp, Search, ChevronRight, User } from 'lucide-react';
import { Facebook } from '../components/ui/BrandIcons';
import useSEO from '../hooks/useSEO';
import { dataService } from '../services/dataService';
import type { CaseStudy } from '../services/mockData';

export const CaseStudies: React.FC = () => {
  useSEO({
    title: 'Client Case Studies | Sakrix Digital Marketing',
    description: 'Read the deep details of our digital marketing campaigns. We document client backgrounds, challenges, paid media research, search strategy execution, and analytical results.'
  });

  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'challenge' | 'strategy' | 'results'>('overview');

  useEffect(() => {
    const fetchCaseStudies = async () => {
      const data = await dataService.getCaseStudies();
      setCaseStudies(data);
      if (data.length > 0) {
        setActiveCase(data[0]);
      }
    };
    fetchCaseStudies();
  }, []);

  const selectCase = (study: CaseStudy) => {
    setActiveCase(study);
    setActiveTab('overview'); // Reset tab to overview on switch
  };

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
            Deep-Dives
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-secondary font-display max-w-4xl mx-auto leading-tight"
        >
          Strategic Campaigns & <span className="text-gradient">Marketing Whitepapers</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          We document every phase: client backgrounds, business blockers, deep target research, paid channel tactics, and final audited metrics.
        </motion.p>
      </section>

      {/* 2. MAIN LAYOUT: Master-Detail List */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left Side: Case Study Selector */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6">
            Explore Whitepapers
          </h3>
          <div className="flex flex-col gap-3">
            {caseStudies.map((study) => {
              const isSelected = activeCase?.id === study.id;
              return (
                <button
                  key={study.id}
                  onClick={() => selectCase(study)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20'
                      : 'bg-white border-slate-100 text-secondary hover:border-slate-200'
                  }`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-widest block mb-2 ${isSelected ? 'text-blue-200' : 'text-blue-500'}`}>
                    {study.industry}
                  </span>
                  <h4 className="font-bold font-display text-sm leading-snug">
                    {study.clientName}
                  </h4>
                  <ChevronRight size={14} className="mt-4 opacity-50" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Tabbed breakdown */}
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait">
            {activeCase ? (
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
              >
                {/* Header title */}
                <div className="border-b border-slate-100 pb-6">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-2 block">
                    {activeCase.industry} STUDY
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-secondary font-display leading-tight">
                    {activeCase.title}
                  </h2>
                </div>

                {/* Sub Tab Headers */}
                <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
                  {[
                    { label: 'Executive Overview', value: 'overview' as const },
                    { label: 'Challenge & Background', value: 'challenge' as const },
                    { label: 'Strategy & Execution', value: 'strategy' as const },
                    { label: 'Final Audited Results', value: 'results' as const },
                  ].map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => setActiveTab(tab.value)}
                      className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                        activeTab === tab.value
                          ? 'text-white bg-blue-600 shadow-md shadow-blue-500/10'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab content panel */}
                <div className="min-h-[300px]">
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-secondary font-display">
                          Executive Case Summary
                        </h4>
                        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                          {activeCase.background}
                        </p>
                      </div>
                      <div className="bg-slate-50 rounded-2xl p-6 border-l-4 border-l-blue-500 space-y-2">
                        <h4 className="font-bold text-secondary font-display text-sm">Key Challenge Resolved</h4>
                        <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                          {activeCase.challenge}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'challenge' && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-secondary font-display">Client Background & Blocker</h4>
                        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                          {activeCase.background}
                        </p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-secondary font-display">Target Market Research & Discoveries</h4>
                        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                          {activeCase.research}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'strategy' && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-secondary font-display">Strategy Layout</h4>
                        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium whitespace-pre-line">
                          {activeCase.strategy}
                        </p>
                      </div>
                      
                      {/* Channels Execution details */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center mb-3">
                            <Search size={16} />
                          </div>
                          <h5 className="font-bold text-secondary text-sm mb-2">Search SEO Tactic</h5>
                          <p className="text-xxs md:text-xs text-slate-400 leading-relaxed font-medium">
                            {activeCase.execution.seo}
                          </p>
                        </div>

                        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center mb-3">
                            <TrendingUp size={16} />
                          </div>
                          <h5 className="font-bold text-secondary text-sm mb-2">Paid Media Tactic</h5>
                          <p className="text-xxs md:text-xs text-slate-400 leading-relaxed font-medium">
                            {activeCase.execution.paidAds}
                          </p>
                        </div>

                        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                          <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center mb-3">
                            <Facebook size={16} />
                          </div>
                          <h5 className="font-bold text-secondary text-sm mb-2">Social Strategy Tactic</h5>
                          <p className="text-xxs md:text-xs text-slate-400 leading-relaxed font-medium">
                            {activeCase.execution.socialMedia}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 pt-4">
                        <h4 className="text-lg font-bold text-secondary font-display">Analytics & Dashboard Tracking</h4>
                        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                          {activeCase.analytics}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'results' && (
                    <div className="space-y-8">
                      {/* Grid of numbers */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeCase.finalResults.map((result, idx) => (
                          <div key={idx} className="p-5 bg-blue-500/5 border border-blue-500/15 rounded-2xl text-left">
                            <div className="text-[10px] font-extrabold text-blue-500 uppercase tracking-widest mb-1">
                              {result.metric}
                            </div>
                            <div className="text-2xl md:text-3xl font-extrabold text-gradient font-display mb-2">
                              {result.value}
                            </div>
                            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                              {result.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Client review card */}
                      <div className="p-6 md:p-8 bg-slate-50 rounded-3xl border border-slate-100">
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: activeCase.clientReview.rating }).map((_, i) => (
                            <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <blockquote className="text-sm md:text-base text-slate-800 font-medium italic mb-6 leading-relaxed">
                          "{activeCase.clientReview.text}"
                        </blockquote>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                            <User size={18} />
                          </div>
                          <div>
                            <cite className="not-italic text-sm font-bold text-secondary">
                              {activeCase.clientReview.author}
                            </cite>
                            <p className="text-xxs text-slate-400 font-semibold uppercase mt-0.5">
                              {activeCase.clientReview.role} at {activeCase.clientReview.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </motion.div>
            ) : (
              <div className="py-20 text-center text-slate-400 font-bold">
                Select a case study study on the panel.
              </div>
            )}
          </AnimatePresence>
        </div>

      </section>
    </div>
  );
};

export default CaseStudies;
