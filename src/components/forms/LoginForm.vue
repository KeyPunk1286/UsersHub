<template>
  <form novalidate @submit.prevent="handleSubmit">
    <div>
      <InputText v-model="loginData.email" type="email" placeholder="Email" />
      <Message v-if="errorsLoginData.email" severity="error" size="small">{{
        errorsLoginData.email
      }}</Message>
    </div>
    <div>
      <Password v-model="loginData.password" placeholder="Password" />
      <Message v-if="errorsLoginData.password" severity="error" size="small">{{
        errorsLoginData.password
      }}</Message>
    </div>
    <div>
      <Button type="submit" label="Login" />
    </div>
  </form>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Password from 'primevue/password'
import Button from 'primevue/button'
import { useLoginValidate } from '@/composables/useLoginValidate'

const { loginData, errorsLoginData, handleSubmit } = useLoginValidate()
</script>
