import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavRoute {
  name: string;
  path: string;
}

const navRoutes: NavRoute[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Industries', path: '/industries' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'py-4 glassmorphism shadow-lg shadow-slate-900/5 border-b border-slate-200/50'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <span className="w-9 h-9 rounded-xl bg-accent-gradient flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20">
            S
          </span>
          <span className="text-xl font-extrabold text-secondary font-display tracking-tight">
            Sakrix<span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-blue-600 bg-blue-50/50'
                    : 'text-slate-600 hover:text-blue-500 hover:bg-slate-50/50'
                }`
              }
            >
              {route.name}
            </NavLink>
          ))}
        </div>

        {/* Action Buttons & Switches */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Consultation CTA */}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-gradient hover:brightness-105 text-white text-sm font-bold rounded-full shadow-md shadow-blue-500/15 cursor-pointer"
            >
              Free Consultation
              <ArrowRight size={14} />
            </motion.button>
          </Link>
        </div>

        {/* Mobile Control Icons */}
        <div className="flex lg:hidden items-center gap-3">
          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-secondary cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-white border-b border-slate-100 shadow-xl absolute top-full left-0 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navRoutes.map((route) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-bold transition-all ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/50'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {route.name}
                </NavLink>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              
              <Link to="/contact" className="w-full">
                <button className="w-full py-3 bg-accent-gradient text-white font-bold rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2">
                  Book Free Consultation
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
