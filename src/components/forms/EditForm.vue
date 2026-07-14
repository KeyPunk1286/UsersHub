<template>
  <div>
    
    <form @submit.prevent="handleSubmit">
      <p>{{ form.values.email }}</p>
      <div>
        <InputText v-model="form.values.email" type="email" placeholder="Email" />
        <Message
          v-if="form.errors.email"
          severity="error"
          size="small"
          >{{ form.errors.email }}</Message
        >
      </div>
      <div>
        <InputText v-model="form.values.firstName" type="text" placeholder="First Name" />
        <Message
          v-if="form.errors.firstName"
          severity="error"
          size="small"
          >{{ form.errors.firstName }}</Message
        >
      </div>
      <div>
        <InputText v-model="form.values.lastName" type="text" placeholder="Last Name" />
        <Message
          v-if="form.errors.lastName"
          severity="error"
          size="small"
          >{{ form.errors.lastName }}</Message
        >
      </div>
      <div>
        <Textarea v-model="form.values.details" placeholder="Details" />
        <Message
          v-if="form.errors.details"
          severity="error"
          size="small"
          >{{ form.errors.details }}</Message
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
import type { IUseFormReturn, IEditForm } from "@/types/formsInterface";

const { form } = defineProps<{
  form: IUseFormReturn<IEditForm>
}>()

const emit = defineEmits<{
  (event: 'submit'): void
}>()

const { doValidate } = useEditData(form)

const handleSubmit = (): void => {
  if (doValidate()) {
    emit('submit')
  }
}
</script>
