<template>
	<div class="seats-row">
		<Seat 
			v-for="seat in total"
			:row_num="row_num"
			:seat_num="seat"
			:key="seat"
		/>
	</div>
</template>

<script>
	
	import Seat from '@/components/Seat.vue'

	export default {
		name: 'Placering',
		props: {
			total: Number,
			row_num: Number
		},
		components: {
			Seat
		},
		computed: {
			setId: function() {
	
			}
		},
		data() {
			return {
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
			seatSelected(id) {
				this.$emit('seat-selected', id)
			},
			removeSeat(seatLocation) {
				this.$emit('remove-seat', seatLocation)
			},
			passHoveredSeat(id) {
				this.$emit('hovered-seat', id)
			}
		}
	}
</script>


<style>
.seats-row {
	display: flex;
}
	
</style>