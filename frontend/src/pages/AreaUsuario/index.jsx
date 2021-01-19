import React from 'react';

//Components
import Title from '../../components/Title';
import {Sidebar} from '../../components/Sidebar';
import { JumbotronAmbiente } from '../../components/Jumbotron';

//styles
import './AreaUsuario.css';

const AreaUsuario = () => {

    const verifica = localStorage.getItem('@frontend/nivel_acesso');

    const nome = localStorage.getItem('@frontend/nome');

    if(verifica==0){

        return (
            <div className="container-fluid">  

                <div className="row">
                    <div className="col-12 col-sm-4 mx-auto mt-3 d-flex justify-content-center btn-user">                    

                        <button type="button" className="btn btn-lg font-user">
                            Bem vindo(a) {nome} !
                        </button>
                    </div>
                </div>                           

                <div className="row" > 
                    <div className="col-12 col-sm-3 d-flex justify-content-center"> 
                            <Sidebar/>                            
                    </div>
                    <div className="col-12 col-sm-6 pt-1">
                        <JumbotronAmbiente />
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

export default AreaUsuario;