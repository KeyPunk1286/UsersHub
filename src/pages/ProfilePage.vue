<template>
  <DefaultLayout>
    <div>
      <h1>Profile</h1>
      <p>This is the profile page.</p>
      <EditForm />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import EditForm from '@/components/forms/EditForm.vue'
</script>
