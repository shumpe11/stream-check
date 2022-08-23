<template>
<v-container text-center justify-center>
  
    <v-row wrap>
      <v-flex mt-15>
        <v-spacer></v-spacer>
        <h1>Stream Check</h1>
        <p>Stream Checkをご利用の方は、Googleアカウントでログインしてください。</p>
      </v-flex>

      <v-flex xs12 mt-5>
        <v-btn color='info' @click="login">Googleアカウントでログイン</v-btn>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['login'])
  }
}
</script>