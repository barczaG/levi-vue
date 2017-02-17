<template>
  <div>
    <h1>Belépés</h1>
    <input v-model="email" id="email">
    <input v-model="password" id="password">
    <button class="btn btn-primary" v-on:click="login()">Belépés</button>
  </div>
</template>
<!--
<script>
new Vue = {
  data() {
    return {
      email:
      password:
    }
  },
  methods: {
    login() {
      this.$http
        .post('http://localhost:3000/api/register', (data) => {
          this.email = email;
          this.password = password;
        })
        .error((err) => console.log(err))
    }
  }
}
</script>
-->
<script>
  export default {
    name: 'login',
    methods: {
      login() {
        this.$http.post('http://localhost:3000/api/login', { email: this.email, password:this.password })
          .then((token) => console.log(token))
          .catch((err) => console.error(err))
          //console.log(this.email, this.password)
      }

    }
  }
</script>
