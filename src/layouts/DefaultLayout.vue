<template>
  <AppHeader />
  <main class="pt-40 dark:text-surface">
    <slot />
  </main>
  <!-- <footer class="">
    <p>&copy; 2023 My App. All rights reserved.</p>
  </footer> -->
</template>

<script setup lang="ts">
import AppHeader from '@/components/shared/AppHeader.vue'
</script>
