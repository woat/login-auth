<template>
  <div class="Navi">
    <router-link to="/" class="icon">Lo<span class="auth">Auth</span></router-link>
    <router-link to="/login" v-if="!this.$store.state.isLoggedIn" class="button info">Login</router-link>
    <router-link to="/register" v-if="!this.$store.state.isLoggedIn" class="button success">Register</router-link>
    <router-link to= "/profile" v-if="this.$store.state.isLoggedIn"class="button info">My Profile</router-link>
    <router-link to= "/logout" v-if="this.$store.state.isLoggedIn"class="button danger">Logout</router-link>
    <span>&nbsp;~&nbsp;</span>
    <router-link to= "/register" class="button danger">/register</router-link>
    <router-link to= "/login" class="button danger">/login</router-link>
    <router-link to= "/profile" class="button danger">/profile</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navi'
}
</script>

<style scoped>
.Navi {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-height: 50px;
}

.icon {
  margin-right: auto;
  text-decoration: none;
  font-size: 2.5em;
  color: #53777A;
  font-weight: 800;
}

.auth {
  color: #D95B43;
}

.button {
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 10px;
}

.button + .button {
  margin-left: 10px;
}
</style>
