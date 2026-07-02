import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
}

export function useSEO({ title, description, canonicalUrl }: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Sakrix Digital Marketing`;
    
    // Update description meta tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | Sakrix Digital Marketing`);
    }

    // Update OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (canonicalUrl) {
        canonical.setAttribute('href', canonicalUrl);
      }
    } else if (canonicalUrl) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }
  }, [title, description, canonicalUrl]);
}
export default useSEO;
