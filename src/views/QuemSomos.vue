<template>
  <v-container class="container-somos">
        <h2 class="text-center ma-4">QUEM SOMOS</h2>
        <v-img 
            class="inicio-imagem mb-3"
            src="../assets/Plano-de-fundo-Luna.png"
            >
        </v-img>
        <p>Somos o #TeamIteris 10, participando do 10º Hackathon da Iteris.</p>
        
        <v-img
            class="img-profile"
            dark
            src="../assets/profile-rha.jpg" alt=""
        >
        </v-img>
        <p class="nome">Membro 01</p>

    </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container-somos {
        text-align: center;
    } 
    
    .inicio-imagem {
        border-radius: 40px;
        margin: 10px;
    }

    p {
        font-size: 13px;
        font-family: 'Roboto';
    }
    
    .nome {
        font-weight: bold;
    }
    
    .img-profile {
        width: 150px;
        margin-left: 90px;
        text-align: center;
        border-radius: 100px;
    }
</style>