import { ref, computed } from 'vue'
import { useLocalStorage } from './useLocalStorage'

const darkMode = ref(false)

export function useTheme() {
  const localStorage = useLocalStorage()

  const darkModeIcon = computed(() => (darkMode.value ? 'pi pi-sun' : 'pi pi-moon'))

  const applyTheme = () => {
    document.documentElement.classList.toggle('dark', darkMode.value)
  }

  const initTheme = () => {
    darkMode.value = localStorage.getItem('dark') === 'true'
    applyTheme()
  }

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    applyTheme()
    if (darkMode.value) {
      localStorage.setItem('dark', String(darkMode.value))
    } else {
      localStorage.removeItem('dark')
    }
  }

  return {
    darkModeIcon,
    toggleDarkMode,
    initTheme,
  }
}
