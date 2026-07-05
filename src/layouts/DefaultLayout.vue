<template>
  <div class="layout">
    <header class="layout-header">
      <AppHeader />
    </header>
    <main class="layout-main">
      <slot />
    </main>
    <footer class="layout-footer">
      <p>&copy; 2023 My App. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/shared/AppHeader.vue'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.layout-header {
  background-color: #f0f0f0;
  padding: 1rem;
}

.layout-main {
  flex: 1;
  padding: 1rem;
}

.layout-footer {
  background-color: #f0f0f0;
  padding: 1rem;
}
</style>
