<template>
  <v-app>
    <AppTopBar />
    
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar.vue'

export default {
  name:'App',
  components: {
    AppTopBar
  }
};
</script>

<style>
#app {
  color: #2c3e50;
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
