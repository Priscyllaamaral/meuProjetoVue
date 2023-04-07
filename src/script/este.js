




export function guardar () {

    let dados = localStorage.info == null ? [] : JSON.parse(localStorage.info);
 
    let nomePessoa = $("#txtPessoa").val();
    let nomeSobremesa = $("#txtSobremesa").val();
    let tipo = $("#txtTipo").val();

   
  
  
    let id = gerarId();


    dados.push({
        'id' : id,
        'nomePessoa' : nomePessoa,
        'nomeSobremesa' : nomeSobremesa,
        'tipo' : tipo,
    });

    localStorage.info = JSON.stringify(dados);

    listar();

    alert("Sobremesa guardada!");
}

export function editar(doce) {

   

    let dados = localStorage.info==null?[]:JSON.parse(localStorage.info);

    let nomePessoa = $("#txtPessoa");
    let nomeSobremesa = $("#txtSobremesa");
    let tipo = $("#txtTipo");
    let id = $("#txtId");

    let btnGuardar = $("#btnGuardar");
    let btnModificar = $("#btnModificar");


    
    let resultado = dados.find(e => String(e.id) == doce);



    if(resultado != undefined){

        btnGuardar.hide();
        btnModificar.show();

        
        
        nomePessoa.val(resultado.nomePessoa);
        nomeSobremesa.val(resultado.nomeSobremesa);
        tipo.val(resultado.tipo);
        id.val(resultado.id);

    
       
    


    }else{
        alert("Não Encontrado");
    }

}

export function listar() {


    let dados = localStorage.info == null ? [] : JSON.parse(localStorage.info);

    


    let tabela = $("#tblDados");
    tabela.html("");
    dados.forEach(element => {

  
        tabela.append(`
            <tr>
                <td>${element.nomePessoa}</td>
                <td>${element.nomeSobremesa}</td>
                <td>${element.tipo}</td>
                
                <td>
                    <button class="btn btn-primary" onclick="editar('${element.id}')">Editar</button>
                    <button class="btn btn-danger" onclick="eliminar('${element.id}')">Eliminar</button>
                </td>    
            </tr>
        `);

    });


}




let modificar = () => {

    let dados = localStorage.info==null?[]:JSON.parse(localStorage.info);

    let nomePessoa = $("#txtPessoa").val();
    let nomeSobremesa = $("#txtSobremesa").val();
    let tipo = $("#txtTipo").val();
    let id = $("#txtId").val();

    let btnGuardar = $("#btnGuardar");
    let btnModificar = $("#btnModificar");


    let resultado = dados.find(e => String(e.id) == String(id));

   

    resultado.nomePessoa= nomePessoa;
    resultado.nomeSobremesa = nomeSobremesa;
    resultado.tipo = tipo;
 

    btnGuardar.show();
    btnModificar.hide();

    localStorage.info = JSON.stringify(dados);

    listar();

    alert("Foi modificado!");
}


export function eliminar(id) {

    if (window.confirm("realmente excluir?")){
        let dados = localStorage.info==null?[]:JSON.parse(localStorage.info);

        let resultadoIndex = dados.findIndex(e => String(e.id) == id);

        if(resultadoIndex != -1){

            dados.splice(resultadoIndex, 1);

            localStorage.info = JSON.stringify(dados);

            listar();
        }else{
            alert("Não foi encontrado!");
        }
            }



}

export function limpar () {

    

    let dados = localStorage.info == null ? [] : JSON.parse(localStorage.info);

    if(dados != null && window.confirm("Deseja excluir todos os dados da tabela?")){


        

        localStorage.clear();
        
        

        listar();

    }
}

let gerarId = () =>{
    return Math.floor(Date.now() * Math.random()).toString(36);

}


