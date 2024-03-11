import { createI18n } from 'vue-i18n';
import en from './en.json';
import ru from './ru.json';

const languages = { en, ru };

const i18n = createI18n({
  legacy: true,
  locale: localStorage.getItem('lang') || 'ru',
  fallbackLocale: 'ru',
  messages: Object.assign(languages),
  warnHtmlInMessage: "off"
})

export default i18n;