
<template>
	<div class="bokning">
		<Placering />
	</div>
	
</template>



<script>

	import Placering from '@/components/Placering.vue'

	export default {
		name: 'bokning',
		components: {
			Placering
		}
	}
	
</script>



<style>

.bokning {
	display: flex;
	justify-content: center;
}
	
</style>


