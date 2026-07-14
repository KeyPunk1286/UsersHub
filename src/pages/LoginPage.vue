<template>
  <DefaultLayout>
    <div>
      <h1>Login</h1>
      <p>This is the login page.</p>
      <LoginForm :form="form" @submit="login"/>
    </div>
  </DefaultLayout>
</template>
  
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoginForm from '@/components/forms/LoginForm.vue'
import { useRoute, useRouter } from "vue-router";
import type { ILoginForm } from '@/types/formsInterface';
import { useAuthStore } from "@/stores/Auth";
import { getRedirectPath } from "@/utils/router";
import { ApiError } from "@/errors/ApiError";
import { useForm } from "@/composables/useForm";
import { mapValidationErrors } from '@/helper/mapValidationErrors';
import { useErrorHandler } from "@/composables/useErrorHandler";

const router =  useRouter()
const route = useRoute()
const redirect = route.query.redirect 

const authStore = useAuthStore()
const form = useForm<ILoginForm>({
  email: '',
  password: '',
})

const { handle } = useErrorHandler()

const login = async () => {
  try {
    await authStore.login({...form.values})
    
    const path = getRedirectPath(redirect, '/profile')
    router.push(path)
  } catch (error) {
    handle(error, form)
  }
}

</script>
