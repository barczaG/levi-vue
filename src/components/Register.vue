
  <template>
    <div>
      <form>
        <h1>Regisztráció</h1>
        Email: <input v-model="email" id="email"><br>
        Jelszó: <input type="password" v-model="password" id="password"><br>
        <button class="btn btn-primary" v-on:click="login()">Küldés</button>
      </form>
    </div>
  </template>

  <script>
    export default {
      name: 'login',
      methods: {
        login() {
          this.$http.post('http://localhost:3000/api/register', { email: this.email, password:this.password })
            .then((token) => console.log(token))
            .catch((err) => console.error(err))
            //console.log(this.email, this.password)
        }

      }
    }
  </script>
