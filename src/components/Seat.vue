<template>
	<div 
		class="seat"
		:class="{'selected': isSelected, 'unselected': !isSelected}"
		@click="selectSeat()"
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
			id: Number
		},
		methods: {
			selectSeat() {
				this.isSelected = true
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

	.selected {
		background-color: green;
	}
</style>