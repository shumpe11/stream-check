<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>連絡先一覧</h1>
      </v-flex>

      <v-flex xs12 mt-5 justify-center>
        <v-data-table :headers='headers' :items='addresses'>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.tel }}</td>
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td class="text-xs-left">{{ props.item.address }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import { mapActions } from 'vuex'

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
        { text: 'チャンネルID等', value: 'id' },
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
      // ...mapActions(['deleteAddress'])
    }
  }

</script>
<style>
</style>