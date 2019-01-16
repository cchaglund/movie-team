<template>
	<div 
		class="seat"
		:class="classObject"
		@click="selectSeat"
	>
	{{id}}
		
	</div>
</template>





<script>

	export default {
		name: 'Seat',
		data() {
			return {
				isSelected: false
			}
		},
		props: {
			row_num: Number,
			seat_num: Number,
			takenSeats: Array
		},
		methods: {
			selectSeat() {
				if (!this.isTaken) {
					this.isSelected = true
					this.$emit('seat-selected', [this.row_num, this.seat_num])
				}
				
			}
		},
		computed: {
			id: function() {
				return this.row_num + '-' + this.seat_num
			},
			classObject: function() {
				return {
					'selected': this.isSelected, 
					'unselected': !this.isSelected && !this.isTaken,
					'taken': this.isTaken && !this.isSelected
				}
			},
			isTaken: function() {
				for (let takenSeat of this.takenSeats) {
					if (takenSeat[0] == this.row_num && takenSeat[1] == this.seat_num) {
						return true
					}
				}
			}
		}
	}
	
</script>



<style>
	.seat {
		min-height: 20px;
		min-width: 19px;
		background-color: white;
		margin: 3px;
		border: 1px solid black;
		border-radius: 0px 0px 4px 4px;
	}

	.unselected:hover {
		background-color: yellow;
	}

	.taken {
		background-color: black;
	}

	.selected {
		background-color: green;
		border: 1px solid green;
	}


</style>