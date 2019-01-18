<template>
	<div>
		<div class="cinema">
			<Row 
				v-for="(seatsPerRow, index) in this.salong"
				:total="seatsPerRow"
				:row_num="index+1"
				:key="index"
			/>
			<h3>Valda säten</h3>
			{{this.selectedSeats[0]}}
			
			<button @click="changeMsg">Button</button>
			
				
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
	import { mapState } from 'vuex'
	import { mapGetters } from 'vuex'
	import { mapMutations } from 'vuex'

	export default {
		name: 'Placering',
		props: {

		},
		components: {
			Row
		},
		computed: {
			...mapGetters([
				'salong'
			]),
			testStore: function() {
				return this.$store.state.msg
			},
			setId: function() {
				console.log()
				return 
			},
			formattedSeats: function() {
				console.log(this.selectedSeats)

				this.selectedSeats.forEach(function(item, index) {
					return `${item[0]}-${item[1]}`
				})
			},
			seatsToHover: function() {
				// let endOfRow = function() {
				// 	if (this.hoveredSeat[1] > this.salonger[0].seatsPerRow[hoveredSeat[0]]) {
				// 		return true
				// 	} else {
				// 		return false
				// 	}
				// }

				// if (endOfRow) {
				// 	console.log("END of ROW")
				// }
				// }


				// let sameRow = this.hoveredSeat[0]
				// let seatsToHover = []
				// let counter = 0
				// let somethingToHover = this.hoveredSeat != []

				// if (somethingToHover) {
				// 	while (counter < this.seatsToAssign) {
				// 		seatsToHover.push([ sameRow, this.hoveredSeat[1] + counter ])
				// 		counter++
				// 	}
				// }
				
				return "lul"
			}
		},
		data() {
			return {
				...mapState([
					'takenSeats',
					'seatsToAssign',
					'selectedSeats'
				])
			}
		},
		methods: {
			changeMsg() {
				this.$store.commit('changeMsg', {
					msg: 'wohoo'
				})
			},
			setHoveredSeat(id) {
				this.hoveredSeat = id
			},
			selectSeat(id) {
				this.seatsToAssign = this.seatsToAssign - 1
				// this.takenSeats.push(id) don't need to make it taken yet? that's determined by db
				this.selectedSeats.push(id)
			}
		}
	}
</script>


<style>
.cinema {
	display: flex;
	flex-direction: column;
	justify-content: center;

	align-items: center;
	background-color: lightgray;
	width: 300px;
	height: 300px;
	
}	
</style>