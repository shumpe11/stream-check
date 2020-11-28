<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>Stream Check</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <SideNavbar></SideNavbar>

    <v-container fluid fill-height align-start>
        <router-view/>
      </v-container>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

import SideNavbar from './components/SideNavBar'
export default {

name: 'App',

components: {
  SideNavbar
},

data: () => ({
}),

methods: {
  ...mapActions( ['toggleSideMenu'] )
}
};
</script>
