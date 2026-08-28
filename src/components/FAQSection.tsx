import React, { useState, useMemo, useRef, KeyboardEvent } from 'react';
import { faqData } from '../data/faq';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import {
  ChevronDown,
  HelpCircle,
  Search,
  BookOpen,
  CreditCard,
  Headphones,
  Award,
  MessageCircle,
  Filter,
  Users
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { Highlight } from '../utils/highlight';

export const FAQSection: React.FC = () => {
  const { theme, t, language } = useApp();
  const [openIds, setOpenIds] = useState<string[]>(['how-to-access-courses', 'mobile-money-payments', 'learner-support-helpdesk']);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const listRef = useRef<HTMLDivElement>(null);
  const contentRef = useReveal<HTMLDivElement>();

  const categories = [
    { id: 'ALL', label: t('faq.categories.all', { defaultValue: 'All FAQs' }), icon: Filter },
    { id: 'Course Access', label: t('faq.categories.courseAccess', { defaultValue: 'Course Access' }), icon: BookOpen },
    { id: 'Payment & Mobile Money', label: t('faq.categories.payment', { defaultValue: 'Payment & Mobile Money' }), icon: CreditCard },
    { id: 'Technical Support', label: t('faq.categories.support', { defaultValue: 'Technical Support' }), icon: Headphones },
    { id: 'Languages', label: t('faq.categories.languages', { defaultValue: 'Languages' }), icon: MessageCircle },
    { id: 'Organizations', label: t('faq.categories.organizations', { defaultValue: 'Organizations' }), icon: Users },
    { id: 'General', label: t('faq.categories.general', { defaultValue: 'Certificates & General' }), icon: Award },
  ];

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => setOpenIds(filteredFaq.map(item => item.id));
  const collapseAll = () => setOpenIds([]);

  const filteredFaq = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return faqData.filter(item => {
      const qText = language === 'sw' && item.question_sw ? item.question_sw : item.question;
      const aText = language === 'sw' && item.answer_sw ? item.answer_sw : item.answer;

      const question = qText.toLowerCase();
      const answer = aText.toLowerCase();
      const category = item.category.toLowerCase();
      const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;
      const matchesSearch = !q || question.includes(q) || answer.includes(q) || category.includes(q);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery, language]);

  // Keyboard navigation across accordion buttons (Up/Down to move, Home/End to jump)
  const handleListKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const buttons = Array.from(
      listRef.current?.querySelectorAll('button[data-faq-trigger]') ?? []
    ) as HTMLButtonElement[];
    if (buttons.length === 0) return;
    const currentIndex = buttons.findIndex(b => b === document.activeElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = buttons[(currentIndex + 1) % buttons.length];
      next?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = buttons[(currentIndex - 1 + buttons.length) % buttons.length];
      prev?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      buttons[0].focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      buttons[buttons.length - 1].focus();
    } else if (e.key === 'Escape' && openIds.length) {
      e.preventDefault();
      collapseAll();
    }
  };

  return (
    <section 
      id="faq-section" 
      className="relative py-24 overflow-hidden transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]"
    >
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_var(--accent-red-subtle),transparent_45%)]" />
      <div ref={contentRef} className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-muted)] text-[10px] font-mono font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-red-safe)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-red-safe)]"></span>
            </span>
            <span>{t('faq.badge', { defaultValue: 'FREQUENTLY ASKED QUESTIONS' })}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {t('faq.title', { defaultValue: 'HAVE QUESTIONS? WE HAVE ANSWERS' })}
          </h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-[var(--text-secondary)]">
            {t('faq.subtitle', { defaultValue: 'Direct answers regarding course access, mobile money payments (M-Pesa, Tigo Pesa, Airtel Money), technical support, and QR certification.' })}
          </p>

          {/* FAQ Search Bar */}
          <div className="max-w-xl mx-auto pt-4 relative" role="search">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('faq.search', { defaultValue: 'Search questions (e.g. M-Pesa, smartphone, WhatsApp, support)...' })}
              aria-label={t('faq.searchLabel', { defaultValue: 'Search questions' })}
              className="w-full pl-12 pr-12 py-4 border border-[var(--border-color)] rounded-[1.5rem] text-sm focus:outline-none focus:border-[var(--accent-red)] focus:ring-4 focus:ring-[var(--accent-red-subtle)] transition-all bg-[var(--bg-elevated)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                aria-label={t('faq.clear', { defaultValue: 'Clear' })}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[var(--text-muted)] hover:text-[var(--accent-red-strong)] transition-colors"
              >
                {t('faq.clear', { defaultValue: 'Clear' })}
              </button>
            )}
          </div>

          {/* Quick Category Filters with result counts */}
          <div className="flex flex-nowrap items-center justify-start gap-2 pt-4 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible no-scrollbar">
            {categories.map(cat => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              const count = filteredFaq.filter(item =>
                cat.id === 'ALL' ? true : item.category === cat.id
              ).length;
              return (
                <button
                  key={cat.id}
                  id={`faq-category-btn-${cat.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex shrink-0 items-center gap-2 px-4 py-2 rounded-xl text-[11px] font-bold transition-all duration-200 hover:-translate-y-0.5 border ${
                    isSelected
                      ? 'bg-[var(--accent-red-strong)] text-white border-[var(--accent-red-strong)] shadow-lg shadow-red-500/20'
                      : 'bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--text-muted)]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                  <span className={`ml-1 text-[9px] font-mono px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20' : 'bg-[var(--bg-elevated)] text-[var(--text-muted)]'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Expand/Collapse and Results Counter */}
          <div className="flex items-center justify-between gap-3 text-[11px] pt-4 px-2 text-[var(--text-muted)]">
            <span className="font-medium">
              {t('faq.showingResults', { count: filteredFaq.length, defaultValue: `Showing ${filteredFaq.length} FAQs` })}
            </span>
            <div className="flex items-center gap-4">
              <button 
                onClick={expandAll}
                className="hover:text-[var(--accent-red-strong)] transition-colors font-bold uppercase tracking-wider"
              >
                {t('faq.expandAll', { defaultValue: 'Expand All' })}
              </button>
              <span className="opacity-20">|</span>
              <button 
                onClick={collapseAll}
                className="hover:text-[var(--accent-red-strong)] transition-colors font-bold uppercase tracking-wider"
              >
                {t('faq.collapseAll', { defaultValue: 'Collapse All' })}
              </button>
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" ref={listRef} onKeyDown={handleListKeyDown}>
          {filteredFaq.map((item) => {
            const isOpen = openIds.includes(item.id);
            const question = language === 'sw' && item.question_sw ? item.question_sw : item.question;
            const answer = language === 'sw' && item.answer_sw ? item.answer_sw : item.answer;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`border rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-sm group ${
                  isOpen
                    ? 'bg-[var(--bg-secondary)] border-[var(--accent-red-safe)]/50 glass-card'
                    : 'bg-[var(--bg-card)] border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/30'
                }`}
              >
                <button
                  data-faq-trigger
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-6 sm:p-8 text-left flex items-start sm:items-center justify-between gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-red)]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                >
                  <div className="flex items-start sm:items-center gap-5">
                    <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[var(--accent-red-strong)] border-[var(--accent-red-strong)] text-white shadow-lg shadow-[var(--accent-red-strong)]/20'
                        : 'bg-[var(--bg-tertiary)] border-[var(--border-subtle)] text-[var(--accent-red-safe)]'
                    }`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-base sm:text-lg font-bold tracking-tight block text-[var(--text-primary)]">
                        <Highlight text={question} query={searchQuery} />
                      </span>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="inline-block text-[9px] font-mono font-black uppercase tracking-widest text-[var(--accent-red-strong)] px-2.5 py-1 rounded-lg bg-[var(--accent-red-subtle)] border border-[var(--accent-red-safe)]/10">
                          {t(`faq.categories.${item.category.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}`, item.category)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={`w-10 h-10 rounded-full border border-[var(--border-subtle)] flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-[var(--accent-red-strong)] border-[var(--accent-red-strong)] text-white' : 'text-[var(--text-muted)] group-hover:text-[var(--text-primary)]'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div 
                    id={`faq-panel-${item.id}`}
                    role="region"
                    className="px-6 sm:px-8 pb-8 pt-2 text-sm sm:text-base leading-relaxed border-t border-[var(--border-color)] animate-[fadeIn_0.3s_ease-out] text-[var(--text-secondary)]"
                  >
                    <div className="mt-2 pl-0 sm:pl-15 max-w-3xl border-l-2 border-[var(--accent-red-safe)]/20 pl-6">
                      <Highlight text={answer} query={searchQuery} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaq.length === 0 && (
            <div className="text-center py-20 rounded-[2rem] border border-[var(--border-color)] bg-[var(--bg-elevated)] glass-card space-y-4">
              <HelpCircle className="w-12 h-12 mx-auto text-[var(--text-muted)] opacity-20" />
              <div className="space-y-2">
                <p className="text-base font-bold text-[var(--text-primary)]">
                  {t('faq.noResults', { defaultValue: 'No matching questions found.' })}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  {t('faq.noResultsSub', { defaultValue: 'Try searching for M-Pesa, Smartphone, or Certificates.' })}
                </p>
              </div>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('ALL'); }}
                className="btn-primary"
              >
                {t('faq.resetSearch', { defaultValue: 'Clear All Filters' })}
              </button>
            </div>
          )}
        </div>

        {/* Live Support Banner */}
        <div className="mt-16 p-8 rounded-[2.5rem] border border-[var(--border-color)] flex flex-col lg:flex-row items-center justify-between gap-8 glass-card">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-16 h-16 rounded-[1.5rem] bg-[var(--success-subtle)] border border-[var(--success-safe)]/20 text-[var(--success-strong)] flex items-center justify-center shrink-0">
              <MessageCircle className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <div className="text-xl font-bold text-[var(--text-primary)]">
                {t('faq.support.title', { defaultValue: 'Still have questions?' })}
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                {t('faq.support.subtitle', { defaultValue: 'Chat with our learner support team on WhatsApp for instant guidance.' })}
              </div>
            </div>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(t('faq.support.waMessage', { defaultValue: 'Hello CS Academy! I have a question about joining the training:' }))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[var(--success-strong)] hover:bg-[var(--success-safe)] shadow-[var(--success-safe)]/20 w-full lg:w-auto"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('faq.support.cta', { defaultValue: 'Chat with Support' })}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
