<template>
  <div class="container">
      <Navbar />
      <window-interface/>
      <ChatForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import WindowInterface from "../components/WindowInterface.vue"
import getUser from "../composables/getUser"
import {watch} from 'vue'
import {useRouter} from 'vue-router'
import ChatForm from '../components/ChatForm.vue'
export default {
    components: {
        Navbar,
        ChatForm,
        WindowInterface
    },
    setup() {
        const { user } = getUser()
        const router = useRouter()

        watch(user, () => {
            if (!user.value) {
                router.push({name: 'Welcome'})
            }
        })

    }
}
</script>

<style>

</style>