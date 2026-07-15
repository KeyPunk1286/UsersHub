<template>
  <DefaultLayout>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1>{{ authStore.userInfo?.firstName }}</h1>
      <EditForm :form="form" @submit="submitEdit" />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import EditForm from '@/components/forms/EditForm.vue'
import { useAuthStore } from '@/stores/Auth'
import { useForm } from '@/composables/useForm'
import { useErrorHandler } from '@/composables/useErrorHandler'
import type { IEditForm } from '@/types/formsInterface'
import { useToastService } from '@/composables/useToastService'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const tost = useToastService()
const { handle } = useErrorHandler()
const router = useRouter()

const form = useForm<IEditForm>({
  email: authStore.userInfo?.email ?? '',
  firstName: authStore.userInfo?.firstName ?? '',
  lastName: authStore.userInfo?.lastName ?? '',
  details: authStore.userInfo?.details ?? '',
})

const submitEdit = async () => {
  try {
    await authStore.updateProfile({ ...form.values })
    tost.success('Success', 'Profile updated successfully')
    router.push({
      name: 'Profile',
    })
  } catch (error) {
    handle(error, form)
  }
}
</script>
