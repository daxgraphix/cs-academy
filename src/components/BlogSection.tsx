import React, { useState } from 'react';
import { blogPostsData } from '../data/blog';
import { BlogPost } from '../types';
import { useApp } from '../context/AppContext';
import { 
  Clock, 
  ArrowRight, 
  BookOpen, 
  Tag, 
  User,
  Sparkles
} from 'lucide-react';

interface BlogSectionProps {
  openBlogArticleModal: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  openBlogArticleModal
}) => {
  const { language, theme, t } = useApp();
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const tags = ['ALL', 'AI Literacy', 'Cybersecurity', 'Education', 'Business', 'Swahili AI'];

  const filteredPosts = blogPostsData.filter((post) => {
    if (selectedTag === 'ALL') return true;
    return post.category === selectedTag;
  });

  return (
    <section 
      id="blog-section" 
      className={`py-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0B0B0B] text-white' : 'bg-white text-neutral-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-[#DC2626] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.blog.badge}</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-neutral-950'
            }`}>
              {t.blog.title}
            </h2>
            <p className={`text-base leading-relaxed ${
              theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              {t.blog.subtitle}
            </p>
          </div>

          {/* Tag Filter */}
          <div className={`flex items-center gap-1.5 p-1 border rounded-2xl self-start md:self-auto overflow-x-auto max-w-full ${
            theme === 'dark' ? 'bg-[#171717] border-neutral-800' : 'bg-neutral-100 border-neutral-200'
          }`}>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedTag === tag 
                    ? 'bg-[#B91C1C] text-white shadow-sm' 
                    : theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {tag === 'ALL' ? (language === 'sw' ? 'ZOTE' : 'ALL') : tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => openBlogArticleModal(post)}
              className={`border rounded-3xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-1 shadow-sm group ${
                theme === 'dark'
                  ? 'bg-[#121212] border-neutral-800 hover:border-neutral-700'
                  : 'bg-neutral-50 border-neutral-200 hover:border-red-200 hover:shadow-lg'
              }`}
            >
              <div className="space-y-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs">
                  <span className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded border ${
                    theme === 'dark' ? 'text-[#DC2626] bg-red-950/60 border-red-900/40' : 'text-[#DC2626] bg-red-50 border-red-200'
                  }`}>
                    {post.category}
                  </span>
                  <div className={`flex items-center gap-1.5 font-mono text-[11px] ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    <Clock className="w-3 h-3" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                {/* Title & Excerpt */}
                <div>
                  <h3 className={`text-lg font-bold tracking-tight group-hover:text-[#DC2626] transition-colors leading-snug ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {post.title}
                  </h3>
                  <p className={`text-xs mt-2 line-clamp-3 leading-relaxed ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {post.excerpt}
                  </p>
                </div>

              </div>

              {/* Author & Read More */}
              <div className={`pt-4 mt-6 border-t flex items-center justify-between text-xs ${
                theme === 'dark' ? 'border-neutral-800/80 text-neutral-400' : 'border-neutral-200 text-neutral-600'
              }`}>
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-[#DC2626] group-hover:translate-x-1 transition-transform">
                  <span>{language === 'sw' ? 'Soma Makala' : 'Read Article'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
