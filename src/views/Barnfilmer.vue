<template>
    <div class="barnfilmer">   
      <h1>Barnfilmer</h1> 
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
      let barnfilmer = response.data.filter((film) => {
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

<style scoped>
    @import url(https://use.fontawesome.com/releases/v5.5.0/css/all.css);
    .fullwidthinfo {
      
    }
    .barnfilmer {
      /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#4adbad+1,feb645+100 */
      background: #4adbad; /* Old browsers */
      background: -moz-linear-gradient(top, #4ADA99 1%, #feb645 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, #4ADA99 1%,#feb645 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, #4ADA99 1%,#feb645 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4adbad', endColorstr='#feb645',GradientType=0 ); /* IE6-9 */
      padding-top: 6rem;
      color: white;
    }
</style>