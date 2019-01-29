<template>
	<div class="anvandare">
		<Bokningsbekraftelse />
	</div>
	
</template>

<script>
	import Bokningsbekraftelse from '@/components/Bokningsbekraftelse.vue'
	export default {
		name: 'anvandare',
		components: {
			Bokningsbekraftelse
		}
	}
</script>

<style scoped>

.anvandare {
	padding-top: 6rem;
	background-color: black;
}

</style>