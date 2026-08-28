import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { siteConfig } from '../config/site';
import { useApp } from '../context/AppContext';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  setCurrentRoute: (route: PageRoute) => void;
  openBookingModal: (prefill?: { program?: string; format?: string }) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  setCurrentRoute,
  openBookingModal
}) => {
  const { theme, toggleTheme, t, i18n } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'sw' : 'en';
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[var(--bg-primary)]/80 backdrop-blur-2xl border-b border-[var(--border-color)] shadow-[0_10px_40px_rgba(0,0,0,0.2)] py-2'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            id="brand-logo-btn"
            onClick={() => navigateTo('home')}
            className="flex min-w-0 items-center gap-3 text-left group focus:outline-none rounded-2xl p-1.5 transition-all hover:bg-[var(--bg-secondary)]"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[var(--accent-red)] to-[var(--bg-tertiary)] p-[1.5px] shadow-[0_10px_25px_rgba(255,59,48,0.25)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shrink-0 overflow-hidden">
              <img
                src="/assets/images/CSLOGO.jpg"
                alt="CS Academy Logo"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="max-w-[10rem] truncate text-lg sm:max-w-none sm:text-xl font-black tracking-[-0.05em] transition-colors uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-red-safe)]">
                  {siteConfig.academyName}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red-safe)] animate-pulse" />
              </div>
              <p className="hidden sm:block text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--text-muted)] opacity-60">
                Tech Education
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            <button
              id="nav-link-home"
              onClick={() => navigateTo('home')}
              className={`px-4 py-2 rounded-2xl text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 ${
                currentRoute === 'home' 
                  ? 'text-[var(--text-primary)] bg-[var(--accent-red-subtle)] border border-[var(--accent-red-safe)]/30'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
              }`}
            >
              {t('nav.home', { defaultValue: 'Home' })}
            </button>

            <button
              id="nav-link-features"
              onClick={() => navigateTo('features')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                currentRoute === 'features' 
                  ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors duration-200'
              }`}
            >
                <span>{t('nav.features', { defaultValue: 'Features' })}</span>
            </button>

            {/* Programs Dropdown */}
            <div className="relative group">
              <button
                id="nav-link-programs-dropdown"
                onClick={() => navigateTo('programs')}
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  currentRoute.startsWith('programs')
                    ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border-color)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors duration-200'
                }`}
              >
                <span>{t('nav.programs', { defaultValue: 'Programs' })}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Dropdown Menu */}
              <div 
                onMouseLeave={() => setProgramsDropdownOpen(false)}
                className={`absolute left-0 top-full pt-2 w-80 transition-all duration-200 ${
                  programsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto'
                }`}
              >
                <div className="border rounded-2xl p-2 shadow-2xl space-y-1 bg-[var(--bg-card)] border-[var(--border-color)]">
                  <button
                    id="dropdown-all-programs"
                    onClick={() => navigateTo('programs')}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs font-extrabold uppercase tracking-wider transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors duration-200"
                  >
                    <span>{t('nav.allPrograms', { defaultValue: 'All Programs' })}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-red-strong)]" />
                  </button>
                  <div className="h-px my-1 bg-[var(--border-subtle)]"></div>
                  
                  <button
                    id="dropdown-ai-academy"
                    onClick={() => navigateTo('programs/ai')}
                    className="w-full flex items-start gap-3 px-3 py-2.5 rounded-xl text-left transition-colors group/item hover:bg-[var(--bg-secondary)] transition-colors duration-200"
                  >
                    <div>
                      <div className="text-xs font-bold transition-colors group-hover/item:text-[var(--accent-red-safe)] text-[var(--text-primary)]">{t('nav.aiAcademy', { defaultValue: 'AI & Vibe Coding' })}</div>
                      <div className="text-[11px] text-[var(--text-muted)]">
                        {t('nav.aiAcademyDesc', { defaultValue: 'Prompting, LLMs, AI Safety & Swahili Prompts' })}
                      </div>
                    </div>
                  </button>

                  <button
                    id="dropdown-cyber-academy"
                    onClick={() => navigateTo('programs/cybersecurity')}
                    className="w-full flex items-start gap-3 px-3 py-2.5 rounded-xl text-left transition-colors group/item hover:bg-[var(--bg-secondary)] transition-colors duration-200"
                  >
                    <div>
                      <div className="text-xs font-bold transition-colors group-hover/item:text-[var(--accent-red-safe)] text-[var(--text-primary)]">{t('nav.cyberAcademy', { defaultValue: 'Cybersecurity Academy' })}</div>
                      <div className="text-[11px] text-[var(--text-muted)]">
                        {t('nav.cyberAcademyDesc', { defaultValue: 'Digital Defense, Phishing Prevention & Data Safety' })}
                      </div>
                    </div>
                  </button>

                  <button
                    id="dropdown-digital-academy"
                    onClick={() => navigateTo('programs/digital-skills')}
                    className="w-full flex items-start gap-3 px-3 py-2.5 rounded-xl text-left transition-colors group/item hover:bg-[var(--bg-secondary)] transition-colors duration-200"
                  >
                    <div>
                      <div className="text-xs font-bold transition-colors group-hover/item:text-[var(--accent-red-safe)] text-[var(--text-primary)]">{t('nav.digitalAcademy', { defaultValue: 'Full-Stack & Digital Skills' })}</div>
                      <div className="text-[11px] text-[var(--text-muted)]">
                        {t('nav.digitalAcademyDesc', { defaultValue: 'Web Dev, Figma UI/UX & Digital Marketing' })}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <button
              id="nav-link-formats"
              onClick={() => navigateTo('learning-formats')}
              className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                currentRoute === 'learning-formats' 
                  ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors duration-200'
              }`}
            >
              {t('nav.formats', { defaultValue: 'Formats' })}
            </button>

            <button
              id="nav-link-organizations"
              onClick={() => navigateTo('for-organizations')}
              className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                currentRoute === 'for-organizations' 
                  ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors duration-200'
              }`}
            >
              <span>{t('nav.organizations', { defaultValue: 'Teams' })}</span>
            </button>

            <button
              id="nav-link-vibe-coding"
              onClick={() => navigateTo('vibe-coding')}
              className={`relative px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                currentRoute === 'vibe-coding'
                  ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors duration-200'
              }`}
            >
              <span>{t('nav.vibeCoding', { defaultValue: 'Vibe Coding' })}</span>
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-red-safe)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-red-safe)]"></span>
              </span>
            </button>

            <button
              id="nav-link-pricing"
              onClick={() => navigateTo('pricing')}
              className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                currentRoute === 'pricing' 
                  ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors duration-200'
              }`}
            >
              {t('nav.pricing', { defaultValue: 'Pricing' })}
            </button>

            <button
              id="nav-link-resources"
              onClick={() => navigateTo('resources')}
              className={`flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                currentRoute === 'resources' 
                  ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors duration-200'
              }`}
            >
              <span>{t('nav.resources', { defaultValue: 'Resources' })}</span>
            </button>

            <button
              id="nav-link-about"
              onClick={() => navigateTo('about')}
              className={`px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                currentRoute === 'about' 
                  ? 'text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border-color)]'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors duration-200'
              }`}
            >
              {t('nav.about', { defaultValue: 'About' })}
            </button>
          </nav>

          {/* Desktop Right Controls: Theme Switcher & Book CTA */}
          <div className="hidden xl:flex items-center gap-2">

            {/* Theme Toggle (Light / Dark) */}
            <button
              id="header-theme-toggle-btn"
              onClick={toggleTheme}
              title={t('nav.switchTheme', { defaultValue: 'Switch Theme' })}
              className="p-2.5 rounded-2xl transition-all border bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-amber-400 border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/40 group hover-icon-bounce"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 icon-glow" /> : <Moon className="w-4 h-4 icon-glow" />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              aria-label={t('nav.toggleLanguage', { defaultValue: 'Toggle Language' })}
              className="px-4 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)] border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/40"
            >
              {i18n.language === 'en' ? 'SW' : 'EN'}
            </button>

            {/* Book Training CTA */}
            <button
              id="header-book-training-btn"
              onClick={() => openBookingModal()}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-[10px] font-black text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] rounded-full shadow-lg shadow-[var(--accent-red-subtle)] hover:shadow-xl hover:shadow-[var(--accent-red-subtle)] transition-all uppercase tracking-widest group"
            >
              <span>{t('nav.bookTraining', { defaultValue: 'Book Training' })}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </button>
          </div>

          {/* Mobile Menu & Quick Controls */}
          <div className="flex items-center gap-2 xl:hidden">
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              aria-label={t('nav.toggleLanguage', { defaultValue: 'Toggle Language' })}
              className="p-1.5 rounded-lg border text-[10px] font-black bg-[var(--bg-secondary)] text-[var(--text-primary)] border-[var(--border-color)]"
            >
              {i18n.language === 'en' ? 'SW' : 'EN'}
            </button>

            {/* Quick Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg border bg-[var(--bg-secondary)] text-amber-400 border-[var(--border-color)]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="mobile-quick-book-btn"
              onClick={() => openBookingModal()}
              className="hidden sm:block px-3 py-1.5 text-xs font-bold text-white bg-[#B91C1C] rounded-lg"
            >
              {t('nav.bookTraining', { defaultValue: 'Book Training' })}
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border focus:outline-none bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--border-color)]"
              aria-label={'Toggle navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--text-primary)]">
          <div className="space-y-1">
            <button
              onClick={() => navigateTo('home')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              {t('nav.home', { defaultValue: 'Home' })}
            </button>

            <button
              onClick={() => navigateTo('features')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              <span>{t('nav.features', { defaultValue: 'Features' })}</span>
              <span className="text-[10px] bg-red-950 text-[var(--accent-red-strong)] font-bold px-2 py-0.5 rounded border border-red-800/60">{t('nav.newBadge', { defaultValue: 'New' })}</span>
            </button>

            <button
              onClick={() => navigateTo('vibe-coding')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              <span>{t('nav.vibeCoding', { defaultValue: 'Vibe Coding' })}</span>
              <span className="flex items-center gap-2">
                <span className="text-[10px] bg-red-950 text-[var(--accent-red-safe)] font-bold px-2 py-0.5 rounded border border-red-800/60 animate-pulse">{t('nav.newBadge', { defaultValue: 'NEW' })}</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-red-safe)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-red-safe)]"></span>
                </span>
              </span>
            </button>

            <button
              onClick={() => navigateTo('pricing')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              <span>{t('nav.pricing', { defaultValue: 'Pricing' })}</span>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-800/60">{t('nav.mpesaBadge', { defaultValue: 'M-Pesa' })}</span>
            </button>

            {/* Mobile Programs Section */}
            <div className="rounded-2xl p-3 my-2 border bg-[var(--bg-secondary)] border-[var(--border-color)]">
              <button
                onClick={() => navigateTo('programs')}
                className="w-full text-left text-xs font-extrabold uppercase tracking-wider text-[var(--accent-red-strong)] mb-2 flex items-center justify-between"
              >
                <span>{t('nav.programs', { defaultValue: 'Programs' })}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              
              <div className="grid gap-1 pl-1">
                <button
                  onClick={() => navigateTo('programs/ai')}
                  className="w-full text-left py-2 px-2 text-xs font-medium flex items-center gap-2"
                >
                  <span>{t('nav.aiAcademyMobile', { defaultValue: 'AI & Vibe Coding Academy' })}</span>
                </button>
                <button
                  onClick={() => navigateTo('programs/cybersecurity')}
                  className="w-full text-left py-2 px-2 text-xs font-medium flex items-center gap-2"
                >
                  <span>{t('nav.cyberAcademyMobile', { defaultValue: 'Cybersecurity Academy' })}</span>
                </button>
                <button
                  onClick={() => navigateTo('programs/digital-skills')}
                  className="w-full text-left py-2 px-2 text-xs font-medium flex items-center gap-2"
                >
                  <span>{t('nav.digitalAcademyMobile', { defaultValue: 'Digital Skills & Web Development' })}</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => navigateTo('learning-formats')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              {t('nav.formats', { defaultValue: 'Formats' })}
            </button>

            <button
              onClick={() => navigateTo('for-organizations')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              <span>{t('nav.organizations', { defaultValue: 'Organizations' })}</span>
              <span className="text-[10px] bg-red-950 text-red-300 font-bold px-2 py-0.5 rounded border border-red-800/60">{t('nav.corporateBadge', { defaultValue: 'Corporate' })}</span>
            </button>

            <button
              onClick={() => navigateTo('resources')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              {t('nav.resources', { defaultValue: 'Resources' })}
            </button>

            <button
              onClick={() => navigateTo('blog')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              {t('nav.blog', { defaultValue: 'Blog' })}
            </button>

            <button
              onClick={() => navigateTo('about')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              {t('nav.about', { defaultValue: 'About' })}
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-bold hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              {t('nav.contact', { defaultValue: 'Contact' })}
            </button>
          </div>

          <div className="mt-5 pt-4 border-t border-[var(--border-color)] space-y-2">
            <button
              onClick={() => { setMobileMenuOpen(false); openBookingModal(); }}
              className="w-full py-3.5 text-center text-xs font-bold text-white bg-[var(--accent-red)] hover:bg-[var(--accent-red-hover)] active:scale-[0.98] rounded-xl tracking-wider uppercase shadow-lg"
            >
              {t('nav.bookTraining', { defaultValue: 'Book Training' })}
            </button>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(t('nav.waQuickMessage', { defaultValue: "Habari CS Academy, I would like to inquire about training programs." }))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 flex items-center justify-center gap-2 text-xs font-semibold rounded-xl border bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--border-color)]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>{t('nav.waUs', { defaultValue: 'WhatsApp Us: {{number}}', number: siteConfig.whatsappDisplay })}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
