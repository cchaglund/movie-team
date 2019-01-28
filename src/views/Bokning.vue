<template>
	<div class="body" style="background-color: black;">
 <div class="home">
 	<br>
 	   <br>
 	      <br> 
 
	<div class="bokning container">
		<div class="row no-gutters page">
			<div class="col col-lg-10 mt-3 mb-3">

				<div class="header">
					<h2>{{title}}, {{time}} den {{date}}</h2>
				</div>

				<Placering />
				<Type />
				<Total />

				<button @click="buyTickets" type="button" class="book-btn btn">Boka</button>

				<div v-if="choices.ready">
					<h5>skicka till servern</h5>
				</div>
			</div>
		</div>
	</div>
	</div>
	<Footer>
	</Footer>
</div>
</template>



<script>
	import { mapState } from 'vuex'
	import { mapActions } from 'vuex'
	import { mapGetters } from 'vuex'

	import Placering from '@/components/Placering.vue'
	import Type from '@/components/Type.vue'
	import Total from '@/components/Total.vue'
	import Footer from '@/components/Footer.vue'

	export default {
		name: 'bokning',
		components: {
			Placering, Type, Total, Footer
		},
		computed: {
			...mapGetters([
				'calcTotal'
			]),
			...mapState([
				'choices'
			])
		},
		data() {
			return {
				id: 0,
				title: '',
				date: '',
				time: '',
				salong: '',
				seats: [],
				guests: [],
				price: ''
			}
		},
		created() {
			this.title = this.$route.params.title;
			this.date = this.$route.params.date;
			this.time = this.$route.params.time;
			this.salong = this.$route.params.salong
			this.seats = this.choices.seats, 
			this.guests = this.choices.guests,
			this.price = this.choices.calcTotal
		},
		methods: {
			buyTickets() {
				this.bookTickets()
				if (this.choices.ready) {
					this.$router.push({ 
						name: 'bekraftelse', 
						params: {
							title: this.title, 
							date: this.date, 
							time: this.time, 
							salong: this.salong,
							seats: this.seats, 
							guests: this.guests,
							price: this.calcTotal
						}
					})
				}
			},
			...mapActions([
				'bookTickets'
			])
		}
	}
	
</script>



<style>

.header {
	margin: 0;

}

.book-btn {
	font-size: 1.5em;
	background-color: #6F2232;
	color: white;
	margin-bottom: 15px;
}

.book-btn:hover {
	background-color: white;
}

.bokning {
	color: #e9e9e9;
	padding: 0;
}

.page {
	justify-content: center;
	background-color: black;
	min-height: 100vh;
	margin-top:50px;
}
.mb-3{
	margin-bottom: 10rem!important;
}

.footer-distributed{
	margin-top: 0;
}
</style>



