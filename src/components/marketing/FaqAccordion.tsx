import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import type { FAQItem } from '../../services/mockData';

interface FaqAccordionProps {
  items: FAQItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm shadow-slate-100/50 transition-colors"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-display font-bold text-slate-900 cursor-pointer focus:outline-none focus:bg-slate-50"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg">{item.question}</span>
              <span className="shrink-0 p-1.5 rounded-full bg-slate-50 text-slate-500">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 pt-1 text-sm md:text-base text-slate-500 border-t border-slate-50/50 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
