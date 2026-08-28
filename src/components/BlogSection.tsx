import React, { useState, useMemo } from 'react';
import { blogPostsData } from '../data/blog';
import { BlogPost } from '../types';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import {
  Clock,
  ArrowRight,
  BookOpen,
  User,
  Search,
  ArrowUpDown,
  Star
} from 'lucide-react';

interface BlogSectionProps {
  openBlogArticleModal: (post: BlogPost) => void;
}

type SortKey = 'newest' | 'quickest' | 'az';

const readingMinutes = (r: string) => parseInt(r, 10) || 0;

export const BlogSection: React.FC<BlogSectionProps> = ({
  openBlogArticleModal
}) => {
  const { theme, t } = useApp();
  const [selectedTag, setSelectedTag] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('newest');
  const gridRef = useReveal<HTMLDivElement>();

  const tags = ['ALL', 'AI Literacy', 'Cybersecurity', 'Education', 'Business', 'Swahili AI'];

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = blogPostsData.filter((post) => {
      const matchesTag = selectedTag === 'ALL' || post.category === selectedTag;
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesTag && matchesSearch;
    });

    return [...list].sort((a, b) => {
      if (sortKey === 'quickest') return readingMinutes(a.readingTime) - readingMinutes(b.readingTime);
      if (sortKey === 'az') return a.title.localeCompare(b.title);
      return b.publishedDate.localeCompare(a.publishedDate);
    });
  }, [selectedTag, searchQuery, sortKey]);

  const featured = filteredPosts[0];
  const rest = filteredPosts.slice(1);

  return (
    <section 
      id="blog-section" 
      className="py-24 transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-red-subtle)] border border-[var(--accent-red-safe)]/20 text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-wider animate-reveal">
              <span>{t.blog.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] text-balance animate-reveal-delay-1">
              {t.blog.title}
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-secondary)] max-w-xl animate-reveal-delay-2">
              {t.blog.subtitle}
            </p>
          </div>

          {/* Search + Sort */}
          <div className="flex items-center gap-3 md:self-end animate-reveal-delay-3">
            <div className="relative group">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-[var(--accent-red-safe)] transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('blog.search', { defaultValue: 'Search essays...' })}
                aria-label={t('blog.searchLabel', { defaultValue: 'Search essays' })}
                className="w-48 pl-10 pr-4 py-2.5 rounded-2xl text-xs border focus:outline-none focus:border-[var(--accent-red-safe)] focus:ring-2 focus:ring-[var(--accent-red-subtle)] bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-all shadow-sm"
              />
            </div>
            <div className="flex items-center gap-2 px-3 border rounded-2xl bg-[var(--bg-secondary)] border-[var(--border-color)] focus-within:border-[var(--accent-red-safe)] transition-all shadow-sm">
              <ArrowUpDown className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value as SortKey)}
                aria-label={t('blog.sortLabel', { defaultValue: 'Sort essays' })}
                className="bg-transparent py-2.5 text-xs font-bold focus:outline-none text-[var(--text-secondary)] cursor-pointer"
              >
                <option value="newest">{t('blog.sortNewest', { defaultValue: 'Newest' })}</option>
                <option value="quickest">{t('blog.sortQuickest', { defaultValue: 'Quickest Read' })}</option>
                <option value="az">{t('blog.sortAZ', { defaultValue: 'A to Z' })}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tag Filter */}
        <div className="flex items-center gap-2 p-1.5 border rounded-[1.5rem] self-start md:self-auto overflow-x-auto max-w-full mb-12 bg-[var(--bg-secondary)] border-[var(--border-color)] scrollbar-hide reveal">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                selectedTag === tag 
                  ? 'bg-[var(--accent-red-strong)] text-white shadow-lg shadow-[var(--accent-red-subtle)] scale-105'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
              }`}
            >
              {tag === 'ALL' ? t('common.filterAll', { defaultValue: 'ALL' }) : tag}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {featured && (
          <article
            onClick={() => openBlogArticleModal(featured)}
            className="group mb-12 border rounded-[2rem] p-6 sm:p-10 flex flex-col lg:flex-row gap-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-sm glass-card border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/50 reveal hover-icon-bounce"
          >
            <div className="lg:w-2/3 space-y-6">
              <div className="flex items-center justify-between gap-4 text-xs">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-[var(--accent-red-strong)]/40 bg-[var(--accent-red-subtle)] text-[var(--accent-red-strong)] icon-glow">
                  <Star className="w-3.5 h-3.5" />
                  {t('blog.featuredBadge', { defaultValue: 'FEATURED ESSAY' })}
                </span>
                <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featured.readingTime}</span>
                </div>
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border text-[var(--accent-red-strong)] bg-[var(--accent-red-subtle)] border-[var(--accent-red-safe)]/20 keyword-highlight">
                  {featured.category}
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight group-hover:text-[var(--accent-red-strong)] transition-colors text-[var(--text-primary)] leading-tight">
                  {featured.title}
                </h3>
                <p className="text-base mt-4 leading-relaxed line-clamp-3 text-[var(--text-secondary)]">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center">
                  <User className="w-4 h-4 text-[var(--accent-red-strong)]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[var(--text-primary)]">{featured.author}</span>
                  <span className="text-[var(--text-muted)] text-[11px]">{featured.publishedDate}</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 rounded-[1.5rem] border flex items-center justify-center p-10 bg-[var(--bg-tertiary)] border-[var(--border-color)] group-hover:bg-[var(--bg-secondary)] transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-red-subtle)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-center space-y-3 relative z-10">
                <BookOpen className="w-12 h-12 mx-auto text-[var(--accent-red-strong)] icon-glow" />
                <div className="flex items-center justify-center gap-2 font-bold text-[var(--accent-red-strong)]">
                  <span>{t('blog.readArticle', { defaultValue: 'Read Article' })}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Blog Posts Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
          {rest.map((post) => (
            <article
              key={post.id}
              onClick={() => openBlogArticleModal(post)}
              className="border rounded-[2rem] p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-2 shadow-sm group glass-card border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/50 hover-icon-bounce"
            >
              <div className="space-y-5">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border text-[var(--accent-red-strong)] bg-[var(--accent-red-subtle)] border-[var(--accent-red-safe)]/20 keyword-highlight">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                {/* Title & Excerpt */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-[var(--accent-red-strong)] transition-colors leading-tight text-[var(--text-primary)]">
                    {post.title}
                  </h3>
                  <p className="text-sm line-clamp-3 leading-relaxed text-[var(--text-secondary)] opacity-80">
                    {post.excerpt}
                  </p>
                </div>

              </div>

              {/* Author & Read More */}
              <div className="pt-5 mt-8 border-t flex items-center justify-between text-xs border-[var(--border-subtle)] text-[var(--text-secondary)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-color)] flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-[var(--accent-red-strong)]" />
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5 font-bold text-[var(--accent-red-strong)] group-hover:text-[var(--accent-red-safe)] transition-colors">
                  <span>{t('blog.read', { defaultValue: 'Read' })}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </div>

            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12 rounded-[2rem] border text-xs bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-muted)]">
            {t('blog.noResults', { defaultValue: 'No essays match your search.' })}
          </div>
        )}

      </div>
    </section>
  );
};
