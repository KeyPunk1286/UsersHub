export function useLocalStorage() {
  const setItem = (key: string, value: string): void => {
    localStorage.setItem(key, value)
  }

  const getItem = (key: string): string | null => {
    return localStorage.getItem(key)
  }

  const removeItem = (key: string): void => {
    localStorage.removeItem(key)
  }

  return { setItem, getItem, removeItem }
}
