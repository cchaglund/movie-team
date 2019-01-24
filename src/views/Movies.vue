<template>
    <div class="home">      
      <MoviesInfo v-for="jsonMovie in allMoviesJson" :movie=jsonMovie></MoviesInfo>     
    </div>
</template>

<script>
import json from '@/assets/filmer.json'
import MoviesInfo from '@/components/MoviesInfo.vue'

export default {
  name: 'Movies',
  components: {
    MoviesInfo
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

    #app,
    html{
        background-color: black;
        color: black;
    }
</style>