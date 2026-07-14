<template>
  <div class="">
    <header class="">
      <AppHeader />
    </header>
    <main class="">
      <slot />
    </main>
    <footer class="">
      <p>&copy; 2023 My App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/shared/AppHeader.vue'
</script>


