<template>
  <v-footer padless>
    <v-col
      color="blue-grey darken-4"
      class="rodape text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Time 10</strong>
    </v-col>
  </v-footer>
</template>

<script>
  export default {
  }
</script>

<style scoped>
 .rodape {
   background-color:#263238;
   color: #FAFAFA; 
   font-size: 14px;
 }
</style>