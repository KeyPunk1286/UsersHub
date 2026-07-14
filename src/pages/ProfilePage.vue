<template>
  <DefaultLayout>
    <div>
      <h1>Profile</h1>
      <p>{{ userInfo?.firstName }}</p>
      <p>{{ userInfo?.lastName }}</p>
      <p>{{ userInfo?.details }}</p>
      <div>
        <Button icon="i pi pi-user-edit" @click="goToEdit"></button>
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
