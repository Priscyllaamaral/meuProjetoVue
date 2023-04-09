
/**  Comentário para fazer commit */


<script>


export default{

  props:{
      dados: Object
  }


}


</script>
    
    
<template>

    <div class="container primeira">
      <div class="row">
        <div class="col-12">
          <div class="row g-3 align-items-center">
            <div class="col-auto">
                <label class="labelForma" for="inputTipo">Tipo</label>
            </div>
            <div class="col-auto" >
                <select class="form-select cor" aria-label="Default select example">
                    <option v-for="op in dados" :key="op.id" value="{{ op.id }}">{{op.tipo}}</option>
                  
             </select>
            </div>
          </div>
       </div>
      </div>
    </div>


            




</template>

<style>

.cor{
    border-width: 2px;
    border-style: groove;
    border-color: black;
    background-color: #d8bfd8;
}

.labelForma{
  background-color: #b0e0e6;
  border-radius: 10px;
  padding-top: 3px;
  padding-bottom: 5px;
  padding-right: 6px;
  padding-left: 6px;
  border-width: 2px;
  border-style: groove;
  border-color: black;
}




</style>