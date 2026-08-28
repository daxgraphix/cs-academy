import React, { useState } from 'react';
import { resourcesData } from '../data/resources';
import { ResourceItem } from '../types';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/SEO';
import {
  FileText, 
  Download, 
  Eye, 
  Clock, 
  Search, 
  ShieldCheck, 
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface ResourcesPageProps {
  openResourceModal: (resource: ResourceItem) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  openResourceModal
}) => {
  const { theme } = useApp();
  const [selectedCat, setSelectedCat] = useState<string>('ALL');
  const [search, setSearch] = useState<string>('');

  const categories = ['ALL', 'AI Productivity', 'Cyber Safety', 'Cybersecurity', 'Education', 'AI Governance', 'Privacy', 'Business'];

  const filtered = resourcesData.filter(r => {
    const matchCat = selectedCat === 'ALL' || r.category.toLowerCase().includes(selectedCat.toLowerCase());
    const matchSearch = search === '' || 
      r.title.toLowerCase().includes(search.toLowerCase()) || 
      r.description.toLowerCase().includes(search.toLowerCase()) ||
      r.targetAudience.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-28 pb-20 min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SEO
        title="Free Resources"
        description="Download free AI prompt templates, cybersecurity checklists, and digital skills guides designed for East Africa."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-red-subtle)] border border-[var(--accent-red-strong)]/20 text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-wider">
            <span>Open Educational Toolkits</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
            FREE <span className="text-[var(--accent-red-safe)]">RESOURCES</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            Download practical prompt templates, cybersecurity checklists, and classroom guides designed to protect and accelerate African digital workers.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 rounded-[2rem] glass-card border-[var(--border-color)]">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={'Search guides, templates, topics...'}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[var(--accent-red)]/20 focus:border-[var(--accent-red)] border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto">
            {categories.slice(0, 7).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border ${
                  selectedCat === cat 
                    ? 'bg-[var(--accent-red-strong)] text-white border-[var(--accent-red-strong)] shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-primary)] border-[var(--border-color)]'
                }`}
              >
                {cat === 'ALL' ? ('ALL') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((resource) => (
            <div
              key={resource.id}
              className="rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-sm group glass-card border-[var(--border-color)] hover:border-[var(--accent-red-strong)]/30"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border text-[var(--accent-red-strong)] bg-[var(--accent-red-subtle)] border-[var(--accent-red-strong)]/20">
                    {resource.format}
                  </span>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    {resource.readingTime}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-[var(--accent-red-strong)] transition-colors leading-snug text-[var(--text-primary)]">
                    {resource.title}
                  </h3>
                  <p className="text-xs mt-2 leading-relaxed text-[var(--text-secondary)]">
                    {resource.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl border space-y-1.5 bg-[var(--bg-primary)] border-[var(--border-color)]">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Key Highlights:
                  </div>
                  {resource.keyHighlights.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-red-strong)] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t flex items-center gap-3 border-[var(--border-color)]">
                <button
                  onClick={() => openResourceModal(resource)}
                  className="flex-1 py-3 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all bg-[var(--bg-primary)] hover:bg-[var(--accent-red-strong)] text-[var(--text-secondary)] hover:text-white border border-[var(--border-color)] shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview Guide</span>
                </button>
                <button
                  onClick={() => openResourceModal(resource)}
                  className="py-3 px-4 rounded-2xl text-xs font-bold text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] flex items-center justify-center transition-colors shadow-sm"
                  title="Download File"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
