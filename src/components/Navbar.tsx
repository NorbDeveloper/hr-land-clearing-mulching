import { useState } from 'react';
import type { Language } from '../i18n/types';
import type { Translations } from '../i18n/types';

interface NavbarProps {
  t: Translations['nav'];
  lang: Language;
  onChangeLanguage: (lang: Language) => void;
}

const NAV_ITEMS = ['services', 'work', 'about', 'schedule', 'contact'] as const;

export default function Navbar({ t, lang, onChangeLanguage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2 shrink-0">
            <img src="/images/logo.jpeg" alt="HR" className="h-10 w-10 rounded-full object-cover border-2 border-secondary" />
            <span className="font-bold text-lg hidden sm:block text-accent">HR Land Clearing</span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-sm font-medium uppercase tracking-wider hover:text-secondary transition-colors"
              >
                {t[item]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onChangeLanguage('en')}
              className={`w-7 h-5 rounded-sm overflow-hidden border transition-opacity ${lang === 'en' ? 'opacity-100 ring-2 ring-secondary' : 'opacity-50 hover:opacity-80'}`}
              title="English"
            >
              <img src="https://flagcdn.com/w40/gb.png" alt="EN" className="w-full h-full object-cover" />
            </button>
            <button
              onClick={() => onChangeLanguage('es')}
              className={`w-7 h-5 rounded-sm overflow-hidden border transition-opacity ${lang === 'es' ? 'opacity-100 ring-2 ring-secondary' : 'opacity-50 hover:opacity-80'}`}
              title="Español"
            >
              <img src="https://flagcdn.com/w40/es.png" alt="ES" className="w-full h-full object-cover" />
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-primary-light px-4 py-3 space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full text-left py-2 text-sm font-medium uppercase tracking-wider hover:text-secondary transition-colors"
            >
              {t[item]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
