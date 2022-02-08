<template>
  <div class="welcome container">
      <p>Welcome</p>
      <div v-if="showAuth">
          <h3>LogIn</h3>
          <login-form />
          <p>There is no account? <span @click="showAuth = false">Sign Up</span> instead</p>
      </div>
      <div v-else>
          <h3>Sign up</h3>
          <signup-auth/>
          <p>There is no account? <span @click="showAuth = true">Login</span> instead</p>
      </div>
  </div>
</template>

<script>
import SignupAuth from '../components/SignupAuth.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
export default {
    name: 'Welcome',
    components: {
        SignupAuth,
        LoginForm  
    },
    setup() {
        const showAuth = ref(true)

        return { showAuth }
    }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}
.welcome form {
    width: 300px;
    margin: 20px auto;
}
.welcome label {
    display: block;
    margin: 20px 0 10px;
}
.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}
.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
.welcome button {
    margin: 20px auto;
}
</style>