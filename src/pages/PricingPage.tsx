import React from 'react';
import { SEO } from '../components/SEO';
import { PricingSection } from '../components/PricingSection';
import { PageRoute } from '../types';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';
import { useApp } from '../context/AppContext';

interface PricingPageProps {
  setCurrentRoute: (route: PageRoute) => void;
  openBookingModal: (prefill?: { program?: string }) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  setCurrentRoute,
  openBookingModal
}) => {
  const { theme, t } = useApp();

  return (
    <div className="pt-20 min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SEO
        title={t('pricing.seo.title')}
        description={t('pricing.seo.description')}
      />
      {/* Main Pricing Section */}
      <PricingSection openBookingModal={openBookingModal} />

      {/* Support & Inquiries Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-[2rem] border space-y-4 shadow-xl bg-[var(--bg-secondary)] border-[var(--border-color)] glass-card">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
            {t('pricing.help.title')}
          </h3>
          <p className="text-sm max-w-xl mx-auto leading-relaxed text-[var(--text-secondary)]">
            {t('pricing.help.subtitle')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                t('pricing.help.waMessage'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl font-extrabold text-xs text-white bg-[var(--success-strong)] hover:bg-[var(--success-safe)] uppercase tracking-wider shadow-lg inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('pricing.help.whatsapp', { number: siteConfig.phoneDisplay })}</span>
            </a>
            <button
              onClick={() => setCurrentRoute('contact')}
              className="px-6 py-3.5 rounded-2xl font-extrabold text-xs border uppercase tracking-wider transition-colors text-[var(--text-primary)] hover:text-[var(--text-primary)] bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] border-[var(--border-color)] shadow-sm"
            >
              <span>{t('pricing.help.contactBtn')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
