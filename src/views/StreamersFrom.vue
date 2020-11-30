<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 md12 mt-15 class="text-center">
        <h1>配信者情報編集</h1>
      </v-flex>

      <v-flex xs12 md6 mt-5>
        <v-card>
        <v-card-text>
            
            <v-select
            prepend-icon="mdi-television"
            :items="platforms"
            label="配信サイト"
            dense
            v-model="selectedPlatform"
        ></v-select>
        <v-form>
            <v-text-field 
            v-if="selectedPlatform === 'Youtube'" 
            label="チャンネルID" 
            v-model.trim="streamer.id"
            @change="confirmChannel"
            ></v-text-field>
                <v-icon size="14" color="black" v-if="selectedPlatform === 'Youtube'">mdi-help</v-icon>
                
                <router-link v-if="selectedPlatform === 'Youtube'" to="../about" target="_blank">
                チャンネルIDの調べ方についてはこちら
                </router-link>
                
                <v-text-field v-model="appropriateName" label="名前"></v-text-field>
                <div class="text-center">
                    <v-btn @click="$router.push({ name: 'streamers' })">キャンセル</v-btn>
                    <v-btn color="info" class="ml-2">保存</v-btn>
                </div>
            </v-form>
        </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
        return {
            streamer : {},
            platforms : ['Youtube', 'niconico', 'Twitch', 'OPENREC'],
            selectedPlatform : '',
            appropriateName : ''
        }
    },
    methods:{
        confirmChannel () {
            const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
            fetch(CORS_PROXY + "https://www.youtube.com/feeds/videos.xml?channel_id=" + this.streamer.id)
            .then((response) => {
            if (response.status === 404) {
                this.appropriateName = ''
                console.log("チャンネルが見つかりません")
            }
            response.text()
            .then((text) => {
                const el = new DOMParser().parseFromString(text, 'text/html')
                console.log(el.querySelector('name').textContent)
                this.appropriateName = el.querySelector('name').textContent
                
            })
            })
        }
    }
}
</script>