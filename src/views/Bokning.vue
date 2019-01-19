
<template>
	<div class="bokning">
		<Placering />
		<Type />
		<Total />
	</div>
	
</template>



<script>

	import Placering from '@/components/Placering.vue'
	import Type from '@/components/Type.vue'
	import Total from '@/components/Total.vue'

	export default {
		name: 'bokning',
		components: {
			Placering, Type, Total
		}
	}
	
</script>



<style>

.bokning {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center
}
	
</style>


