<template>
  <div class="Login">
    <div class="card">
      <h1>Login</h1>
      <input type="text" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <span class="error">{{ error }}</span>
      <input type="submit" class="submit" @click="loginUser" value="Login">
    </div>
  </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async loginUser() {
      const credentials = {
        email: this.email,
        password: this.password
      }
      const payload = await UserService.login(credentials)

      console.log(payload)
      if (payload.data.error) {
        return this.error = payload.data.error
      }

      this.updateId(payload.data.user._id)
      this.updateToken(payload.data.token)
      this.$store.dispatch('updateLogged', true)
      this.$router.push('/profile')
    },
    getId() {
      return this.$store.getters.getId
    },
    updateId(id) {
      return this.$store.dispatch('updateId', id)
    },
    updateToken(token) {
      return this.$store.dispatch('updateToken', token)
    }
  },
  created() {
  }
}
</script>

<style scoped>
.Login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit {
  color: white;
  padding: 0.5em 2em;
  border: none;
  background-color: #00B4CC;
  font-size: 1.5em;
  font-family: inherit;
  transition: 0.4s;
}

.submit:hover {
  box-shadow: 10px 10px 1px #005F6B;
}

.error {
  margin: 0px;
  color: #C03943;
}

</style>
