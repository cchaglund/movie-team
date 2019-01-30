<template>
    <div class="movies"> 
      <h1>Filmer</h1>      
      <MoviesInfo v-for="allmovies in allMovies" :movie=allmovies></MoviesInfo> <Footer></Footer>
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
    this.$axios.get('http://localhost/movie-team-server/getFilmData.php').then((response) => {
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

<style scoped>
    @import url(https://use.fontawesome.com/releases/v5.5.0/css/all.css);

    .movies {
      padding-top: 6rem;
      background-color: black;
      color: white;
    }

</style>