import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tick: false,
    controls: {
      left: false,
      right: false,
      up: false,
      down: false,
      button: false
    }
  },
  mutations: {
    nextFrame (state) {
      state.tick = !state.tick
    },
    updateControls (state, newControls) {
      state.controls = newControls
    }
  },
  getters: {
    getTick: state => {
      return state.tick
    },
    getControls: state => {
      return state.controls
    }
  },
  actions: {

  }
})
