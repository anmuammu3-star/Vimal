import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'accent' | 'borderless';
  hoverEffect?: boolean;
  className?: string;
  onClick?: () => void;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hoverEffect = true,
  className = '',
  onClick,
  delay = 0,
}) => {
  const styles = {
    default: 'bg-white border border-slate-100 shadow-sm shadow-slate-100/50',
    glass: 'glassmorphism',
    accent: 'border-t-4 border-t-primary bg-white border-x border-b border-slate-100 shadow-sm',
    borderless: 'bg-slate-50/50',
  };

  const hoverStyle = hoverEffect
    ? 'hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300'
    : '';

  const clickableStyle = onClick ? 'cursor-pointer' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      className={`rounded-2xl p-6 md:p-8 ${styles[variant]} ${hoverStyle} ${clickableStyle} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
