import React, { useState } from 'react';
import { pricingPlansData, paymentMethods } from '../data/pricing';
import { learningFormatsData } from '../data/learningFormats';
import { useApp } from '../context/AppContext';
import { 
  CheckCircle2, 
  X, 
  ArrowRight,
  ShieldCheck, 
  Smartphone,
  Gift,
  HelpCircle,
  MessageSquare,
  Video,
  Layers,
  Calendar,
  Building2,
  Mic,
  Wifi
} from 'lucide-react';

interface PricingSectionProps {
  openBookingModal: (prefill?: { program?: string; duration?: string; format?: string }) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  openBookingModal
}) => {
  const { theme, currency, setCurrency, t } = useApp();
  const [activeChannelFilter, setActiveChannelFilter] = useState<'all' | 'mobile' | 'self-paced' | 'virtual-live' | 'in-person'>('all');

  const formatPrice = (plan: typeof pricingPlansData[0]) => {
    if (currency === 'TSH') {
      return plan.priceTsh === 'Custom' || plan.priceTsh === '0' 
        ? plan.priceTsh === '0' ? t('pricing.labels.free') : t('pricing.labels.customQuote')
        : `${plan.priceTsh} Tsh`;
    }
    if (currency === 'KES') {
      return plan.priceKes === 'Custom' || plan.priceKes === '0' 
        ? plan.priceKes === '0' ? t('pricing.labels.free') : t('pricing.labels.customQuote')
        : `${plan.priceKes} KSh`;
    }
    return plan.priceUsd === 'Custom' || plan.priceUsd === '0' 
      ? plan.priceUsd === '0' ? '$0' : t('pricing.labels.customQuote')
      : `$${plan.priceUsd}`;
  };

  const getChannelIcon = (type: string) => {
    switch (type) {
      case 'mobile-first':
        return <MessageSquare className="w-4 h-4 text-[var(--success-strong)]" />;
      case 'self-paced':
        return <Layers className="w-4 h-4 text-[var(--accent-red-strong)]" />;
      case 'virtual-live':
        return <Video className="w-4 h-4 text-[var(--accent-red-strong)]" />;
      case 'in-person-workshop':
        return <Calendar className="w-4 h-4 text-[var(--accent-red-strong)]" />;
      case 'corporate-onsite':
        return <Building2 className="w-4 h-4 text-[var(--accent-red-strong)]" />;
      case 'keynote':
        return <Mic className="w-4 h-4 text-[var(--accent-red-strong)]" />;
      default:
        return <HelpCircle className="w-4 h-4 text-[var(--accent-red-strong)]" />;
    }
  };

  const filteredPlans = pricingPlansData.filter((plan) => {
    if (activeChannelFilter === 'all') return true;
    if (activeChannelFilter === 'mobile') return plan.deliveryType === 'mobile-first';
    if (activeChannelFilter === 'self-paced') return plan.deliveryType === 'self-paced';
    if (activeChannelFilter === 'virtual-live') return plan.deliveryType === 'virtual-live';
    if (activeChannelFilter === 'in-person') return plan.deliveryType === 'in-person-workshop' || plan.deliveryType === 'corporate-onsite' || plan.deliveryType === 'keynote';
    return true;
  });

  return (
    <section 
      id="pricing-section" 
      className="py-24 border-b transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)] border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--accent-red-safe)]/30 bg-[var(--accent-red-subtle)] text-[var(--accent-red-strong)] text-[10px] font-bold uppercase tracking-[0.22em]">
            <span>{t('pricing.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.06em] text-[var(--text-primary)]">
            {t('pricing.title')}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            {t('pricing.subtitle')}
          </p>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 opacity-80 filter grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-auto flex items-center justify-center font-black text-xl italic tracking-tighter text-[#00AFEF]">
                M-PESA
              </div>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Tanzania & Kenya</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-auto flex items-center justify-center font-black text-xl italic tracking-tighter text-[#EECC00]">
                Tigo Pesa
              </div>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Tanzania</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-auto flex items-center justify-center font-black text-xl italic tracking-tighter text-[#FF0000]">
                airtel Money
              </div>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">East Africa</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-auto flex items-center justify-center font-black text-xl italic tracking-tighter text-[var(--text-muted)]">
                VISA / MC
              </div>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">International</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: t('pricing.tabs.all')},
              { id: 'mobile', label: t('pricing.tabs.mobile')},
              { id: 'self-paced', label: t('pricing.tabs.selfPaced')},
              { id: 'virtual-live', label: t('pricing.tabs.virtualLive')},
              { id: 'in-person', label: t('pricing.tabs.inPerson')}
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveChannelFilter(tab.id as any)}
                className={`px-3.5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all border ${
                  activeChannelFilter === tab.id
                    ? 'bg-[var(--accent-red)] border-[var(--accent-red)] text-white shadow-[0_12px_30px_rgba(255,59,48,0.28)]'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-color)]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pt-2 inline-flex items-center p-1 rounded-full border shadow-sm border-[var(--border-color)] bg-[var(--bg-secondary)]">
            {(['TSH', 'KES', 'USD'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all ${
                  currency === curr 
                    ? 'bg-[var(--accent-red)] text-white shadow-[0_10px_24px_rgba(255,59,48,0.3)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {curr === 'TSH' ? t('pricing.currency.tsh') : curr === 'KES' ? t('pricing.currency.kes') : t('pricing.currency.usd')}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-3 max-w-4xl mx-auto pt-3 text-left text-[var(--text-secondary)]">
            {[
              { title: t('pricing.guidance.access.title'), text: t('pricing.guidance.access.text')},
              { title: t('pricing.guidance.confidence.title'), text: t('pricing.guidance.confidence.text')},
              { title: t('pricing.guidance.human.title'), text: t('pricing.guidance.human.text')}
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border p-4 border-[var(--border-color)] bg-[var(--bg-card)]">
                <div className="mb-1 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[var(--accent-red-strong)]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs leading-relaxed text-[var(--text-muted)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`grid gap-6 items-stretch ${
          filteredPlans.length === 1 
            ? 'max-w-md mx-auto md:grid-cols-1' 
            : filteredPlans.length === 2 
            ? 'max-w-4xl mx-auto md:grid-cols-2' 
            : filteredPlans.length === 3 
            ? 'md:grid-cols-3' 
            : 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}>
          {filteredPlans.map((plan) => {
            const isPopular = plan.popular;
            const membershipLabel = plan.deliveryType === 'mobile-first'
              ? t('pricing.labels.mobileStarter')
              : plan.deliveryType === 'self-paced'
              ? t('pricing.labels.selfPaced')
              : plan.deliveryType === 'virtual-live'
              ? t('pricing.labels.liveCohort')
              : plan.deliveryType === 'keynote'
              ? t('pricing.labels.events')
              : t('pricing.labels.teams');

            const planKey = plan.id.split('-')[0]; // Simple mapping logic
            const localizedName = t(`pricing.plans.${planKey}.name`, { defaultValue: plan.name });
            const localizedTagline = t(`pricing.plans.${planKey}.tagline`, { defaultValue: plan.tagline });
            const localizedBadge = t(`pricing.plans.${planKey}.badge`, { defaultValue: plan.badge });
            const localizedCta = t(`pricing.plans.${planKey}.cta`, { defaultValue: plan.ctaText });
            const localizedHighlight = t(`pricing.plans.${planKey}.highlight`, { defaultValue: plan.highlightNote });

            // Map billing periods
            let localizedBilling = plan.billingPeriod;
            if (plan.billingPeriod.includes('month')) localizedBilling = t('pricing.labels.perMonth');
            else if (plan.billingPeriod.includes('year')) localizedBilling = t('pricing.labels.perYear');
            else if (plan.billingPeriod.includes('workshop')) localizedBilling = t('pricing.labels.perWorkshop');
            else if (plan.billingPeriod.includes('corporate')) localizedBilling = t('pricing.labels.perCohort');
            else if (plan.billingPeriod.includes('keynote')) localizedBilling = t('pricing.labels.perKeynote');

            return (
              <div
                key={plan.id}
                className={`group relative min-w-0 overflow-hidden rounded-[2rem] border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 glass-card ${
                  isPopular 
                    ? 'border-[var(--accent-red-safe)]/60 shadow-[0_26px_80px_rgba(255,59,48,0.16)] lg:-translate-y-1'
                    : 'border-[var(--border-color)] hover:border-[var(--border-color)]'
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,59,48,0.10),transparent_35%)]" />
                <div className="relative z-10 space-y-5">
                  {localizedBadge && (
                    <div className="inline-flex items-center rounded-full bg-[var(--accent-red)] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-white shadow-[0_10px_25px_rgba(255,59,48,0.3)]">
                      {localizedBadge}
                    </div>
                  )}

                  <div className="flex min-w-0 items-start justify-between gap-2">
                    <div className="inline-flex min-w-0 items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                      {getChannelIcon(plan.deliveryType)}
                      <span className="min-w-0 break-words">{plan.deliveryChannel}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                      {membershipLabel}
                    </div>
                    <h3 className="text-xl font-black tracking-[-0.05em] text-[var(--text-primary)]">{localizedName}</h3>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{localizedTagline}</p>
                  </div>

                  <div className="pb-4 border-b border-[var(--border-color)]">
                    <div className="text-3xl font-black tracking-[-0.06em] text-[var(--text-primary)]">
                      {formatPrice(plan)}
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      {localizedBilling}
                    </div>

                    {plan.bandwidthRequirement && (
                      <div className="mt-2 flex min-w-0 items-start gap-1.5 text-[10px] font-semibold text-[var(--text-muted)]">
                        <Wifi className="w-3 h-3 text-[var(--accent-red-strong)]" />
                        <span className="min-w-0 break-words">{t('pricing.labels.bandwidth', { value: plan.bandwidthRequirement })}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">
                      {t('pricing.labels.included')}
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-strong)] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2">
                        {plan.notIncluded.map((notFeat, nIdx) => (
                          <div key={nIdx} className="flex items-start gap-2 text-sm text-[var(--text-muted)] line-through">
                            <X className="w-4 h-4 text-[var(--text-muted)] shrink-0 mt-0.5" />
                            <span className="leading-snug">{notFeat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-[var(--border-color)]">
                  <button
                    onClick={() => openBookingModal({ 
                      program: `Plan: ${localizedName} (${formatPrice(plan)})`,
                      format: plan.deliveryChannel
                    })}
                    className={`w-full py-3.5 px-4 rounded-full text-[10px] font-black uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-[var(--accent-red)] hover:bg-[var(--accent-red-hover)] text-white shadow-[0_14px_30px_rgba(255,59,48,0.35)]'
                        : 'bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-colors duration-200 text-[var(--text-primary)] border border-[var(--border-color)]'
                    }`}
                  >
                    <span>{localizedCta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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

