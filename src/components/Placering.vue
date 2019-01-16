<template>
	<div>
		<div class="container">
			<Row 
				v-for="(seatsPerRow, index) in this.salonger[0].seatsPerRow"
				:total="seatsPerRow"
				:row_num="index+1"
				:takenSeats="takenSeats"
				:key="index"
				@seat-selected="bookSeat"
			/>
			{{selectedSeats}}
				
	<!-- 			<Seat
					v-for="seatIndex in seatsPerRow"
					:seat_index="seatIndex"
					:key="seatIndex"
				/> -->
					
			</div>
		</div>
	</div>
</template>

<script>
	// var json = require('@/assets/filmer.json');
	import Row from '@/components/Row.vue'

	export default {
		name: 'Placering',
		props: {

		},
		components: {
			Row
		},
		computed: {
			setId: function() {
				console.log()
				return 
			},
			formattedSeats: function() {
				console.log(this.selectedSeats)

				this.selectedSeats.forEach(function(item, index) {
					return `${item[0]}-${item[1]}`
				})
			}
		},
		data() {
			return {
				idCounter: 0,
				selectedSeats: [],
				takenSeats:
					[
						[4, 3],
						[1, 7],
						[8, 2]
					],
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
			bookSeat(seatLocation) {
				this.takenSeats.push(seatLocation)
				this.selectedSeats.push(seatLocation)
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


	
</style>