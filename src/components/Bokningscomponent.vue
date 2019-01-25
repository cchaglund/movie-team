<template>

<div class="Bookningscomponent">
	<h1> Bokningscomponent</h1>
	<div class="container">
		<h2>Välj Film</h2>
		<form>
			<div class="form-group">
				<select class="form-control" id="sel1">
					<option v-for="film of filmer">{{film.title}}</option>
				</select>
			</div>
		</form>
	</div>
	<div class="container">
		<h2>Välj Tid</h2>
		<form>
			<div class="form-group">
				<select class="form-control" id="sel1">
					<option v-for="film of filmer">{{film.datum}}</option>
				</select>
			</div>
		</form>
	</div>
	
	<div class="container">
		<h2>Välja Datum</h2>
		<form>
			<div class="form-group">
				<select class="form-control" id="sel1">
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
				<select class="form-control" id="sel1">
					<option>Salong 1</option>
					<option>Salong 2</option>
				</select>
			</div>
		</form>
	</div>

 <template>
    <div class="Välja Plats">
        <h1>{{ msg }}</h1>
        <router-link :to="{ name: 'bokning', params: { id: 1234 } }"> <button type="button" onclick="">Välja Plats</button>  </router-link>
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
li.dropdown-submenu:hover ul{
display: block;
left: 100%;
}
</style>