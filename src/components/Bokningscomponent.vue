<!--<template>
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

							    </div>
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





>>>>>>> master
=======
>>>>>>> master

<div class="Bookningscomponent">
	<h1> Bokningscomponent</h1>
	<div class="container">
		<h2>Välj Film</h2>
		<form>
			<div class="form-group">
				<select class="form-control" id="filmDropdown">
					<option v-for="film of filmer" :value="film.title">{{film.title}}</option>
				</select>

			</div>
		</form>
	</div>
	<div class="container">
		<h2>Välj Tid</h2>
		<form>
			<div class="form-group">
				<select class="form-control" id="timeDropdown">
					<option v-for="film of filmer" :value="film.datum">{{film.datum}}</option>
				</select>
			</div>
		</form>
	</div>
	
	<div class="container">
		<h2>Välja Datum</h2>
		<form>
			<div class="form-group">
				<select class="form-control" id="dateDropdown">
					<option>Måndag</option>
					<option>Tisdag</option>
					<option>Onsdag</option>
					<option>Torsdag</option>
					<option>Fredag</option>
					<option>Lördag</option>
					<option>Söndag</option>
					
				</select>
			</div>
		</form>
	</div>
	<div class="container">
		<h2>Välja Salong</h2>
		<form>
			<div class="form-group">
				<select class="form-control" id="salongDropdown">
					<option>Salong 1</option>
					<option>Salong 2</option>
				</select>
			</div>
		</form>
	</div>

 <template>
    <div class="Välja Plats">
        <h1>{{ msg }}</h1>
        <button @click="bokaPlatser" type="button" onclick="">Välja Plats</button>

    </div>
</template>

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
			filmer:filmer,
			title: '',
			date: '',
			time: '',
			salong: ''
		}
	},
	methods: {
		bokaPlatser() {
			var filmDropdown = document.getElementById("filmDropdown");
			this.title = filmDropdown.options[filmDropdown.selectedIndex].value;

			var dateDropdown = document.getElementById("dateDropdown");
			this.date = dateDropdown.options[dateDropdown.selectedIndex].value;

			var timeDropdown = document.getElementById("timeDropdown");
			this.time = timeDropdown.options[timeDropdown.selectedIndex].value;

			var salongDropdown = document.getElementById("salongDropdown");
			this.salong = salongDropdown.options[salongDropdown.selectedIndex].value;

			// var nameValue = document.getElementById("1").value;
			console.log(this.title, this.date, this.time, this.salong)

			this.$router.push({ 
						name: 'bokning', 
						params: {
							title: this.title, 
							date: this.date, 
							time: this.time, 
							salong: this.salong
						}
					})
		}
	}
	
}
	














</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jahed{
display: block;
}
li.dropdown-submenu:hover ul{
display: block;
left: 100%;
}
</style>