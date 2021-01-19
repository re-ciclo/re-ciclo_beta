import React from 'react';

//Components
import {Sidebar} from '../../components/Sidebar';
import Title from '../../components/Title';
import { CardsAmbiente } from '../../components/Card';

const DadosUsuario = () =>{

    const verifica = localStorage.getItem('@frontend/nivel_acesso');

    const nome = localStorage.getItem('@frontend/nome');
    const email = localStorage.getItem('@frontend/email');
    const telefone = localStorage.getItem('@frontend/telefone');


    const cep = localStorage.getItem('@frontend/cep');
    const numero = localStorage.getItem('@frontend/numero');
    const logradouro = localStorage.getItem('@frontend/logradouro');
    const complemento = localStorage.getItem('@frontend/complemento');



    if(verifica==0){

        return(
            <div className="container-fluid">

                    <Title title='Dados do Usuário' />            

                <div className="row" >
                    <div className="col-12 col-sm-2 d-flex justify-content-center">
                        <div className="ml-2 w-100">
                            <Sidebar/>
                        </div>
                    </div>  
                    
                    <div className="col-12 col-sm-7">
                        <CardsAmbiente
                            nome={nome}
                            email={email}
                            telefone={telefone}
                            cep={cep}
                            numero={numero}
                            logradouro={logradouro}
                            complemento={complemento}
                            />
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