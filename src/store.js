import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	msg: "hello"
  },

  mutations: {
  	// Note how different this looks compared to the others. It consists of string type and handler
  	changeMsg (state, payload) {
  		console.log(state.msg)
  		state.msg = payload.msg
  	}
  },

  actions: {

  },

  getters: {
  	firstGetter: state => {
  		return "lal"
  	},
  	// Allows for params to be passed store.getters.getTodoById(2) 
  	// Passing getters allows this one to access the other getters
  	getTodoById: (state, getters) => (id) => {
	    return state.todos.find(todo => todo.id === id)
	  }
  }
})
