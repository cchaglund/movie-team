<template>
	<div 
		class="seat"
		:class="classObject"
		@click="seatClicked"
		@mouseover="mouseEnter"
	>
	</div>
</template>




<script>
	import { mapState } from 'vuex'
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	import { mapMutations } from 'vuex'

	export default {
		name: 'Seat',
		props: {
			row_num: Number,
			seat_num: Number
		},
		data() {
			return {
				
			}
		},
		computed: {
			...mapState([
				'msg',
				'takenSeats'
				// alternatively
				// customName: 'msg'
			]),
			...mapGetters([
				'shouldHover',
				'isSelected',
				'getTodoById',
				'seatsToAssign'
			]),
			id: function() {
				return [this.row_num, this.seat_num]
			},
			classObject: function() {
				if (this.isSelected(this.id)) {
					return 'selected'
				} else if (this.shouldHover(this.id)) {
					return 'hover'
				} else if (this.isTaken) {
					return 'taken'
				} else {
					return 'unselected'
				} 
			},
			isTaken: function() {
				for (let takenSeat of this.takenSeats) {
					if (takenSeat[0] == this.row_num && takenSeat[1] == this.seat_num) {
						return true
					}
				}
			}
		},
		methods: {
			...mapMutations([
				'changeMsg'
			]),
			...mapActions([
				'updateHoveredSeat',
				'selectSeats',
				'addGuest'
			]),
			seatClicked() {

				if (this.seatsToAssign == 0) {
					this.addGuest('adults')	
				}
				this.selectSeats(this.id)
			},
			mouseEnter() {
				this.updateHoveredSeat(this.id)
			}
		}
	}
</script>



<style>
	.seat {
		min-height: 20px;
		min-width: 19px;
		background-color: white;
		margin: 2px;
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