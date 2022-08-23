// App.vue 前ページ共通の大元となるコンポーネント

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-appbar-title>Stream Check</v-appbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items @click="logout" v-if="this.$store.state.login_user">
        <!-- <v-icon>mdi-logout</v-icon> -->
        <v-btn text>ログアウト</v-btn>
      </v-toolbar-items> 
    </v-app-bar>
    <SideNavbar></SideNavbar>

    <v-container fluid fill-height align-start>
        <router-view/>
        
      </v-container>
  </v-app>
  
</template>

<script>
import { mapActions } from 'vuex'
import firebase from 'firebase'
import SideNavbar from './components/SideNavBar'
export default {

name: 'App',

components: {
  SideNavbar
},

created () {

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.setLoginUserInfo(user)
    } else {
      this.deleteLoginUserInfo()
    }
  })
},

data: () => ({
}),

computed: {

  userState() {
    return this.$store.state.login_user
  }

},

methods: {
  ...mapActions( ['toggleSideMenu', 'setLoginUserInfo', 'logout', 'deleteLoginUserInfo'] )
}
};
</script>
