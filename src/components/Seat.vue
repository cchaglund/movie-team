<template>
	<div 
		class="seat"
		:class="classObject"
		@click="seatClicked"
		@mouseover="mouseEnter"
		@mouseleave="mouseLeave"
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
		data() {
			return {
				
			}
		},
		props: {
			row_num: Number,
			seat_num: Number
		},
		methods: {
			...mapMutations([
				'changeMsg'
			]),
			...mapActions([
				'updateHoveredSeat',
				'selectSeats'
			]),
			seatClicked() {
				this.selectSeats(this.id)

				// if (!this.isTaken && this.seatsToAssign != 0) {
				// 	this.isSelected = true
				// 	this.$emit('seat-selected', this.id)
				// } else if (this.isSelected && this.isTaken) {
				// 	// this.isSelected = false
				// 	this.$emit('remove-seat', [this.row_num, this.seat_num])
				// }
			},
			mouseEnter() {
				// this.$emit('hovered-seat', this.id)
				this.updateHoveredSeat(this.id)

			},
			mouseLeave() {
				// this.$emit('hovered-seat', [undefined, NaN])	
			}
		},
		computed: {
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
			},
			...mapState([
				'msg',
				'takenSeats'
				// alternatively
				// customName: 'msg'
			]),
			...mapGetters([
				'shouldHover',
				'isSelected',
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