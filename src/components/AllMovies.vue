<template>
  <div>
    <MoviesInfo v-for="jsonMovie in allMoviesJson" :movie=jsonMovie></MoviesInfo>
  </div>
</template>
<script>

import json from '@/assets/filmer.json'
import MoviesInfo from '@/components/MoviesInfo.vue'

export default {
  name: 'AllMovies',
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


<!-- filters: {
    toStringFunction(value) {
      if (!value) return ''
      value = value.toString().replace(/,/g, ", ")
      return value 
    }
  
}, -->