
  <template>
    <div>
      <h1>Register</h1>
      <input type="text" id="email">
      <input type="text" id="password">
      <button class="btn btn-primary" v-on:click="register()">Register</button>
    </div>
  </template>

<script>
new Vue = {
    data() {
      return {
        email:
        password:
      }
    },
    methods: {
      register() {
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
