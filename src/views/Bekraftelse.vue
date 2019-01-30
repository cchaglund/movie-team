<template>
    <div class="bekraftelse">

        <h1>Tack för din beställning!</h1>
  		<Bokningsbekraftelse 
  			:title="title"
  			:time="time"
  			:date="date"
  			:price="price"
  			:seats="seats"
  			:guests="guests"
  			:bookingRef="bookingRef"
  		/>
    </div>
</template>

<script>
	import Bokningsbekraftelse from '@/components/Bokningsbekraftelse.vue'
	
export default {
  name: 'bekraftelse',
  props: {
  },
  components: {
  	Bokningsbekraftelse
  },
  data() {
      return {
          title: '',
          time: '',
          date: '',
          price: 0,
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
}

</script>
<style scoped>

.bekraftelse {
	padding-top: 6rem;
}

.container {
  margin: 0;  
}

h1 {
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