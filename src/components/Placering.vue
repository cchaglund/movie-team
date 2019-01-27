<template>
	<div class="d-flex justify-content-center">
		<div class="cinema">
			<Row 
				v-if="screenSeats"
				v-for="(row, index) in screenSeats"
				:total="row"
				:row_num="index+1"
				:key="index"
				:takenSeats="takenSeats"
			/>
			<div v-else>
				{{screenSeats}}
				lul
				
			</div>
		</div>
	</div>
</template>

<script>
	let val = require('@/assets/filmer.json');
	import Row from '@/components/Row.vue'
	import { mapState } from 'vuex'
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'

	export default {
		name: 'Placering',
		props: {
			screenSeats: Array,
			takenSeats: Array
		},
		components: {
			Row
		},
		data() {
			return {
				salonger: "lul"
			}
		},
		computed: {
			...mapState([
				'seatsToAssign',
				'selectedSeats',
				'choices'
			]),
			formattedSeats: function() {
				this.selectedSeats.forEach(function(item, index) {
					return `${item[0]}-${item[1]}`
				})
			}
		},
		methods: {
			...mapGetters([
				'seatsPerRow'
			]),
			...mapActions([
				'bookTickets'
			])
		}
	}
</script>


<style>
	.cinema {
		display: flex;
		flex-direction: column;
		justify-content: center;

		align-items: center;
		/*background-color: lightgray;*/
		width: 320px;
		height: 260px;
		margin: 0.5rem;
	}	
</style>