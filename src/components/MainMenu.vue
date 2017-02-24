<template>
  <div>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <!--<div>
      <h3>Felhasználó hozzáadása<h3><br>
        Email: <input class="form-control" v-model="credentials.email" id="email"><br>
        Jelszó: <input type="password" class="form-control" v-model="credentials.password" id="password"><br>
        <button class="btn btn-primary" v-on:click="submit()"></button>
    </div>-->

    <register></register><br>
    <button class="btn btn-danger" v-on:click='logout()'>Logout</button>

  </div>
</template>

<script>
import auth from '../auth'
import Register from './Register.vue'
  export default {
    name: 'MainMenu',
    components: {
      'Register': Register
    },
    data () {
      return {
        error: ''
      }
    },
    methods: {
      logout() {
        // will have to rewrite this after I rename asyncLogout to "logout"
        this.$router.push('logout')
      }
    }
    }
</script>
