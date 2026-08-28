import React, { useState } from 'react';
import { featuredTrainingData } from '../data/training';
import { TrainingProgram } from '../types';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import {
  Users,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Shield,
  Laptop
} from 'lucide-react';

interface FeaturedTrainingProps {
  openBookingModal: (prefill?: { program?: string; format?: string }) => void;
  openTrainingDetailModal: (training: TrainingProgram) => void;
}

export const FeaturedTraining: React.FC<FeaturedTrainingProps> = ({
  openBookingModal,
  openTrainingDetailModal
}) => {
  const { theme, t } = useApp();
  const [filter, setFilter] = useState<'ALL' | 'AI' | 'CYBER' | 'DIGITAL'>('ALL');
  const gridRef = useReveal<HTMLDivElement>();

  const filteredTrainings = featuredTrainingData.filter((item) => {
    if (filter === 'AI') return item.category === 'ai';
    if (filter === 'CYBER') return item.category === 'cybersecurity';
    if (filter === 'DIGITAL') return item.category === 'digital-skills';
    return true;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai':
        return <Laptop className="w-3.5 h-3.5 text-[#DC2626]" />;
      case 'cybersecurity':
        return <Shield className="w-3.5 h-3.5 text-[#DC2626]" />;
      default:
        return <Laptop className="w-3.5 h-3.5 text-[#DC2626]" />;
    }
  };

  return (
    <section 
      id="featured-training-section" 
      className="py-24 transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[var(--accent-red-safe)]/20 bg-[var(--accent-red-subtle)] text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-wider animate-reveal shadow-sm">
              <span>Featured Training Tracks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] text-balance animate-reveal-delay-1">
              {(
                <>START WITH A PROGRAMME <span className="text-[var(--accent-red-safe)]">BUILT FOR YOU</span></>
              )}
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-secondary)] animate-reveal-delay-2 max-w-xl">
              Interactive, instructor-led training tracks tailored for distinct roles, from students to corporate executives.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 border border-[var(--border-color)] rounded-2xl bg-[var(--bg-secondary)] self-start md:self-auto overflow-x-auto max-w-full shadow-sm animate-reveal-delay-3 scrollbar-hide">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === 'ALL' 
                  ? 'bg-[var(--accent-red-strong)] text-white shadow-lg shadow-[var(--accent-red-subtle)] scale-105'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setFilter('AI')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === 'AI' 
                  ? 'bg-[var(--accent-red-strong)] text-white shadow-lg shadow-[var(--accent-red-subtle)] scale-105'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
              }`}
            >
              AI Tracks
            </button>
            <button
              onClick={() => setFilter('CYBER')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === 'CYBER' 
                  ? 'bg-[var(--accent-red-strong)] text-white shadow-lg shadow-[var(--accent-red-subtle)] scale-105'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
              }`}
            >
              Cybersecurity
            </button>
            <button
              onClick={() => setFilter('DIGITAL')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === 'DIGITAL' 
                  ? 'bg-[var(--accent-red-strong)] text-white shadow-lg shadow-[var(--accent-red-subtle)] scale-105'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
              }`}
            >
              Digital Skills
            </button>
          </div>
        </div>

        {/* 6 Training Cards Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
          {filteredTrainings.map((course) => {
            return (
            <div
              key={course.id}
              id={`featured-card-${course.id}`}
              className="border rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-lg group relative overflow-hidden glass-card border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/40 hover-icon-bounce"
            >
              {course.isPopular && (
                <div className="absolute top-0 right-0 bg-[var(--accent-red-strong)] text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-lg z-10">
                  Most Requested
                </div>
              )}

              <div className="space-y-5">
                
                {/* Meta Header */}
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full border bg-[var(--bg-primary)] border-[var(--border-subtle)] text-[var(--accent-red-strong)] icon-glow">
                    {getCategoryIcon(course.category)}
                    <span className="uppercase tracking-wider">{course.category}</span>
                  </span>
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full text-[var(--text-muted)] bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                    {course.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold tracking-tight group-hover:text-[var(--accent-red-safe)] transition-colors text-[var(--text-primary)] leading-tight">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed line-clamp-3 text-[var(--text-secondary)] opacity-80">
                  {course.description}
                </p>

                {/* Meta details list */}
                <div className="space-y-3 py-4 border-y text-xs border-[var(--border-subtle)]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-red-subtle)] flex items-center justify-center shrink-0">
                      <Users className="w-4 h-4 text-[var(--accent-red-strong)]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">Audience</span>
                      <span className="font-semibold truncate text-[var(--text-primary)]">{course.audience}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-red-subtle)] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[var(--accent-red-strong)]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider">Format</span>
                      <span className="font-semibold text-[var(--text-primary)]">{course.format}</span>
                    </div>
                  </div>
                </div>

                {/* Curriculum Highlights preview */}
                <div className="space-y-2.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] opacity-60">
                    Core Takeaways:
                  </span>
                  {course.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-strong)] shrink-0 mt-0.5 icon-glow" />
                      <span className="line-clamp-1 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="mt-8 pt-5 border-t flex gap-3 border-[var(--border-subtle)]">
                <button
                  id={`btn-learn-more-${course.id}`}
                  onClick={() => openTrainingDetailModal(course)}
                  className="flex-1 py-3 px-4 text-xs font-bold rounded-2xl border transition-all duration-300 text-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-primary)] hover:bg-[var(--bg-tertiary)] border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/30"
                >
                  Learn More
                </button>
                <button
                  id={`btn-book-${course.id}`}
                  onClick={() => openBookingModal({ program: course.title, format: course.format })}
                  className="flex-2 py-3 px-4 text-xs font-extrabold text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[var(--accent-red-subtle)]"
                >
                  <span>{t.common.bookTraining}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
