
<template>
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

				<h1>ID:</h1>
				{{id}}
				{{title}}
				{{date}}
				{{time}}
				{{salong}}

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
				'choices'
			])
		},
		data() {
			return {
				id: 0,
				title: '',
				date: '',
				time: '',
				salong: ''
			}
		},
		created() {
			this.id = this.$route.params.id;
			this.title = this.$route.params.title;
			this.date = this.$route.params.date;
			this.time = this.$route.params.time;
			this.salong = this.$route.params.salong
		},
		methods: {
			buyTickets() {
				this.bookTickets()
				if (this.choices.ready) {
					this.$router.push({ 
						name: 'bekraftelse', 
						params: {
							title: this.choices.title, 
							date: this.choices.date, 
							time: this.choices.time, 
							seats: this.choices.seats, 
							guests: this.choices.guests,
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
	border-bottom: 8px solid #6F2232;
}

.book-btn {
	font-size: 1.5em;
	background-color: #7C956B;
}

.book-btn:hover {
	background-color: #93b07f
}

.bokning {
	color: #e9e9e9;
	padding: 0;
}

.page {
	justify-content: center;
	background-color: #150F10;
	min-height: 100vh;
}

#app {
	background-color: #6F2232;
}
	
</style>


