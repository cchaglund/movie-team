<template>
  <div class="salonger">
   <Salong></Salong>
  </div>
</template>


<script>
import Salong from '@/components/Salong.vue'
export default {
  name: 'salonger',
  props: {
    msg: String
  },
  components: {
  	Salong
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>