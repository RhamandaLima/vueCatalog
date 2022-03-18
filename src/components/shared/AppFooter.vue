<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="blue-grey darken-4 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon  
          href="https://github.com/RhamandaLima/vueCatalog"
        > 
        <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Projeto elaborado para o desafio do 10ª Hackathon promovido pela Iteris.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Equipe 10</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-github',
      ],
    }),
  }
</script>