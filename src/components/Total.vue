<template>
	<div class="total">
		{{choices.guests.adults}}
		<div v-if="choices.guests.adults != 0">
			Adults: {{choices.guests.adults}}x
		</div>
		<div v-if="choices.guests.pensioners != 0">
			Pensioners: {{choices.guests.pensioners}}x
		</div>
		<div v-if="choices.guests.children != 0">
			Children: {{choices.guests.children}}x
		</div>
		<div>
			Total: {{total}}
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { mapActions } from 'vuex'

	export default {
		name: 'Total',
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
				'choices',
				'prices'
			]),
			total: function() {
				let total = 0
				total = total + this.prices.adults * this.choices.guests.adults
				total = total + this.prices.pensioners * this.choices.guests.pensioners
				total = total + this.prices.children * this.choices.guests.children
				return total
			}
		},
		methods: {
			...mapActions([
				'updateTotal'
			])
		}
	}
</script>


<style>

</style>