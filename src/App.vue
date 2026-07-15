<script setup lang="ts">
import Toast from 'primevue/toast'
</script>

<template>
  <div class="min-h-screen bg-surface text-primary dark:bg-primary">
    <Toast />
    <RouterView />
  </div>
</template>

<style scoped></style>
