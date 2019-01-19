
<template>
	<div class="bokning">
		<Placering />
		<Type />
	</div>
	
</template>



<script>

	import Placering from '@/components/Placering.vue'
	import Type from '@/components/Type.vue'

	export default {
		name: 'bokning',
		components: {
			Placering, Type
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


