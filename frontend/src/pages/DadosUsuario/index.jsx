import React from 'react';

//Components
import {Sidebar} from '../../components/Sidebar';
import Title from '../../components/Title';


const DadosUsuario = () =>{

    const verifica = localStorage.getItem('@frontend/nivel_acesso');


    if(verifica==0){

        return(
            <div className="container-fluid">

                    <Title title='Dados do Usuário' />            

                <div className="row" >
                    <div className="col-12 col-sm-3 d-flex justify-content-center">
                        <Sidebar /> 
                    </div>  
                    
                    <div className="col-12 col-sm-6">
                        Dados do usuario
                    </div>
                    <div className="col-12 col-sm-3">
                        Imagem
                    </div>  
                </div>
            </div>
        );
    }else{
        return(
            <>
                <div onLoad={ window.location.href = "http://localhost:3000/"}>
                    
                </div>
            </>
        );
    }
}


export default DadosUsuario;