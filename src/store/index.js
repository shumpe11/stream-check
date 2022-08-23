import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
// import axios from 'axios'
// import { get } from 'core-js/fn/dict'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    streamers:[]
  },

  mutations: {

    // ログインユーザー情報をstateに格納
    setLoginUserInfo (state, user) {
      state.login_user = user
    },

    // サイドバー開閉
    toggleSideMenu (state) {
      // trueならfalseに，falseならtrueに
      state.drawer = !state.drawer
    },

    // ログアウト処理
    deleteLoginUserInfo (state) {
      state.login_user = null
    }
  },

  actions: {
    setLoginUserInfo ({ commit }, user) {
      commit('setLoginUserInfo', user)
    },
    deleteLoginUserInfo ({ commit }) {
      commit('deleteLoginUserInfo')
    },


    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu')
    },

    login () {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },

    logout () {
      firebase.auth().signOut()

    }
  },

    // async getTwitchStreamer() {
    //   axios.post('https://id.twitch.tv/oauth2/token', {
    //     "client_id":"vx6iy0mqhcdo911e5go0ismko9ynf2",
    //     "client_secret":"mbofy8i05fq4rfe5vurqyoudpzpvty",
    //     "grant_type":"client_credentials"
    //   }).then = (res) => {

    //     console.log(res.data)
    //   }
    //   const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
    //   const config = {
    //     headers : {
    //       'Client-ID': "vx6iy0mqhcdo911e5go0ismko9ynf2",
    //       'Authorization': process.env.VUE_APP_TWITCH_BEARER_TOKEN,
    //       "Accept":"application/vnd.twitchtv.v5+json"
    //     }
    //   }
    //   const msg = await axios.get(CORS_PROXY + 'https://api.twitch.tv/kraken/search/channels?query=dasoku_aniki',config)
    //   .then(
    //     (res) => res.data,
    //     () => ''
    //   ); 
    //   console.log(msg)
    //   // const payload = {
    //     // message: msg,
    //   // };
    //   // context.commit('setMessage', payload);
    // },

    // async getYoutubeSubscriptions() {
    //   axios.get("https://www.googleapis.com/youtube/v3/subscriptions", {
    //     params : {
    //       part : 'snippet',
    //       mine : true,
    //       key : process.env.VUE_APP_YOUTUBE_APIKEY
    //     }.then = (res) => {
    //       console.log(res)
    //     }
    //   })
    // },

  getters: {
    // nullをgettersでreturnするとエラーになるのでnullチェック
    getUserName: (state) => {
      if (state.login_user == null){
        return "ゲスト"
      }else{
        return state.login_user.displayName
      }
    },

    getUserPhoto: (state) => {
      if (state.login_user == null) {
        return "../assets/guest-icon.png"

      }else{
        return state.login_user.photoURL

      }
    }

  }

})
