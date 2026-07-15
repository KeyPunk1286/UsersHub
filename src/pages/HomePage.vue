<template>
  <DefaultLayout>
    <div class="flex flex-col justify-center items-center gap-6">
      <h1 class="font-secondary font-bold text-4xl">Welcome to UsersHub</h1>
      <div class="flex flex-col gap-6" v-if="!authStore.isAuthenticated">
        <RouterLink to="/login" class="hover:text-secondary transition duration-300 ease-in-out"
          >Log in to access the site.</RouterLink
        >
        <RouterLink
          to="/registration"
          class="hover:text-secondary transition duration-300 ease-in-out"
          ><span>Not registered yet? Join us! </span><span>Register...</span></RouterLink
        >
      </div>
      <p v-else>{{ authStore.userInfo?.firstName }}</p>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useAuthStore } from '@/stores/Auth'

const authStore = useAuthStore()
</script>
