<template>
  <div class="movies">
    <h2>Alla filmer</h2>
    <AllMovies></AllMovies>
  </div>
</template>


<script>
// @ is an alias to /src
import AllMovies from '@/components/AllMovies.vue'

export default {
  	name: 'home',
  	components: {
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