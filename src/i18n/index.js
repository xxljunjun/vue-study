
import Vue from 'vue'
import I18n from 'vue-i18n'
import {getLang, setLang} from '../utils/auth'

Vue.use(I18n)

let locale = 'zh'
if (getLang()) {
  locale = getLang()
} else {
  setLang(locale)
}

const i18n = new I18n({
  locale: 'zh',
  messages: {
    zh: require(`@public/env/lang/zh.json`),
    en: require(`@public/env/lang/en.json`),
  }
})

export default i18n