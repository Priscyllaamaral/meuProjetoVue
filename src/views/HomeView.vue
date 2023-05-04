<script setup>
import AdicionarSelec from '../components/AdicionarSelec.vue';
import HelloWorld from '../components/HelloWorld.vue';
import TheWelcome from '../components/TheWelcome.vue';

  

</script>

<script>

export default{

    mounted() {
        this.getOpcoes();
    }, 
    
    data() {
        return {
            nome: "Sobremesas",
            palavra: "",
            atualiza: false,
            obj: [],
            objeto: JSON.stringify(this.obj),
            opcoes: [],
            ingredientes :[]
            
        };
    },
    created() {
        this.obj = localStorage.info == null ? [] : JSON.parse(localStorage.info);
    },
    methods: {

        async getOpcoes() {
            await fetch("http://localhost:3000/tipo")
                .then(resp => resp.json())
                .then(data => this.opcoes = data);
        },
        
        inserir(x) {
            this.obj.push({ novo: x });
            this.$router.push({ name: "about", state: this.objeto });
        },
        printar() {
            this.obj.forEach(element => {
                console.log(element.novo);
                this.objeto = JSON.stringify(this.obj);
            });
        }
    },
    components: { HelloWorld, AdicionarSelec }
}

</script>



<template>

  <HelloWorld msg="Sobremesas"></HelloWorld>
  

  
<form>
  <div class="container primeira">
      <div class="row">
        <div class="col-12">
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="inputName" class="col-form-label labelForma">Seu Nome</label>
            </div>
            <div class="col-auto">
              <input type="text" id="inputName" class="form-control cor">
            </div>
          </div>
       </div>

        <div class="row">
          <div class="col-12">
            <div class="row g-3 align-items-center">
              <div class="col-auto">
                <label for="inputSobremesa" class="col-form-label labelForma">Nome sobremesa</label>
              </div>
              <div class="col-auto">
                <input type="text" v-model="palavra" id="inputSobremesa" class="form-control cor">
              </div>
              
            </div>   
         </div>
      </div>
      
          <AdicionarSelec :dados="opcoes.opcao"></AdicionarSelec>

        

 
          
            
              <div  class="checkbox">
         
            
                <div v-for="op in opcoes.ingredientes" :key="op.id" class="form-check " >
                  <input class="form-check-input" type="checkbox">
                  <label class="form-check-label espaco " for="flexCheckDefault">
                    {{ op.tipo }}
                  </label>
                </div>
            
         
            
            
           
      
      </div>


    </div>

    <button type="submity" class="btn btn-primary">Salvar</button>
  </div>

  


</form>
  <br>
              
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
          
             
              
          
</template>

<style scoped>

.primeira{
  text-align: center;
}
input{
  background-color: #d8bfd8;
  border-color: black;
}

.labelForma{
  background-color: #b0e0e6;
  border-radius: 10px;
  padding-right: 6px;
  padding-left: 6px;
  border-width: 2px;
  border-style: groove;
  border-color: black;
}

button{
  border-width: 2px;
  border-style: groove;
  border-color: black;
}

.checkbox {
    display: flex;
    width: 50%;
    flex-direction: row;
    flex-wrap: wrap;
   
  }
  

  .espaco{
    width: 140px; 
    margin-right: 50px;

  }
</style>
