<template>
	<div>
		<div class="cinema">
			<Row 
				v-for="(row, index) in this.seatsPerRow"
				:total="row"
				:row_num="index+1"
				:key="index"
			/>
			<h3>Valda säten</h3>
			{{this.selectedSeats}}
			
			<button @click="">Button</button>
					
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
		data() {
			return {

			}
		},
		computed: {
			...mapState([
				'takenSeats',
				'seatsToAssign',
				'selectedSeats'
			]),
			...mapGetters([
				'seatsPerRow'
			]),
			formattedSeats: function() {
				this.selectedSeats.forEach(function(item, index) {
					return `${item[0]}-${item[1]}`
				})
			}
		},
		methods: {
	
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