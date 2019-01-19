<template>
	<div class="type d-flex justify-content-around w-100">

		<div class="d-flex flex-column align-items-center">
			<div class="d-flex align-items-center">
				<i @click="min('adults')" class="fas fa-chevron-left icon"></i>
				<span class="icon">{{adults}}</span>
				<i @click="add('adults')" class="fas fa-chevron-right icon"></i>
			</div>
			<h5>Adult</h5>
		</div>

		<div class="d-flex flex-column align-items-center">
			<div class="d-flex align-items-center">
				<i @click="min('pensioners')" class="fas fa-chevron-left icon"></i>
				<span class="icon">{{pensioners}}</span>
				<i @click="add('pensioners')" class="fas fa-chevron-right icon"></i>
			</div>
			<h5>Pensioner</h5>
		</div>

		<div class="d-flex flex-column align-items-center">
			<div class="d-flex align-items-center">
				<i @click="min('children')" class="fas fa-chevron-left icon"></i>
				<span class="icon">{{children}}</span>
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
				adults: 1,
				pensioners: 0,
				children: 0
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
				return this.adults + this.pensioners + this.children
			}
		},
		methods: {
			...mapActions([
				'bookTickets',
				'setNumSeats'
			]),
			min(typeGuest) {
				console.log("min typeGuest", this[typeGuest])
				if (this[typeGuest] > 0) {
					this[typeGuest]--	
				}
				this.setNumSeats(this.totalSeats)
			},
			add(typeGuest) {
				console.log("add typeGuest", typeGuest)
				if (this.totalSeats < 8) {
					this[typeGuest]++
				}
				this.setNumSeats(this.totalSeats)
			}
		}
	}
</script>


<style>
	.icon {
		padding: 0.2rem;
	}
</style>