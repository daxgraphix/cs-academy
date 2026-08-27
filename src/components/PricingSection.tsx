import React, { useState } from 'react';
import { pricingPlansData, paymentMethods } from '../data/pricing';
import { learningFormatsData } from '../data/learningFormats';
import { useApp } from '../context/AppContext';
import { 
  CheckCircle2, 
  X, 
  Sparkles, 
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
  const { language, theme, currency, setCurrency, t } = useApp();
  const [activeChannelFilter, setActiveChannelFilter] = useState<'all' | 'mobile' | 'self-paced' | 'virtual-live' | 'in-person'>('all');

  const formatPrice = (plan: typeof pricingPlansData[0]) => {
    if (currency === 'TSH') {
      return plan.priceTsh === 'Custom' || plan.priceTsh === '0' 
        ? plan.priceTsh === '0' ? (language === 'sw' ? 'Bure' : 'Free') : (language === 'sw' ? 'Omba Bei' : 'Custom Quote')
        : `${plan.priceTsh} Tsh`;
    }
    if (currency === 'KES') {
      return plan.priceKes === 'Custom' || plan.priceKes === '0' 
        ? plan.priceKes === '0' ? (language === 'sw' ? 'Bure' : 'Free') : (language === 'sw' ? 'Omba Bei' : 'Custom Quote')
        : `${plan.priceKes} KSh`;
    }
    return plan.priceUsd === 'Custom' || plan.priceUsd === '0' 
      ? plan.priceUsd === '0' ? '$0' : (language === 'sw' ? 'Omba Bei' : 'Custom Quote')
      : `$${plan.priceUsd}`;
  };

  const getChannelIcon = (type: string) => {
    switch (type) {
      case 'mobile-first':
        return <MessageSquare className="w-4 h-4 text-emerald-500" />;
      case 'self-paced':
        return <Layers className="w-4 h-4 text-blue-500" />;
      case 'virtual-live':
        return <Video className="w-4 h-4 text-[#DC2626]" />;
      case 'in-person-workshop':
        return <Calendar className="w-4 h-4 text-amber-500" />;
      case 'corporate-onsite':
        return <Building2 className="w-4 h-4 text-purple-500" />;
      case 'keynote':
        return <Mic className="w-4 h-4 text-rose-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#DC2626]" />;
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
      className={`py-24 border-b transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#090909] text-white border-white/10' : 'bg-[#f7f4ee] text-neutral-900 border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#ff3b30]/30 bg-[#ff3b30]/10 text-[#ff3b30] text-[10px] font-bold uppercase tracking-[0.22em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.pricing.badge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-[-0.06em] ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}>
            {t.pricing.title}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
          }`}>
            {t.pricing.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: language === 'sw' ? 'Njia Zote za Mafunzo' : 'All Delivery Channels' },
              { id: 'mobile', label: language === 'sw' ? 'WhatsApp Mobile (Data Ndogo)' : 'WhatsApp Mobile (Data Saver)' },
              { id: 'self-paced', label: language === 'sw' ? 'Jukwaa la Video (Self-Paced)' : 'On-Demand Video Platform' },
              { id: 'virtual-live', label: language === 'sw' ? 'Zoom & Meet Moja kwa Moja' : 'Zoom & Meet Live Cohorts' },
              { id: 'in-person', label: language === 'sw' ? 'Warsha & Ana kwa Ana' : 'Workshops & On-Site (In-Person)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveChannelFilter(tab.id as any)}
                className={`px-3.5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all border ${
                  activeChannelFilter === tab.id
                    ? 'bg-[#ff3b30] border-[#ff3b30] text-white shadow-[0_12px_30px_rgba(255,59,48,0.28)]'
                    : theme === 'dark'
                    ? 'bg-white/5 text-neutral-300 hover:text-white border-white/10'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 border-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={`pt-2 inline-flex items-center p-1 rounded-full border shadow-sm ${
            theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-neutral-200 bg-white/80'
          }`}>
            {(['TSH', 'KES', 'USD'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] transition-all ${
                  currency === curr 
                    ? 'bg-[#ff3b30] text-white shadow-[0_10px_24px_rgba(255,59,48,0.3)]' 
                    : theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {curr === 'TSH' ? 'TZS (Tsh)' : curr === 'KES' ? 'KES (KSh)' : 'USD ($)'}
              </button>
            ))}
          </div>

          <div className={`grid sm:grid-cols-3 gap-3 max-w-4xl mx-auto pt-3 text-left ${
            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
          }`}>
            {[
              { title: language === 'sw' ? 'Chagua kiwango chako' : 'Choose your access level', text: language === 'sw' ? 'Kuanzia kujifunza kwa simu hadi ushiriki wa moja kwa moja.' : 'From mobile-first learning to live instructor access.' },
              { title: language === 'sw' ? 'Lipa kwa njia salama' : 'Plan with confidence', text: language === 'sw' ? 'Bei ni mwongozo; timu inathibitisha ratiba na maelezo kabla ya kujiunga.' : 'Prices are guidance; we confirm schedule and details before enrollment.' },
              { title: language === 'sw' ? 'Pata msaada wa kuchagua' : 'Get a human recommendation', text: language === 'sw' ? 'Tuma ombi na tutakupendekezea njia inayokufaa.' : 'Send an inquiry and we will recommend the best fit.' }
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl border p-4 ${
                theme === 'dark' ? 'border-white/10 bg-white/[0.03]' : 'border-neutral-200 bg-white/70'
              }`}>
                <div className="mb-1 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#ff3b30]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>{item.title}</span>
                </div>
                <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>{item.text}</p>
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
              ? (language === 'sw' ? 'Mwanzo wa simu' : 'Mobile starter')
              : plan.deliveryType === 'self-paced'
              ? (language === 'sw' ? 'Jifunze kwa ratiba yako' : 'Self-paced access')
              : plan.deliveryType === 'virtual-live'
              ? (language === 'sw' ? 'Ushiriki wa moja kwa moja' : 'Live cohort access')
              : plan.deliveryType === 'keynote'
              ? (language === 'sw' ? 'Kwa matukio na viongozi' : 'Events and leadership')
              : (language === 'sw' ? 'Kwa timu na mashirika' : 'Teams and organizations');
            return (
              <div
                key={plan.id}
                className={`group relative min-w-0 overflow-hidden rounded-[2rem] border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  isPopular 
                    ? theme === 'dark'
                      ? 'bg-[#111111] border-[#ff3b30]/60 shadow-[0_26px_80px_rgba(255,59,48,0.16)] lg:-translate-y-1'
                      : 'bg-white border-[#ff3b30]/40 shadow-[0_22px_60px_rgba(255,59,48,0.12)] lg:-translate-y-1'
                    : theme === 'dark'
                    ? 'bg-[#111111] border-white/10 hover:border-white/20'
                    : 'bg-white border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,59,48,0.10),transparent_35%)]" />
                <div className="relative z-10 space-y-5">
                  {plan.badge && (
                    <div className="inline-flex items-center rounded-full bg-[#ff3b30] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-white shadow-[0_10px_25px_rgba(255,59,48,0.3)]">
                      {plan.badge}
                    </div>
                  )}

                  <div className="flex min-w-0 items-start justify-between gap-2">
                    <div className={`inline-flex min-w-0 items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] ${
                      theme === 'dark' ? 'border-white/10 bg-white/5 text-neutral-300' : 'border-neutral-200 bg-neutral-50 text-neutral-700'
                    }`}>
                      {getChannelIcon(plan.deliveryType)}
                      <span className="min-w-0 break-words">{plan.deliveryChannel}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className={`text-[10px] font-bold uppercase tracking-[0.16em] ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'}`}>
                      {membershipLabel}
                    </div>
                    <h3 className={`text-xl font-black tracking-[-0.05em] ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{plan.name}</h3>
                    <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>{plan.tagline}</p>
                  </div>

                  <div className={`pb-4 border-b ${theme === 'dark' ? 'border-white/10' : 'border-neutral-200'}`}>
                    <div className={`text-3xl font-black tracking-[-0.06em] ${theme === 'dark' ? 'text-white' : 'text-neutral-950'}`}>
                      {formatPrice(plan)}
                    </div>
                    <div className={`mt-1 text-[10px] font-bold uppercase tracking-[0.18em] ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'}`}>
                      {language === 'sw' ? plan.billingPeriod.replace('per month', 'kwa mwezi').replace('per year', 'kwa mwaka').replace('per workshop session', 'kwa warsha').replace('per corporate cohort', 'kwa kundi la kampuni').replace('per keynote address', 'kwa hotuba') : plan.billingPeriod}
                    </div>

                    {plan.bandwidthRequirement && (
                      <div className={`mt-2 flex min-w-0 items-start gap-1.5 text-[10px] font-semibold ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                      }`}>
                        <Wifi className="w-3 h-3 text-[#ff3b30]" />
                        <span className="min-w-0 break-words">{language === 'sw' ? 'Data: ' : 'Bandwidth: '}{plan.bandwidthRequirement}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                    }`}>
                      {language === 'sw' ? 'Vilivyojumuishwa kwenye Njia Hii:' : 'Included in this Delivery Option:'}
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className={`flex items-start gap-2 text-sm ${
                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                      }`}>
                        <CheckCircle2 className="w-4 h-4 text-[#ff3b30] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2">
                        {plan.notIncluded.map((notFeat, nIdx) => (
                          <div key={nIdx} className="flex items-start gap-2 text-sm text-neutral-400 line-through">
                            <X className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{notFeat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className={`relative z-10 pt-6 mt-6 border-t ${theme === 'dark' ? 'border-white/10' : 'border-neutral-200'}`}>
                  <button
                    onClick={() => openBookingModal({ 
                      program: `Plan: ${plan.name} (${formatPrice(plan)})`,
                      format: plan.deliveryChannel
                    })}
                    className={`w-full py-3.5 px-4 rounded-full text-[10px] font-black uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-[#ff3b30] hover:bg-[#ff564d] text-white shadow-[0_14px_30px_rgba(255,59,48,0.35)]'
                        : theme === 'dark'
                        ? 'bg-white/5 hover:bg-white/10 text-neutral-200 border border-white/10'
                        : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-neutral-200'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
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


