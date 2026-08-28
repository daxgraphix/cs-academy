import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Building2, 
  ShieldCheck, 
  GraduationCap,
  HeartHandshake, 
  Landmark, 
  FileText, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Award
} from 'lucide-react';

interface ForOrganizationsSectionProps {
  openBookingModal: (prefill?: { program?: string; format?: string; organizationType?: string }) => void;
}

export const ForOrganizationsSection: React.FC<ForOrganizationsSectionProps> = ({
  openBookingModal
}) => {
  const { theme, t } = useApp();

  const corporateServices = [
    { 
      title: 'Corporate AI Training',
      icon: Award,
      desc: 'Upskill departments on daily generative productivity, data synthesis, and prompting.'},
    { 
      title: 'Cybersecurity Awareness', 
      icon: ShieldCheck, 
      desc: 'Train staff to neutralize phishing, credential compromise, and mobile fraud.'},
    { 
      title: 'Executive AI Briefings', 
      icon: Award, 
      desc: 'Strategic 90-minute briefings for C-Suite, Boards, and Permanent Secretaries.'},
    { 
      title: 'University Capacity Building', 
      icon: GraduationCap, 
      desc: 'Integrate practical AI tools and ethical research standards for academic faculty.'},
    { 
      title: 'NGO Digital Skills', 
      icon: HeartHandshake, 
      desc: 'Accelerate donor reporting, proposal drafting, and field coordination.'},
    { 
      title: 'Government Workshops', 
      icon: Landmark, 
      desc: 'Equip civil servants with digital public administration and data governance skills.'},
    { 
      title: 'AI Policy & Governance', 
      icon: FileText, 
      desc: 'Help your leadership formulate clear, legally compliant internal AI usage policies.'},
    { 
      title: 'Digital Safety Retainers', 
      icon: Lock, 
      desc: 'Continuous quarterly cyber hygiene drills and deepfake readiness briefings.'}
  ];

  return (
    <section 
      id="for-organizations-section" 
      className="py-24 border-y border-[var(--border-color)] transition-colors duration-300 relative bg-[var(--bg-secondary)] text-[var(--text-primary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-red-subtle)] border border-[var(--accent-red-strong)]/20 text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.organizations.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {t.organizations.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            {t.organizations.subtitle}
          </p>
        </div>

        {/* Corporate Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {corporateServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-[2rem] border border-[var(--border-color)] transition-all duration-200 hover:-translate-y-1 space-y-3 flex flex-col justify-between shadow-sm hover:border-[var(--accent-red-strong)]/30"
              >
                <div className="space-y-2.5">
                  <div className="w-11 h-11 rounded-2xl border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-red-strong)] bg-[var(--bg-primary)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[var(--text-primary)]">{service.title}</h3>
                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{service.desc}</p>
                </div>
                <button
                  onClick={() => openBookingModal({ program: service.title, organizationType: 'Corporate/Enterprise' })}
                  className="text-left text-xs font-bold text-[var(--accent-red-strong)] hover:text-[var(--accent-red)] flex items-center gap-1 pt-2 transition-colors"
                >
                  <span>Request Outline</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner / Value Card */}
        <div className="border border-[var(--border-color)] rounded-[2rem] p-8 sm:p-12 shadow-2xl bg-[var(--bg-tertiary)] relative overflow-hidden">
          {/* Subtle Decorative Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-red-subtle)] to-transparent opacity-50 pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold text-[var(--accent-red-strong)] uppercase">
                Institutional Partnership
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                Equip your organization with practical, safe AI & cybersecurity competencies.
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-strong)] shrink-0" />
                  <span>Customized to your internal tech stack</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-strong)] shrink-0" />
                  <span>Pre & Post training impact assessments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-strong)] shrink-0" />
                  <span>Confidentiality & NDA compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-red-strong)] shrink-0" />
                  <span>Official Certificates of Completion</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <button
                id="btn-request-corporate-proposal"
                onClick={() => openBookingModal({ program: 'Corporate AI & Security Workforce Training' })}
                className="w-full py-4 px-6 text-xs font-extrabold text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] rounded-2xl shadow-lg hover:shadow-red-900/40 uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>REQUEST CORPORATE PROPOSAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="btn-book-consultation"
                onClick={() => openBookingModal({ program: 'Executive Consultation' })}
                className="w-full py-3 px-6 text-xs font-bold rounded-2xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all uppercase tracking-wider text-center"
              >
                BOOK A CONSULTATION
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
