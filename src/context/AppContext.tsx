import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Theme, Currency, translations, Translations } from '../data/translations';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  t: Translations;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize Language from localStorage or default to 'sw' (Swahili first)
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('cs_academy_lang');
      if (savedLang === 'sw' || savedLang === 'en') return savedLang;
    } catch (e) {
      // ignore
    }
    return 'sw';
  });

  // Initialize Theme from localStorage or system preference, default to 'dark'
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const savedTheme = localStorage.getItem('cs_academy_theme');
      if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    } catch (e) {
      // ignore
    }
    return 'dark';
  });

  // Initialize Currency
  const [currency, setCurrencyState] = useState<Currency>(() => {
    try {
      const savedCurr = localStorage.getItem('cs_academy_currency');
      if (savedCurr === 'TSH' || savedCurr === 'KES' || savedCurr === 'USD') return savedCurr;
    } catch (e) {
      // ignore
    }
    return 'TSH';
  });

  // Update HTML class on theme change
  useEffect(() => {
    try {
      const root = document.documentElement;
      root.lang = language;
      root.dataset.language = language;
      root.classList.add('notranslate');
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
      }
      localStorage.setItem('cs_academy_theme', theme);
    } catch (e) {
      // ignore
    }
  }, [language, theme]);

  // Persist language
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('cs_academy_lang', lang);
    } catch (e) {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'sw' ? 'en' : 'sw');
  };

  // Persist theme
  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Persist currency
  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    try {
      localStorage.setItem('cs_academy_currency', c);
    } catch (e) {
      // ignore
    }
  };

  const t = translations[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        setTheme,
        toggleTheme,
        currency,
        setCurrency,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
