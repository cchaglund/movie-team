import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	choices: {
  		ready: false,
  		guests: {
  			adults: 1,
  			pensioners: 0,
  			children: 0
  		},
  		seats: {}
  	},
  	prices: {
      adults: 85,
      pensioners: 75,
      children: 65
  	},
	hoveredSeat: [],
	hoveredSeats: [],
	selectedSeats: [],
   salong: {}
},

  mutations: {
  	updateHoveredSeat (state, payload) {
  		state.hoveredSeat = payload
  	},
  	selectSeats (state, payload) {
  		state.selectedSeats = payload
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
  	},
   setSalong (state, payload) {
      state.salong = payload
   },
   clearGuests (state) {
    state.choices.guests.adults = 1
    state.choices.guests.pensioners = 0
    state.choices.guests.children = 0
   }
  },

  actions: {
   setSalong ({commit}, payload) {
      commit('setSalong', payload)
   },
  	updateHoveredSeat ({commit}, payload) {
  		commit('updateHoveredSeat', payload)
  	},
  	async selectSeats ({state, commit, dispatch, getters}, payload) {
  		let seatsToSelect = []
  		let seatsToAssign = getters.seatsToAssign
  		let occupied = false
  		
  		for (let i = 0; i < seatsToAssign; i++) {
  			seatsToSelect.push([ payload.id[0], payload.id[1] + i ])
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
         if (payload.takenSeats.length != 0) {
            let takenSeats = payload.takenSeats
            for (let takenSeat of takenSeats) {
               for (let seat of seatsToSelect) {
                  let sameRow = takenSeat[0] == seat[0]
                  let sameSeat = takenSeat[1] == seat[1]

                  if (sameRow && sameSeat) {
                     return false
                  }
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
    clearSelections ({commit}) {
      commit('clearSelectedSeats', [])
      commit('clearGuests')
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
  		return state.salong
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
      return total.toString()
   }
  }
})
