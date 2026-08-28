import React, { useState, useMemo } from 'react';
import { resourcesData } from '../data/resources';
import { ResourceItem } from '../types';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import {
  Download,
  Eye,
  CheckCircle2,
  Clock,
  Search
} from 'lucide-react';
import { downloadResource } from '../utils/download';

interface ResourcesSectionProps {
  openResourceModal: (resource: ResourceItem) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  openResourceModal
}) => {
  const { theme, dictionary } = useApp();
  const t = dictionary ?? {} as typeof dictionary;
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const gridRef = useReveal<HTMLDivElement>();

  // Derive categories from data so every toolkit is discoverable
  const categories = useMemo(() => {
    const set = new Set(resourcesData.map((r) => r.category));
    return ['ALL', ...Array.from(set)];
  }, []);

  const filteredResources = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return resourcesData.filter((r) => {
      const matchesCat = activeCategory === 'ALL' || r.category === activeCategory;
      const matchesSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.keyHighlights.some((h) => h.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section 
      id="resources-section" 
      className="py-24 border-y transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)] border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-red-subtle)] border border-[var(--accent-red-safe)]/20 text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-wider">
              <span>{t.resources?.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              {t.resources?.title}
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-secondary)]">
              {t.resources?.subtitle}
            </p>
          </div>

          {/* Search */}
          <div className="relative md:self-end">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={'Search toolkits...'}
              aria-label={'Search toolkits'}
              className="w-56 pl-9 pr-3 py-2 rounded-xl text-xs border focus:outline-none focus:border-[var(--accent-red)] bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-1.5 p-1 border rounded-2xl overflow-x-auto max-w-full mb-8 bg-[var(--bg-secondary)] border-[var(--border-color)]">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            const count = cat === 'ALL' ? resourcesData.length : resourcesData.filter((r) => r.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  isSelected 
                    ? 'bg-[var(--accent-red-strong)] text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat === 'ALL' ? ('ALL') : cat}
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${isSelected ? 'bg-white/20' : 'bg-[var(--bg-tertiary)] text-[var(--text-muted)]'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Resources Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
          {filteredResources.map((resource) => {
            const title = resource.title;
            const description = resource.description;
            const keyHighlights = resource.keyHighlights;
            const useCases = resource.useCases;
            return (
            <div
              key={resource.id}
              id={`resource-card-${resource.id}`}
              className="border rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-sm group glass-card border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/50"
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border text-[var(--accent-red-strong)] bg-[var(--accent-red-subtle)] border-[var(--accent-red-safe)]/20">
                    {resource.format}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-[var(--text-muted)]">
                    <Clock className="w-3 h-3" />
                    {resource.readingTime}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                    resource.level === 'Beginner'
                      ? 'text-[var(--success-strong)] bg-[var(--success-subtle)] border-[var(--success-safe)]/20'
                      : resource.level === 'Intermediate'
                      ? 'text-amber-500 bg-amber-500/10 border-amber-500/20'
                      : 'text-[var(--accent-red-strong)] bg-[var(--accent-red-subtle)] border-[var(--accent-red-safe)]/20'
                  }`}>
                    {resource.level}
                  </span>
                  <span className="text-[10px] font-medium text-[var(--text-muted)]">
                    {useCases.length} use cases
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-base font-bold tracking-tight group-hover:text-[var(--accent-red-strong)] transition-colors leading-snug text-[var(--text-primary)]">
                    {title}
                  </h3>
                  <p className="text-xs mt-2 line-clamp-2 leading-relaxed text-[var(--text-secondary)]">
                    {description}
                  </p>
                </div>

                {/* Key Takeaways Preview */}
                <div className="space-y-1 pt-2">
                  {keyHighlights.slice(0, 2).map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-1.5 text-[11px] text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-3 h-3 text-[var(--accent-red-strong)] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{takeaway}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t flex items-center gap-2 border-[var(--border-color)]">
                <button
                  onClick={() => openResourceModal(resource)}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all bg-[var(--bg-secondary)] hover:bg-[var(--accent-red-strong)] text-[var(--text-secondary)] hover:text-white border border-[var(--border-color)] shadow-sm"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>
                <button
                  onClick={() => downloadResource(resource)}
                  title={'Download toolkit'}
                  aria-label={`Download ${title}`}
                  className="py-2 px-3 rounded-xl text-xs font-bold text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] flex items-center justify-center transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12 rounded-[2rem] border text-xs bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-muted)]">
            No toolkits match your search.
          </div>
        )}

      </div>
    </section>
  );
};
