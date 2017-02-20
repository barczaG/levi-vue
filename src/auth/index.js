// I need to fix this fucking mess of an import

import VueRouter from './route'

const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'api/login'

export default {
  user: {
    authenticated: false
  },
/*
  // when called, "context" will be "this", creds will be the email and the password,
  // and if there's a redirect passed, user will be redirected there
  login (context, creds, redirect) {
    console.log(creds)
    console.log(redirect)
    context.$http.post(LOGIN_URL, creds, (data) => {
      console.log(data)
      localStorage.setItem('id_token', data.body)
      console.log(localStorage.getItem('id_token'))
      if (!data) {
        console.log('No data received')
      }

      // Isn't this conflicting with checkAuth()?
      //this.user.authenticated = true
    })
    // Isn't this conflicting with checkAuth()?
    this.user.authenticated = true
    console.log(localStorage.getItem('id_token'))
    // everything below should be replaced by checkAuth() somehow
    console.log(this.user)
    if (redirect && this.user.authenticated) {
      context.$router.push(redirect)
    }
    // Need to handle errors
    //.error((err) => {
    //  context.error = err
    //})
  },*/

  async login (context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds)
      .then(function (data) {
        console.log(data)
        // Won't this also set error messages to 'id_token'?
        localStorage.setItem('id_token', data.body)
        console.log(localStorage.getItem('id_token'))
        //this.user.authenticated = true
        //console.log(this.user)
      })
      .then(console.log(this.user))
      .catch((err) => console.error(err))
      if (redirect && this.user.authenticated) {
        context.$router.push(redirect)
      }
  },

  async loginTry (context, creds, redirect) {
    try {
      context.$http.post(LOGIN_URL, creds)
        .then(function (data) {
          console.log(data)
          localStorage.setItem('id_token', data.body)
          console.log(localStorage.getItem('id_token'))
          //this.user.authenticated = true
          //console.log(this.user)
        })
        .then(console.log(this.user))
    } catch (err) {
      console.error(err)
    }
    if (redirect && this.user.authenticated) {
      context.$router.push(redirect)
    }
  },

  logout() {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  checkAuth () {
    let jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    } else {
      this.user.authenticated = false
    }
  },

  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }

}
