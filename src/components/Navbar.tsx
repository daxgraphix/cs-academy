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
  const { theme, toggleTheme, t } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);

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
      ? 'bg-[var(--bg-primary)]/80 backdrop-blur-2xl border-b border-[var(--border-color)] shadow-[0_10px_40px_rgba(0,0,0,0.2)] py-1'
      : 'bg-transparent py-3'
  }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
<button 
              id="brand-logo-btn"
              onClick={() => navigateTo('home')}
              className="flex min-w-0 items-center gap-2 text-left group focus:outline-none rounded-xl p-1 transition-all hover:bg-[var(--bg-secondary)]"
            >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--accent-red)] to-[var(--bg-tertiary)] p-[1px] shadow-[0_8px_20px_rgba(255,59,48,0.2)] group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 shrink-0 overflow-hidden">
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
                <span className="max-w-[8rem] truncate text-base sm:max-w-none sm:text-lg font-bold tracking-[-0.03em] transition-colors uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-red-safe)]">
                  {siteConfig.academyName}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-red-safe)] animate-pulse" />
              </div>
              <p className="hidden sm:block text-[8px] font-bold tracking-[0.15em] uppercase text-[var(--text-muted)] opacity-50">
                Tech Education
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            <button
              id="nav-link-home"
              onClick={() => navigateTo('home')}
              className={`px-3 py-1.5 rounded-xl text-[9px] font-extrabold uppercase tracking-wider transition-all duration-200 ${
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
              className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-[9px] font-bold uppercase tracking-wider transition-all ${
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
              className={`flex items-center gap-0.5 px-2.5 py-1 rounded-xl text-[9px] font-bold uppercase tracking-wider transition-all ${
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
              className={`px-2.5 py-1 rounded-xl text-[9px] font-bold uppercase tracking-wider transition-all ${
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
              className={`flex items-center gap-0.5 px-2.5 py-1 rounded-xl text-[9px] font-bold uppercase tracking-wider transition-all ${
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
              className={`relative px-2.5 py-1 rounded-xl text-[9px] font-bold uppercase tracking-wider transition-all ${
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
              className={`px-2.5 py-1 rounded-xl text-[9px] font-bold uppercase tracking-wider transition-all ${
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
              className={`flex items-center gap-0.5 px-2.5 py-1 rounded-xl text-[9px] font-bold uppercase tracking-wider transition-all ${
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
              className={`px-2.5 py-1 rounded-xl text-[9px] font-bold uppercase tracking-wider transition-all ${
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
              className="p-2 rounded-xl transition-all border bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-amber-400 border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/40 group hover-icon-bounce"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 icon-glow" /> : <Moon className="w-4 h-4 icon-glow" />}
            </button>

            {/* Book Training CTA */}
            <button
              id="header-book-training-btn"
              onClick={() => openBookingModal()}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[9px] font-bold text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] rounded-full shadow-lg shadow-[var(--accent-red-subtle)] hover:shadow-xl hover:shadow-[var(--accent-red-subtle)] transition-all uppercase tracking-wider group"
            >
              <span>{t('nav.bookTraining', { defaultValue: 'Book Training' })}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </button>
          </div>

          {/* Mobile Menu & Quick Controls */}
          <div className="flex items-center gap-2 xl:hidden">
            {/* Quick Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1 rounded-lg border bg-[var(--bg-secondary)] text-amber-400 border-[var(--border-color)]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="mobile-quick-book-btn"
              onClick={() => openBookingModal()}
              className="hidden sm:block px-2.5 py-1 text-[8px] font-bold text-white bg-[var(--accent-red-strong)] rounded-lg"
            >
              {t('nav.bookTraining', { defaultValue: 'Book Training' })}
            </button>
<button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border focus:outline-none bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--border-color)]"
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
              className="w-full text-left px-2.5 py-2 rounded-xl text-[9px] font-bold hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              {t('nav.home', { defaultValue: 'Home' })}
            </button>

            <button
              onClick={() => navigateTo('features')}
              className="w-full text-left px-2.5 py-2 rounded-xl text-[9px] font-bold flex items-center justify-between hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              <span>{t('nav.features', { defaultValue: 'Features' })}</span>
              <span className="text-[8px] bg-red-950 text-[var(--accent-red-strong)] font-bold px-1.5 py-0.5 rounded border border-red-800/60">{t('nav.newBadge', { defaultValue: 'New' })}</span>
            </button>

            <button
              onClick={() => navigateTo('vibe-coding')}
              className="w-full text-left px-2.5 py-2 rounded-xl text-[9px] font-bold flex items-center justify-between hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              <span>{t('nav.vibeCoding', { defaultValue: 'Vibe Coding' })}</span>
              <span className="flex items-center gap-2">
                <span className="text-[8px] bg-red-950 text-[var(--accent-red-safe)] font-bold px-1.5 py-0.5 rounded border border-red-800/60 animate-pulse">{t('nav.newBadge', { defaultValue: 'NEW' })}</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-red-safe)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-red-safe)]"></span>
                </span>
              </span>
            </button>

            <button
              onClick={() => navigateTo('pricing')}
              className="w-full text-left px-2.5 py-2 rounded-xl text-[9px] font-bold flex items-center justify-between hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              <span>{t('nav.pricing', { defaultValue: 'Pricing' })}</span>
              <span className="text-[8px] bg-emerald-950 text-emerald-300 font-bold px-1.5 py-0.5 rounded border border-emerald-800/60">{t('nav.mpesaBadge', { defaultValue: 'M-Pesa' })}</span>
            </button>

            {/* Mobile Programs Section */}
            <div className="rounded-2xl p-2 my-1.5 border bg-[var(--bg-secondary)] border-[var(--border-color)]">
<button
              onClick={() => navigateTo('programs')}
              className="w-full text-left px-2 py-1.5 rounded-xl text-[9px] font-bold uppercase tracking-wider text-[var(--accent-red-strong)] mb-1.5 flex items-center justify-between"
            >
                <span>{t('nav.programs', { defaultValue: 'Programs' })}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              
              <div className="grid gap-1 pl-1">
<button
              onClick={() => navigateTo('programs/ai')}
              className="w-full text-left py-1.5 px-1.5 text-[8px] font-medium flex items-center gap-1.5"
            >
                  <span>{t('nav.aiAcademyMobile', { defaultValue: 'AI & Vibe Coding Academy' })}</span>
                </button>
<button
              onClick={() => navigateTo('programs/cybersecurity')}
              className="w-full text-left py-1.5 px-1.5 text-[8px] font-medium flex items-center gap-1.5"
            >
                  <span>{t('nav.cyberAcademyMobile', { defaultValue: 'Cybersecurity Academy' })}</span>
                </button>
<button
              onClick={() => navigateTo('programs/digital-skills')}
              className="w-full text-left py-1.5 px-1.5 text-[8px] font-medium flex items-center gap-1.5"
            >
                  <span>{t('nav.digitalAcademyMobile', { defaultValue: 'Digital Skills & Web Development' })}</span>
                </button>
              </div>
            </div>

            <button
              onClick={() => navigateTo('learning-formats')}
              className="w-full text-left px-2.5 py-2 rounded-xl text-[9px] font-bold hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              {t('nav.formats', { defaultValue: 'Formats' })}
            </button>

            <button
              onClick={() => navigateTo('for-organizations')}
              className="w-full text-left px-2.5 py-2 rounded-xl text-[9px] font-bold flex items-center justify-between hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              <span>{t('nav.organizations', { defaultValue: 'Organizations' })}</span>
              <span className="text-[8px] bg-red-950 text-red-300 font-bold px-1.5 py-0.5 rounded border border-red-800/60">{t('nav.corporateBadge', { defaultValue: 'Corporate' })}</span>
            </button>

            <button
              onClick={() => navigateTo('resources')}
              className="w-full text-left px-2.5 py-2 rounded-xl text-[9px] font-bold hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              {t('nav.resources', { defaultValue: 'Resources' })}
            </button>

            <button
              onClick={() => navigateTo('blog')}
              className="w-full text-left px-2.5 py-2 rounded-xl text-[9px] font-bold hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              {t('nav.blog', { defaultValue: 'Blog' })}
            </button>

            <button
              onClick={() => navigateTo('about')}
              className="w-full text-left px-2.5 py-2 rounded-xl text-[9px] font-bold hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              {t('nav.about', { defaultValue: 'About' })}
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className="w-full text-left px-2.5 py-2 rounded-xl text-[9px] font-bold hover:bg-[var(--bg-secondary)] transition-colors duration-200"
            >
              {t('nav.contact', { defaultValue: 'Contact' })}
            </button>
          </div>

<div className="mt-3 pt-2 border-t border-[var(--border-color)] space-y-1">
             <button
               onClick={() => { setMobileMenuOpen(false); openBookingModal(); }}
               className="w-full py-2 text-center text-[8px] font-bold text-white bg-[var(--accent-red)] hover:bg-[var(--accent-red-hover)] active:scale-[0.98] rounded-lg tracking-wider shadow-md"
             >
               {t('nav.bookTraining', { defaultValue: 'Book Training' })}
             </button>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(t('nav.waQuickMessage', { defaultValue: "Habari CS Academy, I would like to inquire about training programs." }))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 flex items-center justify-center gap-1.5 text-[8px] font-medium rounded-xl border bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--border-color)]"
            >
              <MessageCircle className="w-3 h-3 text-emerald-500" />
              <span>{t('nav.waUs', { defaultValue: 'WhatsApp Us: {{number}}', number: siteConfig.whatsappDisplay })}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
