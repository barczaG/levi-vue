<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- I have no idea why this only displays the Login component. -->
    <router-view></router-view>
  </div>
</template>

<script>
import Login from 'components/Login'
import Register from 'components/Register'
import Redirect from 'components/Redirect'
import MainMenu from 'components/MainMenu'
export default {
  name: 'app',
  components: {Login, Register, Redirect, MainMenu}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
