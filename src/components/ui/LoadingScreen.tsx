import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1500); // Premium quick fade-out
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 bg-secondary z-[9999] flex flex-col items-center justify-center"
        >
          {/* Logo animation */}
          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative z-10 text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight flex items-center gap-2"
            >
              <span className="w-10 h-10 rounded-xl bg-accent-gradient flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/30">
                S
              </span>
              <span>
                Sakrix<span className="text-blue-500">.</span>
              </span>
            </motion.div>

            {/* Glowing ring under logo */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'linear',
              }}
              className="absolute w-48 h-48 rounded-full border border-dashed border-blue-500/30 pointer-events-none"
            />
            
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'linear',
              }}
              className="absolute w-56 h-56 rounded-full border border-dotted border-indigo-500/20 pointer-events-none"
            />
          </div>

          {/* Loading bar */}
          <div className="w-48 h-1 bg-slate-800 rounded-full mt-8 overflow-hidden">
            <motion.div
              initial={{ left: '-100%', width: '50%' }}
              animate={{ left: '100%', width: '30%' }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              }}
              className="relative h-full bg-accent-gradient rounded-full"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="text-xs text-slate-400 mt-4 tracking-widest uppercase font-semibold font-display"
          >
            Digital Innovation
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
