<template>
    <div class="home">
      <h2 class="allafilmerhtwo">Alla filmer</h2>      
      MoviesInfo>     
    </div>
</template>

<script>
import MoviesInfo from '@/components/MoviesInfo.vue'

export default {
  name: 'Movies',
  components: {
    MoviesInfo
  },
  data(){
    return{
       
    }
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