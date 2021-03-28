<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/Joaovictortps22/Atend_Psicologia_Front"
        target="_blank"
        text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <PaginaInicial/>
    <body style="color: black;">
      <div id="OlaMundo">Olá mundo</div>
      <div>
      <img src="@/assets/atendimentoImg.jpg" alt="ImgPrincipal" width=500 height=500 id="ImgPrincial">
      <h1 id="TextoInit">
        Você precisa conversar?
      </h1>
      <v-btn x-large @click="newAppointment" id="BtnAgendarAtendimento" style="margin-top: -600px; margin-left: 600px;">
        Agendar atendimento
      </v-btn>
      </div>
    </body>
    </v-main>
  </v-app>
</template>

<style>
  @media only screen and (max-width: 601px) {
   #OlaMundo{
    color: red;
  },
  #TextoInit{
    margin-left: 500px;
    color: red;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import PaginaInicial from './components/PaginaInicial.vue';
import PaginaInicial from './components/HeloWord.vue';

export default Vue.extend({
  name: 'App',

  components: {
    PaginaInicial,
  },

  data: () => ({
    //
  }),
});
</script>
