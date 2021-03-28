<template>
  <v-container>
    <body>
      <v-col id="img">
          <img src="@/assets/atendimentoImg.jpg" alt="ImgPrincipal" width=500 height=500 id="ImgPrincial">
      </v-col>
      <v-col id="txt" >
          <h1 id="TextoInicial">
              Você precisa conversar?
          </h1>
          <span></span>
              
          <div>{{message}}</div>
      </v-col>
      <v-btn x-large v-on:click="handleCadastrarUser" id="BtnAgendarAtendimento" style="margin-top: -600px; margin-left: 600px;">
          Agendar atendiment
      </v-btn>
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

  data(){
    return{
      user: {
          id:'',
          nome: '',
          nomesocial: '',
          login: '',
          password:'' ,
          email: '',
          nascimento: '',
          cidade: '',
          bairro: '',
          estado: '',
          telefone:'' ,
          cpf: '',
          genero:'' ,
          sobre: '',
          role: ''
      }
    }
    
  },  
  methods: {
    handleCadastrarUser(){
      ListarUsuarioController().then(response => { 
        this.user = response
        console.log(this.user)
        })
    }
  }
});
 




</script>

function handleCadastrarUser() {
  throw new Error('Function not implemented.');
}
