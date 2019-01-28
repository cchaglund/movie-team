<template>

<div class="Bookningscomponent">
		<div class="container">
		<h2>Film</h2>
		<form>
			<div class="form-group d-flex">
				<select class="form-control" id="filmDropdown" v-model="selected.film">
					<option disabled value="">Välj film</option>
					<option v-for="film in moviesFromFiltered" :value="film.id">{{film.title}}</option>
				</select>
				<div v-if="selected.film != ''" class="close-btn" @click="clearFilm">
					<i class="fas fa-window-close flex-1"></i>
				</div>
			</div>
		</form>
	</div>
	<div class="container">
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
	
	<div class="container">
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
	<div class="container">
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
        <button @click="bokaPlatser" type="button" onclick="">Välja Plats</button>

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
				film: '',
				date: '',
				time: '',
				salong: ''
			},
			moviesFromFiltered: {},
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
			console.log ('filtered', filtered)
			this.moviesFromFiltered = {};
			for(let f of filtered){
				this.moviesFromFiltered[f.movie] = this.moviesById[f.movie];
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
.Bookningscomponent {
	margin-top: 50px;
}


.close-btn {
	color: #DA3724;
	font-size: 2em;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 0.3em;
}

.jahed{
display: block;
}
li.dropdown-submenu:hover ul{
display: block;
left: 100%;
}
</style>