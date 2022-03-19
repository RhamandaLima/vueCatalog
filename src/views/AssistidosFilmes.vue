<template>
    <v-container class="catalogo-filmes">
        <h2 class="text-center ma-4">FILMES QUE EU JÁ VI</h2>
        <h3 class="text-center ma-4">Quantidade de filmes assistidos: {{contador}}</h3>
        <v-card
            max-width="300px"
            class="grey lighten-5 mx-auto ma-3"
            v-for="(filme, index) of listaDeFilmes" :key="filme.id"
        >
            <v-list two-line class="grey lighten-5">
            <v-list-item class="color-letter">  
            <v-list-item-title class="text-left"> {{ index + 1 }} {{ filme.Title }}</v-list-item-title>
            <v-list-item-subtitle class="text-right">{{ filme.Year }} </v-list-item-subtitle>
            </v-list-item>
            <v-btn
                width="150px"
                color="deep-orange accent-4"
                @click="favoritar"
                >
                Já assisti!
            </v-btn>
            </v-list>

            <v-spacer></v-spacer>
        </v-card>
    </v-container>
</template>

<script>
  export default {
    name: 'AssistidosFilmes',
    data() {
      return {
        listaDeFilmes: [],
        contador: 0,
      }
    },
    methods: {
      favoritar() {
        this.contador +=1;
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

<style scoped>

.catalogo-filmes {
  text-align: center;     
}

</style>
