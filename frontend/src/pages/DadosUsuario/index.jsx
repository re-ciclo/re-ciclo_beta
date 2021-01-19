import React from 'react';

//Components
import {Sidebar} from '../../components/Sidebar';
import Title from '../../components/Title';


const DadosUsuario = () =>{

    const verifica = localStorage.getItem('@frontend/nivel_acesso');


    if(verifica==0){

        return(
            <div className="container-fluid">  

                <div className="row">
                    <div className="col-12 col-sm-4 mx-auto mt-3 d-flex justify-content-center btn-user">                    

                        <button type="button" className="btn btn-lg font-user">
                            Meus Dados
                        </button>
                    </div>
                </div>                           

                <div className="row" > 
                    <div className="col-12 col-sm-3 d-flex justify-content-center"> 
                            <Sidebar/>                            
                    </div>
                    <div className="col-12 col-sm-6 pt-1">
                        
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