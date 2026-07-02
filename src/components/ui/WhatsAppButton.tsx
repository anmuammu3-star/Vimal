import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  // Sakrix agency support whatsapp number (mock number for consultation)
  const phoneNumber = '1234567890'; 
  const message = encodeURIComponent('Hi Sakrix! I am interested in booking a free consultation for my business.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-20 z-40 flex items-center justify-center p-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/20 border border-emerald-400/20 cursor-pointer"
      aria-label="Contact on WhatsApp"
    >
      <span className="relative flex h-3 w-3 mr-0.5 absolute -top-1 -right-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
      </span>
      <MessageSquare size={20} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-xs font-semibold">
        Chat Us
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
