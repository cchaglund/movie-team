<template>
  <div class="body" style="background-color: black;">
    <div class="home">
      <h2 class="allafilmerhtwo">Alla filmer</h2>      
      MoviesInfo>     
    </div>
  </div>
</template>

<script>
import MoviesInfo from '@/components/MoviesInfo.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Movies',
  components: {
    MoviesInfo, Footer
  },
  data(){
    return{
       
    }
  }
} 
</script>

<style>
    @import url(https://use.fontawesome.com/releases/v5.5.0/css/all.css);

  
  
</style>