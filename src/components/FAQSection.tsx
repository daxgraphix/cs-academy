import React, { useState, useMemo } from 'react';
import { faqData } from '../data/faq';
import { useApp } from '../context/AppContext';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  Sparkles, 
  BookOpen, 
  CreditCard, 
  Headphones, 
  Award, 
  MessageCircle, 
  CheckCircle2,
  Filter,
  Users
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { faqSwahili } from '../data/faqTranslations';

export const FAQSection: React.FC = () => {
  const { language, theme, t } = useApp();
  const [openIds, setOpenIds] = useState<string[]>(['how-to-access-courses', 'mobile-money-payments', 'learner-support-helpdesk']);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    { id: 'ALL', label: language === 'sw' ? 'Maswali Yote' : 'All FAQs', icon: Filter },
    { id: 'Course Access', label: language === 'sw' ? 'Upatikanaji wa Kozi' : 'Course Access', icon: BookOpen },
    { id: 'Payment & Mobile Money', label: language === 'sw' ? 'Malipo & M-Pesa' : 'Payment & Mobile Money', icon: CreditCard },
    { id: 'Technical Support', label: language === 'sw' ? 'Msaada wa Kiufundi' : 'Technical Support', icon: Headphones },
    { id: 'Languages', label: language === 'sw' ? 'Lugha' : 'Languages', icon: MessageCircle },
    { id: 'Organizations', label: language === 'sw' ? 'Mashirika' : 'Organizations', icon: Users },
    { id: 'General', label: language === 'sw' ? 'Vyeti & Ujumla' : 'Certificates & General', icon: Award },
  ];

  const toggleAccordion = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaq.map(item => item.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  const filteredFaq = useMemo(() => {
    return faqData.filter(item => {
      const localized = language === 'sw' ? faqSwahili[item.id] : undefined;
      const question = localized?.question ?? item.question;
      const answer = localized?.answer ?? item.answer;
      const category = localized?.category ?? item.category;
      const matchesCat = selectedCategory === 'ALL' || item.category === selectedCategory;
      const matchesSearch = 
        question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [language, selectedCategory, searchQuery]);

  return (
    <section 
      id="faq-section" 
      className={`relative py-24 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0B0B0B] text-white' : 'bg-[#FAFAFA] text-neutral-900'
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(255,59,48,0.14),transparent_45%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-bold uppercase tracking-wider ${
            theme === 'dark' ? 'bg-[#171717] border-neutral-800 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-800 shadow-sm'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.05em] ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}>
            {t.faq.title}
          </h2>
          <p className={`max-w-2xl mx-auto text-base leading-relaxed ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            {language === 'sw' 
              ? 'Majibu ya papo hapo kwa maswali kuhusu namna ya kuanza masomo, mifumo ya malipo (M-Pesa/Tigo Pesa), msaada wa kiufundi, na vyeti vya QR.'
              : 'Direct answers regarding course access, mobile money payments (M-Pesa, Tigo Pesa, Airtel Money), technical support, and QR certification.'}
          </p>

          {/* FAQ Search Bar */}
          <div className="max-w-xl mx-auto pt-2 relative">
            <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
              theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
            }`} />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'sw' ? 'Tafuta maswali (mfano: M-Pesa, simu, WhatsApp, cheti, data)...' : 'Search questions (e.g. M-Pesa, smartphone, WhatsApp, support)...'}
              className={`w-full pl-10 pr-10 py-3 border rounded-2xl text-xs focus:outline-none focus:border-[#DC2626] transition-colors ${
                theme === 'dark'
                  ? 'bg-[#171717] border-neutral-800 text-white placeholder-neutral-500'
                  : 'bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400 shadow-sm'
              }`}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400 hover:text-[#DC2626]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Category Filters */}
          <div className="flex flex-nowrap items-center justify-start gap-2 pt-3 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {categories.map(cat => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`faq-category-btn-${cat.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex shrink-0 items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 hover:-translate-y-0.5 ${
                    isSelected
                      ? 'bg-[#B91C1C] text-white shadow-md'
                      : theme === 'dark'
                      ? 'bg-[#171717] text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
                      : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200 shadow-sm hover:border-neutral-300'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Expand/Collapse and Results Counter */}
          <div className="flex items-center justify-between gap-3 text-xs pt-2 px-1 text-neutral-400">
            <span>
              {language === 'sw' ? `Yanaonyeshwa maswali ${filteredFaq.length}` : `Showing ${filteredFaq.length} FAQs`}
            </span>
            <div className="flex items-center gap-3">
              <button 
                onClick={expandAll}
                className="hover:text-[#DC2626] transition-colors font-medium"
              >
                {language === 'sw' ? 'Fungua Yote' : 'Expand All'}
              </button>
              <span>•</span>
              <button 
                onClick={collapseAll}
                className="hover:text-[#DC2626] transition-colors font-medium"
              >
                {language === 'sw' ? 'Funga Yote' : 'Collapse All'}
              </button>
            </div>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaq.map((item) => {
            const isOpen = openIds.includes(item.id);
            const localized = language === 'sw' ? faqSwahili[item.id] : undefined;
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 shadow-sm ${
                  theme === 'dark'
                    ? 'bg-[#171717] border-neutral-800 hover:border-neutral-700'
                    : 'bg-white border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-red-950/30 border border-red-900/40 flex items-center justify-center text-[#DC2626] shrink-0 mt-0.5 sm:mt-0 glow-accent">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className={`text-sm sm:text-base font-bold tracking-tight block ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                      }`}>
                        {localized?.question ?? item.question}
                      </span>
                      <span className="inline-block mt-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#DC2626] px-2 py-0.5 rounded bg-red-950/20 border border-red-900/20">
                        {localized?.category ?? item.category}
                      </span>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 mt-1 sm:mt-0 ${
                    isOpen ? 'rotate-180 text-[#DC2626]' : theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                  }`} />
                </button>

                {isOpen && (
                  <div className={`px-5 sm:px-6 pb-6 pt-3 text-xs sm:text-sm leading-relaxed border-t animate-[fadeIn_0.2s_ease-out] ${
                    theme === 'dark' ? 'text-neutral-300 border-neutral-800/60' : 'text-neutral-600 border-neutral-100'
                  }`}>
                    <p className="mt-1 pl-11 leading-7 max-w-3xl">{localized?.answer ?? item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaq.length === 0 && (
            <div className={`text-center py-12 rounded-2xl border text-xs space-y-3 ${
              theme === 'dark' ? 'bg-[#171717] border-neutral-800 text-neutral-400' : 'bg-white border-neutral-200 text-neutral-600'
            }`}>
              <p>{language === 'sw' ? 'Hakuna maswali yanayolingana na utafutaji wako.' : 'No matching questions found for your query.'}</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('ALL'); }}
                className="px-4 py-2 rounded-xl bg-[#DC2626] text-white text-xs font-bold shadow hover:bg-red-700 transition-colors"
              >
                {language === 'sw' ? 'Onyesha Maswali Yote' : 'Reset Search'}
              </button>
            </div>
          )}
        </div>

        {/* Live Support Banner */}
        <div className={`mt-10 p-6 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
          theme === 'dark' ? 'bg-[#121212] border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                {language === 'sw' ? 'Una swali la ziada au unahitaji usaidizi?' : 'Have more questions or need direct guidance?'}
              </div>
              <div className={`text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {language === 'sw' ? 'Wasiliana na timu yetu ya usaidizi wa wanafunzi kupitia WhatsApp.' : 'Chat directly with our learner support team on WhatsApp.'}
              </div>
            </div>
          </div>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Habari CS Academy! Nina swali kuhusu kujiunga na mafunzo:')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 shrink-0 shadow-lg shadow-emerald-700/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{language === 'sw' ? 'Msaada wa WhatsApp' : 'WhatsApp Support'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
