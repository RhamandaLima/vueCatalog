<template>
  <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">
            VUECATALOG
        </h2>
        <v-img 
            class="inicio-imagem mb-5"
            src="https://blush.design/api/download?shareUri=UHBC5VMqRZ85kfbW&c=Base_0%7Ee9553c_Hair_0%7E3f88eb_Skin_0%7Ebb6162&w=800&h=800&fm=png" alt="">
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