<script >
  export default{ 
    mounted() {
        this.getOpcoes();
    }, 
    created(){
      this.anime = ""
    },
      data(){
        return{
          anime : "",
          opcoes: []
        }
      },
      methods:{
        async getOpcoes() {
            await fetch("http://localhost:3000/tipo")
                .then(resp => resp.json())
                .then(opcao => this.opcoes = opcao);
        },
        mostrar(){
          console.log(this.anime)
          this.anime = ""
        }
      }
  }

</script>



<template>
  <p>{{ opcoes }}</p>
  <div class="about">
    <button @click="mostrar()">clicar</button>
  </div>
</template>


