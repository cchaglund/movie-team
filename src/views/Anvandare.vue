<template>
    <div id="anvandare">
        <Bekraftelsecomponent
            :title = 'title'
            :time = 'time'
            :date = 'date'
            :price = 'price'
            :seats = 'seats'
            :guests = 'guests'
         />
        <h1>Användare</h1>
	</div>
</template>

<script>

import Bekraftelsecomponent from '@/components/Bekraftelsecomponent.vue'
	
export default {
  name: 'Bekraftelse',
  components: {
      Bekraftelsecomponent
  },
}

</script>

<style scoped>

</style>