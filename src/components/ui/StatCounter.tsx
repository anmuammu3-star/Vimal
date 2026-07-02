import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  duration?: number; // in ms
}

export const StatCounter: React.FC<StatCounterProps> = ({ value, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progressPercent * (2 - progressPercent);
      const currentVal = Math.floor(easeProgress * value);
      
      setCount(currentVal);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-extrabold text-4xl md:text-5xl text-gradient">
      {count}
      {suffix}
    </span>
  );
};

export default StatCounter;
