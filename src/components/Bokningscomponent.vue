
<template>
  	<div class="Bookningscomponent">
  
		<div class="container">
	  		<div class="row">
	    		<div class="col"  >
					<h2>Välj Film</h2>               
						<div class="dropdown">
						    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
						      Välj Film
						    </button>
							    <div class="dropdown-menu">
							     <a class ="jahed" href="#"v-for="film of filmer">{{film.title}}</a>

							    <div>
						</div>
				</div>
	  		</div>
		</div>


    		<div class="col">
    
				<h2>Välj Datum</h2>               
					<div class="dropdown">
					    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
					      Välj biljet
					    </button>
						    <div class="dropdown-menu">
						      <a class="dropdown-item" href="#">Måndag</a>
						      <a class="dropdown-item" href="#">Tisdag</a>
						      <a class="dropdown-item" href="#">Onsdag</a>
						       <a class="dropdown-item"href="#">Torsdag</a>
						      <a class="dropdown-item" href="#">Fredag</a>
						      <a class="dropdown-item" href="#">Lördag</a>
						      <a class="dropdown-item" href="#">Söndag</a>
						    </div>
					</div>
			</div>


    	<div class="w-100"></div>


   		 		<div class="col">

					<h2>Välj Biograf</h2>               
					<div class="dropdown">
					    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
					      Välj Biograf
					    </button>
						    <div class="dropdown-menu">
						      <a class="dropdown-item" href="#">Malmö</a>
						      <a class="dropdown-item" href="#">Lund</a>
						    </div>
					</div>
				</div>


      			<div class="col">
    
		          <h2>Välj Tid</h2>               
					<div class="dropdown">
					    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
					      Välj Tid
					    </button>
						    <div class="dropdown-menu">
						      <a class="dropdown-item" href="#">Måndag kl.17:00</a>
						      <a class="dropdown-item" href="#">Måndag kl.19:00</a>
						      <a class="dropdown-item" href="#">Måndag kl.21:00</a>
						      <a class="dropdown-item" href="#">Tisdag kl.17:00</a>
						       <a class="dropdown-item" href="#">Tisdag kl.19:00</a>
						       <a class="dropdown-item" href="#">Tisdag kl.21:00</a>
						      <a class="dropdown-item" href="#">Onsdag kl.17:00</a>
						      <a class="dropdown-item" href="#">Onsdag kl.19:00</a>
						      <a class="dropdown-item" href="#">Onsdag kl.21:00</a>
						      <a class="dropdown-item" href="#">Torsdag kl.17:00</a>
						      <a class="dropdown-item" href="#">Torsdag kl.19:00</a>
						      <a class="dropdown-item" href="#">Torsdag kl.21:00</a>
						     <a class="dropdown-item" href="#">Fredag kl.17:00</a>
						     <a class="dropdown-item" href="#">Fredag kl.19:00</a>
						     <a class="dropdown-item" href="#">Fredag kl.21:00</a>
						      <a class="dropdown-item" href="#">Lördag kl.13:00</a>
						       <a class="dropdown-item" href="#">Lördag kl.15:00</a>
						      <a class="dropdown-item" href="#">Lördag kl.17:00</a>
						      <a class="dropdown-item" href="#">Lördag kl.19:00</a>
						      <a class="dropdown-item" href="#">Lördag kl.21:00</a>
						      <a class="dropdown-item" href="#">Söndag kl.13:00</a>
						       <a class="dropdown-item" href="#">Söndag kl.15:00</a>
						      <a class="dropdown-item" href="#">Söndag kl.17:00</a>
						      <a class="dropdown-item" href="#">Söndag kl.19:00</a>
						      <a class="dropdown-item" href="#">Söndag kl.21:00</a>
						    </div>
					</div>
	    		</div>
    </div>


<div class="col">

					          
					<h2>Välja Platser</h2>
                   <button type="button" onclick="alert('Choose your seat!')">Seats!</button>
				
				</div>










</div>
</div>
  

</template>




 

<script>
	let filmer = require('@/assets/filmer.json')

export default {
  name: 'Bookningscomponent',
  props: {
    msg: String
  },
  data() {
  	return {
  		filmer:filmer
  	} 
  } 
}





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.jahed{

display: block;
}

  
</style>



















