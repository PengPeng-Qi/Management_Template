import { createI18n } from 'vue-i18n'
// import { getBrowserLang } from '@/utils'

import en from './modules/en'
import zh from './modules/zh'

const i18n = createI18n({
  // locale: getBrowserLang(),
  locale: 'en',
  messages: {
    zh,
    en
  }
})

export default i18n
