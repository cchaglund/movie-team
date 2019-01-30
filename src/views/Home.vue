
<template>
<div class="home">
	<Slideshow>
	</Slideshow>

  <Bokningscomponent>
  </Bokningscomponent>

  <div class="contact-help">
	  <h2>Hjälp att boka? </h2>
	  <h4><router-link to="information">Klicka här</router-link></h4>
  </div>

  <Footer>
  </Footer>
</div>
</template>
<script>
// @ is an alias to /src
import Slideshow from '@/components/Slideshow.vue'
import Bokningscomponent from '@/components/Bokningscomponent.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'Home',
	components: {
	  Slideshow, Bokningscomponent, Footer
	}
};

</script>

<style scoped>
.home {
	padding-top: 6rem;
	color: black;
  	background-color: black;
}

.contact-help {
	margin: 1rem;
	padding: 1rem;
	color: white;
}
	
</style>

