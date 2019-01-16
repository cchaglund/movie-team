<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |      
      <router-link to="/filmer">Filmer</router-link> |
      <router-link to="/barnfilmer">Barnfilmer</router-link> |
      <router-link to="/bokning">Bokning</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/user">User</router-link> |
      <router-link to="/confirmation">Confirmation</router-link> |
      <router-link to="/salonger">Salonger</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #89ACCE;
  min-height: 100vh;
  height: 100%;
}

body {
  padding: 0;
}

html {
  height: 100vh;
}
</style>

