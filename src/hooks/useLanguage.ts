import { useState, useCallback } from 'react';
import type { Language, Translations } from '../i18n/types';
import { en } from '../i18n/en';
import { es } from '../i18n/es';

const STORAGE_KEY = 'hr-lang';

function detectLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en';
  const lang = navigator.language?.toLowerCase() || '';
  if (lang.startsWith('es')) return 'es';
  return 'en';
}

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') return stored;
  } catch {}
  return detectLanguage();
}

const translations: Record<Language, Translations> = { en, es };

export function useLanguage() {
  const [lang, setLang] = useState<Language>(getInitialLanguage);

  const changeLanguage = useCallback((newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {}
  }, []);

  const t = translations[lang];

  return { lang, t, changeLanguage };
}
