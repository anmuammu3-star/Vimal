import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { dataService } from '../../services/dataService';
import { sendNewsletterEmail } from '../../services/emailService';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      // 1. Submit to database
      const dbRes = await dataService.submitNewsletterSubscription(email);
      
      // 2. Dispatch email notification alert
      await sendNewsletterEmail(email);

      if (dbRes.success) {
        setStatus('success');
        setMessage(dbRes.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(dbRes.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to register subscription. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md">
      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800"
        >
          <CheckCircle2 className="shrink-0" size={20} />
          <span className="text-sm font-semibold">{message}</span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your business email"
            required
            disabled={status === 'loading'}
            className="w-full pl-5 pr-14 py-3.5 bg-slate-100 border border-transparent focus:border-blue-500/30 focus:bg-white text-slate-900 rounded-full text-sm font-medium outline-none transition-all placeholder:text-slate-400"
          />
          <button
            type="submit"
            disabled={status === 'loading' || !email}
            className="absolute right-1.5 p-2.5 bg-accent-gradient hover:brightness-105 text-white rounded-full shadow-md shadow-blue-500/20 active:scale-95 transition-transform disabled:opacity-50 cursor-pointer"
            aria-label="Subscribe"
          >
            {status === 'loading' ? (
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <Send size={16} />
            )}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="text-xs font-semibold text-rose-500 mt-2 ml-4">{message}</p>
      )}
    </div>
  );
};

export default NewsletterForm;
