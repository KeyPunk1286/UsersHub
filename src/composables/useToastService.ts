import { useToast } from 'primevue/usetoast'

export function useToastService() {
  const toast = useToast()

  function success(summary: string, detail: string) {
    toast.add({
      severity: 'success',
      summary,
      detail,
      life: 7000,
    })
  }

  function error(summary: string, detail: string) {
    toast.add({
      severity: 'error',
      summary,
      detail,
      life: 7000,
    })
  }

  function warning(summary: string, detail: string) {
    toast.add({
      severity: 'warn',
      summary,
      detail,
      life: 7000,
    })
  }

  function info(summary: string, detail: string) {
    toast.add({
      severity: 'info',
      summary,
      detail,
      life: 7000,
    })
  }

  return {
    success,
    error,
    warning,
    info,
  }
}
