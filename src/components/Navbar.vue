<template>
  <nav v-if="user">
      <div>
          <p>Hey, there {{ user.displayName}}</p>
          <p class="email">Currently logged as {{ user.email }}</p>
      </div>
      <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
    setup() {
        const {error, logout} = useLogout()
        const {user} = getUser()
        const handleClick = async () => {
            await logout()
            if (!error.value) {
                console.log('Loged out of here')
            }
        }
        return { handleClick, user }
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