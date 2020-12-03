import Vue from 'vue'
import Vuex from 'vuex'
// import firebase from 'firebase'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    streamers:[]
  },
  mutations: {
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    }
  },
  actions: {
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu')
    },
    async getMessageAction() {
      axios.post('https://id.twitch.tv/oauth2/token', {
        "client_id":"vx6iy0mqhcdo911e5go0ismko9ynf2",
        "client_secret":"mbofy8i05fq4rfe5vurqyoudpzpvty",
        "grant_type":"client_credentials"
      }).then = (res) => {

        console.log(res.data)
      }
      const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
      const config = {
        headers : {
          'Client-ID': "vx6iy0mqhcdo911e5go0ismko9ynf2",
          'Authorization': process.env.VUE_APP_TWITCH_BEARER_TOKEN
          "Accept":"application/vnd.twitchtv.v5+json"
        }
      }
      const msg = await axios.get(CORS_PROXY + 'https://api.twitch.tv/kraken/search/channels?query=dasoku_aniki',config).then(
        (res) => res.data,
        () => ''
      ); 
      console.log(msg)
      // const payload = {
        // message: msg,
      // };
      // context.commit('setMessage', payload);
    },
  },
  modules: {
  }
})
