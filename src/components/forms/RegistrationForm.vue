<template>
  <form novalidate @submit.prevent="handleSubmit">
    <div>
      <InputText v-model="form.values.email" type="email" placeholder="Email" />
      <Message v-if="form.errors.email" severity="error" size="small">{{
        form.errors.email
      }}</Message>
    </div>
    <div>
      <InputText v-model="form.values.firstName" type="text" placeholder="First Name" />
      <Message v-if="form.errors.firstName" severity="error" size="small">{{
        form.errors.firstName
      }}</Message>
    </div>
    <div>
      <InputText v-model="form.values.lastName" type="text" placeholder="Last Name" />
      <Message v-if="form.errors.lastName" severity="error" size="small">{{
        form.errors.lastName
      }}</Message>
    </div>
    <div>
      <Password v-model="form.values.password" placeholder="Password" />
      <Message v-if="form.errors.password" severity="error" size="small">{{
        form.errors.password
      }}</Message>
    </div>
    <div>
      <Textarea v-model="form.values.details" placeholder="Details" />
      <Message v-if="form.errors.details" severity="error" size="small">{{
        form.errors.details
      }}</Message>
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
import type { IUseFormReturn, IRegistrationForm } from '@/types/formsInterface'

const { form } = defineProps<{
  form: IUseFormReturn<IRegistrationForm>
}>()

const emit = defineEmits<{
  (event: 'submit'): void
}>()

const { doValidate } = useRegistrationValidation(form)

const handleSubmit = (): void => {
  if (doValidate()) {
    emit('submit')
  }
}
</script>
