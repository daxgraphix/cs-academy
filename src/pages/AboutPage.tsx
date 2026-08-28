import React from 'react';
import { SEO } from '../components/SEO';
import { siteConfig } from '../config/site';
import { useApp } from '../context/AppContext';
import { instructorsData } from '../data/instructors';
import { 
  ShieldCheck, 
  Globe2, 
  Quote, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Users, 
  Award,
  BookOpen,
  Smartphone,
  Video,
  Code,
  Palette,
  TrendingUp,
  CreditCard,
  MessageCircle,
  Phone,
  Star,
  Linkedin,
  Twitter,
  Github,
  GraduationCap
} from 'lucide-react';

interface AboutPageProps {
  openBookingModal: (prefill?: { program?: string }) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  openBookingModal
}) => {
  const { theme, dictionary } = useApp();
  const t = dictionary;

  return (
    <div className="pt-28 pb-20 min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SEO
        title="About Us"
        description="Learn about CS Academy's mission to empower East Africa with practical digital skills, AI literacy, and cybersecurity resilience."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero / Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-red-subtle)] border border-[var(--accent-red-safe)]/20 text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-wider">
            <span>{t.about.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {t.about.titlePart1}<span className="text-[var(--accent-red-safe)]">{t.about.titleHighlight}</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            {t.about.subtitle}
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-[2rem] border space-y-4 shadow-xl relative overflow-hidden group transition-all bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/30 glass-card">
            <div className="w-12 h-12 rounded-2xl border flex items-center justify-center text-[var(--accent-red-safe)] bg-[var(--bg-primary)] border-[var(--border-subtle)]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[var(--accent-red-strong)] uppercase tracking-wider">
              {t.about.purpose.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
              {t.about.purpose.title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              {t.about.purpose.description}
            </p>
            <div className="pt-2 text-xs flex items-center gap-2 text-[var(--text-muted)]">
              <CheckCircle2 className="w-4 h-4 text-[var(--success-strong)]" />
              <span>Language should never be a barrier to learning technology.</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-[2rem] border space-y-4 shadow-xl relative overflow-hidden group transition-all bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/30 glass-card">
            <div className="w-12 h-12 rounded-2xl border flex items-center justify-center text-[var(--accent-red-safe)] bg-[var(--bg-primary)] border-[var(--border-subtle)]">
              <Globe2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[var(--accent-red-strong)] uppercase tracking-wider">
              {t.about.vision.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
              {t.about.vision.title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              {t.about.vision.description}
            </p>
            <div className="pt-2 text-xs flex items-center gap-2 text-[var(--text-muted)]">
              <CheckCircle2 className="w-4 h-4 text-[var(--success-strong)]" />
              <span>Equipping millions to thrive in the global digital economy.</span>
            </div>
          </div>
        </div>

        {/* 3 Core Academies */}
        <div className="p-8 sm:p-12 rounded-[2rem] border space-y-8 shadow-2xl bg-[var(--bg-secondary)] border-[var(--border-color)] glass-card">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border text-[11px] font-mono text-[var(--accent-red-strong)] font-bold uppercase bg-[var(--bg-primary)] border-[var(--border-subtle)]">
              {t.about.pillars.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
              {t.about.pillars.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {siteConfig.pillars.map((pillar) => (
              <div key={pillar.id} className="p-6 rounded-2xl border space-y-3 bg-[var(--bg-primary)] border-[var(--border-subtle)]">
                <span className="text-[10px] font-mono font-bold text-[var(--accent-red-strong)] uppercase px-2.5 py-0.5 rounded-full bg-[var(--accent-red-subtle)] border border-[var(--accent-red-safe)]/20">
                  {pillar.badge}
                </span>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">{pillar.name}</h3>
                <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OUR INSTRUCTORS & COURSE CREATORS SECTION */}
        <section id="our-instructors-section" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[var(--accent-red-safe)]/20 bg-[var(--accent-red-subtle)] text-[var(--accent-red-strong)] text-xs font-mono font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t.about.instructors.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
              {t.about.instructors.title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              {t.about.instructors.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructorsData.map((instructor) => {
              const localizedInstructor = t.about.instructors.data[instructor.id as keyof typeof t.about.instructors.data];
              return (
                <div
                  key={instructor.id}
                  id={`instructor-card-${instructor.id}`}
                  className="border rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl transition-all hover:scale-[1.01] bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/30 glass-card"
                >
                  <div className="space-y-4">
                    {/* Avatar & Header */}
                    <div className="flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${instructor.avatarGradient || 'from-red-600 to-black'} p-0.5 shadow-md shrink-0 overflow-hidden`}>
                        {instructor.avatarImage ? (
                          <img
                            src={instructor.avatarImage}
                            alt={instructor.name}
                            loading="lazy"
                            className="w-full h-full object-cover rounded-[14px]"
                          />
                        ) : (
                          <div className="w-full h-full rounded-[14px] bg-[var(--bg-primary)] flex items-center justify-center text-[var(--text-primary)] font-extrabold text-lg">
                            {instructor.avatarInitials}
                          </div>
                        )}
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold text-[var(--accent-red-strong)] uppercase px-2 py-0.5 rounded bg-[var(--accent-red-subtle)] border border-[var(--accent-red-safe)]/20 inline-block">
                          {localizedInstructor.specialtyBadge}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                          {instructor.name}
                        </h3>
                        <p className="text-xs font-medium text-[var(--text-muted)]">
                          {localizedInstructor.role}
                        </p>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {localizedInstructor.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="space-y-2 pt-1">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                        {t.about.instructors.expertiseLabel}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {localizedInstructor.expertise.map((exp, eIdx) => (
                          <span
                            key={eIdx}
                            className="text-[11px] px-2.5 py-1 rounded-lg border font-medium bg-[var(--bg-primary)] border-[var(--border-subtle)] text-[var(--text-secondary)]"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Featured Courses Taught */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                        {t.about.instructors.coursesLabel}
                      </div>
                      <ul className="space-y-1 text-xs">
                        {localizedInstructor.featuredCourses.map((fc, fcIdx) => (
                          <li key={fcIdx} className="flex items-center gap-1.5 text-[11px]">
                            <CheckCircle2 className="w-3 h-3 text-[var(--accent-red-strong)] shrink-0" />
                            <span className="text-[var(--text-secondary)]">{fc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t flex items-center justify-between gap-3 border-[var(--border-color)]">
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {t.about.instructors.experience.replace('{{years}}', instructor.experience.split(' ')[0])}
                    </span>
                    <button
                      onClick={() => openBookingModal({ program: `Training with ${instructor.name}` })}
                      className="px-3.5 py-1.5 rounded-xl bg-[var(--accent-red)] hover:bg-[var(--accent-red-strong)] text-white text-xs font-bold transition-colors shadow flex items-center gap-1"
                    >
                      <span>{t.about.instructors.bookBtn}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Founder Keynote & Speaking Profile */}
        <div className="p-8 sm:p-12 rounded-[2rem] border shadow-xl bg-[var(--bg-secondary)] border-[var(--border-color)] glass-card">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center md:text-left space-y-4">
              <div className="w-32 h-32 mx-auto md:mx-0 rounded-3xl bg-gradient-to-br from-[var(--accent-red-strong)] to-neutral-900 p-1 shadow-lg overflow-hidden">
                <img
                  src="/assets/images/ALEX.jpg"
                  alt="Alex Rweyemamu"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-[22px]"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[var(--text-primary)]">{t.about.founder.name}</h3>
                <p className="text-xs font-mono font-bold text-[var(--accent-red-strong)] mt-1">{t.about.founder.badge}</p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div className="space-y-2">
                <Quote className="w-8 h-8 text-[var(--accent-red-safe)] opacity-60" />
                <p className="text-sm sm:text-base leading-relaxed italic text-[var(--text-secondary)]">
                  "{t.about.founder.quote}"
                </p>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
                {t.about.founder.bio}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openBookingModal({ program: 'Speaking Engagement with Alex Rweyemamu' })}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[var(--accent-red)] hover:bg-[var(--accent-red-strong)] active:scale-[0.98] uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
                >
                  <span>{t.about.founder.bookBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
