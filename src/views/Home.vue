<template>
<div class="home">
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <h2>Alla filmer</h2>
  <MoviesInfo></MoviesInfo>
</div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AllMovies from '@/components/AllMovies.vue'
import MoviesInfo from '@/components/MoviesInfo.vue'

export default {
name: 'home',
  components: {
    HelloWorld,
  	AllMovies,
    MoviesInfo
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