<template>
  <v-container class="container-sug">
        <h2 class="text-center ma-4">SUGESTÃO DO DIA</h2>
    
        <v-img 
            class="inicio-imagem mb-3"
            src="../assets/selecao.png"
            >
        </v-img>

        <router-link to="/resultado">
            <v-btn
            class="deep-orange accent-4"
            elevation="4"
            large
            center  
            tile
            x-large
            x-small
            >
            Clique aqui
            </v-btn>
        </router-link>
       
    </v-container>
</template>

<script>
export default {
    name: 'SugestaoDoDia'
}
</script>

<style scoped>
    .container-sug {
        text-align: center;       
    }

    .v-btn a {
        text-decoration: none;
       
    }

    .v-btn {
        border-radius: 25px;
        text-decoration: none;
    }
</style>