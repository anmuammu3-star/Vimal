import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Phone, Briefcase, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { dataService } from '../../services/dataService';
import { sendContactEmail } from '../../services/emailService';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [notificationMsg, setNotificationMsg] = useState('');

  const servicesList = [
    { label: 'Select a Service', value: '' },
    { label: 'Search Engine Optimization (SEO)', value: 'SEO' },
    { label: 'Google Search Ads (PPC)', value: 'Google Ads' },
    { label: 'Meta Social Ads (Facebook/Insta)', value: 'Meta Ads' },
    { label: 'WhatsApp API Marketing', value: 'WhatsApp Marketing' },
    { label: 'Email Automation Flows', value: 'Email Marketing' },
    { label: 'Custom React Web Development', value: 'Web Development' },
    { label: 'Brand Identity & Logo Design', value: 'Branding' },
    { label: 'Video Production & Editing', value: 'Video Editing' },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) return 'Name is required';
    if (!emailRegex.test(formData.email)) return 'Provide a valid email address';
    if (!formData.phone.trim()) return 'Phone number is required';
    if (!formData.service) return 'Please select a service';
    if (!formData.message.trim()) return 'Message content is required';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) {
      setStatus('error');
      setNotificationMsg(errorMsg);
      return;
    }

    setStatus('submitting');
    try {
      // 1. Submit to database (Supabase or LocalStorage fallback)
      const dbRes = await dataService.submitContactForm(formData);

      // 2. Dispatch Email alert (EmailJS or simulated console log)
      const emailRes = await sendContactEmail({
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        company_name: formData.company,
        service_requested: formData.service,
        message_content: formData.message,
      });

      if (dbRes.success && emailRes.success) {
        setStatus('success');
        setNotificationMsg('Your inquiry has been submitted! A strategy consultant will review and contact you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
      } else {
        setStatus('error');
        setNotificationMsg(dbRes.message || emailRes.message || 'Submission failed. Please check inputs.');
      }
    } catch (err) {
      console.error('Submit Error:', err);
      setStatus('error');
      setNotificationMsg('An unexpected connection error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-100/50">
      <h3 className="text-xl md:text-2xl font-bold text-secondary font-display mb-2">
        Request a Free Growth Strategy Session
      </h3>
      <p className="text-sm text-slate-500 mb-8 font-medium">
        Fill out details about your project and we will blueprint a marketing roadmap for your brand.
      </p>

      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-8 p-5 bg-emerald-50 border border-emerald-200 rounded-2xl flex gap-4 text-emerald-800"
          >
            <CheckCircle2 className="shrink-0 text-emerald-500 mt-0.5" size={20} />
            <div>
              <h4 className="font-bold text-sm">Consultation Requested!</h4>
              <p className="text-xs font-semibold mt-1 leading-relaxed">{notificationMsg}</p>
            </div>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-8 p-4 bg-rose-50 border border-rose-200 rounded-2xl flex gap-3 text-rose-700"
          >
            <AlertCircle className="shrink-0 text-rose-500 mt-0.5" size={20} />
            <div>
              <h4 className="font-bold text-sm">Action Required</h4>
              <p className="text-xs font-semibold mt-0.5 leading-relaxed">{notificationMsg}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="relative">
            <label htmlFor="name" className="sr-only">Full Name</label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <User size={18} />
            </div>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name *"
              required
              disabled={status === 'submitting'}
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-transparent focus:border-blue-500/20 focus:bg-white text-slate-900 rounded-xl text-sm font-medium outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Email Address */}
          <div className="relative">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Mail size={18} />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Business Email *"
              required
              disabled={status === 'submitting'}
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-transparent focus:border-blue-500/20 focus:bg-white text-slate-900 rounded-xl text-sm font-medium outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Phone Number */}
          <div className="relative">
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Phone size={18} />
            </div>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              required
              disabled={status === 'submitting'}
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-transparent focus:border-blue-500/20 focus:bg-white text-slate-900 rounded-xl text-sm font-medium outline-none transition-all placeholder:text-slate-400"
            />
          </div>

          {/* Company Name */}
          <div className="relative">
            <label htmlFor="company" className="sr-only">Company Name</label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Briefcase size={18} />
            </div>
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name (Optional)"
              disabled={status === 'submitting'}
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-transparent focus:border-blue-500/20 focus:bg-white text-slate-900 rounded-xl text-sm font-medium outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Services Dropdown */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <FileText size={18} />
          </div>
          <select
            name="service"
            id="service"
            value={formData.service}
            onChange={handleChange}
            required
            disabled={status === 'submitting'}
            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-transparent focus:border-blue-500/20 focus:bg-white text-slate-500 rounded-xl text-sm font-medium outline-none transition-all cursor-pointer"
          >
            {servicesList.map((item, idx) => (
              <option key={idx} value={item.value} className="text-slate-900 bg-white font-semibold">
                {item.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message Content */}
        <div className="relative">
          <textarea
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your business goals and current challenges..."
            required
            disabled={status === 'submitting'}
            className="w-full px-5 py-4 bg-slate-50 border border-transparent focus:border-blue-500/20 focus:bg-white text-slate-900 rounded-xl text-sm font-medium outline-none transition-all placeholder:text-slate-400 resize-none"
          />
        </div>

        {/* Submit Action */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-4 bg-accent-gradient hover:brightness-105 active:scale-[0.99] text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 cursor-pointer flex items-center justify-center gap-3 transition-transform"
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Blueprinting Growth Strategy...
            </>
          ) : (
            'Book Strategy Session'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
