<template>
<div class="home">
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <h2>Alla filmer</h2>
  <AllMovies></AllMovies>
</div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AllMovies from '@/components/AllMovies.vue'

export default {
name: 'home',
  components: {
    HelloWorld,
  	AllMovies
  }
} 
</script>


<style>
  @import url(https://use.fontawesome.com/releases/v5.5.0/css/all.css);

  #app,
  html{
    background-color: black;
    color: white;
  }
</style>