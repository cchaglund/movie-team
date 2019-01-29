<template>
    <div class="home">   
      <h1>Alla barnfilmer</h1> 
      <MoviesInfo v-for="allmovies in allMovies" :movie=allmovies></MoviesInfo> <Footer></Footer>
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
      let barnfilmer = response.data.filter((film) => {
        console.log("film", film)
        return film.Typ == 'Barn'
      })
      this.allMovies = barnfilmer;
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
    h1{
      padding-top: 100px;
    }
</style>