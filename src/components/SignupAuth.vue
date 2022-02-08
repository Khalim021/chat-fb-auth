<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="username" v-model="showName">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="your password" v-model="password">
      <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
export default {
    setup() {
        const {error, signup} = useSignup()
        const showName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signup(email.value, password.value, showName.value)
        }

        return {showName, email, password, handleSubmit}
    }
}
</script>

<style>

</style>