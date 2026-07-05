<template>
  <DefaultLayout>
    <div>
      <h1>Login</h1>
      <p>This is the login page.</p>
      <LoginForm />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoginForm from '@/components/forms/LoginForm.vue'
</script>
