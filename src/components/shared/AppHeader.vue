<template>
  <div class="flex justify-between items-center bg-(--color-secondary)">
    <RouterLink to="/">Users<span>Hub</span></RouterLink>
    <ul class="flex gap-4">
      <li><RouterLink to="/" exact-active-class="text-black">Home</RouterLink></li>
      <li><RouterLink to="/profile">Profile</RouterLink></li>
    </ul>
    <div>
      <Button :icon="authIcon" :label="labelText"  @click="authAction" />
      <Button :icon="darkModeIcon" @click="toggleDarkMode"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { useHeaderLogic } from "@/composables/useHeaderLogic";

const { authAction, authIcon, toggleDarkMode, labelText, darkModeIcon} = useHeaderLogic()
</script>
