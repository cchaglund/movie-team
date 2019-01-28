<template>
  <div class="body" style="background-color: black;">
    <div class="home">
     <h2 class="allafilmerhtwo">Alla filmer</h2>      
      <MoviesInfo v-for="jsonMovie in allMoviesJson" :movie=jsonMovie></MoviesInfo> 
      <Footer>
      </Footer>  
    </div>
  </div>
</template>

<script>
import json from '@/assets/barnfilmer.json'
import MoviesInfo from '@/components/MoviesInfo.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Movies',
  components: {
    MoviesInfo, Footer
  },
  data(){
    return{
      allMoviesJson: json
    }
  }
} 
</script>

<style>
    @import url(https://use.fontawesome.com/releases/v5.5.0/css/all.css);

  
  
</style>