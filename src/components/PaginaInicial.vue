<template>
    <v-container>
        <body>
            <v-col id="img">
                <img src="@/assets/atendimentoImg.jpg" alt="ImgPrincipal" width=500 height=500 id="ImgPrincial">
            </v-col>
            <v-col id="txt">
                <h1 id="TextoInicial">
                    Você precisa conversar?
                </h1>
                <div>{{message}}</div>
            </v-col>
              <v-btn x-large v-on:click="handleCadastrarUser" id="BtnAgendarAtendimento" style="margin-top: -600px; margin-left: 600px;">
                  Agendar atendiment
              </v-btn>
  <div>s
    <v-card
      class="d-flex justify-space-around mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card
        v-for="n in 2"
        :key="n"
        class="pa-4"
        outlined
        tile
      >
        </v-card>
      </v-card>
      </div>
    </body>
  </v-container>
</template>

<style scoped>
#TextoInicial{
    margin-top: -400px;
    margin-left: 550px;
};
#BtnAgendarAtendimento{
    margin-left: 500px;
};
#div_btn_agendar{
    float: right;
};
@media only screen and (min-width: 601px) {
   #BtnAgendarAtendimento{
    margin-top: 80px;
  }
}
</style>

<script lang="ts">
import {CadastrarUsuarioController, ListarUsuarioController} from '../controllers/Athenticate/cadastrarUsuario/cadastrarUusarioController'
import { CanalAtendimentoInterface } from '@/Interface/authenticate/authenticateInterface';
import Vue from 'vue';
export default Vue.extend({
  name: 'PaginaInicial',
  
  methods: {
    handleCadastrarUser(){
      ListarUsuarioController().then(response => { const resposta = response })
    }
  }
});
 




</script>

function handleCadastrarUser() {
  throw new Error('Function not implemented.');
}
