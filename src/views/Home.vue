<<<<<<< HEAD
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
=======
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
>>>>>>> master
