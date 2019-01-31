<template>
	<div class="bokningscomponentcolor">
		<div class="Bookningscomponent">
			<div class="container onedropdown">
				<h2>Film</h2>
				<form>
					<div class="form-group onedropdown">
						<select class="form-control" id="filmDropdown" v-model="selected.film">
							<option disabled value="">Välj film</option>
							<!-- the asdf is just to inject js code, in this case trigger the 'filtered' computed property -->
							<option v-for="film in moviesFromFiltered" :asdf="filtered" :value="film.id">{{film.title}}</option>
						</select>
					</div>
				</form>
			</div>
			<div class="container onedropdown">
				<h2>Dag</h2>
				<form>
					<div class="form-group">
						<select class="form-control" id="dateDropdown" v-model="selected.date">
						 	<option disabled value="">Välj dag</option>
						 	<option v-for="date in datesFromFiltered">{{date}}</option>		
						</select>
					</div>
				</form>
			</div>
			
			<div class="container onedropdown">
				<h2>Tid</h2>
				<form>
					<div class="form-group">
						<select class="form-control" id="timeDropdown" v-model="selected.time">
							<option disabled value="">Välj tid</option>
							<option v-for="times in timesFromFiltered">{{times}}</option>
						</select>
					</div>
				</form>
			</div> 

		</div>
	    <div class="btns">
	        <button @click="bokaPlatser" class="bookbutton" type="button" onclick="">Välja Plats</button>
	        <button @click="clearSelections" type="button" class="clear bookbutton">Rensa val</button>	
	    </div>
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
			for(let film of this.filmer){
				this.moviesById[film.id]= film;
			}

			this.$axios.get('/getShowings.php')
			.then((response) => {
				this.allShowings = response.data
				this.filtered; // just to call the getter and have 'filtered' computed
			})
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
				visning: '',
				film: '',
				date: '',
				time: '',
				salong: ''
			},
			moviesFromFiltered: {},
			datesFromFiltered: {},
			timesFromFiltered: {},
			moviesById: {}
		}
	},
	computed: {
		filtered: function() {
			let that = this	

			let filtered = this.allShowings.filter(function(showing) {
				let movie = true
				let date = true
				let timeStart = true

				if (that.selected.film != '') {
					movie = showing.movie == that.selected.film
				}

				if (that.selected.date != '') {
					date = showing.date == that.selected.date
				}

				if (that.selected.time != '') {
					timeStart = showing.timeStart == that.selected.time
				}

				return movie && date && timeStart
			})

			if (filtered.length == 1) {
				this.selected.visning = filtered[0].id
				this.selected.film = filtered[0].movie
				this.selected.date = filtered[0].date
				this.selected.time = filtered[0].timeStart
				this.selected.salong = filtered[0].screen
			}
			
			this.moviesFromFiltered = {};
			this.datesFromFiltered = {};
			this.timesFromFiltered = {};
			for(let f of filtered){
				this.moviesFromFiltered[f.movie] = this.moviesById[f.movie];
				this.datesFromFiltered[f.date] = f.date;
				this.timesFromFiltered[f.timeStart] = f.timeStart;
			}

			return filtered
		}
	},
	methods: {
		bokaPlatser() {
			this.$router.push({ 
				name: 'bokning', 
				params: {
					visning: this.selected.visning,
					title: this.moviesById[this.selected.film].title, 
					date: this.selected.date, 
					time: this.selected.time, 
					salong: this.selected.salong
				}
			})
		},
		clearSelections() {
			this.selected.film = ''
			this.selected.date = ''
			this.selected.time = ''
		}
	}
	
};

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
	.bokningscomponentcolor{
		background-color: #6F2232;
	}
	.Bookningscomponent{
		color: white;
		display: flex;
		padding-left: 40px;
		padding-right: 40px;
	}
	.container{	
		padding: 0;
	}
/*	div.btns{
		padding-bottom: 80px;
		padding-right: 20%;
		padding-left: 5px;
	}*/
	.form-control{	
		border:1px solid gray;
		border-radius: 0;
		background-clip: border-box;
		border-radius: 5px;
	}
	.bookbutton{
		margin-top: 20px;
		margin-right: 10px;
		margin-left: 10px;
		margin-bottom: 20px;
		padding-top: 6.7px;
		padding-bottom: 6.7px;
		padding-left: 50px;
		padding-right: 50px;
		border: none;
		background-color: white;
		border: 1px solid black;
		border-radius: 5px;
	}
	.bookbutton:hover{
		border: 1px solid white;
		color: white;
		background-color: black;
	}
	div.container.onedropdown{
		display: inline-block;
		margin: 5px;
		margin-top: 20px;
	}
	div.container.onedropdown.leftdrop{
		margin-left: 20%;
	}
@media (max-width: 980px){
	div.container.onedropdown, div.container.leftdrop.onedropdown{
		width: 40%;
		margin-left: 2px;
		margin-right: 2px;
		margin-top: 0px;
		margin-bottom: 0px;
	}
	.Bookningscomponent{
		background-color: #6F2232;
		color: white;
		display: inline-block;
		width: 100%;
		padding-left: 0;
		padding-right: 0;
		padding-top:20px;
	}
	button.bookbutton{
		margin-top: 10px;
		margin-bottom: 20px;
		border: none;
		background-color: white;
		border: 1px solid black;
	}
	.bookbutton{
		padding-left: 30px;
		margin-right: 10px;
		margin-left: 10px;
		padding-right: 30px;
	}
/*	div.btns{
		padding: 0;
		display: block;
		vertical-align: text-top;
	}*/
}
</style>