import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { useAuthStore } from '@/stores/Auth'
import { useErrorHandler } from './useErrorHandler'

export function useHeaderLogic() {
  const router = useRouter()
  const authStore = useAuthStore()
  const { handle } = useErrorHandler()

  const isMenuOpen = ref(false)

  const authIcon = computed(() => (authStore.isAuthenticated ? 'pi pi-sign-out' : 'pi pi-sign-in'))

  const labelText = computed(() => (authStore.isAuthenticated ? 'Logout' : 'Login'))

  const menuIcon = computed(() => (isMenuOpen.value ? 'pi pi-times' : 'pi pi-bars'))

  const logout = async () => {
    try {
      await authStore.logout()
      router.push({
        name: 'Login',
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
        name: 'Login',
      })
    }
  }

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const navigation = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'Profile',
      to: '/profile',
    },
  ]

  return {
    isMenuOpen,
    authAction,
    authIcon,
    labelText,
    toggleMenu,
    menuIcon,
    navigation,
  }
}
