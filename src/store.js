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
      filmData: require('@/assets/filmer.json'),
  		guests: {
  			adults: 1,
  			pensioners: 0,
  			children: 0
  		},
  		seats: {}
  	},
  	prices: {
  		adults: 100,
  		pensioners: 80,
  		children: 60
  	},
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

      let formattedSeats = {
        row: 0,
        seats: []
      }

      for (let seat of state.selectedSeats) {
        formattedSeats.row = seat[0]
        formattedSeats.seats.push(seat[1])
      }

  		state.choices.seats = formattedSeats
  		state.choices.ready = true
  	},
  	addGuest (state, payload) {
  		state.choices.guests[payload]++
  	},
  	removeGuest (state, payload) {
  		state.choices.guests[payload]--
  		state.selectedSeats.pop()
  	},
  	clearSelectedSeats (state) {
  		state.selectedSeats = []
  	}
  },

  actions: {
  	updateHoveredSeat ({commit}, payload) {
  		commit('updateHoveredSeat', payload)
  	},
  	async selectSeats ({state, commit, dispatch, getters}, payload) {
  		let seatsToSelect = []
  		let seatsToAssign = getters.seatsToAssign
  		let occupied = false
  		
  		for (let i = 0; i < seatsToAssign; i++) {
  			seatsToSelect.push([ payload[0], payload[1] + i ])
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

  		if (context.getters.seatsToAssign != context.state.selectedSeats.length) {
  			console.log("Mismatch b/w ticket number and selected seats. Please click on seats to select")
  			context.commit('clearSelectedSeats')
  			return false
  		}

  		context.commit('addingTickets')
  		console.log("action: bookTickets - ready to send to server")
  	},
  	addGuest ({commit}, payload) {
  		commit('clearSelectedSeats')
  		commit('addGuest', payload)
  	},
  	removeGuest ({commit}, payload) {
  		commit('clearSelectedSeats')
  		commit('removeGuest', payload)
  	}
  },

  getters: {
  	seatsPerRow: state => {
  		return state.salonger[0].seatsPerRow
  	},
  	shouldHover: (state, getters) => (id) => {
  		for (let i = 0; i < getters.seatsToAssign; i++) {
  			if (id[0] == state.hoveredSeat[0] && id[1] == state.hoveredSeat[1] + i) {
  				return true
  			}
  		}
  	},
  	isSelected: (state) => (id) => {
  		if (state.selectedSeats != undefined) {
  			for (let seat of state.selectedSeats) {  			
	  			if (id[0] == seat[0] && id[1] == seat[1]) {
	  				return true
	  			}
	  		}
  		}
  	},
  	seatsToAssign: state => {
  		let total = 0
  		for (let typeGuest in state.choices.guests) {
  			total = total + state.choices.guests[typeGuest]
  		}
  		return total
  	},
   calcTotal: state => {
      let total = 0
      total = total + state.prices.adults * state.choices.guests.adults
      total = total + state.prices.pensioners * state.choices.guests.pensioners
      total = total + state.prices.children * state.choices.guests.children
      return total
   }
  }
})
