<template>
  <form novalidate @submit.prevent="handleSubmit" class="flex flex-col gap-6">
    <div>
      <InputText v-model="form.values.email" type="email" placeholder="Email" />
      <Message v-if="form.errors.email" severity="error" size="small">{{
        form.errors.email
      }}</Message>
    </div>
    <div>
      <Password v-model="form.values.password" placeholder="Password" />
      <Message v-if="form.errors.password" severity="error" size="small">{{
        form.errors.password
      }}</Message>
    </div>
    <div>
      <Button
        unstyled
        pt:root="py-2 px-3 bg-secondary rounded-md w-full cursor-pointer"
        type="submit"
        label="Login"
      />
    </div>
    <div v-if="form.serverError.value">
      <Message severity="error" size="small">{{ form.serverError.value }}</Message>
    </div>
  </form>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Password from 'primevue/password'
import Button from 'primevue/button'
import { useLoginValidate } from '@/composables/useLoginValidate'
import type { ILoginForm } from '@/types/formsInterface'
import { useForm } from '@/composables/useForm'

const { form } = defineProps<{
  form: ReturnType<typeof useForm<ILoginForm>>
}>()

const emit = defineEmits<{
  (event: 'submit'): void
}>()

const { doValidate } = useLoginValidate(form)

const handleSubmit = (): void => {
  if (doValidate()) {
    emit('submit')
  }
}
</script>
