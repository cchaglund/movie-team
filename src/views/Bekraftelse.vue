<template>
    <div id="bekraftelse">

        <h1>Tack för din order!</h1>

        <div class="container" id="container">
            <div class="row justify-content-center">
                <div class="col">
                    <p>Film:</p>
                    <p>Plats:</p>
                    <p>Biljetter:</p>
                    <p>Tid:</p>
                </div>
                <div class="col">
                    <p>Robin Hood</p>
                    <p>Salong 2</p>
                    <p>1 vuxen, 2 barn</p>
                    <p>19.30</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	
import Footer from '@/components/Footer.vue'
export default {
  name: 'salonger',
  props: {
    msg: String
  },
  components: {
  	Footer
  }
}

$( document ).ready(function() {
    $('<p>Hej</p>').appendTo('#container');
})

</script>

<style>

.container {
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(21, 15, 16);
}

.container p {
    margin-bottom: 0;
    margin: 5px;
}

</style>