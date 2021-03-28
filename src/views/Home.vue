<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PaginaInicial from '@/components/PaginaInicial.vue'; // @ is an alias to /src

@Component({
  components: {
    PaginaInicial,
  },
})
export default class Home extends Vue {}
</script>
