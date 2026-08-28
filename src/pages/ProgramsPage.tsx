import React, { useState, useMemo } from 'react';
import { SEO } from '../components/SEO';
import { PageRoute, ProgramPillar, TrainingProgram } from '../types';
import { programsData } from '../data/programs';
import { featuredTrainingData } from '../data/training';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  Laptop, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Search,
  Filter,
  Users,
  BookOpen,
  Layers,
  Award,
  Zap
} from 'lucide-react';

interface ProgramsPageProps {
  setCurrentRoute: (route: PageRoute) => void;
  openProgramModal: (program: ProgramPillar) => void;
  openBookingModal: (prefill?: { program?: string; format?: string }) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  setCurrentRoute,
  openProgramModal,
  openBookingModal
}) => {
  const { theme } = useApp();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    { id: 'ALL', label: 'All Programs', icon: Layers },
    { id: 'vibe-coding', label: 'Vibe Coding', icon: Zap },
    { id: 'ai', label: 'AI & Machine Learning', icon: Laptop },
    { id: 'cybersecurity', label: 'Cybersecurity & Defense', icon: ShieldCheck },
    { id: 'digital-skills', label: 'Digital Skills & Web', icon: Laptop },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Laptop className="w-6 h-6 text-[var(--accent-red-strong)]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[var(--accent-red-strong)]" />;
      default:
        return <Laptop className="w-6 h-6 text-[var(--accent-red-strong)]" />;
    }
  };

  const navigateToPillar = (slug: string) => {
    setCurrentRoute(`programs/${slug}` as PageRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter Pillars
  const filteredPillars = useMemo(() => {
    return programsData.filter(pillar => {
      const matchesCategory = selectedCategory === 'ALL' || pillar.slug === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const titleMatch = pillar.title.toLowerCase().includes(query);
      const taglineMatch = pillar.tagline.toLowerCase().includes(query);
      const descMatch = pillar.extendedDescription.toLowerCase().includes(query) || pillar.description.toLowerCase().includes(query);
      const moduleMatch = pillar.modules.some(m => 
        m.title.toLowerCase().includes(query) || 
        m.description.toLowerCase().includes(query) ||
        m.practicalSkill.toLowerCase().includes(query)
      );
      const topicMatch = pillar.topics.some(t => t.toLowerCase().includes(query));
      const outcomeMatch = pillar.outcomes.some(o => o.toLowerCase().includes(query));
      const audienceMatch = pillar.audience.some(a => a.toLowerCase().includes(query));

      return matchesCategory && (titleMatch || taglineMatch || descMatch || moduleMatch || topicMatch || outcomeMatch || audienceMatch);
    });
  }, [selectedCategory, searchQuery]);

  // Filter Individual Courses / Modules
  const filteredCourses = useMemo(() => {
    return featuredTrainingData.filter(course => {
      const matchesCategory = selectedCategory === 'ALL' || course.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const titleMatch = course.title.toLowerCase().includes(query);
      const descMatch = course.description.toLowerCase().includes(query);
      const highlightMatch = course.highlights.some(h => h.toLowerCase().includes(query));
      const curriculumMatch = course.curriculum.some(c => c.toLowerCase().includes(query));
      const audienceMatch = course.audience.toLowerCase().includes(query) || course.idealFor.toLowerCase().includes(query);

      return matchesCategory && (titleMatch || descMatch || highlightMatch || curriculumMatch || audienceMatch);
    });
  }, [selectedCategory, searchQuery]);

  const totalResultsCount = filteredPillars.length + filteredCourses.length;

  return (
    <div className="pt-28 pb-20 min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SEO
        title="Programs & Courses"
        description="Browse all CS Academy programs. Specialized academies for AI, Cybersecurity, and Digital Skills training in East Africa."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[var(--accent-red-strong)]/20 bg-[var(--accent-red-subtle)] text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-wider">
            <span>Comprehensive Curriculum Directory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
            CS ACADEMY <span className="text-[var(--accent-red-strong)]">PROGRAMS</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            Explore our comprehensive academies designed for practical skill mastery, ethical technology application, and career empowerment across Africa.
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--border-color)] shadow-xl space-y-6 glass-card">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                id="programs-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={'Search courses by title or skill category (e.g. Prompt Engineering, React, Cybersecurity, Phishing)...'}
                className="w-full pl-12 pr-10 py-3.5 text-sm rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-red-strong)] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--text-muted)] hover:text-[var(--accent-red-strong)] p-1"
                >
                  -
                </button>
              )}
            </div>

            {/* Clear All Filter Button */}
            {(searchQuery || selectedCategory !== 'ALL') && (
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('ALL'); }}
                className="px-4 py-3 text-xs font-bold text-[var(--accent-red-strong)] hover:bg-[var(--accent-red-subtle)] rounded-2xl border border-[var(--accent-red-strong)]/20 transition-colors shrink-0"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[var(--border-color)]">
            <span className="text-xs font-bold uppercase tracking-wider mr-2 text-[var(--text-muted)]">
              <Filter className="w-3.5 h-3.5 inline mr-1" />
              Category:
            </span>
            {categories.map(cat => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`program-filter-btn-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-[var(--accent-red-strong)] text-white shadow-lg shadow-red-900/40 scale-[1.02]'
                      : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--accent-red-strong)]/30'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs pt-1 text-[var(--text-muted)]">
            <div>
              {searchQuery ? (
                <span>
                  {`Showing results for "${searchQuery}": ${filteredPillars.length} academies & ${filteredCourses.length} modular courses`}
                </span>
              ) : (
                <span>
                  {`Displaying 3 comprehensive academies & specialized training courses`}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {totalResultsCount === 0 && (
          <div className="p-12 text-center rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--border-color)] space-y-4 bg-[var(--bg-tertiary)] text-[var(--text-secondary)]">
            <BookOpen className="w-12 h-12 text-[var(--accent-red-strong)] mx-auto opacity-80" />
            <h3 className="text-xl font-bold text-[var(--text-primary)]">
              No matching courses found
            </h3>
            <p className="text-sm max-w-md mx-auto">
              Try searching with different terms like "AI", "Cybersecurity", "Prompt", "Web", or "Digital".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('ALL'); }}
              className="px-6 py-2.5 rounded-xl bg-[var(--accent-red-strong)] text-white text-xs font-bold hover:bg-[var(--accent-red)] transition-colors shadow"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* 1. MAJOR ACADEMY DEEP DIVE CARDS */}
        {filteredPillars.length > 0 && (
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-red-strong)]" />
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[var(--text-primary)]">
                Core Academy Tracks
              </h2>
            </div>

            {filteredPillars.map((pillar) => (
              <div
                key={pillar.id}
                id={`programs-page-${pillar.id}`}
                className="border rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 shadow-2xl space-y-8 transition-all glass-card border-[var(--border-color)]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[var(--border-color)]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl border border-[var(--border-color)] flex items-center justify-center bg-[var(--bg-primary)]">
                      {getIcon(pillar.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[var(--accent-red-strong)] uppercase">
                        {pillar.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                        {pillar.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => navigateToPillar(pillar.slug)}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-primary)] hover:bg-[var(--bg-elevated)] border border-[var(--border-color)]"
                    >
                      View Academy Page
                    </button>
                    <button
                      onClick={() => openBookingModal({ program: pillar.title })}
                      className="px-6 py-2.5 rounded-xl text-xs font-extrabold text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] uppercase tracking-wider shadow-lg transition-all"
                    >
                      Book Training
                    </button>
                  </div>
                </div>

                {/* Descriptions & Topics */}
                <div className="grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{pillar.tagline}</h3>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      {pillar.extendedDescription}
                    </p>

                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                        Target Audiences:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {pillar.audience.map((aud, aIdx) => (
                          <span 
                            key={aIdx} 
                            className="text-xs px-2.5 py-1 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)]"
                          >
                            {aud}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      Core Curriculum Modules & Hands-on Skills:
                    </h4>
                    <div className="space-y-3">
                      {pillar.modules.map((mod, mIdx) => (
                        <div 
                          key={mIdx} 
                          className="p-3.5 rounded-xl border border-[var(--border-color)] space-y-1 bg-[var(--bg-primary)]"
                        >
                          <div className="text-xs font-bold text-[var(--text-primary)]">
                            {mod.title}
                          </div>
                          <div className="text-[11px] text-[var(--text-muted)]">{mod.description}</div>
                          <div className="text-[10px] text-[var(--accent-red-strong)] font-mono font-bold mt-1">
                            ✓ {mod.practicalSkill}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Outcomes & Formats */}
                <div className="grid sm:grid-cols-2 gap-4 p-5 rounded-2xl border border-[var(--border-color)] text-xs bg-[var(--bg-primary)]">
                  <div>
                    <div className="font-bold uppercase tracking-wider mb-2 text-[var(--text-secondary)]">
                      Verified Outcomes:
                    </div>
                    <ul className="space-y-1.5 text-[var(--text-muted)]">
                      {pillar.outcomes.map((out, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-red-strong)] shrink-0 mt-0.5" />
                          <span className="text-[var(--text-secondary)]">{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold uppercase tracking-wider mb-2 text-[var(--text-secondary)]">
                      Delivery & Duration:
                    </div>
                    <div className="space-y-1 text-[var(--text-secondary)]">
                      <p>Formats: {pillar.deliveryFormats.join(', ')}</p>
                      <p>Duration: {pillar.durationOptions.join(', ')}</p>
                      <p className="text-[var(--accent-red-strong)] pt-1 font-semibold">
                        ✓ Instructed in English & Kiswahili
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* 2. SPECIFIC FEATURED COURSES & MASTERCLASSES */}
        {filteredCourses.length > 0 && (
          <div className="space-y-8 pt-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-red-strong)]" />
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[var(--text-primary)]">
                Specialized Cohort Bootcamps & Masterclasses
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  id={`course-card-${course.id}`}
                  className="glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 flex flex-col justify-between space-y-5 shadow-lg transition-all hover:scale-[1.01] border border-[var(--border-color)] hover:border-[var(--accent-red-strong)]/30"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--accent-red-strong)] px-2.5 py-0.5 rounded-full bg-[var(--accent-red-subtle)] border border-[var(--accent-red-strong)]/20">
                        {course.category.toUpperCase()} | {course.level}
                      </span>
                      <span className="text-[11px] font-mono flex items-center gap-1 text-[var(--text-muted)]">
                        <Clock className="w-3 h-3 text-[var(--accent-red-strong)]" />
                        {course.duration}
                      </span>
                    </div>

                    <h3 className="text-lg font-black tracking-tight text-[var(--text-primary)]">
                      {course.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {course.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                        Key Highlights:
                      </div>
                      <ul className="space-y-1 text-xs">
                        {course.highlights.slice(0, 3).map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-1.5 text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-red-strong)] shrink-0 mt-0.5" />
                            <span className="text-[var(--text-secondary)]">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">
                      {course.format}
                    </span>
                    <button
                      onClick={() => openBookingModal({ program: course.title })}
                      className="px-4 py-2 rounded-xl bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow flex items-center gap-1.5"
                    >
                      <span>Enroll</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
