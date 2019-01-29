
<template>
	<div class="bokning container">
		<div class="row no-gutters page">
			<div class="col col-lg-10 mt-3 mb-3">

				<div class="header">
					<h2>{{title}}, {{time}} den {{date}}</h2>
				</div>

				<Placering 
					:screenSeats="screenSeats"
					:takenSeats="takenSeats"
				/>
				<Type />
				<Total />

				<button @click="buyTickets" type="button" class="book-btn btn">Boka</button>

				<div v-if="choices.ready">
					<h5>skicka till servern</h5>
				</div>
			</div>
		</div>
	</div>
</template>



<script>
	import { mapState } from 'vuex'
	import { mapActions } from 'vuex'
	import { mapGetters } from 'vuex'

	import Placering from '@/components/Placering.vue'
	import Type from '@/components/Type.vue'
	import Total from '@/components/Total.vue'

	export default {
		name: 'bokning',
		components: {
			Placering, Type, Total
		},
		computed: {
			...mapGetters([
				'calcTotal'
			]),
			...mapState([
				'choices',
				'selectedSeats'
			]),
			formattedSeats: function() {
				return JSON.stringify(this.selectedSeats)
			}
		},
		data() {
			return {
				visning: 0,
				screenSeats: [],
				takenSeats: [],
				title: '',
				date: '',
				time: '',
				salong: '',
				seats: [],
				guests: [],
				price: '',
				bookingRef: ''
			}
		},
		created() {
			this.setShowingChoices()
			this.getSeatsForScreen()
			this.getTakenSeats()
		},
		methods: {
			buyTickets() {
				this.$axios.post('/bookTickets.php', {
					visning: this.visning,
					taken: this.formattedSeats
				}).then((response) => {
					this.bookingRef = response.data

				    this.$router.push({ 
						name: 'bekraftelse', 
						params: {
							title: this.title, 
							date: this.date, 
							time: this.time, 
							seats: this.selectedSeats, 
							guests: this.guests,
							price: this.calcTotal,
							bookingRef: this.bookingRef
						}
					})
				})				
			},
			getTakenSeats() {
				this.$axios.get('/getTakenSeats.php', {
						params: {
							visning: this.visning
						}
					}).then((response) => {
						
						let bookings = response.data
						let takenSeatsGroup = []

						for (let booking of bookings) {

							if (booking.takenSeats.length > 2) {
								let takenSeats = JSON.parse(booking.takenSeats)
								
								for (let seat of takenSeats) {
									takenSeatsGroup.push(seat)
								}
							}							
						}

						this.takenSeats = takenSeatsGroup
					})
			},
			getSeatsForScreen() {
				this.$axios.get('/getSalongInfo.php', {
						params: {
							salong: this.salong
						}
					}).then((response) => {
						let stringArray = response.data[0].seatsPerRow.split(', ')
						let seatsArray = stringArray.map((stringNumber) => {
							return parseInt(stringNumber)
						})
						this.screenSeats = seatsArray
					})
			},
			setShowingChoices() {
				this.visning = this.$route.params.visning
				this.title = this.$route.params.title
				this.date = this.$route.params.date
				this.time = this.$route.params.time
				this.salong = this.$route.params.salong
				this.seats = this.choices.seats
				this.guests = this.choices.guests
				this.price = this.choices.calcTotal
			},
			...mapActions([
				// 'bookTickets'
			])
		}
	}
	
</script>



<style scoped>

.header {
	margin: 0;
	border-bottom: 8px solid #6F2232;
	padding-top: 6rem;
}

.book-btn {
	font-size: 1.5em;
	background-color: #7C956B;
	border-radius: 5px;
}

.book-btn:hover {
	background-color: #93b07f
}

.bokning {
	background-color: black
}

.page {
	justify-content: center;
	background-color: black;
	min-height: 100vh;
}

	
</style>


