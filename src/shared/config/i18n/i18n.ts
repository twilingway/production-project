import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const PUBLIC_PATH = __IS_DEV__ ? '..' : process.env.PUBLIC_URL;

i18n

  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: __IS_DEV__,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lowerCaseLng: true,
    // backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    backend: { loadPath: `${PUBLIC_PATH}/locales/{{lng}}/{{ns}}.json` },
  });

export default i18n;
