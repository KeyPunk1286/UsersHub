<template>
  <form novalidate @submit.prevent="handleSubmit">
    <div>
      <InputText v-model="registrationData.email" type="email" placeholder="Email" />
      <Message
        v-for="(err, index) in registrationErrors.email"
        :key="index"
        severity="error"
        size="small"
        >{{ err }}</Message
      >
    </div>
    <div>
      <InputText v-model="registrationData.firstName" type="text" placeholder="First Name" />
      <Message
        v-for="(err, index) in registrationErrors.firstName"
        :key="index"
        severity="error"
        size="small"
        >{{ err }}</Message
      >
    </div>
    <div>
      <InputText v-model="registrationData.lastName" type="text" placeholder="Last Name" />
      <Message
        v-for="(err, index) in registrationErrors.lastName"
        :key="index"
        severity="error"
        size="small"
        >{{ err }}</Message
      >
    </div>
    <div>
      <Password v-model="registrationData.password" placeholder="Password" />
      <Message
        v-for="(err, index) in registrationErrors.password"
        :key="index"
        severity="error"
        size="small"
        >{{ err }}</Message
      >
    </div>
    <div>
      <Textarea v-model="registrationData.details" placeholder="Details" />
      <Message
        v-for="(err, index) in registrationErrors.details"
        :key="index"
        severity="error"
        size="small"
        >{{ err }}</Message
      >
    </div>
    <div>
      <Button type="submit" label="Register" />
    </div>
  </form>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import { useRegistrationValidation } from '@/composables/useRegistrationValidation'
const { registrationData, registrationErrors, handleSubmit } = useRegistrationValidation()
</script>
