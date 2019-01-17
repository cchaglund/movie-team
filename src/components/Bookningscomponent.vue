


<template>
  <div class="Bookningscomponent">

  	<h1> Bokningscomponent</h1>




  	<div class="row">
    	<div class="col bg-success">

			<div class="container">
				<h2>Välj Film</h2>               
				  <div class="dropdown">
				    	<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
				      Välj Film
				    	</button>
					    <div class="dropdown-menu">
					      <a class="dropdown-item" href="#">Link 1</a>
					      <a class="dropdown-item" href="#">Link 2</a>
					      <a class="dropdown-item" href="#">Link 3</a>
					    </div>
				  </div>
			</div>
		</div>





	    <div class="col bg-warning" >

			<div class="container">
					<h2>Välj biljet</h2>               
					<div class="dropdown">
					    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
					      Välj biljet
					    </button>
						    <div class="dropdown-menu">
						      <a class="dropdown-item" href="#">Link 1</a>
						      <a class="dropdown-item" href="#">Link 2</a>
						      <a class="dropdown-item" href="#">Link 3</a>
						    </div>
					</div>
			</div>
		</div>



	    <div class="col bg-success">

			<div class="container">
				<h2>Välj plats</h2>               
					<div class="dropdown">
					    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
					      Välj plats
					    </button>
						    <div class="dropdown-menu">
						      <a class="dropdown-item" href="#">Link 1</a>
						      <a class="dropdown-item" href="#">Link 2</a>
						      <a class="dropdown-item" href="#">Link 3</a>
						    </div>
					</div>
			</div>
		</div>




		<div class="col bg-warning">
			<div class="container">
				<h2>Välj Dag</h2>                
				<div class="dropdown">
					<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
						      Välj Dag
					</button>
						    <div class="dropdown-menu">
						      <a class="dropdown-item" href="#">Måndag kl.17:00 </a>
						        <a class="dropdown-item" href="#">Måndag kl.19:00 </a>
						          <a class="dropdown-item" href="#">Måndag kl.21:00 </a>
						      <a class="dropdown-item" href="#">Tisdag kl. 17:00</a>
						       <a class="dropdown-item" href="#">Tisdag kl. 19:00</a>
						        <a class="dropdown-item" href="#">Tisdag kl. 21:00</a>
						      <a class="dropdown-item" href="#">Onsdag kl. 17:00</a>
						      <a class="dropdown-item" href="#">Onsdag kl. 19:00</a>
						      <a class="dropdown-item" href="#">Onsdag kl. 21:00</a>
						      <a class="dropdown-item" href="#">Torsdag kl.17:00</a>
						      <a class="dropdown-item" href="#">Torsdag kl.19:00</a>
						      <a class="dropdown-item" href="#">Torsdag kl.21:00</a>
						      <a class="dropdown-item" href="#">Fredag kl. 17:00</a>
						      <a class="dropdown-item" href="#">Fredag kl. 19:00</a>
						      <a class="dropdown-item" href="#">Fredag kl. 21:00</a>
						      <a class="dropdown-item" href="#">Lördag kl. 13:00 </a>
						      <a class="dropdown-item" href="#">Lördag kl. 15:00 </a>
						      <a class="dropdown-item" href="#">Lördag kl. 17:00 </a>

						      <a class="dropdown-item" href="#">Söndag</a>
						    </div>
				</div>
			</div>
		</div>
    </div>












</div>
















    
  
</template>




 

<script>
export default {
  name: 'Bookningscomponent',
  props: {
    msg: String
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>



