import React, { useState } from 'react';
import { PageRoute } from '../types';
import { siteConfig } from '../config/site';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import {
  Linkedin,
  Youtube,
  MessageCircle,
  Mail,
  Send,
  CheckCircle2,
  ShieldCheck,
  Bell,
  MapPin,
  ArrowUpRight
} from 'lucide-react';

interface FooterProps {
  setCurrentRoute: (route: PageRoute) => void;
  openBookingModal: () => void;
}

const footerNav: Array<{ title: string; items: Array<{ label: string; route?: PageRoute; action?: 'book'; highlight?: boolean; accent?: 'red' | 'green' }> }> = [
  {
    title: 'Programs',
    items: [
      { label: 'AI & Vibe Coding', route: 'programs/ai' },
      { label: 'Cybersecurity', route: 'programs/cybersecurity' },
      { label: 'Digital Skills', route: 'programs/digital-skills' },
      { label: 'All Curricula', route: 'programs', highlight: true },
    ],
  },
  {
    title: 'Delivery',
    items: [
      { label: '6 Delivery Formats', route: 'learning-formats' },
      { label: 'Pricing & Plans', route: 'pricing', accent: 'green' },
      { label: 'WhatsApp Micro-Course', route: 'learning-formats' },
      { label: 'Platform Features', route: 'features' },
    ],
  },
  {
    title: 'Organizations',
    items: [
      { label: 'Corporate Training', route: 'for-organizations' },
      { label: 'University Programs', route: 'for-organizations' },
      { label: 'NGOs & Government', route: 'for-organizations' },
      { label: 'Request Proposal', action: 'book' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About CS Academy', route: 'about' },
      { label: 'Free Resources', route: 'resources' },
      { label: 'Blog & Articles', route: 'blog' },
      { label: 'Contact & Book', route: 'contact' },
    ],
  },
];

const socialLinks = [
  { href: siteConfig.socialLinks.linkedin, label: 'LinkedIn', Icon: Linkedin, hover: 'hover:text-[#0A66C2]' },
  { href: siteConfig.socialLinks.youtube, label: 'YouTube', Icon: Youtube, hover: 'hover:text-[#FF0000]' },
  { href: `https://wa.me/${siteConfig.whatsapp}`, label: 'WhatsApp', Icon: MessageCircle, hover: 'hover:text-[var(--success-strong)]' },
];

export const Footer: React.FC<FooterProps> = ({
  setCurrentRoute,
  openBookingModal
}) => {
  const { theme, t } = useApp();
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState<'all' | 'ai' | 'cybersecurity' | 'web'>('all');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const contentRef = useReveal<HTMLDivElement>();

  const footerNav: Array<{ title: string; items: Array<{ label: string; route?: PageRoute; action?: 'book'; highlight?: boolean; accent?: 'red' | 'green' }> }> = [
    {
      title: t('footer.nav.programs', { defaultValue: 'Programs' }),
      items: [
        { label: t('footer.navItems.aiVibe', { defaultValue: 'AI & Vibe Coding' }), route: 'programs/ai' },
        { label: t('footer.navItems.cybersecurity', { defaultValue: 'Cybersecurity' }), route: 'programs/cybersecurity' },
        { label: t('footer.navItems.digitalSkills', { defaultValue: 'Digital Skills' }), route: 'programs/digital-skills' },
        { label: t('footer.navItems.allCurricula', { defaultValue: 'All Curricula' }), route: 'programs', highlight: true },
      ],
    },
    {
      title: t('footer.nav.delivery', { defaultValue: 'Delivery' }),
      items: [
        { label: t('footer.navItems.deliveryFormats', { defaultValue: '6 Delivery Formats' }), route: 'learning-formats' },
        { label: t('footer.navItems.pricingPlans', { defaultValue: 'Pricing & Plans' }), route: 'pricing', accent: 'green' },
        { label: t('footer.navItems.whatsappCourse', { defaultValue: 'WhatsApp Micro-Course' }), route: 'learning-formats' },
        { label: t('footer.navItems.platformFeatures', { defaultValue: 'Platform Features' }), route: 'features' },
      ],
    },
    {
      title: t('footer.nav.organizations', { defaultValue: 'Organizations' }),
      items: [
        { label: t('footer.navItems.corporateTraining', { defaultValue: 'Corporate Training' }), route: 'for-organizations' },
        { label: t('footer.navItems.universityPrograms', { defaultValue: 'University Programs' }), route: 'for-organizations' },
        { label: t('footer.navItems.ngoGov', { defaultValue: 'NGOs & Government' }), route: 'for-organizations' },
        { label: t('footer.navItems.requestProposal', { defaultValue: 'Request Proposal' }), action: 'book' },
      ],
    },
    {
      title: t('footer.nav.company', { defaultValue: 'Company' }),
      items: [
        { label: t('footer.navItems.aboutCS', { defaultValue: 'About CS Academy' }), route: 'about' },
        { label: t('footer.navItems.freeResources', { defaultValue: 'Free Resources' }), route: 'resources' },
        { label: t('footer.navItems.blogArticles', { defaultValue: 'Blog & Articles' }), route: 'blog' },
        { label: t('footer.navItems.contactBook', { defaultValue: 'Contact & Book' }), route: 'contact' },
      ],
    },
  ];

  const navigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemClick = (item: { route?: PageRoute; action?: 'book' }) => {
    if (item.action === 'book') {
      openBookingModal();
    } else if (item.route) {
      navigate(item.route);
    }
  };

  const emailValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValid(email)) {
      setEmailError(t('footer.newsletter.errorEmail', { defaultValue: 'Please enter a valid email address.' }));
      return;
    }
    setEmailError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 600);
  };

  const topicOptions = [
    { id: 'all', label: t('footer.topics.all', { defaultValue: 'All Updates' }) },
    { id: 'ai', label: t('footer.topics.ai', { defaultValue: 'AI & Vibe Coding' }) },
    { id: 'cybersecurity', label: t('footer.topics.cybersecurity', { defaultValue: 'Cybersecurity' }) },
    { id: 'web', label: t('footer.topics.web', { defaultValue: 'Web & Digital' }) },
  ] as const;

  return (
    <footer
      id="main-footer"
      className="relative border-t pt-24 pb-12 transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)] border-[var(--border-color)] overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-[var(--accent-red-safe)]/5 to-transparent pointer-events-none" />

      <div ref={contentRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 reveal">
        {/* ==================== Newsletter Card ==================== */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-16 glass-card shadow-2xl hover:border-[var(--accent-red-safe)]/30 transition-all duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_var(--accent-red-subtle),transparent_50%)] opacity-50" />
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[var(--accent-red-safe)]/5 blur-[100px] pointer-events-none animate-pulse" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-8 animate-reveal">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-red-safe)]/20 bg-[var(--accent-red-subtle)] px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-[var(--accent-red-strong)] icon-glow">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-red-safe)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-red-safe)]"></span>
                  </span>
                  <span>{t('footer.newsletter.badge', { defaultValue: 'CS Academy Dispatch' })}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-[var(--text-primary)] text-balance">
                  {t('footer.newsletter.titlePart1', { defaultValue: 'STAY AHEAD IN ' })}
                  <span className="text-[var(--accent-red-safe)] keyword-highlight">{t('footer.newsletter.titleHighlight', { defaultValue: 'TECH, AI & SECURITY' })}</span>
                </h3>
                <p className="text-base leading-relaxed text-[var(--text-secondary)] font-medium max-w-lg opacity-80">
                  {t('footer.newsletter.description', { defaultValue: 'Weekly practical guides, free prompt cheat sheets, live cohort announcements, and East African cybersecurity insights delivered straight to your inbox.' })}
                </p>
              </div>

              <div className="lg:col-span-6 animate-reveal-delay-2">
                {isSubscribed ? (
                  <div className="rounded-[2rem] sm:rounded-[2.5rem] border border-[var(--success-safe)]/30 bg-[var(--success-subtle)] p-8 sm:p-10 flex items-start gap-6 animate-scale shadow-xl">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--success-subtle)] text-[var(--success-strong)] shadow-lg shadow-[var(--success-safe)]/20 icon-glow">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <div className="space-y-3">
                      <div className="text-xl font-black text-[var(--success-strong)] tracking-tight">
                        {t('footer.newsletter.successTitle', { defaultValue: 'Welcome to the Future!' })}
                      </div>
                      <p className="text-sm text-[var(--success-strong)]/80 leading-relaxed font-semibold">
                        {t('footer.newsletter.successText', { defaultValue: 'Your journey starts now. Watch your inbox for the next tech dispatch and your free AI starter kit.' })}
                      </p>
                      <button
                        onClick={() => setIsSubscribed(false)}
                        className="mt-6 text-xs font-black uppercase tracking-widest text-[var(--success-strong)] hover:text-[var(--success-safe)] transition-colors flex items-center gap-2 group"
                      >
                        <Bell className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                        <span>{t('footer.newsletter.registerAnother', { defaultValue: 'Register another email' })}</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative min-w-0 flex-1 group">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)] group-focus-within:text-[var(--accent-red-safe)] transition-colors" />
                        <input
                          id="footer-newsletter-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(''); }}
                          aria-invalid={!!emailError}
                          placeholder={t('footer.newsletter.placeholder', { defaultValue: 'Enter your work email...' })}
                          className={`w-full rounded-2xl border pl-14 pr-6 py-5 text-sm font-medium focus:outline-none focus:border-[var(--accent-red-safe)] focus:ring-4 focus:ring-[var(--accent-red-subtle)] transition-all shadow-sm ${
                            emailError
                              ? 'border-red-500 shadow-lg shadow-red-500/10'
                              : 'bg-[var(--bg-primary)] border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)]'
                          }`}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex items-center justify-center gap-2 bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] text-white px-8 py-5 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-[var(--accent-red-subtle)] hover:shadow-2xl active:scale-[0.98] transition-all whitespace-nowrap group"
                      >
                        {isLoading ? (
                          <span className="inline-flex items-center gap-2">
                            <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            <span>{t('footer.newsletter.subscribing', { defaultValue: 'Joining...' })}</span>
                          </span>
                        ) : (
                          <>
                            <span>{t('footer.newsletter.subscribe', { defaultValue: 'Join for Free' })}</span>
                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </button>
                    </div>

                    {emailError && (
                      <p className="text-xs font-bold text-red-500 pl-4 animate-reveal">{emailError}</p>
                    )}

                    <div className="flex flex-wrap items-center gap-3 text-[10px]">
                      <span className="font-black uppercase tracking-widest mr-2 text-[var(--text-muted)] opacity-60">
                        {t('footer.newsletter.topicsLabel', { defaultValue: 'Choose Path:' })}
                      </span>
                      {topicOptions.map((opt) => {
                        const active = interest === opt.id;
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => setInterest(opt.id)}
                            className={`rounded-xl border px-4 py-2.5 font-black uppercase tracking-widest transition-all duration-300 ${
                              active
                                ? 'border-[var(--accent-red-safe)] bg-[var(--accent-red-safe)] text-white shadow-lg shadow-[var(--accent-red-subtle)] scale-105'
                                : 'border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-muted)] hover:border-[var(--accent-red-safe)]/40 hover:text-[var(--text-primary)]'
                            }`}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-2.5 text-[11px] text-[var(--text-muted)] font-bold pl-2 opacity-80">
                      <ShieldCheck className="h-4 w-4 text-[var(--success-strong)] icon-glow" />
                      <span>{t('footer.newsletter.spamNote', { defaultValue: 'Zero spam. Unsubscribe anytime with 1-click.' })}</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ==================== Main Footer Grid ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Brand Column (4 cols) */}
          <div className="col-span-2 md:col-span-4 space-y-5">
            <button
              onClick={() => navigate('home')}
              className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-red)] rounded-xl p-1 -ml-1"
            >
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-[var(--accent-red)] to-[#1a1a1a] p-[1.5px] shadow-[0_12px_26px_rgba(255,59,48,0.3)] group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src="/assets/images/CSLOGO.jpg"
                  alt="CS Academy Logo"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div>
                <span className={`block text-xl font-black tracking-[-0.06em] uppercase ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                  {siteConfig.academyName}
                </span>
                <p className={`text-[10px] font-semibold tracking-[0.18em] uppercase ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}`}>
                  {t('footer.brand.tagline', { defaultValue: 'Tech Education' })}
                </p>
              </div>
            </button>

            <p className={`text-xs leading-relaxed max-w-sm ${theme === 'dark' ? 'text-[var(--text-muted)]' : 'text-[var(--text-secondary)]'}`}>
              {t('footer.brand.description', { defaultValue: 'Practical training in Artificial Intelligence, Cybersecurity, and Digital Skills across East and Central Africa.' })}
            </p>

            {/* Contact quick links */}
            <div className={`space-y-2 text-xs ${theme === 'dark' ? 'text-[var(--text-secondary)]' : 'text-[var(--text-secondary)]'}`}>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 group hover:text-[var(--accent-red-strong)] transition-colors"
              >
                <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-red-50'}`}>
                  <Mail className="h-3.5 w-3.5 text-[var(--accent-red-strong)]" />
                </span>
                <span className="truncate">{siteConfig.email}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 group hover:text-[var(--success-strong)] transition-colors"
              >
                <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-[var(--success-subtle)]'}`}>
                  <MessageCircle className="h-3.5 w-3.5 text-[var(--success-strong)]" />
                </span>
                <span>{siteConfig.whatsappDisplay}</span>
              </a>
              <div className={`flex items-center gap-2.5 ${theme === 'dark' ? 'text-[var(--text-muted)]' : 'text-neutral-700'}`}>
                <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${theme === 'dark' ? 'bg-white/5' : 'bg-neutral-100'}`}>
                  <MapPin className="h-3.5 w-3.5 text-[var(--accent-red-strong)]" />
                </span>
                <span>{t('footer.brand.hub', { defaultValue: 'East Africa Hub' })}</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-4 animate-reveal-delay-3">
              {socialLinks.map(({ href, label, Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--accent-red-safe)]/40 hover:text-[var(--text-primary)] group hover-icon-bounce shadow-sm`}
                >
                  <Icon className="h-4.5 w-4.5 group-hover:scale-110 transition-transform icon-glow" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns (8 cols) */}
          <div className="col-span-2 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10">
            {footerNav.map((col, idx) => (
              <div key={col.title} className={`space-y-6 animate-reveal-delay-${Math.min(idx + 1, 3)}`}>
                <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[var(--text-muted)] opacity-60">
                  {col.title}
                </h4>
                <ul className="space-y-4">
                  {col.items.map((item) => {
                    const accentColor =
                      item.accent === 'green'
                        ? 'text-[var(--success-strong)] hover:text-[var(--success-safe)]'
                        : item.highlight
                          ? 'text-[var(--accent-red-strong)] hover:text-[var(--accent-red-safe)] font-black'
                          : 'text-[var(--text-secondary)] hover:text-[var(--accent-red-safe)]';
                    return (
                      <li key={item.label}>
                        <button
                          onClick={() => handleItemClick(item)}
                          className={`group inline-flex items-center gap-1.5 text-left text-xs font-bold transition-all duration-200 hover:translate-x-1 ${accentColor}`}
                        >
                          <span>{item.label}</span>
                          {item.highlight && (
                            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== Pillars Strip ==================== */}
        <div className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-5 border-y text-[10px] font-black uppercase tracking-[0.18em] ${theme === 'dark' ? 'border-[var(--border-color)] text-neutral-400' : 'border-neutral-200 text-neutral-700'}`}>
          <span>{t('footer.pillars.ai', { defaultValue: 'AI Literacy' })}</span>
          <span className="opacity-30">|</span>
          <span>{t('footer.pillars.cyber', { defaultValue: 'Cybersecurity' })}</span>
          <span className="opacity-30">|</span>
          <span>{t('footer.pillars.digital', { defaultValue: 'Digital Skills' })}</span>
          <span className="opacity-30">|</span>
          <span>{t('footer.pillars.vibe', { defaultValue: 'Vibe Coding' })}</span>
          <span className="opacity-30">|</span>
          <span>{t('footer.pillars.career', { defaultValue: 'Career Pathways' })}</span>
        </div>

        {/* ==================== Bottom Bar ==================== */}
        <div className={`flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}`}>
          <div className="flex items-center gap-2">
            <span>{t('footer.bottom.copyright', { defaultValue: '© 2026 {{name}}.', name: siteConfig.academyName })}</span>
            <span className="hidden sm:inline">{t('footer.bottom.ecosystem', { defaultValue: 'CyberSwahili Tech Ecosystem.' })}</span>
            <span>{t('footer.bottom.rights', { defaultValue: 'All rights reserved.' })}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>Tanzania</span>
            <span className="opacity-30">|</span>
            <span>Kenya</span>
            <span className="opacity-30">|</span>
            <span>Uganda</span>
            <span className="opacity-30">|</span>
            <span>Rwanda</span>
            <span className="opacity-30">|</span>
            <span>East Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
