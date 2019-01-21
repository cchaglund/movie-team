<template>
<div class="home">
	<Slideshow>
	</Slideshow>
  <Footer>
  </Footer>
</div>
</template>
<script>
// @ is an alias to /src
import Slideshow from '@/components/Slideshow.vue'
import Footer from '@/components/Footer.vue'
export default {
	name: 'Home',
	components: {
	  Slideshow, Footer
	}
};

</script>
