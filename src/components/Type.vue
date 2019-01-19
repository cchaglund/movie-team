<template>
	<div class="type d-flex justify-content-around w-100">

		<div class="d-flex flex-column align-items-center">
			<div class="d-flex align-items-center">
				<i @click="min('adults')" class="fas fa-chevron-left icon"></i>
				<span class="icon">{{choices.guests.adults}}</span>
				<i @click="add('adults')" class="fas fa-chevron-right icon"></i>
			</div>
			<h5>Adult</h5>
		</div>

		<div class="d-flex flex-column align-items-center">
			<div class="d-flex align-items-center">
				<i @click="min('pensioners')" class="fas fa-chevron-left icon"></i>
				<span class="icon">{{choices.guests.pensioners}}</span>
				<i @click="add('pensioners')" class="fas fa-chevron-right icon"></i>
			</div>
			<h5>Pensionärer</h5>
		</div>

		<div class="d-flex flex-column align-items-center">
			<div class="d-flex align-items-center">
				<i @click="min('children')" class="fas fa-chevron-left icon"></i>
				<span class="icon">{{choices.guests.children}}</span>
				<i @click="add('children')" class="fas fa-chevron-right icon"></i>
			</div>
			<h5>Barn</h5>
		</div>

	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'

	export default {
		name: 'Type',
		props: {

		},
		components: {
			
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
			totalSeats: function() {
				return this.choices.guests.adults + this.choices.guests.pensioners + this.choices.guests.children
			}
		},
		methods: {
			...mapActions([
				'bookTickets',
				'setNumSeats',
				'addGuest',
				'removeGuest'
			]),
			min(typeGuest) {
				if (this.choices.guests[typeGuest] > 0) {
					this.removeGuest(typeGuest)
				}
			},
			add(typeGuest) {
				if (this.totalSeats < 8) {
					this.addGuest(typeGuest)
				}
			}
		}
	}
</script>


<style>
	.icon {
		padding: 0.2rem;
	}
</style>