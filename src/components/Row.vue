<template>
	<div class="seats-row">
		<Seat 
			v-for="seat in total"
			:row_num="row_num"
			:seat_num="seat"
			:key="seat"
		/>
	</div>
</template>

<script>
	
	import Seat from '@/components/Seat.vue'

	export default {
		name: 'Placering',
		components: {
			Seat
		},
		props: {
			total: Number,
			row_num: Number
		},
		data() {
			return {
				
			}
		},
		computed: {

		},

		methods: {

		}
	}
</script>


<style>
	.seats-row {
		display: flex;
	}
</style>