<template>
  <nav>
      <div>
          <p>Display user profile...</p>
          <p class="email">Currently logged in ....</p>
      </div>
      <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
export default {
    setup() {
        const {error, logout} = useLogout()

        const handleClick = async () => {
            await logout()
            if (!error.value) {
                console.log('Loged out of here')
            }
        }
        return { handleClick }
    }
}
</script>
<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
nav p {
    font-size: 16px;
    margin: 2px auto;
    color: #444;
}
nav p.email {
    font-size: 14px;
    color: #999;
}
</style>