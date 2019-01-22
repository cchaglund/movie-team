<template>
	<div 
		class="seat-container"
		@click="seatClicked"
		@mouseover="mouseEnter"
	>
		<div 
			class="seat"
			:class="classObject"
		/>
	</div>
</template>




<script>
	import { mapState } from 'vuex'
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'


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
				'takenSeats',
				'choices'
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

	.seat-container {
		height: 28px;
		width: 25px;
		padding: 3px;
	}

	.seat {
		width: 100%;
		height: 100%;
		background-color: #e9e9e9;
		
		border-radius: 0px 0px 5px 5px;
	}

	.hover {
		background-color: #F39943
	}

	.taken {
		background-color: #DA3724;
	}

	.selected {
		background-color: #7C956B;
	}
</style>