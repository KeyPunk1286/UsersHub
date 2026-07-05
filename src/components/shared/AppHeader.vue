<template>
  <div>
    <RouterLink to="/">Users<span>Hub</span></RouterLink>
    <ui>
      <li><RouterLink to="/" exact-active-class="text-black">Home</RouterLink></li>
      <li><RouterLink to="/profile">Profile</RouterLink></li>
    </ui>
    <div>
      <Button label="Login" icon="pi pi-sign-in" @click="goPages" />
      <Button icon="pi pi-moon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
const goPages = () => {
  console.log('goPages')
}
</script>
