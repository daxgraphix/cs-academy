import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { useApp } from '../context/AppContext';
import { 
  X, 
  MessageCircle, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Building2, 
  User, 
  MapPin,
  Clock,
  ArrowRight
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
  const { language, theme } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [program, setProgram] = useState('AI Academy Flagship');
  const [format, setFormat] = useState('Live Online (Zoom/Google Meet)');
  const [audienceType, setAudienceType] = useState('Individual Professional');
  const [location, setLocation] = useState('Tanzania');
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefill) {
      if (prefill.program) setProgram(prefill.program);
      if (prefill.format) setFormat(prefill.format);
      if (prefill.organizationType) setAudienceType(prefill.organizationType);
    }
  }, [prefill, isOpen]);

  if (!isOpen) return null;

  const constructMessageText = () => {
    return language === 'sw'
      ? `Habari timu ya CS Academy,\n\nNinaomba maelezo kuhusu programu ya mafunzo:\n• Jina: ${name || '[Jina lako]'}\n• Barua pepe: ${email || '[Barua pepe yako]'}\n• Shirika / Wajibu: ${organization || '[Mtu binafsi/Kampuni]'}\n• Programu: ${program}\n• Njia ninayopendelea: ${format}\n• Kundi la walengwa: ${audienceType}\n• Eneo: ${location}\n${notes ? `• Malengo/Maelezo: ${notes}\n` : ''}\nTafadhali nitumie maelezo ya mtaala na ratiba zinazopatikana.`
      : `Hello CS Academy Team,\n\nI would like to inquire about a training program:\n• Name: ${name || '[Your Name]'}\n• Email: ${email || '[Your Email]'}\n• Organization / Role: ${organization || '[Individual/Company]'}\n• Program: ${program}\n• Preferred Format: ${format}\n• Audience Segment: ${audienceType}\n• Location: ${location}\n${notes ? `• Specific Goals/Notes: ${notes}\n` : ''}\nPlease provide curriculum details and scheduling availability.`;
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(constructMessageText());
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, '_blank');
  };

  const handleEmailSend = () => {
    const subject = encodeURIComponent(`Training Inquiry: ${program} — CS Academy`);
    const body = encodeURIComponent(constructMessageText());
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyInquiry = () => {
    navigator.clipboard.writeText(constructMessageText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className={`${theme === 'dark' ? 'bg-[#171717] border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'} border rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`sticky top-0 backdrop-blur-md px-6 sm:px-8 py-5 border-b flex items-center justify-between z-10 ${theme === 'dark' ? 'bg-[#171717]/95 border-neutral-800' : 'bg-white/95 border-neutral-200'}`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-900/60 flex items-center justify-center text-[#DC2626]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-lg font-extrabold ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>{language === 'sw' ? 'OMBA MAFUNZO / ULIZA' : 'BOOK TRAINING / INQUIRY'}</h3>
              <p className="text-xs text-neutral-400">{language === 'sw' ? 'Wasiliana na wakufunzi na washauri wa CS Academy' : 'Connect with CS Academy instructors & advisors'}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Form Inputs */}
        <div className="p-6 sm:p-8 space-y-5">
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                {language === 'sw' ? 'Jina lako' : 'Your Name'}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Maria Joseph"
                className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#DC2626]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                {language === 'sw' ? 'Barua pepe' : 'Email Address'}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. maria@company.com"
                className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#DC2626]"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                {language === 'sw' ? 'Shirika / Taasisi (au mtu binafsi)' : 'Organization / Institution (or Individual)'}
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="e.g. University / Company / Self"
                className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#DC2626]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                {language === 'sw' ? 'Eneo / Nchi' : 'Location / Country'}
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#DC2626]"
              >
                <option value="Tanzania">Tanzania</option>
                <option value="Kenya">Kenya</option>
                <option value="Uganda">Uganda</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Burundi">Burundi</option>
                <option value="DRC">DRC</option>
                <option value="Zanzibar">Zanzibar</option>
                <option value="Other African Country">Other African Country</option>
                <option value="International / Diaspora">International / Diaspora</option>
              </select>
            </div>
          </div>

          {/* Program Select */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              {language === 'sw' ? 'Programu ya Mafunzo Uliyochagua' : 'Selected Training Program'}
            </label>
            <select
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#DC2626]"
            >
              <optgroup label="Core Academies">
                <option value="AI Academy Flagship Program">AI Academy Flagship Program</option>
                <option value="Cybersecurity Academy Program">Cybersecurity Academy Program</option>
                <option value="Digital Skills Academy Program">Digital Skills Academy Program</option>
              </optgroup>
              <optgroup label="Featured Courses">
                <option value="AI for Everyone">AI for Everyone (Beginner)</option>
                <option value="AI for Business & Teams">AI for Business & Teams</option>
                <option value="AI for Educators & Lecturers">AI for Educators & Lecturers</option>
                <option value="AI Safety & Deepfake Defense">AI Safety & Deepfake Defense</option>
                <option value="Cybersecurity Awareness Workshop">Cybersecurity Awareness Workshop</option>
                <option value="Digital Productivity Masterclass">Digital Productivity Masterclass</option>
              </optgroup>
              <optgroup label="Institutional & Speaking">
                <option value="Corporate AI & Cybersecurity Workforce Proposal">Corporate AI & Cybersecurity Workforce Proposal</option>
                <option value="Executive AI Briefing (C-Suite/Boards)">Executive AI Briefing (C-Suite/Boards)</option>
                <option value="Keynote Speaking by Alex Rweyemamu">Keynote Speaking by Alex Rweyemamu</option>
                <option value="Custom Institutional Curriculum">Custom Institutional Curriculum</option>
              </optgroup>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Preferred Delivery Format */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                {language === 'sw' ? 'Njia Unayopendelea' : 'Preferred Format'}
              </label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#DC2626]"
              >
                <option value="Live Online (Zoom/Google Meet)">Live Online (Zoom/Google Meet)</option>
                <option value="On-Site Physical Workshop">On-Site Physical Workshop</option>
                <option value="WhatsApp Micro-Learning Cohort">WhatsApp Micro-Learning Cohort</option>
                <option value="Hybrid (Online + Physical)">Hybrid (Online + Physical)</option>
                <option value="Conference Keynote / Seminar">Conference Keynote / Seminar</option>
              </select>
            </div>

            {/* Audience Segment */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                {language === 'sw' ? 'Kundi la Walengwa' : 'Audience Segment'}
              </label>
              <select
                value={audienceType}
                onChange={(e) => setAudienceType(e.target.value)}
                className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-[#DC2626]"
              >
                <option value="Individual Professional / Student">Individual Professional / Student</option>
                <option value="Company / Enterprise Team">Company / Enterprise Team</option>
                <option value="University / School Faculty">University / School Faculty</option>
                <option value="NGO / Development Organization">NGO / Development Organization</option>
                <option value="Government / Public Institution">Government / Public Institution</option>
                <option value="Small Business Owner">Small Business Owner</option>
              </select>
            </div>
          </div>

          {/* Notes / Special requirements */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              {language === 'sw' ? 'Malengo Maalum au Idadi ya Timu (Si lazima)' : 'Specific Objectives or Team Size (Optional)'}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Training 25 team members on prompt engineering, English & Kiswahili mix..."
              className="w-full px-4 py-2.5 bg-[#0B0B0B] border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#DC2626]"
            />
          </div>

          {/* Message Preview Box */}
          <div className="p-3.5 rounded-xl bg-[#0B0B0B] border border-neutral-800/80 space-y-1 text-xs">
            <div className="flex items-center justify-between text-neutral-400 text-[10px] font-mono uppercase">
              <span>{language === 'sw' ? 'Hakiki ya Ujumbe wa Moja kwa Moja:' : 'Automated Message Preview:'}</span>
              <button
                type="button"
                onClick={handleCopyInquiry}
                className="text-[#DC2626] hover:text-white font-bold transition-colors"
              >
                {copied ? (language === 'sw' ? 'Imenakiliwa!' : 'Copied to Clipboard!') : (language === 'sw' ? 'Nakili Ujumbe' : 'Copy Text')}
              </button>
            </div>
            <p className="text-neutral-300 line-clamp-3 text-[11px] font-mono">
              {constructMessageText()}
            </p>
          </div>

          {/* Dispatch CTA Buttons */}
          <div className="pt-2 grid sm:grid-cols-2 gap-3">
            <button
              id="modal-send-whatsapp"
              onClick={handleWhatsAppSend}
              className="w-full py-3.5 px-4 rounded-xl font-extrabold text-xs text-white bg-[#B91C1C] hover:bg-[#DC2626] flex items-center justify-center gap-2 uppercase tracking-wider shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{language === 'sw' ? 'Tuma kupitia WhatsApp' : 'Send via WhatsApp'}</span>
            </button>

            <button
              id="modal-send-email"
              onClick={handleEmailSend}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-xs text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center gap-2 uppercase tracking-wider transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{language === 'sw' ? 'Tuma kupitia Barua Pepe' : 'Send via Email'}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
