import React from 'react';

//Components
import {SidebarAdm} from '../../components/Sidebar';
import Title from '../../components/Title';


const AreaAdmResultados = () => {

    const verifica = localStorage.getItem('@frontend/nivel_acesso');


    if(verifica==1){
        return (
            <div className="container-fluid">

                    <Title title='Administrador - Painel de Resultados' />            

                <div className="row" >
                    <div className="col-12 col-sm-3 d-flex justify-content-center">
                        <SidebarAdm /> 
                    </div>  
                    
                    <div className="col-12 col-sm-6">
                        Area do Adm - Resultados
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


export default AreaAdmResultados;



