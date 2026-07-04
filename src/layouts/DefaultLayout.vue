<template>
  <div class="layout">
    <header class="layout-header">
      <h1>My App</h1>
    </header>
    <main class="layout-main">
      <slot />
    </main>
    <footer class="layout-footer">
      <p>&copy; 2023 My App. All rights reserved.</p>
    </footer>
  </div>
</template>

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
