import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	msg: "hello",
  	idCounter: 0,
	seatsToAssign: 3,
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
  	// Note how different this looks compared to the others. It consists of string type and handler
  	updateHoveredSeat (state, payload) {
  		state.hoveredSeat = payload
  	},
  	selectSeats (state, payload) {
  		state.selectedSeats = payload
  	}
  },

  actions: {
  	updateHoveredSeat ({commit}, payload) {
  		commit('updateHoveredSeat', payload)
  	},
  	selectSeats (context) {
  		let seatsToSelect = []
  		let seatsToAssign = context.state.seatsToAssign
  		
  		for (let i = 0; i < seatsToAssign; i++) {
  			seatsToSelect.push([ context.state.hoveredSeat[0], context.state.hoveredSeat[1] + i ])
  		}

  		let occupied = 0
  		  		//if (a seat in the payload array is reflected in this.takenSeats, do not change the payload, instead return error
  		for (let takenSeat of context.state.takenSeats) {
  			console.log(takenSeat)
  			for (let seat of seatsToSelect) {
  				console.log("seatsToSelect: " + seat)
  				if (takenSeat[0] == seat[0] && takenSeat[1] == seat[1]) {
  					console.log("occupied:",occupied)
  					occupied++
  				} else {
  					console.log("occupied:",occupied)
  				}
  			}
  		}


  		if (occupied === 0) {
  			context.commit('selectSeats', seatsToSelect)
  		}
  	}
  },

  getters: {
  	salong: state => {
  		return state.salonger[0].seatsPerRow
  	},
  	shouldHover: state => (id) => {
  		for (let i = 0; i < state.seatsToAssign; i++) {
  			if (id[0] == state.hoveredSeat[0] && id[1] == state.hoveredSeat[1] + i) {
  				// state.hoveredSeats.push(id)
  				return true
  			}
  		}
  	},
  	isSelected: state => (id) => {
  		for (let seat of state.selectedSeats) {  			
  			if (id[0] == seat[0] && id[1] == seat[1]) {
  				return true
  			}
  		}
  	},
  	// Allows for params to be passed store.getters.getTodoById(2) 
  	// Passing getters allows this one to access the other getters
  	getTodoById: (state, getters) => (id) => {
	    return state.todos.find(todo => todo.id === id)
	  }
  }
})
