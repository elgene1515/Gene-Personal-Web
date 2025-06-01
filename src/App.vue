<template>
  <v-app>
    
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Gene Personal Web</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :to="item.to">
          <v-list-item-icon>
            <v-icon>{{  item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-conten> {{ item.title }}</v-list-item-conten>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="pa-4" fluid>
        <router-view/>
      </v-container>
    </v-main>
    
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      items: [
        {title: 'Home', icon: 'mdi-home', to: '/'},
        {title: 'About', icon: 'mdi-information', to: '/about'},
      ]
    })
  }
</script>

<style scoped>

</style>