<template>
    <v-container fluid fill-height>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <img src="https://avatars2.githubusercontent.com/u/1363954?s=460&v=4">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>Kazuya Kojima</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

        <v-divider></v-divider>

                <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {

props:['drawer'],

data () {
    return {
        items: [
        { title: 'お気に入りストリーマー一覧', icon: 'mdi-menu' }
        ]
    }
},


}
</script>