import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Logout from '@/components/Logout'
import Profile from '@/components/Profile'
import Home from '@/components/Home'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        // If you are logged in, I do not want you to go to the login page
        if (store.getters.getLogged) {
          store.dispatch('updateFlash', 'You are already logged in.')
          return next('/home')
        }
        next()
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      beforeEnter: (to, from, next) => {
        // If you are logged in, I do not want you to go to the login page
        if (store.getters.getLogged) return next('/home')
        next()
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      beforeEnter: (to, from, next) => {
        // If you are not logged in, I do not want you to go to the logout page
        if (!store.getters.getLogged) return next('/home')
        next()
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: (to, from, next) => {
        // You must be logged in to perform that action
        if (!store.getters.getLogged) return next('/login')
        next()
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

router.afterEach((to, from) => {
  if (store.getters.getFlash) {
    store.dispatch('updateFlash', '')
  }
})

export default router
