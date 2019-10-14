import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tick: false
  },
  mutations: {
    nextFrame (state) {
      state.tick = !state.tick
    }
  },
  getters: {
    getTick: state => {
      return state.tick
    }
  },
  actions: {

  }
})
