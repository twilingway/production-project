import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// const PUBLIC_PATH = __IS_DEV__ ? '' : process.env.PUBLIC_URL;

i18n

  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: __IS_DEV__,
    ns: ['main', 'about', 'navbar', 'sidebar', 'translation'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lowerCaseLng: true,
    // backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    backend: { loadPath: 'locales/{{lng}}/{{ns}}.json' },
  });

export default i18n;
