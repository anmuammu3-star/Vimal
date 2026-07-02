import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { Testimonial } from '../../services/mockData';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000); // Premium slow rotation
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const current = testimonials[currentIndex];

  if (!current) return null;

  return (
    <div className="relative w-full max-w-5xl mx-auto px-6 py-12 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
      {/* Decorative Quote Icon */}
      <div className="absolute top-6 left-6 text-blue-500/10 pointer-events-none">
        <Quote size={160} className="rotate-180" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Animated Slide Container */}
        <div className="min-h-[280px] flex items-center justify-center w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              {/* Client Image */}
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-6 border-2 border-white shadow-md">
                <img
                  src={current.imageUrl}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Star Ratings */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < current.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-300'
                    }
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg md:text-xl font-medium text-slate-800 max-w-3xl leading-relaxed mb-6 font-display italic">
                "{current.review}"
              </blockquote>

              {/* Success Highlight */}
              {current.successStory && (
                <div className="mb-8 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs md:text-sm font-semibold max-w-xl">
                  🏆 Success: {current.successStory}
                </div>
              )}

              {/* Client Credentials */}
              <div>
                <cite className="not-italic font-bold text-slate-900 text-base md:text-lg">
                  {current.name}
                </cite>
                <p className="text-xs md:text-sm text-slate-500 mt-1 font-semibold">
                  {current.role} at <span className="text-blue-500">{current.company}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-6 mt-8">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-white hover:text-blue-600 transition-colors shadow-sm cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          
          {/* Page Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex
                    ? 'bg-blue-600 w-6'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-white hover:text-blue-600 transition-colors shadow-sm cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
