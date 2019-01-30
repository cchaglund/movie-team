<template>
  <div class="bokningsbekraftelse">
    <div class="container" id="container">
      <div class="row justify-content-center">
          <div class="box">
              <p><strong>Titel:</strong>   {{ title }}</p>
              <p><strong>Tid:</strong>   {{ time }}</p>
              <p><strong>Datum:</strong>   {{ date }}</p>
              <p><strong>Pris:</strong>   {{ price }}kr</p>
              <p><strong>Ref:</strong>   {{ bookingRef }}</p>
              <p><strong>Platser:</strong> Rad:   {{ seats[0][0] }}, plats: {{ getSeatNum }}</p>
              <p><strong>Biljetter:</strong> Vuxen:   {{ guests.adults }}, pensionär: {{ guests.pensioners }}, barn: {{ guests.children }} </p>
          </div>
          
      </div>
    </div>
  </div>
</template>

<script>

export default {
   name: 'Bokningsbekraftelse',
   props: {
      title: String,
      time: String,
      date: String,
      price: String,
      seats: [Object, Array],
      guests: Object,
      bookingRef: String
    },
   computed: {
      getSeatNum: function() {
        let seatsString = ""

        let counter = 0
        for (let seat of this.seats) {
          counter++
            if (counter < this.seats.length) {
               seatsString = seatsString + seat[1] + ', '  
            } else {
               seatsString += seat[1]
            }
        }

        return seatsString
      }
    }
  }
  
</script>

<style>

#container{
  font-size: 24px;
  text-align: center;
  margin-top: 30px;
}
.box{
  border-radius: 5px;
  background-color: #6F2232;
  padding:30px;
}
@media (max-width: 600px){
  #container{
    margin-top: 20px;
    font-size: 16px;
  }
}

</style>