<template>
	<div 
		class="seat"
		:class="classObject"
		@click="selectSeat"
		@mouseover="mouseEnter"
		@mouseleave="mouseLeave"
	>
	</div>
</template>





<script>
	import { mapState } from 'vuex'
	import { mapGetters } from 'vuex'

	export default {
		name: 'Seat',
		data() {
			return {
				isSelected: false,
			}
		},
		props: {
			row_num: Number,
			seat_num: Number,
			takenSeats: Array,
			seatsToAssign: Number,
			seatsToHover: Array
		},
		methods: {
			selectSeat() {
				if (!this.isTaken && this.seatsToAssign != 0) {
					this.isSelected = true
					this.$emit('seat-selected', this.id)
				} else if (this.isSelected && this.isTaken) {
					// this.isSelected = false
					this.$emit('remove-seat', [this.row_num, this.seat_num])
				}
			},
			mouseEnter() {
				this.$emit('hovered-seat', this.id)
			},
			mouseLeave() {
				this.$emit('hovered-seat', [undefined, NaN])
				console.log(this.msg)
			}
		},
		computed: {
			shouldHover: function() {
				// let row = this.row_num
				// let seat = this.seat_num
				// let nextRow = this.seatsToHover[0]
				// let seatsToHover = this.seatsToHover[1]

				// let that = this
				// let shouldHover

				// if (this.seatsToHover[0] != undefined) {
				// 	that.seatsToHover.forEach(function(seat, index) {
				// 		console.log("that.row_num", that.row_num)
				// 		console.log("that.seat_num", that.seat_num)
				// 		console.log("seat", seat)
				// 		console.log("seat[0]", seat[0])
				// 		console.log("seat[1]", seat[1])
				// 		if (that.row_num == seat[0] && that.seat_num == seat[1]) {
				// 			console.log("yessir")
				// 			shouldHover = true
				// 		} else {
				// 			shouldHover = false
				// 		}
				// 	})
				// }
				// return shouldHover
				return ''
			},
			id: function() {
				return [this.row_num, this.seat_num]
			},
			classObject: function() {
				if (this.shouldHover) {
					console.log("I'm hovering")
					return 'hover'
				} 
				// else if (this.isSelected) {
				// 	return 'selected'
				// } else if (this.isTaken) {
				// 	return 'taken'
				// } else {
				// 	return 'unselected'
				// } 

			},
			isTaken: function() {
				for (let takenSeat of this.takenSeats) {
					if (takenSeat[0] == this.row_num && takenSeat[1] == this.seat_num) {
						return true
					}
				}
			},
			...mapState([
				'msg'
				// alternatively
				// customName: 'msg'
			]),
			...mapGetters([
				'firstGetter',
				'getTodoById'
			]),
		}
	}
	
</script>



<style>
	.seat {
		min-height: 20px;
		min-width: 19px;
		background-color: white;
		margin: 2px;
		border: 1px solid black;
		border-radius: 0px 0px 4px 4px;
	}

	.unselected:hover {
		background-color: yellow;
	}

	.hover {
		background-color: yellow
	}

	.taken {
		background-color: black;
	}

	.selected {
		background-color: green;
		border: 1px solid green;
	}


</style>