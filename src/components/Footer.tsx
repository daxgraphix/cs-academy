import React, { useState } from 'react';
import { PageRoute } from '../types';
import { siteConfig } from '../config/site';
import { useApp } from '../context/AppContext';
import { 
  Linkedin, 
  Twitter, 
  Youtube, 
  MessageCircle,
  Mail,
  Send,
  CheckCircle2,
  ShieldCheck,
  Bell
} from 'lucide-react';

interface FooterProps {
  setCurrentRoute: (route: PageRoute) => void;
  openBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentRoute,
  openBookingModal
}) => {
  const { theme } = useApp();
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState<'all' | 'ai' | 'cybersecurity' | 'web'>('all');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const navigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const emailValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValid(email)) {
      setEmailError('Please enter a valid email address.');
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

  return (
    <footer 
      id="main-footer" 
      className={`border-t pt-16 pb-12 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#090909] text-white border-white/10' : 'bg-[#f7f4ee] text-neutral-900 border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className={`relative overflow-hidden rounded-[2rem] border p-8 sm:p-10 ${
          theme === 'dark'
            ? 'bg-[#111111] border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.35)]'
            : 'bg-white border-neutral-200 shadow-[0_18px_50px_rgba(17,17,17,0.06)]'
        }`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,59,48,0.12),transparent_35%)]" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ff3b30]/30 bg-[#ff3b30]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff3b30]">
                <Bell className="w-3.5 h-3.5" />
                <span>CS Academy Dispatch</span>
              </div>
              <h3 className={`text-2xl sm:text-3xl font-black tracking-[-0.05em] ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}>
                {(
                  <>STAY AHEAD IN <span className="text-[#ff3b30]">TECH, AI & SECURITY</span></>
                )}
              </h3>
              <p className={`text-sm leading-relaxed ${
                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'
              }`}>
                Subscribe for weekly Swahili & English tech guides, free prompt cheat sheets, live cohort announcements, and East African cybersecurity insights.
              </p>
            </div>

            <div className="lg:col-span-6">
              {isSubscribed ? (
                <div className={`rounded-[1.5rem] border p-6 flex items-start gap-3.5 ${
                  theme === 'dark' ? 'bg-[#0d0d0d] border-emerald-800/60 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                }`}>
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-500" />
                  <div>
                    <div className="text-sm font-bold">
                      Successfully Subscribed!
                    </div>
                    <div className={`mt-1 text-xs ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
                      We have dispatched your free Swahili Prompt Starter Pack PDF. Stay tuned for our next masterclass alert!
                    </div>
                    <button
                      onClick={() => setIsSubscribed(false)}
                      className="mt-3 text-[11px] font-bold text-[#ff3b30] hover:underline"
                    >
                      Register another email
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <div className="relative min-w-0 flex-1">
                      <Mail className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${
                        theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'
                      }`} />
                      <input
                        id="footer-newsletter-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); if (emailError) setEmailError(''); }}
                        aria-invalid={!!emailError}
                        placeholder={'Enter your email address...'}
                        className={`w-full rounded-full border pl-10 pr-4 py-3 text-xs focus:outline-none focus:border-[#ff3b30] ${
                          emailError
                            ? 'border-red-500'
                            : theme === 'dark'
                            ? 'bg-[#0d0d0d] border-white/10 text-white placeholder-neutral-500'
                            : 'bg-white border-neutral-200 text-neutral-900 placeholder-neutral-500 shadow-sm'
                        }`}
                      />
                    </div>
                    {emailError && (
                      <p className="text-[10px] font-semibold text-red-500">{emailError}</p>
                    )}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="shrink-0 rounded-full bg-[#ff3b30] px-6 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-[0_15px_30px_rgba(255,59,48,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff564d] disabled:opacity-60"
                    >
                      {isLoading ? (
                        <span>...</span>
                      ) : (
                        <span className="inline-flex items-center gap-2">
                          <span>Subscribe Free</span>
                          <Send className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-[10px]">
                    <span className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}>
                      Preferred topics:
                    </span>
                    {[
                      { id: 'all', label: 'All Updates'},
                      { id: 'ai', label: 'AI & Vibe Coding' },
                      { id: 'cybersecurity', label: 'Cybersecurity' },
                      { id: 'web', label: 'Web & Digital' },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setInterest(opt.id as any)}
                        className={`rounded-full border px-2.5 py-1 transition-colors ${
                          interest === opt.id
                            ? 'border-[#ff3b30] bg-[#ff3b30] text-white'
                            : theme === 'dark'
                            ? 'border-white/10 bg-white/5 text-neutral-300 hover:text-white'
                            : 'border-neutral-200 bg-white text-neutral-800 hover:text-neutral-900'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  <div className={`flex items-center gap-1.5 text-[10px] ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}`}>
                    <ShieldCheck className="h-3 w-3 text-[#ff3b30]" />
                    <span>Zero spam. Unsubscribe at any time with 1-click.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-12 gap-8 pb-12 border-b ${
          theme === 'dark' ? 'border-white/10' : 'border-neutral-200'
        }`}>
          <div className="col-span-2 md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#ff3b30] to-[#111111] p-[1.5px] shadow-[0_12px_26px_rgba(255,59,48,0.28)]">
                <div className={`flex h-full w-full items-center justify-center rounded-[14px] text-sm font-black tracking-[-0.08em] ${
                  theme === 'dark' ? 'bg-[#0d0d0d] text-white' : 'bg-neutral-900 text-white'
                }`}>
                  <span className="text-[#ff3b30]">C</span>S
                </div>
              </div>
              <div>
                <span className={`block text-xl font-black tracking-[-0.06em] uppercase ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  CS ACADEMY
                </span>
                <p className={`text-[10px] font-medium tracking-[0.18em] uppercase ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
                }`}>
                  SWAHILI TECH EDUCATION
                </p>
              </div>
            </div>

            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-[#ff3b30]">
              AI  |  CYBERSECURITY  |  DIGITAL SKILLS  |  VIBE CODING
            </p>

            <p className={`max-w-sm text-xs leading-relaxed ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-800'
            }`}>
              Practical training in Artificial Intelligence, Cybersecurity, and Digital Skills across East and Central Africa.
            </p>

            <div className={`space-y-1.5 text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-800'}`}>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#ff3b30]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#ff3b30] transition-colors">{siteConfig.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-3.5 w-3.5 text-emerald-500" />
                <a href={`https://wa.me/${siteConfig.whatsapp}`} className="hover:text-emerald-500 transition-colors">{siteConfig.phoneDisplay}</a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${theme === 'dark' ? 'border-white/10 bg-white/5 text-neutral-300 hover:text-white' : 'border-neutral-200 bg-white text-neutral-700 hover:text-neutral-900'}`}>
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={siteConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${theme === 'dark' ? 'border-white/10 bg-white/5 text-neutral-300 hover:text-white' : 'border-neutral-200 bg-white text-neutral-700 hover:text-neutral-900'}`}>
                <Twitter className="h-4 w-4" />
              </a>
              <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${theme === 'dark' ? 'border-white/10 bg-white/5 text-neutral-300 hover:text-white' : 'border-neutral-200 bg-white text-neutral-700 hover:text-neutral-900'}`}>
                <Youtube className="h-4 w-4" />
              </a>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Community" className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${theme === 'dark' ? 'border-white/10 bg-white/5 text-neutral-300 hover:text-emerald-400' : 'border-neutral-200 bg-white text-neutral-700 hover:text-emerald-600'}`}>
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
              PROGRAMS
            </h4>
            <ul className={`space-y-2 text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-800'}`}>
              <li><button onClick={() => navigate('programs/ai')} className="text-left hover:text-[#ff3b30] transition-colors">AI & Vibe Coding</button></li>
              <li><button onClick={() => navigate('programs/cybersecurity')} className="text-left hover:text-[#ff3b30] transition-colors">Cybersecurity</button></li>
              <li><button onClick={() => navigate('programs/digital-skills')} className="text-left hover:text-[#ff3b30] transition-colors">Digital Skills</button></li>
              <li><button onClick={() => navigate('programs')} className="text-left font-semibold text-[#ff3b30] hover:text-[#ff564d]">All Curricula â†’</button></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
              DELIVERY
            </h4>
            <ul className={`space-y-2 text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-800'}`}>
              <li><button onClick={() => navigate('learning-formats')} className="text-left hover:text-[#ff3b30] transition-colors">6 Delivery Formats</button></li>
              <li><button onClick={() => navigate('pricing')} className="text-left font-semibold text-emerald-500 hover:text-emerald-400">Pricing & Plans (M-Pesa)</button></li>
              <li><button onClick={() => navigate('learning-formats')} className="text-left hover:text-[#ff3b30] transition-colors">WhatsApp Micro-Course</button></li>
              <li><button onClick={() => navigate('features')} className="text-left hover:text-[#ff3b30] transition-colors">Platform Features</button></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
              ORGANIZATIONS
            </h4>
            <ul className={`space-y-2 text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-800'}`}>
              <li><button onClick={() => navigate('for-organizations')} className="text-left hover:text-[#ff3b30] transition-colors">Corporate Training</button></li>
              <li><button onClick={() => navigate('for-organizations')} className="text-left hover:text-[#ff3b30] transition-colors">University Programs</button></li>
              <li><button onClick={() => navigate('for-organizations')} className="text-left hover:text-[#ff3b30] transition-colors">NGOs & Governments</button></li>
              <li><button onClick={() => openBookingModal()} className="text-left font-semibold hover:text-[#ff3b30]">Request Proposal</button></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-3">
            <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
              COMPANY
            </h4>
            <ul className={`space-y-2 text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-800'}`}>
              <li><button onClick={() => navigate('about')} className="text-left hover:text-[#ff3b30] transition-colors">About CS Academy</button></li>
              <li><button onClick={() => navigate('resources')} className="text-left hover:text-[#ff3b30] transition-colors">Free Resources</button></li>
              <li><button onClick={() => navigate('blog')} className="text-left hover:text-[#ff3b30] transition-colors">Blog & Articles</button></li>
              <li><button onClick={() => navigate('contact')} className="text-left hover:text-[#ff3b30] transition-colors">Contact & Book</button></li>
            </ul>
          </div>
        </div>

        <div className={`pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}`}>
          <div>Â© 2026 CS Academy. CyberSwahili Tech Ecosystem. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Swahili Tech Learning</span>
            <span> | </span>
            <span>Tanzania  |  Kenya  |  Uganda  |  East Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
