import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';
import {
  servicesData,
  industriesData,
  testimonialsData,
  portfolioData,
  caseStudiesData,
  blogsData,
  faqData
} from './mockData';
import type {
  ServiceItem,
  IndustryItem,
  Testimonial,
  PortfolioProject,
  CaseStudy,
  BlogPost,
  FAQItem
} from './mockData';

// Central Database Service
export const dataService = {
  // Fetch Services
  async getServices(): Promise<ServiceItem[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*');
        if (error) throw error;
        if (data && data.length > 0) return data as ServiceItem[];
      } catch (err) {
        console.error('Error fetching services from Supabase, falling back to mock:', err);
      }
    }
    return servicesData;
  },

  // Fetch Industries
  async getIndustries(): Promise<IndustryItem[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('industries')
          .select('*');
        if (error) throw error;
        if (data && data.length > 0) return data as IndustryItem[];
      } catch (err) {
        console.error('Error fetching industries from Supabase, falling back to mock:', err);
      }
    }
    return industriesData;
  },

  // Fetch Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('*');
        if (error) throw error;
        if (data && data.length > 0) return data as Testimonial[];
      } catch (err) {
        console.error('Error fetching testimonials from Supabase, falling back to mock:', err);
      }
    }
    return testimonialsData;
  },

  // Fetch Portfolio Projects
  async getPortfolioProjects(): Promise<PortfolioProject[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('portfolio_projects')
          .select('*');
        if (error) throw error;
        if (data && data.length > 0) return data as PortfolioProject[];
      } catch (err) {
        console.error('Error fetching projects from Supabase, falling back to mock:', err);
      }
    }
    return portfolioData;
  },

  // Fetch Case Studies
  async getCaseStudies(): Promise<CaseStudy[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('case_studies')
          .select('*');
        if (error) throw error;
        if (data && data.length > 0) return data as CaseStudy[];
      } catch (err) {
        console.error('Error fetching case studies from Supabase, falling back to mock:', err);
      }
    }
    return caseStudiesData;
  },

  // Fetch Blogs
  async getBlogPosts(): Promise<BlogPost[]> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false });
        if (error) throw error;
        if (data && data.length > 0) return data as BlogPost[];
      } catch (err) {
        console.error('Error fetching blogs from Supabase, falling back to mock:', err);
      }
    }
    return blogsData;
  },

  // Fetch Blog by Slug
  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .single();
        if (error) throw error;
        if (data) return data as BlogPost;
      } catch (err) {
        console.error(`Error fetching blog slug "${slug}" from Supabase, falling back to mock:`, err);
      }
    }
    const match = blogsData.find((b) => b.slug === slug);
    return match || null;
  },

  // Fetch FAQs
  async getFaqs(): Promise<FAQItem[]> {
    return faqData;
  },

  // Submit Contact Form
  async submitContactForm(contact: {
    name: string;
    email: string;
    phone: string;
    company?: string;
    service: string;
    message: string;
  }): Promise<{ success: boolean; message: string }> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase.from('contacts').insert([
          {
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            company: contact.company || null,
            service: contact.service,
            message: contact.message,
            status: 'new',
            created_at: new Date().toISOString()
          }
        ]);
        if (error) throw error;
        return { success: true, message: 'Your message has been stored successfully in Supabase.' };
      } catch (err: any) {
        console.error('Supabase contact insert failed:', err);
        return { success: false, message: err?.message || 'Database error occurred.' };
      }
    } else {
      // Mock database insertion in local storage
      try {
        const stored = localStorage.getItem('sakrix_contacts');
        const contacts = stored ? JSON.parse(stored) : [];
        contacts.push({
          ...contact,
          id: crypto.randomUUID(),
          created_at: new Date().toISOString(),
          status: 'new'
        });
        localStorage.setItem('sakrix_contacts', JSON.stringify(contacts));
        return { success: true, message: 'Stored contact record in local simulator storage.' };
      } catch (e: any) {
        console.error('LocalStorage write error:', e);
        return { success: false, message: 'LocalStorage full or blocked.' };
      }
    }
  },

  // Submit Newsletter
  async submitNewsletterSubscription(email: string): Promise<{ success: boolean; message: string }> {
    if (isSupabaseConfigured && supabase) {
      try {
        const { error } = await supabase.from('newsletter_subscribers').insert([
          {
            email: email,
            active: true,
            created_at: new Date().toISOString()
          }
        ]);
        if (error) {
          // Check for unique constraint violation (code 23505 in postgres)
          if (error.code === '23505') {
            return { success: true, message: 'You are already subscribed to our newsletter!' };
          }
          throw error;
        }
        return { success: true, message: 'Subscribed successfully in Supabase!' };
      } catch (err: any) {
        console.error('Supabase newsletter insert failed:', err);
        return { success: false, message: err?.message || 'Database subscription error.' };
      }
    } else {
      // Mock database insertion in local storage
      try {
        const stored = localStorage.getItem('sakrix_newsletter');
        const subscribers = stored ? JSON.parse(stored) : [];
        if (subscribers.includes(email)) {
          return { success: true, message: 'Already subscribed in local simulator!' };
        }
        subscribers.push(email);
        localStorage.setItem('sakrix_newsletter', JSON.stringify(subscribers));
        return { success: true, message: 'Subscribed in local simulator storage.' };
      } catch (e) {
        return { success: false, message: 'LocalStorage writing error.' };
      }
    }
  }
};
