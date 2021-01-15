import React from 'react';

//Components
import {Sidebar} from '../../components/Sidebar';
import Title from '../../components/Title';


const AreaUsuarioResultados = () =>{

    return(
        <div className="container-fluid">

                <Title title='Área do Usuário' />            

            <div className="row" >
                <div className="col-12 col-sm-3 d-flex justify-content-center">
                    <Sidebar /> 
                </div>  
                
                <div className="col-12 col-sm-6">
                    Area Resultados
                </div>
                <div className="col-12 col-sm-3">
                    Imagem
                </div>  
            </div>
        </div>
    );
}


export default AreaUsuarioResultados;