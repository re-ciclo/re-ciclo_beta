import React from 'react';
// Libraries

//Components

const AreaUsuarioResultados = () =>{

    return(
        <div className="container-fluid bg-light">
            <div className="row my-2">
                <div className="col-2 bg-secondary">



                    <ul class="list-group">
                        <li  class="list-group-item list-group-item-action" aria-current="true"><a href="areausuario">Área Principal</a></li>
                        <li  class="list-group-item list-group-item-action active"><a href="areausuarioresultados">Painel de Consulta</a></li>
                        <li  class="list-group-item list-group-item-action"><a href="dadosusuario">Meus Dados</a></li>
                    </ul>
                </div> 
                <div className="col-10">
                    <div className="row my-2 d-flex justify-content-center">
                        <h2 className="ml-2">Usuário - Painel de Resultados</h2>
                    </div>
                    <div className="row my-4">
                        <div className="col-12 col-sm-8 bg-primary">Formulário</div>
                        <div className="col-12 col-sm-4 bg-success">Imagem</div>
                    </div>
                </div>
            </div>
         </div>
    );
}


export default AreaUsuarioResultados;