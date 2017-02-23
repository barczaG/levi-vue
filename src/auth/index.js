// I need to fix this fucking mess of an import

import VueRouter from './route'
//import VueRouter from '../router/'

const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'api/login'
const REGISTER_URL = API_URL + 'api/register'

export default {
  user: {
    authenticated: false
  },

  login (context, creds, redirect) {
    // sends login data to server
    context.$http.post(LOGIN_URL, creds)
      .then(function (data) {
        console.log(data)
        // Won't this also set error messages to 'id_token'?
        // saves received token as "id_token"
        localStorage.setItem('id_token', data.body)
        console.log(localStorage.getItem('id_token'))
        //this.user.authenticated = true
        //console.log(this.user)
      })
      .then(console.log(this.user))
      .catch((err) => console.error(err))

      // Only partially working authentication, works if user doesn't enter anything,
      // but has a signed token
      if (redirect && this.user.authenticated) {
        // redirects user to specified part of the site
        context.$router.push(redirect)
      }
  },

  // when called, "context" will be "this", creds will be the email and the password,
  // and if there's a redirect passed, user will be redirected there
  async loginTry (context, creds, redirect) {
    try {
      // sends login data to server
      let data = await context.$http.post(LOGIN_URL, creds)
      console.log(data)
      // saves received token as "id_token"
      localStorage.setItem('id_token', data.body)
      console.log(localStorage.getItem('id_token'))
      this.user.authenticated = true
      console.log(this.user)
      // Only partially working authentication, works if user doesn't enter anything,
      // but has a signed token
      if (data.status === 200) {
        console.log('Succesfully logged in.')
      } else {
        console.log('An error has occured')
      }
      if (redirect && this.user.authenticated) {
        // redirects user to specified part of the site
        context.$router.push(redirect) // do I need await here?
      }
    } catch (err) {
      console.error(err)
    }
  },

  logout(context) {
    // these statements don't print anything
    console.log(this.user)
    console.log(localStorage.getItem('id_token'))
    localStorage.removeItem('id_token')
    this.user.authenticated = false
    // this won't print anything either
    console.log(this.user)
    context.$router.push('/')
  },

  async asyncLogout(context) {
    try {
      console.log(this.user)
      console.log(localStorage.getItem('id_token'))
      localStorage.removeItem('id_token')
      this.user.authenticated = false
      // this won't print anything either
      console.log(this.user)
      context.$router.push('/')
    } catch (err) {
      console.error(err)
    }
  },

  async register(context, creds) {
    try{
      if (!this.user.authenticated) {
        console.error('User is not authenticated')
        return
      } else {
        let data = await context.$http.post(REGISTER_URL, creds)
        console.log(data)
        console.log('This is running')
        if (data.status === 200) {
          console.log('User succesfully added')
        } else {
          console.log('An error has occured')
        }
      }
    } catch (err) {
      console.error(err)
    }
  },

  checkAuth () {
    let jwt = localStorage.getItem('id_token')
    if (jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  async asyncCheckAuth () {
    try {
      let jwt = await localStorage.getItem('id_token')
      if (jwt) {
        this.user.authenticated = true
      } else {
        this.user.authenticated = false
      }
    } catch (err) {
      console.error(err)
    }
  },

  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }

}
