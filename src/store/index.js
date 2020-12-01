import Vue from 'vue'
import Vuex from 'vuex'
// import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    streamers:[ 
              {name : "test",
              platform: "twitch",
              is_live : true }
              ]
  },
  mutations: {
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    }
  },
  actions: {
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu')
    }
  },
  modules: {
  }
})
