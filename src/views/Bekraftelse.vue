<template>
    <div id="bekraftelse">

        <h1>Tack för din beställning!</h1>

        <div class="container" id="container">
            <div class="row justify-content-center">
                <div class="col" id="container-left">
                    <p>Titel:</p>
                    <p>Tid:</p>
                    <p>Datum:</p>
                    <p>Pris:</p>
                    <p>Ref:</p>
                    <p>Platser:</p>
                    <p>Biljetter:</p>
                </div>
                <div class="col" id="container-right">
                    <p>{{ title }}</p>
                    <p>{{ time }}</p>
                    <p>{{ date }}</p>
                    <p>{{ price }}kr</p>
                    <p>{{ bookingRef }}</p>
                    <p>Rad: {{ seats.row }}, plats: {{ seats.seats }}</p>
                    <p>Vuxen: {{ guests.adults }}, pensionär: {{ guests.pensioners }}, barn: {{ guests.children }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	
export default {
  name: 'bekraftelse',
  props: {
  },
  data() {
      return {
          title: '',
          time: '',
          date: '',
          price: '',
          seats: {},
          guests: {},
          bookingRef: ''
      }
  },
  created() {
      this.title = this.$route.params.title;
      this.time = this.$route.params.time;
      this.date = this.$route.params.date;
      this.price = this.$route.params.price;
      this.seats = this.$route.params.seats;
      this.guests = this.$route.params.guests;
      this.bookingRef = this.$route.params.bookingRef;
  }
  /*components: {
  	
  }*/
}

//jQuery - funkar inte
/*$(document).ready(function() {
    $('<p>container-left</p>').appendTo('#container-left');
    $('<p>container-right</p>').appendTo('#container-right');
})*/

</script>

<style scoped>

.container {
  position: absolute;
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(21, 15, 16);
}

h1 {
    position: absolute;
    margin: 0;
    top: 16%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 50px;
}

.container p {
    margin-bottom: 0;
    margin: 5px;
    font-size: 40px;
    color: white;
}

</style>