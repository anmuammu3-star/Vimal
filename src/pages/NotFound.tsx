import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldAlert, Home, HelpCircle } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import Button from '../components/ui/Button';

export const NotFound: React.FC = () => {
  useSEO({
    title: '404 - Page Not Found | Sakrix',
    description: 'The requested page was not found. Please navigate back to Sakrix Digital Marketing home page or request a free consultation.'
  });

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md space-y-8 relative z-10">
        {/* Glowing floating badge */}
        <div className="relative flex justify-center">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-20 h-20 rounded-3xl bg-blue-500/10 text-blue-600 flex items-center justify-center shadow-lg border border-blue-500/10"
          >
            <ShieldAlert size={40} />
          </motion.div>
          
          <div className="absolute inset-0 bg-blue-500/5 blur-xl rounded-full" />
        </div>

        {/* Text Details */}
        <div className="space-y-3">
          <h1 className="text-7xl font-extrabold tracking-tight text-gradient font-display">
            404
          </h1>
          <h2 className="text-2xl font-bold text-secondary font-display">
            Page Not Found
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed font-semibold">
            The path you requested might be broken, or the content was relocated to a new URL. Let's redirect you.
          </p>
        </div>

        {/* Nav actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link to="/">
            <Button variant="primary" icon={<Home size={16} />} iconPosition="left">
              Return Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" icon={<HelpCircle size={16} />} iconPosition="left">
              Book Consult
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
