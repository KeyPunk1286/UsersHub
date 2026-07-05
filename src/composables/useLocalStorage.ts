export function useLocalStorage() {
  const setItem = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const getItem = <T>(key: string): T | null => {
    const item = localStorage.getItem(key)
    if (!item) {
      return null
    }
    try {
      return JSON.parse(item) as T
    } catch {
      return null
    }
  }

  const removeItem = (key: string): void => {
    localStorage.removeItem(key)
  }

  return { setItem, getItem, removeItem }
}
