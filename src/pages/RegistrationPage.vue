<template>
  <DefaultLayout>
    <div>
      <h1>Registration</h1>
      <p>This is the registration page.</p>
      <RegistrationForm />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import RegistrationForm from '@/components/forms/RegistrationForm.vue'
</script>
