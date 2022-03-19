<template>
  <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">
            VUECATALOG
        </h2>
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