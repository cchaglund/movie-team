<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Bokningscomponent />
    
  </div>
</template>
<script>
// @ is an alias to /src
import Bokningscomponent from '@/components/Bokningscomponent.vue'



export default {
  name: 'home',
  components: {
    Bokningscomponent
  }
}

</script>