import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import { dataService } from '../services/dataService';
import type { BlogPost } from '../services/mockData';
import Card from '../components/ui/Card';

type BlogCategory = 'All' | 'SEO' | 'Google Ads' | 'AI Marketing' | 'Branding' | 'Website Development' | 'Business Growth' | 'Social Media Tips';

export const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null);

  useSEO({
    title: activeBlog ? `${activeBlog.title} | Sakrix Blog` : 'Insights & Marketing Blog | Sakrix',
    description: activeBlog 
      ? activeBlog.excerpt 
      : 'Read insights on digital growth strategies, Google Search PPC, technical SEO optimizations, branding principles, and AI marketing workflows from Sakrix.'
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await dataService.getBlogPosts();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  // Filter logic
  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories: BlogCategory[] = [
    'All', 'SEO', 'Google Ads', 'AI Marketing', 'Branding', 'Website Development', 'Business Growth', 'Social Media Tips'
  ];

  const handleBlogClick = async (slug: string) => {
    const blog = await dataService.getBlogPostBySlug(slug);
    if (blog) {
      setActiveBlog(blog);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const closeBlogDetail = () => {
    setActiveBlog(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get related articles (same category, excluding the active blog)
  const getRelatedArticles = (currentBlog: BlogPost) => {
    return blogs
      .filter((b) => b.category === currentBlog.category && b.id !== currentBlog.id)
      .slice(0, 2);
  };

  return (
    <div className="py-12 px-6 md:px-8 max-w-7xl mx-auto text-left">
      <AnimatePresence mode="wait">
        {activeBlog ? (
          /* ================== BLOG DETAIL VIEW ================== */
          <motion.article
            key="detail"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {/* Back Button */}
            <button
              onClick={closeBlogDetail}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors cursor-pointer group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </button>

            {/* Banner Cover */}
            <div className="h-64 md:h-[400px] rounded-3xl overflow-hidden border border-slate-100">
              <img
                src={activeBlog.coverImage}
                alt={activeBlog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Meta Tags */}
            <div className="flex flex-wrap gap-4 items-center text-xs font-bold text-slate-400">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full">
                {activeBlog.category}
              </span>
              <span>{activeBlog.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {activeBlog.readTime}
              </span>
            </div>

            {/* Blog Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-secondary font-display leading-tight">
              {activeBlog.title}
            </h1>

            {/* Author info */}
            <div className="flex items-center gap-3 py-4 border-y border-slate-100">
              <img
                src={activeBlog.author.avatar}
                alt={activeBlog.author.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-100"
              />
              <div>
                <h4 className="text-sm font-bold text-secondary">{activeBlog.author.name}</h4>
                <p className="text-xxs text-slate-400 font-semibold uppercase">{activeBlog.author.role}</p>
              </div>
            </div>

            {/* Blog Content body (Simulating rich markdown structure) */}
            <div className="prose prose-slate max-w-none text-slate-600 space-y-6 leading-relaxed text-sm md:text-base font-medium">
              <p className="text-lg md:text-xl font-medium text-slate-800 border-l-4 border-l-blue-500 pl-4 py-1 italic mb-8">
                {activeBlog.excerpt}
              </p>
              
              {/* Splitting mock markdown sections */}
              {activeBlog.content.split('##').map((section, idx) => {
                if (idx === 0) return null; // skip title block
                const lines = section.split('\n');
                const header = lines[0].trim();
                const paragraphs = lines.slice(1).join('\n').trim();

                return (
                  <div key={idx} className="space-y-3 pt-4">
                    <h3 className="text-xl md:text-2xl font-extrabold text-secondary font-display">
                      {header}
                    </h3>
                    <p className="whitespace-pre-line text-slate-500">
                      {paragraphs}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Related Articles list */}
            {getRelatedArticles(activeBlog).length > 0 && (
              <div className="pt-12 border-t border-slate-100 space-y-8">
                <h3 className="text-xl font-bold text-secondary font-display">
                  Related Insights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getRelatedArticles(activeBlog).map((rel) => (
                    <Card
                      key={rel.id}
                      onClick={() => handleBlogClick(rel.slug)}
                      className="p-5 flex flex-col items-start cursor-pointer hover:border-blue-500/20"
                      variant="default"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1">
                        {rel.category}
                      </span>
                      <h4 className="font-bold text-secondary font-display text-sm md:text-base mb-2 line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-xxs text-slate-400 font-semibold uppercase mt-auto flex items-center gap-1">
                        <Clock size={12} />
                        {rel.readTime}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        ) : (
          /* ================== BLOG GRID VIEW ================== */
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-12"
          >
            {/* Header Title */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100/50 rounded-full">
                <span className="text-xs font-extrabold text-blue-700 uppercase tracking-widest">
                  Resources Hub
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-secondary font-display leading-tight">
                Digital Insights & <span className="text-gradient">Growth Tactics</span>
              </h1>
              <p className="text-sm md:text-base text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
                Stay updated with search engine updates, Google Search PPC configurations, social media rules, and SaaS application development best practices.
              </p>
            </div>

            {/* Search & Filter tools */}
            <div className="space-y-6 max-w-5xl mx-auto bg-slate-50 rounded-3xl p-6 border border-slate-100">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                {/* Search Bar */}
                <div className="lg:col-span-4 relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <SearchIcon size={18} />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search keywords..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200/50 focus:border-blue-500/20 focus:outline-none text-slate-800 rounded-xl text-sm font-semibold placeholder:text-slate-400"
                  />
                </div>

                {/* Categories Tab list */}
                <div className="lg:col-span-8 flex flex-wrap gap-1.5 overflow-x-auto no-scrollbar py-1">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer shrink-0 ${
                        selectedCategory === cat
                          ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/10'
                          : 'bg-white text-slate-600 border border-slate-200/40 hover:bg-slate-50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blogs Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <Card
                    key={blog.id}
                    onClick={() => handleBlogClick(blog.slug)}
                    className="flex flex-col h-full overflow-hidden p-0 group cursor-pointer"
                    variant="default"
                  >
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      <span className="absolute top-4 left-4 bg-blue-600 text-white text-xxs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full">
                        {blog.category}
                      </span>
                    </div>

                    <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
                      <div className="flex gap-4 text-xxs font-bold text-slate-400 mb-3">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {blog.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-secondary font-display mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors">
                        {blog.title}
                      </h3>

                      <p className="text-xs text-slate-500 line-clamp-3 mb-6 leading-relaxed">
                        {blog.excerpt}
                      </p>

                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline mt-auto">
                        Read Full Article
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="col-span-full py-16 text-center text-slate-400 font-bold">
                  No articles found matching the filter query.
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
