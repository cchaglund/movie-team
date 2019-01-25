<template>

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