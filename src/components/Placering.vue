<template>
	<div>
		<div class="cinema">
			<h6>{{choices.title}}, {{choices.time}} den {{choices.date}}</h6>
			<Row 
				v-for="(row, index) in this.seatsPerRow"
				:total="row"
				:row_num="index+1"
				:key="index"
			/>
			

			
			<button @click="bookTickets" type="button" class="btn btn-primary">Boka</button>
			<div v-if="choices.ready">
				<h5>skicka till servern</h5>
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
				'selectedSeats',
				'choices'
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
		background-color: lightgray;
		width: 300px;
		height: 300px;
	}	
</style>