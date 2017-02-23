<template>
  <div>
    <p>It worked</p>
     <router-link to="/">Go to Login</router-link>
     <button class="btn btn-danger" v-on:click='logout()'>Logout</button>
     <!--btn-danger won't style button for some reason-->
  </div>
</template>

<script>
import auth from '../auth'
  export default {

    methods: {
      logout() {
        // will have to rewrite this after I rename asyncLogout to "logout"
        auth.asyncLogout(this)
      }
    }
  }
</script>
