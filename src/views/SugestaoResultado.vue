<template>
  <v-container class="container-sug">
        <h2 class="text-center ma-4">SUGESTÃO DO DIA</h2>
        
        <v-card
            max-width="300"
            class="grey lighten-5 mx-auto ma-3"
            
        >
        {{sugerirFilme()}}
            <v-img
                height="300px"
                dark
                :src="filmeSugerido.Poster" :alt="filmeSugerido.Title"
            >
            </v-img>

            <v-list two-line class="grey lighten-5">
            <v-list-item class="color-letter">  
            <v-list-item-title class="text-left">{{ filmeSugerido.Title }}</v-list-item-title>
            <v-list-item-subtitle class="text-right">{{ filmeSugerido.Year }} </v-list-item-subtitle>
            </v-list-item>
            </v-list>

            <v-spacer></v-spacer>
        </v-card>
       
    </v-container>
</template>

<script>
export default {
    name: 'SugestaoResultado',
    data() {
      return {
        filmeSugerido: [],
        listaDeFilmes: []
      }
    },
     methods:{
        sugerirFilme(){
            this.filmeSugerido = this.listaDeFilmes[Math.floor(Math.random() * 8 + 1)]
            console.log(this.filmeSugerido)
        }
    },
    created() {
      fetch('http://www.omdbapi.com/?s=tenet&apikey=ba7bb602')
        .then(response => response.json())
        .then(json => {
          this.listaDeFilmes = json.Search
        });
      }
}
</script>

<style>
    .container{
      text-decoration: none;
    }
    .container-sug {
      text-align: center;
      
    }

    .v-btn {
      border-radius: 25px;
    }
</style>