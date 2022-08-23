<template>

        <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <img v-if="user" src="" alt="">
                        <img :src="userPhoto">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ userName }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

        <v-divider></v-divider>

                <v-list-item v-for="(item, index) in items" :key="index" :to="item.link">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
</template>

<script>
export default  {

name: 'SideNavBar',

data () {
    return {
        items: [
        { title: 'ストリーマー一覧', icon: 'mdi-list', link: { name: 'streamers'}},
        { title: '使用方法', icon: 'mdi-list', link: { name: 'about'}}
        ],
        user_info : ""
    }
},

computed: {
    userName(){
        return this.$store.getters.getUserName
    },
    userPhoto(){
        return this.$store.getters.getUserPhoto
    }
}



// mounted(){
//     this.user_info = this.$store.state.login_user
// },


}
</script>