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
    </body>
    </v-main>
  </v-app>
</template>

<style>

</style>

<script lang="ts">
import Vue from 'vue';
import PaginaInicial from './components/PaginaInicial.vue';

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
