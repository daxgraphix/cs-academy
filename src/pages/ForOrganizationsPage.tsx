import React from 'react';
import { 
  corporateOfferingsData, 
  industrySolutionsData, 
  trainingProcessSteps 
} from '../data/organizationIndustries';
import { trainingPackagesData } from '../data/training';
import { 
  Building2, 
  ShieldCheck, 
  GraduationCap, 
  HeartHandshake, 
  Landmark, 
  Store, 
  ArrowRight, 
  CheckCircle2, 
  Clock,
  Layers
} from 'lucide-react';

interface ForOrganizationsPageProps {
  openBookingModal: (prefill?: { program?: string; organizationType?: string; duration?: string }) => void;
}

export const ForOrganizationsPage: React.FC<ForOrganizationsPageProps> = ({
  openBookingModal
}) => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#DC2626]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#DC2626]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#DC2626]" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-[#DC2626]" />;
      case 'Store':
        return <Store className="w-5 h-5 text-[#DC2626]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#DC2626]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#DC2626]" />;
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#0B0B0B] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-900/60 text-[#DC2626] text-xs font-bold uppercase tracking-widest">
            <span>Enterprise, Academic & Public Sector Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            FOR <span className="text-[#DC2626]">ORGANIZATIONS</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Equip your entire workforce, academic faculty, or institutional leadership with tailored AI capability and cyber resilience.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openBookingModal({ program: 'Institutional / Corporate Workforce Proposal' })}
              className="px-8 py-3.5 rounded-xl font-extrabold text-xs text-white bg-[#B91C1C] hover:bg-[#DC2626] uppercase tracking-wider shadow-lg inline-flex items-center gap-2"
            >
              <span>REQUEST INSTITUTIONAL PROPOSAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Corporate Core Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corporateOfferingsData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#171717] border border-neutral-800 space-y-4 flex flex-col justify-between shadow-xl"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#DC2626] uppercase">
                  {item.badge}
                </span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.description}</p>
                
                <div className="space-y-1.5 pt-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => openBookingModal({ program: item.title, organizationType: item.badge })}
                  className="w-full py-2.5 px-3 text-xs font-bold text-neutral-300 hover:text-white bg-[#0B0B0B] hover:bg-neutral-800 border border-neutral-800 rounded-xl transition-colors uppercase tracking-wider"
                >
                  Inquire This Track
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Industry-Specific Tailoring */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Solutions by Sector & Industry
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Curricula fine-tuned for the regulatory, operational, and language realities of African institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutionsData.map((sol) => (
              <div
                key={sol.id}
                className="p-6 rounded-2xl bg-[#171717] border border-neutral-800 space-y-4 shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0B0B0B] border border-neutral-800 flex items-center justify-center">
                    {getIndustryIcon(sol.icon)}
                  </div>
                  <h3 className="text-lg font-bold text-white">{sol.name}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">{sol.description}</p>
                  
                  <div className="p-3 rounded-xl bg-[#0B0B0B] border border-neutral-800 text-xs text-neutral-300 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Critical Needs:</span>
                    <ul className="space-y-1 text-[11px] text-neutral-400 list-disc list-inside pl-1 marker:text-[#DC2626]">
                      {sol.criticalNeeds.slice(0, 3).map((need, nIdx) => (
                        <li key={nIdx}>{need}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => openBookingModal({ program: `${sol.name} Customized Program`, organizationType: sol.name })}
                  className="w-full py-2.5 px-3 text-xs font-bold text-[#DC2626] hover:text-white bg-[#0B0B0B] hover:bg-[#B91C1C] border border-neutral-800 rounded-xl transition-colors uppercase tracking-wider text-center"
                >
                  Request {sol.name} Syllabus
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Training Packages */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Corporate & Institutional Package Tiers
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Select the engagement scope that fits your team's timeline and readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPackagesData.slice(0, 6).map((pkg) => (
              <div
                key={pkg.id}
                className="p-6 rounded-2xl bg-[#171717] border border-neutral-800 space-y-4 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-[#DC2626] uppercase">
                    {pkg.category} Package
                  </span>
                  <h3 className="text-lg font-extrabold text-white">{pkg.title}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">{pkg.tagline}</p>
                  
                  <div className="space-y-1 text-xs text-neutral-400 pt-1">
                    <div><strong>Duration:</strong> {pkg.durations.join(' or ')}</div>
                    <div><strong>Formats:</strong> {pkg.formats.join(', ')}</div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    {pkg.keyOutcomes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <button
                    onClick={() => openBookingModal({ program: pkg.title, duration: pkg.durations[0] })}
                    className="w-full py-2.5 px-3 text-xs font-bold text-white bg-[#B91C1C] hover:bg-[#DC2626] rounded-xl transition-colors uppercase tracking-wider"
                  >
                    Select This Tier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Step How We Work */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our 5-Step Delivery Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              How we take your organization from initial assessment to sustained skill adoption.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {trainingProcessSteps.map((step, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#171717] border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#DC2626]">Step {step.step}</span>
                  <span className="text-[10px] uppercase font-bold text-neutral-500 font-mono">{step.name}</span>
                </div>
                <h3 className="text-sm font-bold text-white">{step.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#171717] border border-neutral-800 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Upskill Your Institution?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto">
            Contact us for a formal training proposal, curriculum syllabus, and customized delivery schedule.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openBookingModal({ program: 'Institutional Consultation & Customized Training Proposal' })}
              className="px-8 py-3.5 rounded-xl font-extrabold text-xs text-white bg-[#B91C1C] hover:bg-[#DC2626] uppercase tracking-wider shadow-lg"
            >
              Schedule Institutional Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
