<template>

<div class="Bookningscomponent">
		<div class="container">
		<h2>Film</h2>
		<form>
			<div class="form-group">
				<select class="form-control" id="filmDropdown" v-model="selected.film">
					<option disabled value="">Välj film</option>
					<!-- the asdf is just to inject js code, in this case trigger the 'filtered' computed property -->
					<option v-for="film in moviesFromFiltered" :asdf="filtered" :value="film.id">{{film.title}}</option>
				</select>
			</div>
		</form>
	</div>
	<div class="container">
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
	
	<div class="container">
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
<!-- 	<div class="container">
		<h2>Salong</h2>
		<form>
			<div class="form-group d-flex">
				<select class="form-control" id="salongDropdown" v-model="selected.salong">
					<option disabled value="">Välj salong</option>
					<option v-for="screen in screensFromFiltered">{{screen}}</option>
				</select>
				<div v-if="selected.salong != ''" class="close-btn" @click="clearSalong">
					<i class="fas fa-window-close flex-1"></i>
				</div>
			</div>
		</form>
	</div> -->

 <template>
    <div class="btns">
        <button @click="bokaPlatser" type="button" onclick="">Välja Plats</button>
        <button @click="clearSelections" type="button" class="btn clear">Rensa val</button>

				
    </div>
</template>

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
			console.log('this.moviesById', this.moviesById)
		})
		this.$axios.get('/getShowings.php')
		.then((response) => {
			this.allShowings = response.data
			this.filtered; // just to call the getter and have 'filtered' computed
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
			console.log("filtered", filtered)

			console.log("filtered.length", filtered.length)
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
			console.log('this.moviesFromFiltered', this.moviesFromFiltered)

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
	
}
	














</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Bookningscomponent {
	margin-top: 50px;
}


.clear {
	background-color: #DA3724;
}

.jahed{
display: block;
}
li.dropdown-submenu:hover ul{
display: block;
left: 100%;
}
</style>