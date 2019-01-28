<template>
    <div id="bekraftelse">
        <Bekraftelsecomponent
            :title = 'title'
            :time = 'time'
            :date = 'date'
            :price = 'price'
            :seats = 'seats'
            :guests = 'guests'
         />
         <h1>Bekraftelse</h1>
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