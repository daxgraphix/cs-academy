import React from 'react';
import { siteConfig } from '../config/site';
import { useApp } from '../context/AppContext';
import { useReveal } from '../hooks/useReveal';
import {
  Mail,
  MessageCircle,
  ArrowRight,
  Calendar
} from 'lucide-react';

interface ContactCTAProps {
  openBookingModal: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  openBookingModal
}) => {
  const { theme } = useApp();
  const contentRef = useReveal<HTMLDivElement>();

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Hello CS Academy, I would like to inquire about training programs for myself / my organization.")}`;

  const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Training Inquiry | CS Academy"
  )}&body=${encodeURIComponent(
    "Hello CS Academy Team,\n\nI am interested in exploring training programs. Please share more details on your curriculum, scheduling, and proposals.\n\nName:\nOrganization/Role:\nPreferred Program:\nLocation:\n\nThank you."
  )}`;

  return (
    <section 
      id="contact-section" 
      className="py-24 border-t transition-colors duration-300 relative overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] border-[var(--border-color)]"
    >
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none -z-10 bg-[var(--accent-red-subtle)] opacity-50"></div>

      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        
        {/* Main CTA Box */}
        <div className="border rounded-[2rem] p-8 sm:p-14 shadow-2xl relative overflow-hidden site-panel glass-card bg-[var(--bg-card)] border-[var(--border-color)] shadow-[var(--border-color)]/20">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono font-bold uppercase tracking-wider bg-[var(--accent-red-subtle)] border-[var(--accent-red-safe)]/20 text-[var(--accent-red-strong)]">
                <span>Direct Lead & Training Inquiries</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[var(--text-primary)]">
                {(
                  <>START YOUR <span className="text-[var(--accent-red-strong)]">DIGITAL JOURNEY</span></>
                )}
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
                Tell us what you want to learn or the training your organization needs. Whether you need a 2-hour executive seminar or a workforce AI bootcamp, our team is ready to assist.
              </p>

              {/* Quick direct contact links */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="p-4 rounded-2xl border transition-colors flex items-center gap-3 group bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-[var(--accent-red-safe)]/50"
                >
                  <div className="w-9 h-9 rounded-xl bg-[var(--accent-red-subtle)] border border-[var(--accent-red-safe)]/20 flex items-center justify-center text-[var(--accent-red-strong)] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
                      Direct Email
                    </div>
                    <div className="text-xs font-bold truncate group-hover:text-[var(--accent-red-strong)] transition-colors text-[var(--text-secondary)]">{siteConfig.email}</div>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border transition-colors flex items-center gap-3 group bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-[var(--success-safe)]/50"
                >
                  <div className="w-9 h-9 rounded-xl bg-[var(--success-subtle)] border border-[var(--success-safe)]/20 flex items-center justify-center text-[var(--success-strong)] shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono uppercase text-[var(--text-muted)]">
                      WhatsApp Inquiries
                    </div>
                    <div className="text-xs font-bold truncate group-hover:text-[var(--success-strong)] transition-colors text-[var(--text-secondary)]">{siteConfig.whatsappDisplay}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Action Trigger Box (5 cols) */}
            <div className="lg:col-span-5 border rounded-[1.75rem] p-6 sm:p-8 space-y-4 shadow-xl bg-[var(--bg-secondary)] border-[var(--border-color)]">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[var(--accent-red-strong)] uppercase">
                  Instant Interactive Booking
                </span>
                <h3 className="text-xl font-extrabold text-[var(--text-primary)]">
                  How would you like to connect?
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  Configure your training request in 60 seconds.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <button
                  id="cta-book-training-primary"
                  onClick={openBookingModal}
                  className="w-full py-4 px-5 text-xs font-extrabold text-white bg-[var(--accent-red)] hover:bg-[var(--accent-red-hover)] active:scale-[0.99] rounded-2xl shadow-lg hover:shadow-red-900/30 uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK TRAINING NOW</span>
                </button>

                <a
                  id="cta-whatsapp-academy"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 text-xs font-bold rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 uppercase tracking-wider flex items-center justify-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-tertiary)] hover:bg-[var(--bg-elevated)] border-[var(--border-color)] transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-[var(--success-strong)]" />
                  <span>WHATSAPP US DIRECTLY</span>
                </a>
              </div>

              <div className="pt-2 text-center">
                <p className="text-[11px] font-mono text-[var(--text-muted)]">
                  Tanzania  |  Kenya  |  Uganda  |  Rwanda  |  DRC
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
