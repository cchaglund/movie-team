<template>
	<div class="anvandare">
		<h1>Kommande bokningar</h1>
		<Bokningsbekraftelse 
			v-for="bokning in bokningar"
			v-if="new Date(bokning.date) > new Date().getDate()"
			:title="bokning.title"
  			:time="bokning.timeStart"
  			:date="bokning.date"
  			:price="bokning.price"
  			:seats="JSON.parse(bokning.takenSeats)"
  			:guests="JSON.parse(bokning.guests)"
  			:bookingRef="bokning.id + '-' + bokning.visning"
		/>

		<h1 class="p-4">Historik</h1>
		<Bokningsbekraftelse 
			v-for="bokning in bokningar"
			v-if="new Date(bokning.date) < new Date().getDate()"
			:title="bokning.title"
  			:time="bokning.timeStart"
  			:date="bokning.date"
  			:price="bokning.price"
  			:seats="JSON.parse(bokning.takenSeats)"
  			:guests="JSON.parse(bokning.guests)"
  			:bookingRef="bokning.id + '-' + bokning.visning"
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
				bokningar: {}
			}
		},
		computed: {
			seats: function(takenSeats) {
				console.log("bokning", takenSeats)
				// let seatsArray = JSON.parse(bokning.takenSeats)
				// console.log("seatsArray", seatsArray)
				// return seatsArray
			}
		},
		created(){
			this.$axios.get('/getUserBookings.php').then((response) => {
			this.bokningar = response.data
			console.log(this.bokningar)
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