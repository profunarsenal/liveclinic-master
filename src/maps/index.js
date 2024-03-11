import i18n from '@/i18n';

const lang = i18n.global.locale === 'ru' ? 'ru-RU' : 'en-US';

const settings = {
  apiKey: '74d588c3-6e1e-47e5-a103-484908b2a326',
  lang: lang,
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

export default settings;