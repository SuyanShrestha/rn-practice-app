import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

// language imports
import en from '../../locales/en.json';
import es from '../../locales/es.json';
import ja from '../../locales/ja.json';

export const languageResources = {
  en: {translation: en},
  es: {translation: es},
  ja: {translation: ja},
};

const initI18n = async () => {
  let savedLanguage = await AsyncStorage.getItem('language');

  if (!savedLanguage) {
    savedLanguage = 'en';
  }

  i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: savedLanguage,
    fallbackLng: 'en',
    resources: languageResources,
  });
};

initI18n();

export default i18next;
