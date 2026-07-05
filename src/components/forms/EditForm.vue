<template>
  <div>
    <h2>Edit User</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <InputText v-model="editData.email" type="email" placeholder="Email" />
        <Message
          v-for="(err, index) in editErrors.email"
          :key="index"
          severity="error"
          size="small"
          >{{ err }}</Message
        >
      </div>
      <div>
        <InputText v-model="editData.firstName" type="text" placeholder="First Name" />
        <Message
          v-for="(err, index) in editErrors.firstName"
          :key="index"
          severity="error"
          size="small"
          >{{ err }}</Message
        >
      </div>
      <div>
        <InputText v-model="editData.lastName" type="text" placeholder="Last Name" />
        <Message
          v-for="(err, index) in editErrors.lastName"
          :key="index"
          severity="error"
          size="small"
          >{{ err }}</Message
        >
      </div>
      <div>
        <Textarea v-model="editData.details" placeholder="Details" />
        <Message
          v-for="(err, index) in editErrors.details"
          :key="index"
          severity="error"
          size="small"
          >{{ err }}</Message
        >
      </div>
      <div>
        <Button type="submit" label="Save Changes" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import { useEditData } from '@/composables/useEditData'

const { editData, editErrors, handleSubmit } = useEditData()
</script>
