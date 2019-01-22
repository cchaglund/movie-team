
<template>
	<div class="bokning container">
		<div class="row no-gutters page">
			<div class="col col-lg-10 mt-3 mb-3">
				<div class="header">
					<h2>{{choices.title}}, {{choices.time}} den {{choices.date}}</h2>
				</div>
				<Placering />
				<Type />
				<Total />

				<button @click="bookTickets" type="button" class="book-btn btn">Boka</button>
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

	import Placering from '@/components/Placering.vue'
	import Type from '@/components/Type.vue'
	import Total from '@/components/Total.vue'

	export default {
		name: 'bokning',
		components: {
			Placering, Type, Total
		},
		computed: {
			...mapState([
				'choices'
			])
		},
		methods: {
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


