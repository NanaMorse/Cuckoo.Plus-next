import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n '
import { I18nTags, RoutersInfo } from '@/constant'

import { create, NButton } from 'naive-ui'

import '@/registerServiceWorker'

const app = createApp(App)

// load i18n and routersInfo
app.use({
  install (app) {
    app.config.globalProperties.$i18nTags = I18nTags
    app.config.globalProperties.$routersInfo = RoutersInfo
  }
})

// load naive component
const naive = create({
  components: [NButton]
})
app.use(naive)

app.use(i18n)
app.use(store)
app.use(router)

app.mount('#app')
