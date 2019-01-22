<template>
	<div class="container">
		<div class="row no-gutters">
			<div class="col col-lg-9 m-auto type d-flex justify-content-around">

				<div class="guest">
					<div class="counter">
						<i @click="min('adults')" class="fas fa-minus icon"></i>
						<h5 class="number">{{choices.guests.adults}}</h5>
						<i @click="add('adults')" class="fas fa-plus icon"></i>
					</div>
					<h5>Vuxen</h5>
				</div>

				<div class="guest">
					<div class="counter">
						<i @click="min('pensioners')" class="fas fa-minus icon"></i>
						<h5 class="number">{{choices.guests.pensioners}}</h5>
						<i @click="add('pensioners')" class="fas fa-plus icon"></i>
					</div>
					<h5>Pensionär</h5>
				</div>

				<div class="guest">
					<div class="counter">
						<i @click="min('children')" class="fas fa-minus icon"></i>
						<h5 class="number">{{choices.guests.children}}</h5>
						<i @click="add('children')" class="fas fa-plus icon"></i>
					</div>
					<h5>Barn</h5>
				</div>

			</div>
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
	.type {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.icon {
		padding: 0.2rem;
		color: black;
		background-color: #e9e9e9;
		border-radius: 30%;
	}
	.guest {
		display: flex;
		flex-direction: column;
		align-items: center
	}
	.counter {
		display: flex;
		align-items: center;
	}
	.number {
		padding: 0.5rem;
		margin: 0;
	}
	.icon:hover {
		background-color: white;
	}
</style>