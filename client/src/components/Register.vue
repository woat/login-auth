<template>
  <div class="Register">
    <div class="card">
      <h1>Register</h1>
      <input v-model="email" type="email" placeholder="Email">
      <input v-model="password" type="password" placeholder="Password">
      <span class="error">{{ error }}</span>
      <input class="submit success" @click='register' type="submit" value="Register">
    </div>
  </div>
</section>

  </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      passwordMatch: '',
      error: ''
    }
  },
  methods: {
    async register() {
      const credentials = {
        email: this.email,
        password: this.password
      }
      const response = await UserService.register(credentials)
      if (response.data.error) return this.error = response.data.error
      this.$store.dispatch('updateId', response.data.user._id)
      this.$store.dispatch('updateToken', response.data.token)
      this.$store.dispatch('updateLogged', true)
      this.$router.push('/profile')
    }
  }
}
</script>

<style scoped>

.Register {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit {
  color: white;
  padding: 0.5em 2em;
  border: none;
  font-size: 1.5em;
  font-family: inherit;
  transition: 0.4s;
}

.submit:hover {
  box-shadow: 10px 10px 1px #5a856f;
}

.error {
  margin: 0px;
  color: #C03943;
}
</style>
