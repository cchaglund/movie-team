<template>
	<div class="bekraftelse">
		<h1>{{selection.title}}</h1>
		<h1>{{selection.date}}</h1>
		<h1>{{selection.time}}</h1>
		<h1>{{selection.seats}}</h1>
		<h1>{{selection.guests}}</h1>
		<h1>{{selection.price}}</h1>
	</div>
</template>

<script>

	export default {
		name: 'Bekraftelse',
		components: {
			
		},
		props: {

		},
		created() {
			console.log("created")
			console.log(this.$route.params)
			this.selection = {...this.$route.params}
			console.log(this.title)
		},
		data() {
			return {
				selection: {
					title: '',
					date: '',
					time: '',
					seats: [],
					guests: []	
				}
			}
		},
		computed: {

		},

		methods: {

		}
	}
</script>


<style>

.bekraftelse {

}

</style>