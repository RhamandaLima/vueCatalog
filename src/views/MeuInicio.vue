<template>
  <v-container>
        <h1 class="text-center ma-4">VUECATALOG</h1>
        <v-img 
            class="inicio-imagem mb-3"
            src="../assets/movie.png"
            >
        </v-img>
        <p>Em busca de conforto e de um momento de lazer? Aqui você encontra uma variedade de filmes.</p>
    </v-container>
</template>

<script>
export default {
    name: 'MeuInicio'
}
</script>

<style scoped>
    .text-h5 {
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
    }

    p {
        font-family: 'Roboto', sans-serif;
        text-align: center;
    }
</style>