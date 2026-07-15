import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

import App from './App.vue'
import router from './router'

import { useAuthStore } from '@/stores/Auth'
import { onUnauthorized } from '@/events/auth.events'
import { useTheme } from '@/composables/useTheme.ts'

import '@/assets/styles/main.css'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice'

const app = createApp(App)
const pinia = createPinia()
useTheme().initTheme()

app.use(pinia)
const authStore = useAuthStore(pinia)
await authStore.restoreSession()

onUnauthorized(() => {
  authStore.clearSession()
  router.push({
    name: 'Login',
  })
})

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(ToastService)
app.mount('#app')
