<template>
	<div>
		<div class="cinema">
			<Row 
				v-for="(seatsPerRow, index) in this.salonger[0].seatsPerRow"
				:total="seatsPerRow"
				:row_num="index+1"
				:takenSeats="takenSeats"
				:seatsToAssign="seatsToAssign"
				:seatsToHover="seatsToHover"
				:key="index"
				@hovered-seat="setHoveredSeat"
				@seat-selected="selectSeat"
				@remove-seat="removeSeat"
			/>
			<h3>Valda säten</h3>
			{{selectedSeats}}
			<h3>Välj {{seatsToAssign}}</h3>
			<button @click="changeMsg">Button</button>
			{{testStore}}
				
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
			...mapState([
				'msg'
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
				let sameRow = this.hoveredSeat[0]
				let seatsToHover = []
				let counter = 0
				let somethingToHover = this.hoveredSeat != []

				if (somethingToHover) {
					while (counter < this.seatsToAssign) {
						seatsToHover.push([ sameRow, this.hoveredSeat[1] + counter ])
						counter++
					}
				}
				
				return seatsToHover
			}
		},
		data() {
			return {
				idCounter: 0,
				seatsToAssign: 3,
				hoveredSeat: [],
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
			},
			removeSeat(seatLocation) {
				console.log(seatLocation)
				this.selectedSeats.forEach(function(seat, index) {
					console.log("seat", seat)
					console.log("seatLocation", seatLocation)
					if (seat[0] == seatLocation[0] && seat[1] == seatLocation[1])
						console.log(seat[0] + seat[1])
						console.log("seat", seat)
						console.log("index", index)
						this.selectedSeats.splice(index)
				})

				console.log("seatLoc:", seatLocation)
				
				console.log(indexOfSeat)
				// let toRemove =	this.selectedSeats.find(function(seat) {
				// 	console.log("seat", seat)
				// 	console.log("seatLocation", seatLocation)

				// 	return seat == seatLocation

				// })
				// console.log(toRemove)
				// console.log("this.selectedSeats", this.selectedSeats)

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