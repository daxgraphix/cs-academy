import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Clock, 
  Send, 
  CheckCircle2 
} from 'lucide-react';

interface ContactPageProps {
  openBookingModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  openBookingModal
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [interest, setInterest] = useState('AI Academy Flagship');
  const [delivery, setDelivery] = useState('Live Online (Zoom/Google Meet)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoBody = `Hello CS Academy Team,\n\nI would like to inquire about training:\n• Name: ${name}\n• Email: ${email}\n• Organization: ${org || 'N/A'}\n• Program Interest: ${interest}\n• Preferred Format: ${delivery}\n• Message / Objectives: ${message}\n\nPlease share availability and enrollment details.`;
    
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `Training Request: ${interest} — ${name}`
    )}&body=${encodeURIComponent(mailtoBody)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const whatsappDirect = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hello CS Academy, I would like to inquire about training programs for myself / my organization."
  )}`;

  return (
    <div className="pt-28 pb-20 bg-[#0B0B0B] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-900/60 text-[#DC2626] text-xs font-bold uppercase tracking-widest">
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            CONTACT <span className="text-[#DC2626]">CS ACADEMY</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Reach out for individual enrollment, customized organizational workshops, or executive speaking engagements.
          </p>
        </div>

        {/* 2-Column Contact & Interactive Form */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#171717] border border-neutral-800 rounded-3xl p-8 space-y-6 shadow-2xl">
              <h2 className="text-xl font-extrabold text-white">Direct Communication Channels</h2>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="p-4 rounded-2xl bg-[#0B0B0B] border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-[#DC2626] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-neutral-500 uppercase font-mono">Email Address</div>
                    <div className="text-xs font-bold text-white truncate">{siteConfig.email}</div>
                  </div>
                </a>

                <a
                  href={whatsappDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#0B0B0B] border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-emerald-500 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-neutral-500 uppercase font-mono">WhatsApp Support</div>
                    <div className="text-xs font-bold text-white truncate">{siteConfig.whatsappDisplay}</div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-[#0B0B0B] border border-neutral-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-neutral-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase font-mono">Phone Inquiries</div>
                    <div className="text-xs font-bold text-white">{siteConfig.phone}</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0B0B0B] border border-neutral-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-[#DC2626] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-500 uppercase font-mono">Headquarters & Hub</div>
                    <div className="text-xs font-bold text-white">{siteConfig.location}</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800">
                <button
                  onClick={openBookingModal}
                  className="w-full py-3.5 px-4 text-xs font-extrabold text-white bg-[#B91C1C] hover:bg-[#DC2626] rounded-xl transition-all uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Launch Quick Booking Wizard</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Detailed Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#171717] border border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-white">Send a Training Inquiry</h2>
              <p className="text-xs text-neutral-400 mt-1">Our training coordinators respond within 24 business hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. David Mwangi"
                    className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#DC2626]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. david@organization.org"
                    className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#DC2626]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">Company / University / Self</label>
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="e.g. East Africa Bank"
                    className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#DC2626]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">Preferred Delivery Format</label>
                  <select
                    value={delivery}
                    onChange={(e) => setDelivery(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#DC2626]"
                  >
                    <option value="Live Online (Zoom/Google Meet)">Live Online (Zoom/Google Meet)</option>
                    <option value="Physical On-Site Training">Physical On-Site Training</option>
                    <option value="WhatsApp Micro-Learning">WhatsApp Micro-Learning</option>
                    <option value="Hybrid (Online + In-Person)">Hybrid (Online + In-Person)</option>
                    <option value="Executive Briefing / Keynote">Executive Briefing / Keynote</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">Program Track of Interest</label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#DC2626]"
                >
                  <option value="AI Academy Flagship">AI Academy Flagship</option>
                  <option value="Cybersecurity Academy">Cybersecurity Academy</option>
                  <option value="Digital Skills Academy">Digital Skills Academy</option>
                  <option value="AI for Business & Corporate Teams">AI for Business & Corporate Teams</option>
                  <option value="AI for Educators & University Faculty">AI for Educators & University Faculty</option>
                  <option value="AI Safety & Deepfake Defense">AI Safety & Deepfake Defense</option>
                  <option value="Executive Briefing with Alex Rweyemamu">Executive Briefing with Alex Rweyemamu</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">Objectives & Notes</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details regarding your cohort size, target dates, or specific departmental requirements..."
                  className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#DC2626]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-extrabold text-xs text-white bg-[#B91C1C] hover:bg-[#DC2626] uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Training Inquiry</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
