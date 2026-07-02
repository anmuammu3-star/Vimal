import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from '../ui/BrandIcons';
import NewsletterForm from '../forms/NewsletterForm';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* Brand Section */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <span className="w-9 h-9 rounded-xl bg-accent-gradient flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20">
              S
            </span>
            <span className="text-xl font-extrabold text-white font-display tracking-tight">
              Sakrix<span className="text-blue-500">.</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed mb-8 max-w-sm">
            Grow your business with powerful, data-driven digital marketing solutions. We build custom, high-speed websites, run targeted ad campaigns, and create premium branding.
          </p>
          <div className="mb-6">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold mb-4">
              Subscribe to Newsletter
            </h4>
            <NewsletterForm />
          </div>
          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: <Facebook size={18} />, href: 'https://facebook.com' },
              { icon: <Instagram size={18} />, href: 'https://instagram.com' },
              { icon: <Linkedin size={18} />, href: 'https://linkedin.com' },
              { icon: <Twitter size={18} />, href: 'https://twitter.com' },
              { icon: <Youtube size={18} />, href: 'https://youtube.com' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-colors cursor-pointer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white text-sm font-bold tracking-wide mb-6">Company</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-white transition-colors">
                Our Work
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="hover:text-white transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-white transition-colors">
                Pricing Plans
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition-colors">
                Insights Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-white text-sm font-bold tracking-wide mb-6">Services</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Search Engine SEO
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Google Search PPC
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Social Ads Management
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                React Web Development
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Brand Visual Designs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h4 className="text-white text-sm font-bold tracking-wide mb-6">Get in Touch</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li className="flex gap-3">
              <Mail className="text-blue-500 shrink-0" size={16} />
              <a href="mailto:info@sakrix.com" className="hover:text-white transition-colors">
                info@sakrix.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="text-blue-500 shrink-0" size={16} />
              <a href="tel:+15550192834" className="hover:text-white transition-colors">
                +1 (555) 019-2834
              </a>
            </li>
            <li className="flex gap-3 leading-relaxed">
              <MapPin className="text-blue-500 shrink-0" size={16} />
              <span>100 Innovation Way, Suite 400, Tech City</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 h-px bg-slate-900 mb-8" />

      {/* Legal & Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold">
        <p>© {currentYear} Sakrix Digital Marketing. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link to="#" className="hover:text-white transition-colors">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
