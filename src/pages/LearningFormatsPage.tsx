import React from 'react';
import { learningFormatsData } from '../data/learningFormats';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/SEO';
import {
  Video, 
  MonitorPlay, 
  MessageSquare, 
  Mic, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Wifi
} from 'lucide-react';

interface LearningFormatsPageProps {
  openBookingModal: (prefill?: { format?: string; program?: string }) => void;
}

export const LearningFormatsPage: React.FC<LearningFormatsPageProps> = ({
  openBookingModal
}) => {
  const { theme, currency, setCurrency, dictionary } = useApp();
  const t = dictionary ?? {} as typeof dictionary;

  const getFormatPrice = (format: typeof learningFormatsData[0]) => {
    if (currency === 'TSH') {
      return format.priceStartingTsh === 'Custom' 
        ? t.formats?.labels.customQuote
        : `${format.priceStartingTsh} Tsh`;
    }
    if (currency === 'KES') {
      return format.priceStartingKes === 'Custom' 
        ? t.formats?.labels.customQuote
        : `${format.priceStartingKes} KSh`;
    }
    return format.priceStartingUsd === 'Custom' 
      ? t.formats?.labels.customQuote
      : `$${format.priceStartingUsd}`;
  };

  const getFormatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-6 h-6 text-[var(--accent-red-strong)]" />;
      case 'MonitorPlay':
        return <MonitorPlay className="w-6 h-6 text-[var(--accent-red-strong)]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-[var(--accent-red-strong)]" />;
      case 'Mic':
        return <Mic className="w-6 h-6 text-[var(--accent-red-strong)]" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-[var(--accent-red-strong)]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[var(--accent-red-strong)]" />;
      default:
        return <Video className="w-6 h-6 text-[var(--accent-red-strong)]" />;
    }
  };

  const formats = t.formats?.items ?? [];

  return (
    <div className="pt-28 pb-20 min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SEO
        title={t.formats?.seo?.title}
        description={t.formats?.seo?.description}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-red-subtle)] border border-[var(--accent-red-strong)]/20 text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-wider">
            <span>{t.formats?.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {t.formats?.titlePart1} <span className="text-[var(--accent-red-safe)]">{t.formats?.titleHighlight}</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            {t.formats?.subtitle}
          </p>

          {/* Currency Toggle */}
          <div className="pt-2 inline-flex items-center p-1 rounded-2xl border border-[var(--border-color)] transition-colors shadow-sm glass-card">
            {(['TSH', 'KES', 'USD'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all ${
                  currency === curr 
                    ? 'bg-[var(--accent-red-strong)] text-white shadow-md'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {curr === 'TSH' ? 'TZS' : curr === 'KES' ? 'KES' : 'USD'}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Formats In-Depth Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningFormatsData.map((format) => {
            const localizedFormat = formats[format.id as keyof typeof formats];
            return (
              <div
                key={format.id}
                className="rounded-[2rem] p-8 flex flex-col justify-between shadow-lg space-y-6 group transition-all duration-200 glass-card border-[var(--border-color)] hover:border-[var(--accent-red-strong)]/30"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                      {getFormatIcon(format.icon)}
                    </div>
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)]">
                      {localizedFormat.bestFor}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-black text-[var(--text-primary)]">{localizedFormat.title}</h3>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{localizedFormat.description}</p>
                  </div>

                  {/* Specs Box */}
                  <div className="p-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] space-y-2 text-xs font-mono text-[var(--text-secondary)]">
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-muted)]">{t.formats?.labels.bandwidth}</span>
                      <span className="font-bold flex items-center gap-1">
                        <Wifi className="w-3.5 h-3.5 text-[var(--accent-red-strong)]" />
                        {localizedFormat.bandwidthLevel}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-muted)]">{t.formats?.labels.channel}</span>
                      <span className="font-bold">{localizedFormat.channelName}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[var(--text-muted)]">{t.formats?.labels.pricing}</span>
                      <span className="font-bold text-[var(--success-strong)]">{localizedFormat.pricingLabel}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      {t.formats?.labels.capabilities}
                    </span>
                    {localizedFormat.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-strong)] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Price & Action */}
                <div className="pt-6 border-t border-[var(--border-color)] space-y-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
                      {t.formats?.labels.tuition}
                    </div>
                    <div className="text-2xl font-black text-[var(--text-primary)]">
                      {getFormatPrice(format)}
                    </div>
                  </div>

                  <button
                    onClick={() => openBookingModal({
                      format: localizedFormat.title,
                      program: t.formats?.labels.deliveryTrack.replace('{{title}}', localizedFormat.title)
                    })}
                    className="w-full py-3.5 px-4 rounded-2xl text-xs font-extrabold uppercase tracking-wider text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <span>{t.formats?.labels.selectTrack}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
