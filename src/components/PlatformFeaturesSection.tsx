import React, { useState } from 'react';
import { platformFeaturesData } from '../data/platformFeatures';
import { useApp } from '../context/AppContext';
import { 
  Video, 
  CheckSquare, 
  Award, 
  ShoppingBag, 
  Radio, 
  Gift, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  QrCode, 
  Users,
  Building2,
  Layers,
  ShieldCheck,
  PlayCircle
} from 'lucide-react';

interface PlatformFeaturesSectionProps {
  openBookingModal: (prefill?: { program?: string }) => void;
}

export const PlatformFeaturesSection: React.FC<PlatformFeaturesSectionProps> = ({
  openBookingModal
}) => {
  const { language, theme } = useApp();
  const [activeFeatureId, setActiveFeatureId] = useState<string>('video-courses');
  const getFeatureIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Video':
        return <Video className={className} />;
      case 'CheckSquare':
        return <CheckSquare className={className} />;
      case 'Award':
        return <Award className={className} />;
      case 'ShoppingBag':
        return <ShoppingBag className={className} />;
      case 'Radio':
        return <Radio className={className} />;
      case 'Gift':
        return <Gift className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'Building2':
        return <Building2 className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  const activeFeature = platformFeaturesData.find(f => f.id === activeFeatureId) || platformFeaturesData[0];

  return (
    <section 
      id="platform-features" 
      className={`py-24 border-b transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#0B0B0B] text-white border-neutral-800' : 'bg-white text-neutral-900 border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-[#DC2626] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'sw' ? 'Sifa za Jukwaa' : 'Platform Features'}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-neutral-950'
          }`}>
            {language === 'sw' ? (
              <>KILA UNACHOHITAJI ILI <span className="text-[#DC2626]">UFANIKIWE</span></>
            ) : (
              <>EVERYTHING YOU NEED TO <span className="text-[#DC2626]">SUCCEED</span></>
            )}
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
          }`}>
            {language === 'sw'
              ? 'Jukwaa letu limebuniwa kwa lengo moja: kufanya stadi za kidijitali ziweze kufikiwa na kila mzungumzaji wa Kiswahili Afrika Mashariki.'
              : 'Our platform is built with one goal: to make digital skills accessible to every Swahili speaker in East Africa.'}
          </p>
        </div>

        {/* Practical capability catalogue */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platformFeaturesData.map((feature) => {
            const isSelected = activeFeatureId === feature.id;
            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => setActiveFeatureId(feature.id)}
                aria-pressed={isSelected}
                aria-label={`${language === 'sw' ? 'Tazama uwezo wa' : 'View capability'} ${feature.title}`}
                className={`w-full p-7 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden shadow-sm hover:-translate-y-1 ${
                  isSelected 
                    ? theme === 'dark'
                      ? 'bg-[#171717] border-[#DC2626] shadow-2xl ring-1 ring-[#DC2626]/40'
                      : 'bg-white border-red-500 shadow-xl ring-2 ring-red-500/20'
                    : theme === 'dark'
                    ? 'bg-[#121212] border-neutral-800 hover:border-neutral-700 hover:bg-[#171717]'
                    : 'bg-neutral-50 border-neutral-200 hover:border-red-200 hover:bg-white'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      isSelected 
                        ? 'bg-[#DC2626] text-white shadow-lg shadow-red-900/40' 
                        : theme === 'dark'
                        ? 'bg-[#0B0B0B] border border-neutral-800 text-[#DC2626]'
                        : 'bg-red-50 border border-red-100 text-[#DC2626]'
                    }`}>
                      {getFeatureIcon(feature.icon)}
                    </div>
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                      theme === 'dark' ? 'text-neutral-400 bg-[#0B0B0B] border-neutral-800' : 'text-neutral-700 bg-white border-neutral-200'
                    }`}>
                      {feature.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{feature.title}</h3>
                    <p className={`text-xs sm:text-sm leading-relaxed mt-2 ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {feature.shortDescription}
                    </p>
                  </div>

                  <ul className={`space-y-2 pt-2 border-t ${theme === 'dark' ? 'border-neutral-800/80' : 'border-neutral-200'}`}>
                    {feature.points.slice(0, 3).map((pt, pIdx) => (
                      <li key={pIdx} className={`flex items-start gap-2 text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`pt-5 mt-4 border-t flex items-center justify-between text-xs font-bold text-[#DC2626] ${
                  theme === 'dark' ? 'border-neutral-800/60' : 'border-neutral-200'
                }`}>
                  <span className={`text-[11px] italic font-normal ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {feature.swahiliNote}
                  </span>
                  <span className="shrink-0 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    {isSelected ? (language === 'sw' ? 'Imechaguliwa' : 'Selected') : (language === 'sw' ? 'Tazama' : 'View Detail')} →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Feature Spotlight / Detail View Panel */}
        <div className={`p-8 sm:p-12 rounded-3xl border shadow-2xl relative overflow-hidden ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-[#171717] to-[#121212] border-neutral-800'
            : 'bg-gradient-to-r from-neutral-50 to-white border-neutral-200 shadow-neutral-200'
        }`}>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded border text-[11px] font-mono text-[#DC2626] font-bold uppercase ${
                theme === 'dark' ? 'bg-[#0B0B0B] border-neutral-800' : 'bg-white border-neutral-200'
              }`}>
                <span>{language === 'sw' ? 'Uwezo Uliochaguliwa' : 'Featured Breakdown'}</span>
                <span className="text-neutral-500">/</span>
                <span>{activeFeature.badge}</span>
              </div>
              <h3 className={`text-2xl sm:text-3xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                {activeFeature.title}
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {activeFeature.fullDescription}
              </p>

              <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-bold uppercase tracking-[0.14em] ${
                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
              }`}>
                <span>{language === 'sw' ? 'Ujuzi wa vitendo' : 'Practical skill building'}</span>
                <span>{language === 'sw' ? 'Msaada wa binadamu' : 'Human guidance'}</span>
                <span>{language === 'sw' ? 'Muktadha wa Afrika Mashariki' : 'East African context'}</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {activeFeature.points.map((point, idx) => (
                  <div key={idx} className={`flex items-start gap-2.5 p-3 rounded-2xl border ${
                    theme === 'dark' ? 'bg-[#0B0B0B] border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                    <span className={`text-xs leading-snug ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => openBookingModal({ program: `Enroll via ${activeFeature.title}` })}
                  className="px-7 py-3.5 rounded-2xl font-extrabold text-xs text-white bg-[#B91C1C] hover:bg-[#DC2626] uppercase tracking-wider shadow-lg inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>{language === 'sw' ? `Anza na ${activeFeature.title}` : `Get Started with ${activeFeature.title}`}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Visual Preview on the Right */}
            <div className={`lg:col-span-5 border rounded-3xl p-6 space-y-4 shadow-inner ${
              theme === 'dark' ? 'bg-[#0B0B0B] border-neutral-800' : 'bg-white border-neutral-200'
            }`}>
              {activeFeature.id === 'video-courses' && (
                <div className="space-y-3 text-center">
                  <div className="aspect-video bg-neutral-900 rounded-2xl border border-neutral-800 flex flex-col items-center justify-center p-4 relative group overflow-hidden">
                    <div className="w-14 h-14 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold text-neutral-200 mt-2">Kiswahili Tech Video Player</span>
                    <span className="text-[10px] text-neutral-400">HD Streaming • Low Data Mode</span>
                  </div>
                  <div className={`flex items-center justify-between text-xs px-1 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    <span>HD Video Streaming</span>
                    <span>100% Swahili Audio</span>
                  </div>
                </div>
              )}

              {activeFeature.id === 'quizzes-assessment' && (
                <div className="space-y-3">
                  <div className={`p-4 rounded-2xl border space-y-2 ${
                    theme === 'dark' ? 'bg-[#171717] border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                  }`}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#DC2626]">Moduli 3: Swahili AI & Prompting</span>
                      <span className={`font-mono ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>10/10 Score</span>
                    </div>
                    <p className={`text-xs ${theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'}`}>Swali: Ni kigezo kipi cha msingi katika S.M.A.R.T. Framework ya CyberSwahili?</p>
                    <div className="space-y-1 text-xs">
                      <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>A. Structure - Muundo thabiti wa muktadha (Sahihi)</span>
                      </div>
                    </div>
                  </div>
                  <div className={`text-[11px] text-center ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    Instant auto-scoring with explanations
                  </div>
                </div>
              )}

              {activeFeature.id === 'pdf-certificates' && (
                <div className={`p-5 rounded-2xl border space-y-3 text-center ${
                  theme === 'dark'
                    ? 'bg-gradient-to-b from-[#171717] to-[#0E0E0E] border-neutral-800'
                    : 'bg-gradient-to-b from-neutral-50 to-white border-neutral-200 shadow-sm'
                }`}>
                  <div className={`w-12 h-12 mx-auto rounded-2xl border flex items-center justify-center text-[#DC2626] ${
                    theme === 'dark' ? 'bg-[#0B0B0B] border-neutral-800' : 'bg-red-50 border-red-100'
                  }`}>
                    <QrCode className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>Certificate of Completion</h4>
                    <p className={`text-[11px] ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'}`}>Awarded to Learner • CS Academy</p>
                  </div>
                  <div className={`p-2 rounded-xl text-[10px] font-mono border ${
                    theme === 'dark' ? 'bg-[#0B0B0B] text-emerald-400 border-emerald-900/40' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}>
                    VERIFIED ID: CSA-2026-8942-SWAHILI
                  </div>
                </div>
              )}

              {activeFeature.id === 'digital-shop' && (
                <div className="space-y-2">
                  <div className={`p-3.5 rounded-2xl border flex items-center justify-between ${
                    theme === 'dark' ? 'bg-[#171717] border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                  }`}>
                    <div className="flex items-center gap-2.5">
                      <ShoppingBag className="w-4 h-4 text-[#DC2626]" />
                      <span className={`text-xs font-bold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>50+ Swahili Prompt Packs</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">FREE in Premium</span>
                  </div>
                  <div className={`p-3.5 rounded-2xl border flex items-center justify-between ${
                    theme === 'dark' ? 'bg-[#171717] border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                  }`}>
                    <div className="flex items-center gap-2.5">
                      <ShoppingBag className="w-4 h-4 text-[#DC2626]" />
                      <span className={`text-xs font-bold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>Web Starter UI Kit (React)</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">FREE in Premium</span>
                  </div>
                </div>
              )}

              {activeFeature.id !== 'video-courses' && activeFeature.id !== 'quizzes-assessment' && activeFeature.id !== 'pdf-certificates' && activeFeature.id !== 'digital-shop' && (
                <div className={`p-6 rounded-2xl border text-center space-y-3 ${
                  theme === 'dark' ? 'bg-[#171717] border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                }`}>
                  <div className={`w-12 h-12 mx-auto rounded-2xl border flex items-center justify-center text-[#DC2626] ${
                    theme === 'dark' ? 'bg-[#0B0B0B] border-neutral-800' : 'bg-white border-neutral-200'
                  }`}>
                    {getFeatureIcon(activeFeature.icon)}
                  </div>
                  <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{activeFeature.title}</h4>
                  <p className={`text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>{activeFeature.shortDescription}</p>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
