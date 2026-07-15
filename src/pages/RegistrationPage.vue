<template>
  <DefaultLayout>
    <div>
      <h1>Registration</h1>
      <p>This is the registration page.</p>
      <RegistrationForm :form="form" @submit="register" />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import RegistrationForm from '@/components/forms/RegistrationForm.vue'
import { useForm } from '@/composables/useForm'
import type { IRegistrationForm } from '@/types/formsInterface'
import { useAuthStore } from '@/stores/Auth'
import { useErrorHandler } from '@/composables/useErrorHandler'
import { useToastService } from '@/composables/useToastService'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const { handle } = useErrorHandler()
const toast = useToastService()
const router = useRouter()

const form = useForm<IRegistrationForm>({
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  details: '',
})

const register = async () => {
  try {
    await authStore.register({
      ...form.values,
    })
    toast.success('Success', 'Registration completed successfully.')
    router.push({
      name: 'Login',
    })
  } catch (error) {
    handle(error, form)
  }
}
</script>
