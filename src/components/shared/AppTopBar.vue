<template>
  <div class="app-top-bar">

    <v-app-bar
      color="blue-grey darken-4"
      dark
      text-align="end"
    >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>
            <h1>VUECATALOG</h1>
        </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="grey lighten-3"
    >
      <v-list 
        nav 
        
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-orange--text text--darken-4"
          
        >
          <router-link to="/">
          <v-list-item>
            <v-list-item-icon >
              <v-icon color="blue-grey darken-4">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/catalogo">
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="blue-grey darken-4">mdi-movie-open-play</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Catálogo de filmes</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/sugestao">
            <v-list-item>
                <v-list-item-icon>
                  <v-icon color="blue-grey darken-4">mdi-movie-search</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Sugestão do dia</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/login">
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="blue-grey darken-4">mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
          </router-link>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="blue-grey darken-4">mdi-account-group</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Quem somos</v-list-item-title>
            </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    })
  }
</script>

<style scoped>

.app-top-bar {
  font-family: 'Oswald', sans-serif;
  text-transform: none;
}

.app-top-bar a {
  text-decoration: none;
}

h1 {
  font-size: 22px;
  padding-left: 150px;
}

.nav {
  background-color: grey;
}

</style>