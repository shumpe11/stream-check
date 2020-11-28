<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="openSideNavBar"></v-app-bar-nav-icon>
      <v-toolbar-title>Stream Check</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <SideNavbar :drawer="this.drawer"></SideNavbar>
    </v-main>
  </v-app>
</template>

<script>
import SideNavbar from './components/SideNavBar'

export default {

name: 'App',

components: {
  SideNavbar
},

data: () => ({
  drawer:false
}),

methods: {
  openSideNavBar () {
    this.drawer = !this.drawer
  }
}
};
</script>
