<template>
  <v-app>
    <AppTopBar />
    <MeuInicio />
    <AppFooter />
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar.vue'
import MeuInicio from './views/MeuInicio.vue'
import AppFooter from './components/shared/AppFooter.vue'


export default {
  name:'App',
  components: {
    AppTopBar,
    MeuInicio,
    AppFooter
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap');

#app {
  color: #2c3e50;
  font-family: 'Oswald', sans-serif;
}

/*nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
