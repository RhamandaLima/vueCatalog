<template>
<v-container class="caixa mx-auto ma-3">
  <h2 class="text-center ma-4">CADASTRE-SE</h2>
    <v-form
      class="form"
      ref="form"
      v-model="valid"
      lazy-validation
    >

      <v-text-field v-model="name" label="Nome" :rules="nameRules" type="text" required > </v-text-field> 

      <v-text-field v-model="email" label="Email" :rules="emailRules" type="mail" required > </v-text-field> 

      <v-text-field v-model="password" label="Senha" :rules="passwordRules" type="password" required > </v-text-field> 

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'Você precisa concordar para continuar.']"
        label="Aceita os termos de uso?"
        required
      >
      </v-checkbox>

        <v-btn
          :disabled="!valid"
          color="deep-orange accent-4"
          
          width="120px"
          @click="cadastrar"
        >
          Cadastrar
        </v-btn>

      <v-btn
        color="teal lighten-1"
        class="mr-4"
        @click="limpar"
      >
        Limpar
      </v-btn>
    </v-form>
</v-container>

</template>

<script>
  export default {
    name: "CadastroUsuario",
    data: () => ({
      valid: true,
      name: '',
      password: '',
      email: '',
      nameRules: [
        v => !!v || 'O nome é obrigatório',
      ],
      emailRules: [
        v => !!v || 'O email é obrigatório',
      ],
      passwordRules: [
        v => !!v || 'A senha é obrigatória',
      ],
      
      checkbox: false,
    }),

    methods: {
      limpar() {
          this.name = "";
          this.password = "";
          this.email = "";
          this.checkbox = false;
        },
      cadastrar(){
        if(this.$refs.form.validate()){
            this.$router.push({ name: "ValidacaoCadastro" });
          } 
      }
    },
  }
</script>

<style scoped>
  .caixa {
    text-align: center;
    
  }
  .v-btn {
    margin-bottom: 26px;
    text-align: center;
  }
</style>