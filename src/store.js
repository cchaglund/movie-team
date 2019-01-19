import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	choices: {
  		ready: false,
  		title: "Titanic",
  		date: "4/10",
  		time: "20:45",
  		guests: {
  			adults: 0,
  			pensioners: 0,
  			children: 0
  		},
  		seats: [/*and array of seats, [4, 6], [4, 8]*/]
  	},
	seatsToAssign: 1,
	hoveredSeat: [],
	hoveredSeats: [],
	selectedSeats: [],
	takenSeats: [
			[4, 3],
			[1, 7],
			[8, 2]
	],
	salonger: [  
	  {
	    "name": "Stora Salongen",
	    "seats": 81,
	    "seatsPerRow": [
	      8,
	      9,
	      10,
	      10,
	      10,
	      10,
	      12,
	      12
	    ]
	  },
	  {
	    "name": "Lilla Salongen",
	    "seats": 55,
	    "seatsPerRow": [
	      6,
	      8,
	      9,
	      10,
	      10,
	      12
	    ]
	  }
	]
},

  mutations: {
  	updateHoveredSeat (state, payload) {
  		state.hoveredSeat = payload
  	},
  	selectSeats (state, payload) {
  		state.selectedSeats = payload
  	},
  	addingTickets (state, payload) {
  		console.log("mutation: addingTickets - moving selected seats to final choices")
  		state.choices.seats = [...state.selectedSeats]
  		state.choices.ready = true
  	},
  	setNumSeats (state, payload) {
  		state.seatsToAssign = payload
  	}
  },

  actions: {
  	updateHoveredSeat ({commit}, payload) {
  		commit('updateHoveredSeat', payload)
  	},
  	async selectSeats ({state, commit, dispatch, getters}) {
  		let seatsToSelect = []
  		let seatsToAssign = state.seatsToAssign
  		let occupied = false
  		
  		for (let i = 0; i < seatsToAssign; i++) {
  			seatsToSelect.push([ state.hoveredSeat[0], state.hoveredSeat[1] + i ])
  		}

  		function validateSelection() {
	  		let multipleSeats = seatsToSelect.length > 1
	  		if (multipleSeats) {
	  			let lastSeat = seatsToSelect[seatsToSelect.length - 1]
	  			let lastSeatNum = lastSeat[1]
	  			let rowLength = getters.seatsPerRow[lastSeat[0] - 1]
	  			let outsideRow = lastSeatNum > rowLength

	  			if (outsideRow) {
		  			return false
		  		}
	  		}

	  		let takenSeats = state.takenSeats
	  		for (let takenSeat of takenSeats) {
	  			for (let seat of seatsToSelect) {
	  				let sameRow = takenSeat[0] == seat[0]
	  				let sameSeat = takenSeat[1] == seat[1]

	  				if (sameRow && sameSeat) {
	  					return false
	  				}
	  			}
	  		}
	  		return true
	  	}

  		if (!validateSelection()) {
  			return 'Outside row'
  		}

  		commit('selectSeats', seatsToSelect)
  	},
  	bookTickets (context) {
  		console.log("action: bookTickets - attempting to book")

  		if (context.state.selectedSeats.length == 0) {
  			console.log("action: bookTickets - no seats selected!")
  			return false
  		}

  		context.commit('addingTickets')
  		console.log("action: bookTickets - ready to send to server")
  	},
  	setNumSeats ({commit}, payload) {
  		commit('setNumSeats', payload)
  		commit('selectSeats')
  	}
  },

  getters: {
  	seatsPerRow: state => {
  		return state.salonger[0].seatsPerRow
  	},
  	shouldHover: state => (id) => {
  		for (let i = 0; i < state.seatsToAssign; i++) {
  			if (id[0] == state.hoveredSeat[0] && id[1] == state.hoveredSeat[1] + i) {
  				return true
  			}
  		}
  	},
  	isSelected: (state, dispatch) => (id) => {
  		if (state.selectedSeats != undefined) {
  			for (let seat of state.selectedSeats) {  			
	  			if (id[0] == seat[0] && id[1] == seat[1]) {
	  				return true
	  			}
	  		}
  		}
  	},
  	choices: state => {
  		return state.choices
  	}
  }
})
