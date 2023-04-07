<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { guardar } from './script/desenvolvendo.js'
import * as este from './script/este'
import Cabecalho from './components/Cabecalho.vue'

</script>

<script>

  export default{

    data(){
      return{
        obj:"priscylla"
      }
    }
  }
  
</script>

<template>
  <header>
    <Cabecalho></Cabecalho>
  </header>
  <body>
  
    <div class="imagem">
      <RouterView></RouterView>
   </div>
  </body>

  
</template>

<style>
.imagem{
  background-image: url("../src/assets/logo12.png");
  background-repeat: no-repeat-y;
}

</style>



