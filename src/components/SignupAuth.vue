<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="username" v-model="displayName">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="your password" v-model="password">
      <div class="error">{{ error }}</div>
      <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
export default {
    setup(props, context) {
        const {error, signup} = useSignup()
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            if (!error.value) {
                context.emit('signup')
            }
        }

        return {displayName, email, password, error, handleSubmit}
    }
}
</script>

<style>

</style>