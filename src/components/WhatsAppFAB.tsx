import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/site';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export const WhatsAppFAB: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(t('nav.waQuickMessage', { defaultValue: 'Hello CS Academy, I would like to inquire about your programs.' }))}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 right-5 sm:bottom-24 sm:right-6 z-[45] flex items-center gap-2 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute right-full mr-3 px-3 py-2 rounded-2xl bg-white dark:bg-[#1a1a1a] text-neutral-900 dark:text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-neutral-200 dark:border-white/10 pointer-events-none translate-x-2 group-hover:translate-x-0">
        {t('common.whatsappUs', { defaultValue: 'Chat with us' })}
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40" />
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] group-hover:shadow-[0_12px_40px_rgb(37,211,102,0.6)] transition-all">
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
      </div>
    </motion.a>
  );
};
