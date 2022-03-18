<template>
 <v-container>
        <h2 class="text-center ma-4">CONFIRMAÇÃO DE CADASTRO</h2>
        <v-img 
            class="inicio-imagem mb-3"
            src="../assets/confirm.png"
            >
        </v-img>
        <p>Cadastro solicitado com sucesso!</p>
        <p>Acesse o e-mail cadastrado para confirmar sua inscrição.</p>
    </v-container>
</template>

<script>
export default {
  name: 'ValidacaoCadastro',
}
</script>

<style scoped>
  p {
    text-align: center;
    margin-bottom: 0;
  }
</style>