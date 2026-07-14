import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useAuthStore } from '@/stores/Auth'
import { useErrorHandler } from "./useErrorHandler";

export function useHeaderLogic() {
  
  const router = useRouter()
  const authStore = useAuthStore()
  const { handle } = useErrorHandler()

  const darkMode = ref(false)

  const authIcon = computed(() =>
    authStore.isAuthenticated  
      ? 'pi pi-sign-out'
      : 'pi pi-sign-in'
  )

  const labelText = computed(() =>
    authStore.isAuthenticated
      ? 'Logout'
      : 'Login'
  )

  const darkModeIcon = computed(() =>
    darkMode.value
      ? 'pi pi-sun'
      : 'pi pi-moon'
  )

  const logout = async () => {
    try {
      await authStore.logout()
      router.push({
        name: 'Login'
      })
    } catch (error) {
      handle(error)
    }
  }
  
  const authAction = () => {
    if (authStore.isAuthenticated) {
      logout()
    } else {
      router.push({
        name: 'Login'
      })
    }
  }

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    if (darkMode.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return{authAction,authIcon, toggleDarkMode, labelText, darkModeIcon}
}