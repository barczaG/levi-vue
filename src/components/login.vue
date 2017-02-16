<template>
  <div>
    <h1>Belépés</h1>
    <input v-model="text" id="email">
    <input v-model="text" id="password">
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
    data() {
      return {
        email: 'test@test.com',
        password: 'testpassword'
      }
    },
    methods: {
      login() {
        this.$http.post('http://localhost:3000/api/register', (data) => {
            this.email = email;
            this.password = password;
          })
          .error((err) => console.log(err))
      }
    }
  }
</script>
