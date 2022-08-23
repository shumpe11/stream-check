<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12 mt-15 text-center>
        <h1>登録済み配信者一覧</h1>
      </v-flex>

      <v-flex xs12 mt-5 mr-5 text-right>
        <router-link :to="{ name: 'streamer_edit' }">
          <v-btn color="info">
            配信者登録
          </v-btn>
        </router-link>
      </v-flex>


      <v-flex xs12 mt-5 justify-center>
        <v-data-table :headers='headers' :items='streamers'>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.platform }}</td>
            <!-- <td class="text-xs-left">{{ props.item.email }}</td> -->
            <td class="text-xs-left">{{ props.item.is_live }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name:"streamers",
  created(){
    this.streamers = this.$store.state.streamers
  },
  data () {
    return {
      headers: [
        { text: '配信者名', value: 'name' },
        { text: 'プラットフォーム', value: 'platform' },
        { text: 'ライブ状況', value: 'is_live' },
        { text: '', sortable: false },
        
      ],
      streamers: []
    }
  },
    methods: {
      // deleteConfirm (id) {
      //   if(confirm('削除してよろしいですか？')) {
      //     this.deleteAddress({ id })
      //   }
      // },
      ...mapActions(['deleteAddress'])
    }
  }

</script>
<style>
</style>