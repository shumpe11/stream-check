import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import axios from 'axios'

Vue.config.productionTip = false

// var firebaseConfig = {
//   apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
//   authDomain: "streamcheck-296608.firebaseapp.com",
//   databaseURL: "https://streamcheck-296608.firebaseio.com",
//   projectId: "streamcheck-296608",
//   storageBucket: "streamcheck-296608.appspot.com",
//   messagingSenderId: "454068489063",
//   appId: "1:454068489063:web:a6f51ff49435eee64c7dc2",
//   measurementId: "G-XJ5RVWPJMW"
// };

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
