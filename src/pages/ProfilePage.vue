<template>
  <DefaultLayout>
    <div class="flex flex-col justify-center items-center gap-3 text-2xl">
      <div class="flex items-center gap-2 ">
        <i class="pi pi-user"/>
        <h1>Profile</h1>
      </div>
      <p>{{ userInfo?.firstName }}</p>
      <p>{{ userInfo?.lastName }}</p>
      <p>{{ userInfo?.details }}</p>
      <div>
        <Button unstyled pt:root="px-3 py-2 bg-secondary rounded-md cursor-pointer" icon="i pi pi-user-edit" @click="goToEdit"></button>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Button from 'primevue/button'
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/Auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore()
const { userInfo } = storeToRefs(authStore)
const router = useRouter()

const goToEdit = () => {
  router.push({
  name: 'Edit'
})
}
</script>
