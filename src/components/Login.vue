<template>
  <div>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <h1>Belépés</h1>
      Email: <input class="form-control" v-model="credentials.email" id="email"><br>
      Jelszó: <input type="password" class="form-control" v-model="credentials.password" id="password"><br>
      <button class="btn btn-primary" v-on:click="submit()">Belépés</button>
    </div>
  </div>
</template>

<script>
import auth from '../auth'

  export default {
    name: 'login',

    data () {
      return {
        credentials: {
          email: '',
          password: ''
        },
        error: ''
      }
    },

    methods: {

      async submit() {
        let credentials = {
          email: this.credentials.email,
          password: this.credentials.password
        }
        // will need to rewrite this after I rename loginTry to 'login'
        try {
          await auth.loginTry(this, credentials)
          this.$router.push('menu') // do I need await here?
        } catch (e) {
          // handle this shiiit
        }
      }

    }
  }
</script>
