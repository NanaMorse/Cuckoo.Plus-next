import { createI18n } from 'vue-i18n'
import { I18nLocales } from '@/constant'

import EN from './en'
import DE from './de'
import JA from './ja'
import ZH_CN from './zh-cn'
import ZH_HK from './zh-hk'
import ZH_TW from './zh-tw'

const currentLocale = I18nLocales.EN

const i18nMessages = {
  [I18nLocales.EN]: EN,
  [I18nLocales.DE]: DE,
  [I18nLocales.JA]: JA,
  [I18nLocales.ZH_CN]: ZH_CN,
  [I18nLocales.ZH_HK]: ZH_HK,
  [I18nLocales.ZH_TW]: ZH_TW
}

export default createI18n({
  locale: currentLocale,
  messages: i18nMessages,
  fallbackLocale: I18nLocales.EN
})
