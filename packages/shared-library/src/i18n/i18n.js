import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const addResources = (i18n, language, resources) => {
  Object.keys(resources).forEach((key) => {
    i18n.addResourceBundle(language, key, resources[key], true);
  });
};

const loadi18n = (i18nInstance, i18nResources) => {
  Object.keys(i18nResources).forEach((key) => {
    addResources(i18nInstance, key, i18nResources[key]);
  });
};

const initializeI18next = (i18nResources) => {
  // It should only have 1 instance intialized, so if there is one already, just skip the init phase
  if (!i18n.isInitialized) {
    i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
      debug: true,
      fallbackLng: "en-US",
      ns: ['app'],
      defaultNS: 'app',
      resources: {},
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      }
    });  
  }

  loadi18n(i18n, i18nResources);
}

export { initializeI18next };
