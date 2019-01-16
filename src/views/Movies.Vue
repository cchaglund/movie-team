<template>
	<div class="movies">
		<h2>Alla filmer</h2>
		<MovieShort></MovieShort>
		<MovieLong></MovieLong>
	</div>
</template>


<script>
// @ is an alias to /src
import MovieLong from '@/components/MovieLong.vue'
import MovieShort from '@/components/MovieShort.vue'

export default {
  	name: 'home',
  	components: {
  		MovieLong,
  		MovieShort
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