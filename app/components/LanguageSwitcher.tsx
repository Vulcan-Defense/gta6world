'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import ptBR from '../i18n/locales/pt-BR.json';
import enUS from '../i18n/locales/en-US.json';

const localeData = { 'pt-BR': ptBR, 'en-US': enUS } as const;

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<keyof typeof localeData>('pt-BR');
  const [isOpen, setIsOpen] = useState(false);
  const translations = localeData[language];

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    return value;
  };

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((open) => !open);
        }}
        className="flex items-center space-x-2 px-3 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors text-white font-medium"
        aria-label="Selecionar idioma"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span>{t('languageSwitcher.label')}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3 h-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        id="language-dropdown"
        className={`absolute right-0 mt-2 w-56 rounded-md bg-gray-800/95 backdrop-blur-sm p-2 shadow-lg z-50 border border-gray-700 ${isOpen ? '' : 'hidden'}`}
      >
        <div className="space-y-1">
          {Object.entries(t('languageSwitcher.options')).map(([code, label]) => (
            <button
              key={code}
              onClick={() => {
                setLanguage(code as keyof typeof localeData);
                setIsOpen(false);
              }}
              className={`flex items-center space-x-2 w-full text-left px-3 py-2 rounded-hover bg-gray-700/30 hover:bg-gray-700/50 transition-colors ${
                language === code ? 'bg-gray-600/50' : ''
              }`}
            >
              <span>{label}</span>
              {language === code && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
