<template>
	<div class="container mt-3">
		<div class="row d-flex justify-content-center">
			<!-- d-flex align-items-start flex-column -->
			<div class="col col-sm-9 col-md-7 total">
				<div class="text">
					<h4>Total: {{calcTotal}} kr</h4>
					<div v-if="choices.guests.adults != 0">
						Vuxna: {{choices.guests.adults}}x
					</div>
					<div v-if="choices.guests.pensioners != 0">
						Pensionärer: {{choices.guests.pensioners}}x
					</div>
					<div v-if="choices.guests.children != 0">
						Barn: {{choices.guests.children}}x
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { mapActions } from 'vuex'
	import { mapGetters } from 'vuex'

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
			...mapGetters([
				'calcTotal'
			])
		},
		methods: {
			...mapActions([
				'updateTotal'
			])
		}
	}
</script>


<style>
.total {
	padding: 1rem;
	margin: 1rem;

	border: 2px groove white;
}

.text {
	text-align: left
}

</style>