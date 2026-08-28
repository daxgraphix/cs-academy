import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { useApp } from '../context/AppContext';
import { SEO } from '../components/SEO';
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Calendar,
  Send
} from 'lucide-react';

interface ContactPageProps {
  openBookingModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  openBookingModal
}) => {
  const { theme, t } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [interest, setInterest] = useState('AI Academy Flagship');
  const [delivery, setDelivery] = useState('Live Online (Zoom/Google Meet)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoBody = t('contact.emailBody', {
      name,
      email,
      org: org || 'N/A',
      interest,
      delivery,
      message
    });

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      t('contact.emailSubject', { interest, name })
    )}&body=${encodeURIComponent(mailtoBody)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const whatsappDirect = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    t('contact.waMessage')
  )}`;

  return (
    <div className="pt-28 pb-20 min-h-screen transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SEO
        title={t('contact.seoTitle')}
        description={t('contact.seoDescription')}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[var(--accent-red-subtle)] border border-[var(--accent-red-strong)]/20 text-[var(--accent-red-strong)]">
            <span>{t('contact.badge')}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {t('contact.title')} <span className="text-[var(--accent-red-strong)]">{t('contact.titleHighlight')}</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* 2-Column Contact & Interactive Form */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[2rem] p-8 space-y-6 shadow-2xl glass-card border border-[var(--border-color)]">
              <h2 className="text-xl font-extrabold text-[var(--text-primary)]">
                {t('contact.directChannels')}
              </h2>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="p-4 rounded-2xl border border-[var(--border-color)] transition-all flex items-center gap-4 group bg-[var(--bg-primary)] hover:border-[var(--accent-red-strong)]/30"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--accent-red-strong)] shrink-0 bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] uppercase font-mono text-[var(--text-muted)]">
                      {t('contact.emailLabel')}
                    </div>
                    <div className="text-xs font-bold truncate text-[var(--text-primary)]">
                      {siteConfig.email}
                    </div>
                  </div>
                </a>

                <a
                  href={whatsappDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-[var(--border-color)] transition-all flex items-center gap-4 group bg-[var(--bg-primary)] hover:border-[var(--success-strong)]/30"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--success-strong)] shrink-0 bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] uppercase font-mono text-[var(--text-muted)]">
                      {t('contact.whatsappLabel')}
                    </div>
                    <div className="text-xs font-bold truncate text-[var(--text-primary)]">
                      {siteConfig.whatsappDisplay}
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl border border-[var(--border-color)] flex items-center gap-4 bg-[var(--bg-primary)]">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border-color)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-[var(--text-muted)]">
                      {t('contact.phoneLabel')}
                    </div>
                    <div className="text-xs font-bold text-[var(--text-primary)]">
                      {siteConfig.phone}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-[var(--border-color)] flex items-center gap-4 bg-[var(--bg-primary)]">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--accent-red-strong)] shrink-0 bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-[var(--text-muted)]">
                      {t('contact.locationLabel')}
                    </div>
                    <div className="text-xs font-bold text-[var(--text-primary)]">
                      {siteConfig.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--border-color)]">
                <button
                  onClick={openBookingModal}
                  className="w-full py-3.5 px-4 text-xs font-extrabold text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] rounded-xl transition-all uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-500/10"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t('contact.bookingBtn')}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Detailed Form (7 cols) */}
          <div className="lg:col-span-7 rounded-[2rem] p-8 sm:p-10 shadow-2xl space-y-6 glass-card border border-[var(--border-color)]">
            <div>
              <h2 className="text-xl font-extrabold text-[var(--text-primary)]">
                {t('contact.formTitle')}
              </h2>
              <p className="text-xs mt-1 text-[var(--text-muted)]">
                {t('contact.formSubtitle')}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                    {t('contact.form.nameLabel')}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-xl text-xs bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-red-strong)] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                    {t('contact.form.emailLabel')}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-xl text-xs bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-red-strong)] transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                    {t('contact.form.orgLabel')}
                  </label>
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder={t('contact.form.orgPlaceholder')}
                    className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-xl text-xs bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-red-strong)] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                    {t('contact.form.formatLabel')}
                  </label>
                  <select
                    value={delivery}
                    onChange={(e) => setDelivery(e.target.value)}
                    className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-xl text-xs bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-red-strong)] transition-all"
                  >
                    <option value={t('booking.formats.online')}>{t('booking.formats.online')}</option>
                    <option value={t('booking.formats.onsite')}>{t('booking.formats.onsite')}</option>
                    <option value={t('booking.formats.whatsapp')}>{t('booking.formats.whatsapp')}</option>
                    <option value={t('booking.formats.hybrid')}>{t('booking.formats.hybrid')}</option>
                    <option value={t('booking.formats.conference')}>{t('booking.formats.conference')}</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  {t('contact.form.programLabel')}
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-xl text-xs bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-red-strong)] transition-all"
                >
                  <option value={t('booking.programs.aiFlagship')}>{t('booking.programs.aiFlagship')}</option>
                  <option value={t('booking.programs.cyberAcademy')}>{t('booking.programs.cyberAcademy')}</option>
                  <option value={t('booking.programs.digitalSkills')}>{t('booking.programs.digitalSkills')}</option>
                  <option value={t('booking.programs.aiBusiness')}>{t('booking.programs.aiBusiness')}</option>
                  <option value={t('booking.programs.aiEducators')}>{t('booking.programs.aiEducators')}</option>
                  <option value={t('booking.programs.aiSafety')}>{t('booking.programs.aiSafety')}</option>
                  <option value={t('booking.programs.executiveBriefing')}>{t('booking.programs.executiveBriefing')}</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  {t('contact.form.notesLabel')}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('contact.form.notesPlaceholder')}
                  className="w-full px-4 py-2.5 border border-[var(--border-color)] rounded-xl text-xs bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-red-strong)] transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-extrabold text-xs text-white bg-[var(--accent-red-strong)] hover:bg-[var(--accent-red)] active:scale-[0.98] uppercase tracking-wider shadow-lg shadow-red-500/10 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('contact.form.submitBtn')}</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>

        </div>

      </div>
    </div>
  );
};
