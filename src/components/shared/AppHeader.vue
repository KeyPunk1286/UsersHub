<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div class="flex justify-between items-center py-5 px-5 bg-secondary">
      <RouterLink to="/" class="font-secondary font-bold">
        <span class="text-2xl mr-1">Users</span>
        <span class="px-1 text-2xl bg-border rounded-md dark:text-accent dark:bg-primary">Hub</span>
      </RouterLink>
      <ul class="hidden md:flex gap-4">
        <li
          class="hover:text-accent transition duration-300 ease-in-out"
          v-for="item in navigation"
          :key="item.to"
        >
          <RouterLink :to="item.to">
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
      <div class="hidden md:flex gap-4">
        <Button
          unstyled
          pt:root="cursor-pointer"
          :icon="authIcon"
          :label="labelText"
          @click="authAction"
        />
        <Button unstyled pt:root="cursor-pointer" :icon="darkModeIcon" @click="toggleDarkMode" />
      </div>
      <div class="md:hidden">
        <Button
          unstyled
          :icon="menuIcon"
          @click="toggleMenu"
          pt:root="py-2 px-3 bg-accent rounded-md"
        />
      </div>
    </div>
    <Transition name="mobile-menu">
      <div v-if="isMenuOpen" class="md:hidden flex flex-col gap-4 p-5 bg-secondary">
        <ul class="flex flex-col gap-4">
          <li v-for="item in navigation" :key="item.to">
            <RouterLink :to="item.to" class="block py-2" @click="toggleMenu">{{
              item.label
            }}</RouterLink>
          </li>
        </ul>
        <div class="flex flex-col gap-3">
          <Button
            unstyled
            pt:root="py-2 bg-accent rounded-md cursor-pointer"
            :icon="darkModeIcon"
            @click="toggleDarkMode"
          />
          <Button
            unstyled
            pt:root="py-2 bg-accent rounded-md cursor-pointer"
            :icon="authIcon"
            :label="labelText"
            @click="authAction"
          />
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { useHeaderLogic } from '@/composables/useHeaderLogic'
import { useTheme } from '@/composables/useTheme'

const { isMenuOpen, authAction, authIcon, labelText, toggleMenu, menuIcon, navigation } =
  useHeaderLogic()

const { darkModeIcon, toggleDarkMode } = useTheme()
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
