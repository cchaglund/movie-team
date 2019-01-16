<template>
	<div>
		<div class="container">
			<div 
				class="seats-row"
				v-for="(seatsPerRow, index) in this.salonger[0].seatsPerRow">

				<Seat
					v-for="index in seatsPerRow"
					:id="setID"
				/>
					
			</div>
		</div>
	</div>
</template>

<script>

	import Seat from '@/components/Seat.vue'

	export default {
		name: 'Placering',
		props: {

		},
		components: {
			Seat
		},
		computed: {
			setID: function() {
				this.counter = this.counter + 1
				console.log(this.counter)
				return this.counter
			}
		},
		data() {
			return {
				counter: 0,
				takenSeats: [12, 3, 24],
				salonger: [  
				  {
				    "name": "Stora Salongen",
				    "seats": 81,
				    "seatsPerRow": [
				      8,
				      9,
				      10,
				      10,
				      10,
				      10,
				      12,
				      12
				    ]
				  },
				  {
				    "name": "Lilla Salongen",
				    "seats": 55,
				    "seatsPerRow": [
				      6,
				      8,
				      9,
				      10,
				      10,
				      12
				    ]
				  }
				]
			}
		},
		methods: {
			buildSeatPlan() {

			}
		}
	}
</script>


<style>

.container {
	display: flex;
	flex-direction: column;

	align-items: center;
	background-color: lightgray;
	width: 300px;
	height: 300px;
	padding: 0.5rem;
}

.seats-row {
	display: flex;
}
	
</style>