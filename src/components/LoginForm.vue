<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="your password" v-model="password">
      <button>Login</button>
      <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin  from '../composables/useLogin'
export default {
    setup() {
        const {error, login} = useLogin()
        const email = ref('')
        const password = ref('')    
        
        const handleSubmit = async () => {
            await login(email.value, password.value)
            if (!error.value) {
                console.log('user loged in')
            }
        }

        return {email, password, error, handleSubmit}
    }
}
</script>

<style>

</style>