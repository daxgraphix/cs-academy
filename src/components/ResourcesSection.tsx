import React, { useState } from 'react';
import { resourcesData } from '../data/resources';
import { ResourceItem } from '../types';
import { useApp } from '../context/AppContext';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  BookOpen,
  Sparkles
} from 'lucide-react';

interface ResourcesSectionProps {
  openResourceModal: (resource: ResourceItem) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  openResourceModal
}) => {
  const { language, theme, t } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'AI Productivity', 'Cybersecurity', 'Cyber Safety', 'Education', 'AI Governance', 'Privacy'];

  const filteredResources = resourcesData.filter((r) => {
    if (activeCategory === 'ALL') return true;
    return r.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <section 
      id="resources-section" 
      className={`py-24 border-y transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0B0B0B] text-white border-neutral-800' : 'bg-white text-neutral-900 border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-[#DC2626] text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.resources.badge}</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-neutral-950'
            }`}>
              {t.resources.title}
            </h2>
            <p className={`text-base leading-relaxed ${
              theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
            }`}>
              {t.resources.subtitle}
            </p>
          </div>

          {/* Category Filter */}
          <div className={`flex items-center gap-1.5 p-1 border rounded-2xl self-start md:self-auto overflow-x-auto max-w-full ${
            theme === 'dark' ? 'bg-[#171717] border-neutral-800' : 'bg-neutral-100 border-neutral-200'
          }`}>
            {categories.slice(0, 5).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#B91C1C] text-white shadow-sm' 
                    : theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat === 'ALL' ? (language === 'sw' ? 'ZOTE' : 'ALL') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              id={`resource-card-${resource.id}`}
              className={`border rounded-3xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-sm group ${
                theme === 'dark'
                  ? 'bg-[#121212] border-neutral-800 hover:border-neutral-700'
                  : 'bg-neutral-50 border-neutral-200 hover:border-red-200 hover:shadow-lg'
              }`}
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                    theme === 'dark' ? 'text-[#DC2626] bg-red-950/60 border-red-900/40' : 'text-[#DC2626] bg-red-50 border-red-200'
                  }`}>
                    {resource.format}
                  </span>
                  <span className={`text-[10px] font-mono ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {resource.readingTime}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className={`text-base font-bold tracking-tight group-hover:text-[#DC2626] transition-colors leading-snug ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {resource.title}
                  </h3>
                  <p className={`text-xs mt-2 line-clamp-2 leading-relaxed ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    {resource.description}
                  </p>
                </div>

                {/* Key Takeaways Preview */}
                <div className="space-y-1 pt-2">
                  {resource.keyHighlights.slice(0, 2).map((takeaway, tIdx) => (
                    <div key={tIdx} className={`flex items-start gap-1.5 text-[11px] ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                      <CheckCircle2 className="w-3 h-3 text-[#DC2626] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{takeaway}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className={`pt-4 mt-4 border-t flex items-center gap-2 ${
                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
              }`}>
                <button
                  onClick={() => openResourceModal(resource)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                    theme === 'dark'
                      ? 'bg-[#171717] hover:bg-[#B91C1C] text-neutral-200 hover:text-white border border-neutral-800'
                      : 'bg-white hover:bg-[#B91C1C] text-neutral-800 hover:text-white border border-neutral-200 shadow-sm'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{language === 'sw' ? 'Soma' : 'Preview'}</span>
                </button>
                <button
                  onClick={() => openResourceModal(resource)}
                  className="py-2 px-3 rounded-xl text-xs font-bold text-white bg-[#B91C1C] hover:bg-[#DC2626] flex items-center justify-center transition-colors shadow-sm"
                  title="Download Resource"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
