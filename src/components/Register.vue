
  <template>
    <div>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="form-group">
        <h3>Felhasználó hozzáadása<h3><br>
        Email: <input class="form-control" v-model="credentials.email" id="email"><br>
        Jelszó: <input type="password" class="form-control" v-model="credentials.password" id="password"><br>
        <button class="btn btn-primary" v-on:click="register()">Küldés</button>
      </div>
    </div>
  </template>

  <script>
  import auth from '../auth'
    export default {
      name: 'Register',

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
        register() {
          let credentials = {
            email: this.credentials.email,
            password: this.credentials.password
          }
           // await?
           auth.register(this, credentials)

           this.credentials.email = ''
           this.credentials.password = ''

        }
        }
      }

  </script>
