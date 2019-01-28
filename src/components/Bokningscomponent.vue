<template>
	<div class="Bookningscomponent">
		<div class="container leftdrop onedropdown">
			<h2>Film</h2>
			<form>
				<div class="form-group d-flex onedropdown">
					<select class="form-control" id="filmDropdown" v-model="selected.film">
						<option disabled value="">Välj film</option>
						<option v-for="showing in filtered" :value="showing.movie">{{showing.movie}}</option>
					</select>
					<div v-if="selected.film != ''" class="close-btn" @click="clearFilm">
						<i class="fas fa-window-close flex-1"></i>
					</div>
				</div>
			</form>
		</div>
		<div class="container onedropdown">
			<h2>Dag</h2>
			<form>
				<div class="form-group d-flex">
					<select class="form-control" id="dateDropdown" v-model="selected.date">
					 	<option disabled value="">Välj dag</option>
					 	<option v-for="showing in filtered">{{showing.date}}</option>		
					</select>
					<div v-if="selected.date != ''" class="close-btn" @click="clearDate">
						<i class="fas fa-window-close flex-1"></i>
					</div>
				</div>
			</form>
		</div>
		<div class="container onedropdown">
			<h2>Tid</h2>
			<form>
				<div class="form-group d-flex">
					<select class="form-control" id="timeDropdown" v-model="selected.time">
						<option disabled value="">Välj tid</option>
						<option v-for="showing in filtered">{{showing.timeStart}}</option>
					</select>
					<div v-if="selected.time != ''" class="close-btn" @click="clearTime">
						<i class="fas fa-window-close flex-1"></i>
					</div>
				</div>
			</form>
		</div>
		<div class="container onedropdown">
			<h2>Salong</h2>
			<form>
				<div class="form-group d-flex">
					<select class="form-control" id="salongDropdown" v-model="selected.salong">
						<option disabled value="">Välj salong</option>
						<option v-for="showing in filtered">{{showing.screen}}</option>
					</select>
					<div v-if="selected.salong != ''" class="close-btn" @click="clearSalong">
						<i class="fas fa-window-close flex-1"></i>
					</div>
				</div>
			</form>
		</div>
	 	<template>
	    	<div class="Välja Plats">
	        	<h1>{{ msg }}</h1>
	        	<button class="bookbutton" @click="bokaPlatser" type="button" onclick="">Boka</button>
	    	</div>
		</template>
	</div>
</template>
<script>
export default {
	name: 'Bookningscomponent',
	props: {
		msg: String
	},
	created() {
		this.$axios.get('/getFilmData.php')
		.then((response) => {
			this.filmer = response.data
		})
		this.$axios.get('/getShowings.php')
		.then((response) => {
			this.allShowings = response.data
		})
	},
	data() {
		return {
			filmer: {},
			title: '',
			date: '',
			time: '',
			salong: '',
			allShowings: [],
			selected: {
				film: '',
				date: '',
				time: '',
				salong: ''
			}
		}
	},
	computed: {
		filtered: function() {
			let that = this	

			let filtered = this.allShowings.filter(function(showing) {
				let movie = true
				let date = true
				let timeStart = true
				let screen = true

				if (that.selected.film != '') {
					movie = showing.movie == that.selected.film
				}

				if (that.selected.date != '') {
					date = showing.date == that.selected.date
				}

				if (that.selected.time != '') {
					timeStart = showing.timeStart == that.selected.time
				}

				if (that.selected.salong != '') {
					screen = showing.screen == that.selected.salong
				}

				return movie && date && timeStart && screen
			})
			
			return filtered
		}
	},
	methods: {
		bokaPlatser() {
			this.$router.push({ 
				name: 'bokning', 
				params: {
					visning: this.filtered[0].id,
					title: this.selected.film, 
					date: this.selected.date, 
					time: this.selected.time, 
					salong: this.selected.salong
				}
			})
		},
		clearFilm() {
			this.selected.film = ''
		},
		clearDate() {
			this.selected.date = ''
		},
		clearTime() {
			this.selected.time = ''
		},
		clearSalong() {
			this.selected.salong = ''
		},
	}
	
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.close-btn {
		color: #DA3724;
		font-size: 2em;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 0.3em;
	}
	.Bookningscomponent{
		background-color: black;
		color: white;
		display: flex;
	}
	.container{	
		padding: 0;
	}
	div.Välja.Plats{
		padding-bottom: 80px;
		padding-right: 20%;
		padding-left: 5px;
	}
	.form-control{	
		border:1px solid gray;
		border-radius: 0;
		background-clip: border-box;
	}
	.bookbutton{
		margin-top: 87.2px;
		padding-top: 6.7px;
		padding-bottom: 6.7px;
		padding-left: 50px;
		padding-right: 50px;
		border: none;
		background-color: white;
		border: 1px solid black;
	}
	.bookbutton:hover{
		border: 1px solid white;
		color: white;
		background-color: black;
	}
	div.container.onedropdown{
		display: inline-block;
		margin: 5px;
		margin-top: 50px;
	}
	div.container.onedropdown.leftdrop{
		margin-left: 20%;
	}
@media (max-width: 980px){
	div.container.onedropdown, div.container.leftdrop.onedropdown{
		width: 40%;
		margin-left: 2px;
		margin-right: 2px;
		margin-top: 20px;
		margin-bottom: 0px;
	}
	.Bookningscomponent{
		background-color: black;
		color: white;
		display: inline-block;
		width: 100%;
	}
	button.bookbutton{
		margin-top: 10px;
		margin-bottom: 20px;
		border: none;
		background-color: white;
		border: 1px solid black;
	}
	div.Välja.Plats{
		padding: 0;
		display: block;
		vertical-align: text-top;
	}
}
</style>