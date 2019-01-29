<template>
	<div class="anvandare">
		<Bokningsbekraftelse 
			v-for="bokning in bokningar"
			:title="title"
  			:time="time"
  			:date="date"
  			:price="price"
  			:seats="seats"
  			:guests="guests"
  			:bookingRef="bookingRef"
		/>
	</div>
	
</template>

<script>
	import Bokningsbekraftelse from '@/components/Bokningsbekraftelse.vue'
	export default {
		name: 'anvandare',
		components: {
			Bokningsbekraftelse
		},
		data() {
			return {
				bokningar: {},
				showings: {},
				filmer: {}
			}
		},
	  created(){
	    this.$axios.get('/getUserBookings.php').then((response) => {
	      this.bokningar = response.data
	    }),
	    this.$axios.get('/getShowings.php').then((response) => {
	      this.showings = response.data
	    }),
	    this.$axios.get('/getFilmData.php').then((response) => {
	      this.filmer = response.data
	    })
	  }
	}

</script>

<style scoped>

.anvandare {
	padding-top: 6rem;
	background-color: black;
}

</style>