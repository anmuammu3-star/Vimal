import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollProgress from '../components/ui/ScrollProgress';
import BackToTop from '../components/ui/BackToTop';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import LoadingScreen from '../components/ui/LoadingScreen';

export const RootLayout: React.FC = () => {
  const location = useLocation();

  // Scroll to top on every path change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top scroll progress overlay */}
      <ScrollProgress />

      {/* Global preloader screen */}
      <LoadingScreen />

      {/* Sticky header navigation */}
      <Navbar />

      {/* Main page content with exit/entry motion wrappers */}
      <main className="flex-grow pt-24">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Interactive sticky floating actions */}
      <WhatsAppButton />
      <BackToTop />

      {/* Corporate footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
