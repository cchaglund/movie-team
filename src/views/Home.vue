
<template>
<div class="home">
	<Slideshow>
	</Slideshow>

  <Bokningscomponent>
  </Bokningscomponent>

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

