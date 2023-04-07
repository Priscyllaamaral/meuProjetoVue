<script setup>

</script>

<script>
  export default{
    props:{
      msg: String

    },
    data(){
      return {
        nome:"Sobremesas"
      }
    }
  }

</script>

<template>
 
  
    <div class="container">
      <div class="row">
        <div class="col-5">
          <h3 class="cor">
            Cadastre sua sobremesa aqui!
         </h3>
        </div>    
      </div>
    </div>

          
          
          

   
</template>

<style scoped>
.meio{
  text-align: left;
}
.cor{
  background-color: yellow;
  border-radius: 10px;
  padding-left: 30px;
  border-width: 2px;
  border-style: groove;
  border-color: black;
 

}
.img{
    width: 150px;
    height: 150px;
}

</style>
