<template>
    <div class="home">      
      <MoviesInfo v-for="allmovies in allMovies" :movie=allmovies></MoviesInfo>     
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
  created(){
  	this.$axios.get('http://localhost/movie-team/index.php').then((response) => {
  		console.log(response);
  		this.allMovies = response.data;
  	})
  },
  data(){
    return{
      allMovies: '',
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