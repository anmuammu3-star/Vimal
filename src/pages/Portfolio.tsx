import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Clock } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import { dataService } from '../services/dataService';
import type { PortfolioProject } from '../services/mockData';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';

export const Portfolio: React.FC = () => {
  useSEO({
    title: 'Our Case Portfolio | Sakrix Digital Marketing',
    description: 'Explore the Sakrix digital project portfolio. Analyze campaign durations, technology stacks, B2B marketing results, and interact with before-after comparisons.'
  });

  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await dataService.getPortfolioProjects();
      setProjects(data);
      // Default select first project to show detailed preview immediately
      if (data.length > 0) {
        setSelectedProject(data[0]);
      }
    };
    fetchProjects();
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
            Proven Results
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-secondary font-display max-w-4xl mx-auto leading-tight"
        >
          Client Success Stories & <span className="text-gradient">Before/After Slider</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
        >
          We hold ourselves accountable to conversions. Interact with the sliders below to view the visual transformations and revenue updates we achieved.
        </motion.p>
      </section>

      {/* 2. MAIN LAYOUT: Master-Detail view */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left Side: Master List */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="text-lg font-bold text-secondary font-display mb-6">
            Select a Case Study
          </h3>
          <div className="space-y-4 max-h-[80vh] overflow-y-auto pr-2 no-scrollbar">
            {projects.map((proj) => {
              const isSelected = selectedProject?.id === proj.id;
              return (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-500/5 border-blue-500 shadow-md shadow-blue-500/5'
                      : 'bg-white border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <span className="text-xxs font-extrabold text-blue-600 uppercase tracking-widest mb-1.5 block">
                    {proj.industry}
                  </span>
                  <h4 className="font-bold text-secondary font-display text-sm md:text-base mb-1">
                    {proj.title}
                  </h4>
                  <p className="text-xxs text-slate-400 font-semibold uppercase">
                    Client: {proj.clientName}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Detail View */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {selectedProject ? (
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm"
              >
                {/* 1. Project Title & Banner */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-secondary font-display mb-4">
                    {selectedProject.title}
                  </h2>
                  <div className="relative h-64 md:h-[350px] rounded-2xl overflow-hidden mb-6 border border-slate-100">
                    <img
                      src={selectedProject.bannerImage}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-bold border border-white/10">
                      {selectedProject.industry}
                    </div>
                  </div>
                </div>

                {/* 2. Stats Grid & Meta Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Results Panel */}
                  <div className="md:col-span-2 bg-blue-500/5 border border-blue-500/10 rounded-2xl p-5 grid grid-cols-2 gap-4">
                    {selectedProject.marketingResults.map((result, idx) => (
                      <div key={idx}>
                        <div className="text-xxs font-bold text-slate-400 uppercase tracking-wide mb-1">
                          {result.label}
                        </div>
                        <div className="text-xl md:text-2xl font-extrabold text-blue-600 font-display">
                          {result.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Meta details */}
                  <div className="bg-slate-50 rounded-2xl p-5 space-y-3.5 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <Clock size={15} className="text-blue-500" />
                      <span>Duration: {selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Layers size={15} className="text-blue-500" />
                      <span className="line-clamp-2">Client: {selectedProject.clientName}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {selectedProject.technology.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-white border border-slate-100 rounded text-[10px] font-bold text-slate-500">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Description */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-secondary font-display">
                    Project Overview
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                    {selectedProject.description}
                  </p>
                </div>

                {/* 4. BEFORE & AFTER SLIDER (Interactive widget) */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-secondary font-display">
                    Interactive Transformation Slider
                  </h3>
                  <p className="text-xs text-slate-400 mb-2 font-medium">
                    Drag the white handle horizontally to view the before and after site metrics and UI layout updates:
                  </p>
                  
                  {/* Slider widget */}
                  <BeforeAfterSlider
                    beforeImage={selectedProject.bannerImage}
                    afterImage={selectedProject.gallery[0] || selectedProject.bannerImage}
                    beforeLabel={selectedProject.beforeAfter.beforeLabel}
                    afterLabel={selectedProject.beforeAfter.afterLabel}
                    heightClass="h-72 md:h-[400px]"
                  />

                  {/* Comparison text */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs md:text-sm">
                    <div className="bg-slate-50 rounded-xl p-4 border-l-4 border-l-slate-400">
                      <h4 className="font-bold text-slate-800 mb-1">Before Collaboration</h4>
                      <p className="text-slate-500 leading-relaxed font-medium">{selectedProject.beforeAfter.beforeText}</p>
                    </div>
                    <div className="bg-blue-500/5 rounded-xl p-4 border-l-4 border-l-blue-500">
                      <h4 className="font-bold text-blue-600 mb-1 font-display">After Optimization</h4>
                      <p className="text-slate-500 leading-relaxed font-medium">{selectedProject.beforeAfter.afterText}</p>
                    </div>
                  </div>
                </div>

                {/* 5. Mockup Gallery */}
                {selectedProject.gallery.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-secondary font-display">
                      Platform Gallery
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedProject.gallery.map((imgUrl, idx) => (
                        <div key={idx} className="relative h-28 md:h-36 rounded-xl overflow-hidden border border-slate-100">
                          <img
                            src={imgUrl}
                            alt={`Gallery view ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="py-20 text-center text-slate-400 font-bold">
                Select a project on the list to view comprehensive details.
              </div>
            )}
          </AnimatePresence>
        </div>

      </section>
    </div>
  );
};

export default Portfolio;
