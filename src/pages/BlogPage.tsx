import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { blogPostsData } from '../data/blog';
import { BlogPost } from '../types';
import { useApp } from '../context/AppContext';
import { ShareButtons } from '../components/ShareButtons';
import { 
  Clock, 
  User, 
  ArrowRight, 
  Search, 
  BookOpen, 
  Tag
} from 'lucide-react';

interface BlogPageProps {
  openBlogArticleModal: (post: BlogPost) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  openBlogArticleModal
}) => {
  const { theme, t, language } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [search, setSearch] = useState<string>('');

  const categories = ['ALL', 'AI Literacy', 'Cybersecurity', 'Education', 'Business', 'Swahili AI'];

  const filtered = blogPostsData.filter(post => {
    const matchCat = selectedCategory === 'ALL' || post.category === selectedCategory;
    const title = language === 'sw' && post.title_sw ? post.title_sw : post.title;
    const excerpt = language === 'sw' && post.excerpt_sw ? post.excerpt_sw : post.excerpt;

    const matchSearch = search === '' ||
      title.toLowerCase().includes(search.toLowerCase()) ||
      excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-28 pb-20 min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SEO
        title={t('blog.seo.title', 'Blog & Insights')}
        description={t('blog.seo.description', 'Thought leadership, practical tutorials, and ethical considerations surrounding AI and cybersecurity in Africa.')}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-red-subtle)] border border-[var(--accent-red-strong)]/20 text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-wider">
            <span>{t('blog.hero.badge', 'Essays, Insights & Practical Analysis')}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {t('blog.hero.title', 'CS ACADEMY BLOG').split(' BLOG')[0]} <span className="text-[var(--accent-red-safe)]">BLOG</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 rounded-[2rem] glass-card border-[var(--border-color)]">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('blog.searchPlaceholder', 'Search articles, topics...')}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs focus:outline-none focus:border-[var(--accent-red)] border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                  selectedCategory === cat 
                    ? 'bg-[var(--accent-red-strong)] text-white border-[var(--accent-red-strong)] shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-primary)] border-[var(--border-color)]'
                }`}
              >
                {t(`blog.categories.${cat}`, cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => {
            const displayTitle = language === 'sw' && post.title_sw ? post.title_sw : post.title;
            const displayExcerpt = language === 'sw' && post.excerpt_sw ? post.excerpt_sw : post.excerpt;

            return (
              <article
                key={post.id}
                onClick={() => openBlogArticleModal(post)}
                className="rounded-[2rem] p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-1 shadow-sm group glass-card border-[var(--border-color)] hover:border-[var(--accent-red-strong)]/30"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded border text-[var(--accent-red-strong)] bg-[var(--accent-red-subtle)] border-[var(--accent-red-strong)]/20">
                      {t(`blog.categories.${post.category}`, post.category)}
                    </span>
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readingTime}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-[var(--accent-red-strong)] transition-colors leading-snug text-[var(--text-primary)]">
                      {displayTitle}
                    </h3>
                    <p className="text-xs mt-2 line-clamp-3 leading-relaxed text-[var(--text-secondary)]">
                      {displayExcerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded border bg-[var(--bg-primary)] text-[var(--text-muted)] border-[var(--border-color)]">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t flex flex-col gap-3 border-[var(--border-color)] text-[var(--text-secondary)]">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[var(--accent-red-strong)]" />
                      <span className="font-semibold">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1 font-bold text-[var(--accent-red-strong)] group-hover:translate-x-1 transition-transform">
                      <span>{t('blog.readArticle')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Social Share Buttons */}
                  <div className="pt-2 border-t border-dashed border-[var(--border-color)] flex items-center justify-between">
                    <ShareButtons
                      title={displayTitle}
                      description={displayExcerpt}
                      variant="compact"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>

  );
};
