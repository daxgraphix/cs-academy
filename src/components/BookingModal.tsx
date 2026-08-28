import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { useApp } from '../context/AppContext';
import { useTranslation } from 'react-i18next';
import {
  X, 
  MessageCircle, 
  Mail, 
  Calendar
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: {
    program?: string;
    format?: string;
    duration?: string;
    organizationType?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefill
}) => {
  const { theme } = useApp();
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [program, setProgram] = useState('AI Academy Flagship');
  const [format, setFormat] = useState('Live Online (Zoom/Google Meet)');
  const [audienceType, setAudienceType] = useState('Individual Professional');
  const [location, setLocation] = useState('Tanzania');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const emailValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  useEffect(() => {
    if (prefill) {
      if (prefill.program) setProgram(prefill.program);
      if (prefill.format) setFormat(prefill.format);
      if (prefill.organizationType) setAudienceType(prefill.organizationType);
    }
  }, [prefill, isOpen]);

  // Close on Escape for accessibility
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const validate = (): boolean => {
    const next: { name?: string; email?: string } = {};
    if (!name.trim()) {
      next.name = t('booking.errors.name');
    }
    if (!emailValid(email)) {
      next.email = t('booking.errors.email');
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  if (!isOpen) return null;

  const constructMessageText = () => {
    return `${t('booking.message.greeting')}\n\n${t('booking.message.intro')}:\n${t('booking.fields.name')}: ${name || `[${t('booking.placeholders.yourName')}]`}\n${t('booking.fields.email')}: ${email || `[${t('booking.placeholders.yourEmail')}]`}\n${t('booking.fields.organization')}: ${organization || `[${t('booking.placeholders.organization')}]`}\n${t('booking.fields.program')}: ${program}\n${t('booking.fields.format')}: ${format}\n${t('booking.fields.audience')}: ${audienceType}\n${t('booking.fields.location')}: ${location}\n${notes ? `${t('booking.fields.notes')}: ${notes}\n` : ''}\n${t('booking.message.closing')}`;
  };

  const handleWhatsAppSend = () => {
    if (!validate()) return;
    const text = encodeURIComponent(constructMessageText());
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, '_blank');
  };

  const handleEmailSend = () => {
    if (!validate()) return;
    const subject = encodeURIComponent(`${t('booking.message.subjectPrefix')}: ${program} | CS Academy`);
    const body = encodeURIComponent(constructMessageText());
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(constructMessageText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className={`${theme === 'dark' ? 'bg-[#171717]/80 border-white/10 text-white' : 'bg-white/80 border-neutral-200/50 text-neutral-900'} border rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative backdrop-blur-2xl glass-card`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={t('booking.title')}
      >
        {/* Modal Header */}
        <div className={`sticky top-0 backdrop-blur-2xl px-6 sm:px-8 py-5 border-b flex items-center justify-between z-10 ${theme === 'dark' ? 'bg-[#171717]/40 border-white/10' : 'bg-white/40 border-neutral-200/50'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-900/60 flex items-center justify-center text-[#DC2626]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-lg font-extrabold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{t('booking.title')}</h3>
              <p className={`text-xs ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'}`}>{t('booking.subtitle')}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={t('common.close')}
            className={`p-2 rounded-xl transition-colors ${
              theme === 'dark'
                ? 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white'
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-900'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form Inputs */}
        <div className="p-6 sm:p-8 space-y-5">

          <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
                  {t('booking.fields.name')}
                </label>
                <input
                  type="text"
                  autoFocus
                  value={name}
                  onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((p) => ({ ...p, name: undefined })); }}
                  placeholder={t('booking.placeholders.yourName')}
                  aria-invalid={!!errors.name}
                  className={`w-full px-4 py-2.5 border rounded-xl text-xs focus:outline-none focus:border-[#DC2626] ${
                    theme === 'dark'
                      ? 'bg-[#0B0B0B] text-white placeholder-neutral-500'
                      : 'bg-white text-neutral-900 placeholder-neutral-500'
                  } ${
                    errors.name
                      ? 'border-red-500'
                      : theme === 'dark'
                        ? 'border-neutral-800'
                        : 'border-neutral-300'
                  }`}
                />
                {errors.name && <p className="text-[10px] font-semibold text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-1.5">
                <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
                  {t('booking.fields.email')}
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })); }}
                  placeholder={t('booking.placeholders.yourEmail')}
                  aria-invalid={!!errors.email}
                  className={`w-full px-4 py-2.5 border rounded-xl text-xs focus:outline-none focus:border-[#DC2626] ${
                    theme === 'dark'
                      ? 'bg-[#0B0B0B] text-white placeholder-neutral-500'
                      : 'bg-white text-neutral-900 placeholder-neutral-500'
                  } ${
                    errors.email
                      ? 'border-red-500'
                      : theme === 'dark'
                        ? 'border-neutral-800'
                        : 'border-neutral-300'
                  }`}
                />
                {errors.email && <p className="text-[10px] font-semibold text-red-500">{errors.email}</p>}
              </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
                {t('booking.fields.organization')}
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder={t('booking.placeholders.organization')}
                className={`w-full px-4 py-2.5 border rounded-xl text-xs focus:outline-none focus:border-[#DC2626] ${
                  theme === 'dark'
                    ? 'bg-[#0B0B0B] text-white placeholder-neutral-500 border-neutral-800'
                    : 'bg-white text-neutral-900 placeholder-neutral-500 border-neutral-300'
                }`}
              />
            </div>

            <div className="space-y-1.5">
              <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
                {t('booking.fields.location')}
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={`w-full px-4 py-2.5 border rounded-xl text-xs focus:outline-none focus:border-[#DC2626] ${
                  theme === 'dark'
                    ? 'bg-[#0B0B0B] text-white border-neutral-800'
                    : 'bg-white text-neutral-900 border-neutral-300'
                }`}
              >
                <option value="Tanzania">{t('countries.tanzania')}</option>
                <option value="Kenya">{t('countries.kenya')}</option>
                <option value="Uganda">{t('countries.uganda')}</option>
                <option value="Rwanda">{t('countries.rwanda')}</option>
                <option value="Burundi">{t('countries.burundi')}</option>
                <option value="DRC">{t('countries.drc')}</option>
                <option value="Zanzibar">{t('countries.zanzibar')}</option>
                <option value="Other African Country">{t('countries.otherAfrica')}</option>
                <option value="International / Diaspora">{t('countries.international')}</option>
              </select>
            </div>
          </div>

          {/* Program Select */}
          <div className="space-y-1.5">
            <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
              {t('booking.fields.program')}
            </label>
            <select
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className={`w-full px-4 py-2.5 border rounded-xl text-xs focus:outline-none focus:border-[#DC2626] ${
                theme === 'dark'
                  ? 'bg-[#0B0B0B] text-white border-neutral-800'
                  : 'bg-white text-neutral-900 border-neutral-300'
              }`}
            >
              <optgroup label={t('booking.programs.coreLabel')}>
                <option value="AI Academy Flagship Program">{t('booking.programs.aiFlagship')}</option>
                <option value="Cybersecurity Academy Program">{t('booking.programs.cyberAcademy')}</option>
                <option value="Digital Skills Academy Program">{t('booking.programs.digitalSkills')}</option>
              </optgroup>
              <optgroup label={t('booking.programs.coursesLabel')}>
                <option value="AI for Everyone">{t('booking.programs.aiEveryone')}</option>
                <option value="AI for Business & Teams">{t('booking.programs.aiBusiness')}</option>
                <option value="AI for Educators & Lecturers">{t('booking.programs.aiEducators')}</option>
                <option value="AI Safety & Deepfake Defense">{t('booking.programs.aiSafety')}</option>
                <option value="Cybersecurity Awareness Workshop">{t('booking.programs.cyberAwareness')}</option>
                <option value="Digital Productivity Masterclass">{t('booking.programs.digitalProductivity')}</option>
              </optgroup>
              <optgroup label={t('booking.programs.institutionalLabel')}>
                <option value="Corporate AI & Cybersecurity Workforce Proposal">{t('booking.programs.corporateProposal')}</option>
                <option value="Executive AI Briefing (C-Suite/Boards)">{t('booking.programs.executiveBriefing')}</option>
                <option value="Keynote Speaking by Alex Rweyemamu">{t('booking.programs.keynote')}</option>
                <option value="Custom Institutional Curriculum">{t('booking.programs.customCurriculum')}</option>
              </optgroup>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Preferred Delivery Format */}
            <div className="space-y-1.5">
              <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
                {t('booking.fields.format')}
              </label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className={`w-full px-4 py-2.5 border rounded-xl text-xs focus:outline-none focus:border-[#DC2626] ${
                  theme === 'dark'
                    ? 'bg-[#0B0B0B] text-white border-neutral-800'
                    : 'bg-white text-neutral-900 border-neutral-300'
                }`}
              >
                <option value="Live Online (Zoom/Google Meet)">{t('booking.formats.online')}</option>
                <option value="On-Site Physical Workshop">{t('booking.formats.onsite')}</option>
                <option value="WhatsApp Micro-Learning Cohort">{t('booking.formats.whatsapp')}</option>
                <option value="Hybrid (Online + Physical)">{t('booking.formats.hybrid')}</option>
                <option value="Conference Keynote / Seminar">{t('booking.formats.conference')}</option>
              </select>
            </div>

            {/* Audience Segment */}
            <div className="space-y-1.5">
              <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
                {t('booking.fields.audience')}
              </label>
              <select
                value={audienceType}
                onChange={(e) => setAudienceType(e.target.value)}
                className={`w-full px-4 py-2.5 border rounded-xl text-xs focus:outline-none focus:border-[#DC2626] ${
                  theme === 'dark'
                    ? 'bg-[#0B0B0B] text-white border-neutral-800'
                    : 'bg-white text-neutral-900 border-neutral-300'
                }`}
              >
                <option value="Individual Professional / Student">{t('booking.audiences.individual')}</option>
                <option value="Company / Enterprise Team">{t('booking.audiences.company')}</option>
                <option value="University / School Faculty">{t('booking.audiences.university')}</option>
                <option value="NGO / Development Organization">{t('booking.audiences.ngo')}</option>
                <option value="Government / Public Institution">{t('booking.audiences.government')}</option>
                <option value="Small Business Owner">{t('booking.audiences.sme')}</option>
              </select>
            </div>
          </div>

          {/* Notes / Special requirements */}
          <div className="space-y-1.5">
            <label className={`text-xs font-bold uppercase tracking-wider ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}`}>
              {t('booking.fields.notes')}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t('booking.placeholders.notes')}
              className={`w-full px-4 py-2.5 border rounded-xl text-xs focus:outline-none focus:border-[#DC2626] ${
                theme === 'dark'
                  ? 'bg-[#0B0B0B] text-white placeholder-neutral-500 border-neutral-800'
                  : 'bg-white text-neutral-900 placeholder-neutral-500 border-neutral-300'
              }`}
            />
          </div>

          {/* Message Preview Box */}
          <div className={`p-3.5 rounded-xl border space-y-1 text-xs ${
            theme === 'dark' ? 'bg-[#0B0B0B] border-neutral-800' : 'bg-neutral-50 border-neutral-300'
          }`}>
            <div className={`flex items-center justify-between text-[10px] font-mono uppercase ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
            }`}>
              <span>{t('booking.preview.label')}:</span>
              <button
                type="button"
                onClick={handleCopyInquiry}
                className={`font-bold transition-colors ${
                  theme === 'dark'
                    ? 'text-[#DC2626] hover:text-white'
                    : 'text-[#B91C1C] hover:text-[#DC2626]'
                }`}
              >
                {copied ? t('booking.preview.copied') : t('booking.preview.copy')}
              </button>
            </div>
            <p className={`line-clamp-3 text-[11px] font-mono ${
              theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'
            }`}>
              {constructMessageText()}
            </p>
          </div>

          {/* Dispatch CTA Buttons */}
          <div className="pt-2 grid sm:grid-cols-2 gap-3">
            <button
              id="modal-send-whatsapp"
              onClick={handleWhatsAppSend}
              className="w-full py-3.5 px-4 rounded-xl font-extrabold text-xs text-white bg-[#B91C1C] hover:bg-[#DC2626] active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-wider shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('booking.actions.whatsapp')}</span>
            </button>

            <button
              id="modal-send-email"
              onClick={handleEmailSend}
              className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 uppercase tracking-wider transition-colors ${
                theme === 'dark'
                  ? 'text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800'
                  : 'text-neutral-800 hover:text-neutral-900 bg-white hover:bg-neutral-100 border border-neutral-300'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>{t('booking.actions.email')}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
