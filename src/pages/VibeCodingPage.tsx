import React from 'react';
import { SEO } from '../components/SEO';
import { PageRoute } from '../types';
import { useApp } from '../context/AppContext';
import {
  Zap,
  Terminal,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Code2,
  Rocket,
  ShieldCheck,
  MousePointer2,
  BrainCircuit,
  Layers,
  CheckCircle2,
  Cpu,
  Globe2,
  Monitor,
  Smartphone,
  ChevronDown
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface VibeCodingPageProps {
  setCurrentRoute: (route: PageRoute) => void;
  openBookingModal: (prefill?: { program?: string; format?: string }) => void;
}

export const VibeCodingPage: React.FC<VibeCodingPageProps> = ({
  setCurrentRoute,
  openBookingModal
}) => {
  const { theme, language } = useApp();
  const revealRef = useReveal<HTMLDivElement>();

  const isSwahili = language === 'sw';

  const content = {
    hero: {
      badge: isSwahili ? "Mabadiliko ya Ujenzi wa Programu" : "Software Development Revolution",
      title: isSwahili ? "Vibe Coding: Toleo la Kiswahili" : "Vibe Coding: The Swahili Edition",
      subtitle: isSwahili
        ? "Jenga mifumo ya kisasa kwa kutumia mawazo yako na lugha asilia. Ondoa kizuizi cha kujifunza lugha ngumu za msimbo kwa miaka."
        : "Build modern systems using your ideas and natural language. Remove the barrier of learning complex code for years.",
      cta: isSwahili ? "Jiunge na Masterclass" : "Join the Masterclass"
    },
    ide: {
      label: isSwahili ? "Mfano wa Amri (Swahili Prompt)" : "Example Prompt (Swahili)",
      prompt: isSwahili ? "\"Jenga ukurasa wa mapokezi wa biashara ya chakula, weka sehemu ya kuagiza na malipo ya M-Pesa...\"" : "\"Build a landing page for a food business, include an ordering section and M-Pesa payments...\"",
      result: isSwahili ? "AI inatengeneza muundo, kanuni, na muunganisho wa malipo papo hapo." : "AI generates layout, logic, and payment integration instantly."
    },
    tools: {
      title: isSwahili ? "Zana Tunazotumia" : "Tools We Master",
      items: [
        { name: "Cursor AI", desc: isSwahili ? "IDE bora ya AI duniani" : "The world's best AI IDE" },
        { name: "Bolt.new", desc: isSwahili ? "Jenga Full-stack Apps kwa sekunde" : "Build Full-stack Apps in seconds" },
        { name: "v0.dev", desc: isSwahili ? "Uzalishaji wa UI wa haraka" : "Rapid UI generation" },
        { name: "Replit Agent", desc: isSwahili ? "Weka app yako hewani kirahisi" : "Deploy your app with ease" }
      ]
    },
    useCases: {
      title: isSwahili ? "Unaweza Kujenga Nini?" : "What Can You Build?",
      items: [
        { title: isSwahili ? "Tovuti za Biashara" : "Business Websites", desc: isSwahili ? "Maduka ya mtandaoni na mifumo ya kuagiza." : "Online stores and ordering systems." },
        { title: isSwahili ? "Dashibodi za Data" : "Data Dashboards", desc: isSwahili ? "Uchambuzi wa ripoti za mauzo na wateja." : "Analysis of sales and customer reports." },
        { title: isSwahili ? "Mifumo ya Usimamizi" : "Management Systems", desc: isSwahili ? "Kuweka rekodi za hesabu na wafanyakazi." : "Keeping inventory and employee records." },
        { title: isSwahili ? "Apps za Simu" : "Mobile Apps", desc: isSwahili ? "Suluhisho za haraka kwa matatizo ya jamii." : "Quick solutions for community problems." }
      ]
    },
    outcomes: {
      title: isSwahili ? "Matokeo Baada ya Wiki 2" : "Outcomes After 2 Weeks",
      items: [
        { icon: Rocket, t: isSwahili ? "App Yako Hewani" : "Your App Live", d: isSwahili ? "Utatoka na mfumo kamili unaofanya kazi." : "You'll leave with a fully functional system." },
        { icon: ShieldCheck, t: isSwahili ? "Ufahamu wa AI" : "AI Mastery", d: isSwahili ? "Mudu zana kama Cursor na Bolt.new." : "Master tools like Cursor and Bolt.new." },
        { icon: Globe2, t: isSwahili ? "Mjenzi wa Kisasa" : "Modern Builder", d: isSwahili ? "Badili wazo lolote kuwa bidhaa ya kidijitali." : "Turn any idea into a digital product." }
      ]
    },
    faq: [
      {
        q: isSwahili ? "Je, nahitaji kujua Kiingereza?" : "Do I need to know English?",
        a: isSwahili ? "Hapana. Lengo letu ni kukuwezesha kutumia Kiswahili kutoa amri (Prompts) na kuelewa mantiki ya ujenzi." : "No. Our goal is to empower you to use Swahili for prompting and understanding building logic."
      },
      {
        q: isSwahili ? "Vibe Coding ni kwa ajili ya nani?" : "Who is Vibe Coding for?",
        a: isSwahili ? "Wajasiriamali, wanafunzi, na wataalamu wanaotaka kujenga suluhisho za kidijitali bila kusomea msimbo kwa miaka." : "Entrepreneurs, students, and professionals who want to build digital solutions without studying code for years."
      },
      {
        q: isSwahili ? "Je, nitapata cheti?" : "Will I get a certificate?",
        a: isSwahili ? "Ndiyo, utapata cheti cha CS Academy kilichothibitishwa kwa QR baada ya kukamilisha Masterclass." : "Yes, you will receive a QR-verified CS Academy certificate after completing the Masterclass."
      }
    ]
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--accent-red-safe)]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <SEO
        title={content.hero.title}
        description={content.hero.subtitle}
        keywords={isSwahili
          ? "Vibe Coding Tanzania, Jifunze AI Kiswahili, Cursor AI mafunzo, Bolt.new Kiswahili, Ujenzi wa programu bila kodi"
          : "Vibe Coding East Africa, Learn AI in Swahili, Cursor AI tutorial, Bolt.new Africa, No-code software development"}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,var(--accent-red-subtle),transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={revealRef} className="max-w-4xl mx-auto reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--accent-red-safe)]/30 bg-[var(--accent-red-subtle)] text-[var(--accent-red-strong)] text-[11px] font-black uppercase tracking-[0.25em] mb-8">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>{content.hero.badge}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-[-0.06em] mb-8 leading-[0.9] text-balance">
              {content.hero.title.split(':').map((part, i) => (
                <React.Fragment key={i}>
                  {i === 1 ? <span className="text-[var(--accent-red-safe)] block mt-4">{part}</span> : part}
                </React.Fragment>
              ))}
            </h1>

            <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12 text-[var(--text-secondary)]">
              {content.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => openBookingModal({ program: 'Vibe Coding Masterclass' })}
                className="btn-primary px-10 py-5 w-full sm:w-auto text-sm tracking-[0.15em]"
              >
                <span>{content.hero.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals / Mobile Money */}
      <section className="py-12 border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center md:text-left">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--accent-red-strong)] mb-1">Payment Partners</div>
              <div className="text-sm font-bold text-[var(--text-muted)]">
                {isSwahili ? "Lipia kirahisi na Pesa ya Simu" : "Pay easily with Mobile Money"}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-black italic tracking-tighter text-[#00AFEF]">M-PESA</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-black italic tracking-tighter text-[#EECC00]">Tigo Pesa</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-black italic tracking-tighter text-[#FF0000]">airtel Money</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-black italic tracking-tighter text-[var(--text-muted)]">VISA / MC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDE Simulation Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] border border-[var(--border-color)] overflow-hidden shadow-2xl glass-card">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16 space-y-10">
                <div className="inline-flex items-center gap-2 text-[var(--accent-red-strong)] font-black text-xs uppercase tracking-widest bg-[var(--accent-red-subtle)] px-3 py-1 rounded-lg border border-[var(--accent-red-safe)]/10">
                  <Terminal className="w-4 h-4" />
                  <span>{isSwahili ? "Jinsi inavyofanya kazi" : "The Workflow"}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
                  {isSwahili ? "Andika unachotaka. AI inatekeleza." : "Describe it. AI builds it."}
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: MessageSquare, t: isSwahili ? "Toa amri kwa Kiswahili fasaha" : "Prompt in natural Swahili" },
                    { icon: BrainCircuit, t: isSwahili ? "AI inachanganua mantiki ya biashara" : "AI analyzes business logic" },
                    { icon: Rocket, t: isSwahili ? "Pata app inayofanya kazi ndani ya dakika" : "Functional app in minutes" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-5 group/item">
                      <div className="w-12 h-12 rounded-[1rem] bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-red-safe)] transition-all duration-300 group-hover/item:bg-[var(--accent-red-strong)] group-hover/item:text-white group-hover/item:scale-110">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="font-bold text-base uppercase tracking-wider text-[var(--text-primary)]">{item.t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-12 lg:p-16 bg-[var(--bg-secondary)]/50 border-l border-[var(--border-color)]">
                <div className="rounded-[2rem] border border-[var(--border-color)] p-8 font-mono text-sm shadow-2xl bg-[var(--bg-primary)] relative group/ide">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--accent-red-safe)]/20 to-transparent rounded-[2rem] blur opacity-0 group-hover/ide:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex gap-2.5 mb-8">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-lg shadow-[#ff5f56]/20" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-lg shadow-[#ffbd2e]/20" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-lg shadow-[#27c93f]/20" />
                    </div>
                    <div className="space-y-6">
                      <p className="text-[var(--text-muted)] italic text-xs uppercase tracking-widest font-bold">// {content.ide.label}</p>
                      <p className="text-[var(--accent-red-safe)] font-black text-lg leading-relaxed">{content.ide.prompt}</p>
                      <div className="h-px bg-[var(--border-color)] my-6" />
                      <div className="space-y-3">
                        <div className="h-2 w-3/4 bg-[var(--bg-elevated)] rounded-full animate-[pulse_2s_infinite]" />
                        <div className="h-2 w-1/2 bg-[var(--bg-elevated)] rounded-full animate-[pulse_2.5s_infinite]" />
                        <div className="h-2 w-2/3 bg-[var(--bg-elevated)] rounded-full animate-[pulse_3s_infinite]" />
                      </div>
                      <div className="pt-6 flex items-center gap-3 text-[var(--success-strong)] font-black text-xs uppercase tracking-[0.2em] animate-in fade-in slide-in-from-top-2 duration-700 delay-500 fill-mode-both">
                        <CheckCircle2 className="w-4 h-4" />
                        {content.ide.result}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 border-t border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">{content.tools.title}</h2>
            <p className="text-[var(--text-muted)] text-lg">{isSwahili ? "Tunatumia zana za kisasa zaidi duniani." : "We use the most cutting-edge tools globally."}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.tools.items.map((tool, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] border border-[var(--border-color)] transition-all duration-500 hover:-translate-y-3 glass-card group/tool relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-red-safe)]/5 to-transparent opacity-0 group-hover/tool:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-red-safe)] mb-8 transition-transform group-hover/tool:scale-110 group-hover/tool:rotate-3 shadow-lg">
                    <Zap className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">{tool.name}</h3>
                  <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.2em] font-black leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">{content.outcomes.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {content.outcomes.items.map((item, i) => (
              <div key={i} className="p-12 rounded-[3rem] border border-[var(--border-color)] flex flex-col items-center text-center space-y-8 glass-card hover:border-[var(--accent-red-safe)]/30 transition-colors duration-500">
                <div className="w-20 h-20 rounded-[2rem] bg-[var(--accent-red-safe)] flex items-center justify-center text-white shadow-lg shadow-[var(--accent-red-safe)]/30 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <item.icon className="w-10 h-10" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[var(--text-primary)]">{item.t}</h3>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={`py-24 ${theme === 'dark' ? 'bg-white/[0.02]' : 'bg-neutral-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                {isSwahili ? "Kwa nini kila mtu anaweza kuwa 'Mjenzi' sasa?" : "Why everyone can be a 'Builder' now?"}
              </h2>
              <div className="grid gap-4">
                {[
                  { q: isSwahili ? "Punguza muda wa kujifunza" : "Slash learning time", a: isSwahili ? "Kutoka miaka hadi siku chache." : "From years to just a few days." },
                  { q: isSwahili ? "Gharama nafuu" : "Lower costs", a: isSwahili ? "Huna haja ya timu kubwa ya waandishi." : "No need for a massive dev team." },
                  { q: isSwahili ? "Ubunifu usio na kikomo" : "Limitless creativity", a: isSwahili ? "Mawazo yako ndiyo kikomo pekee." : "Your ideas are the only limit." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-[var(--border-color)] glass-card">
                    <h4 className="font-black text-[10px] uppercase tracking-widest text-[var(--accent-red-strong)] mb-1">{item.q}</h4>
                    <p className="text-sm text-[var(--text-muted)]">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-[var(--accent-red)]/20 shadow-2xl">
              <div className="absolute inset-0 bg-[var(--accent-red)]/10 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <BrainCircuit className="w-full h-full text-[var(--accent-red)] opacity-20" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <div className="space-y-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-[var(--accent-red)] text-white text-[10px] font-black uppercase tracking-widest">Masterclass</span>
                  <h3 className="text-3xl font-black">{isSwahili ? "Jiunge na Mapinduzi" : "Join the Revolution"}</h3>
                  <button
                    onClick={() => openBookingModal({ program: 'Vibe Coding Masterclass' })}
                    className={`px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform ${
                      theme === 'dark' ? 'bg-white text-[var(--accent-red)]' : 'bg-[var(--bg-primary)] text-[var(--accent-red)]'
                    }`}
                  >
                    {isSwahili ? "Weka Nafasi" : "Book Now"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 border-t border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">{content.useCases.title}</h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.useCases.items.map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-[var(--border-color)] transition-all glass-card">
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-[10px] text-[var(--text-muted)] leading-relaxed uppercase font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-16">{isSwahili ? "Maswali Yanayoulizwa" : "Common Questions"}</h2>
          <div className="space-y-6">
            {content.faq.map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-[var(--border-color)] glass-card">
                <h4 className="text-lg font-bold mb-4 flex items-start gap-3">
                  <ChevronDown className="w-5 h-5 text-[var(--accent-red-strong)] shrink-0 mt-1" />
                  {item.q}
                </h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed pl-8">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-16 md:p-28 rounded-[3rem] border border-[var(--border-color)] relative overflow-hidden shadow-2xl bg-[var(--bg-secondary)] glass-card">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--accent-red-subtle),transparent_70%)]" />
            <div className="relative z-10 space-y-12 max-w-4xl mx-auto">
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">{isSwahili ? "Ondoa Ukomo Wako leo." : "Unleash Your Potential."}</h2>
              <p className="text-xl text-[var(--text-secondary)] font-medium max-w-2xl mx-auto">
                {isSwahili ? "Vibe Coding ni zaidi ya teknolojia. Ni uhuru wa kujenga kile unachokiwaza." : "Vibe Coding is more than technology. It is the freedom to build what you imagine."}
              </p>
              <div className="flex flex-col items-center gap-8">
                <button
                  onClick={() => openBookingModal({ program: 'Vibe Coding Masterclass' })}
                  className="btn-primary px-16 py-7 text-sm tracking-[0.2em] shadow-2xl shadow-[var(--accent-red)]/30"
                >
                  {content.hero.cta}
                </button>
                <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.25em] text-[var(--text-muted)] bg-[var(--bg-primary)]/50 px-5 py-2 rounded-full border border-[var(--border-subtle)]">
                  <ShieldCheck className="w-5 h-5 text-[var(--success-strong)]" />
                  <span>{isSwahili ? "Malipo Salama ya M-Pesa" : "Secure M-Pesa Payments"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
