<template>
    <v-container class="catalogo-filmes">
        <h3 class="text-center ma-4">CATÁLOGO DE FILMES</h3>
        <v-card
            max-width="300"
            class="grey lighten-5 mx-auto ma-3"
            v-for="(filme, index) of listaDeFilmes" :key="filme.id"
        >
            <v-img
                height="300px"
                dark
                :src="filme.Poster" :alt="filme.Title"
            >
            </v-img>

            <v-list two-line class="grey lighten-5">
            <v-list-item>  
            <v-list-item-title class="pl-2"> {{ index + 1 }} {{ filme.Title }}</v-list-item-title>
            <v-list-item-subtitle class="text-right">{{ filme.Year }} </v-list-item-subtitle>
            </v-list-item>
            </v-list>

            <v-spacer></v-spacer>
        </v-card>
    </v-container>
</template>

<script>
  export default {
    name: 'CatalogoFilmes',
    data() {
      return {
        listaDeFilmes: []
      }
    },
    created() {
      fetch('http://www.omdbapi.com/?s=tenet&apikey=ba7bb602')
        .then(response => response.json())
        .then(json => {
          this.listaDeFilmes = json.Search
        });
        console.log(this.listaDeFilmes);
      }
  }
  </script>