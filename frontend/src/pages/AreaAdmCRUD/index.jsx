import React from 'react';

//Components
import {SidebarAdm} from '../../components/Sidebar';
import Title from '../../components/Title';


const AreaAdmCRUD = () => {

    const verifica = localStorage.getItem('@frontend/nivel_acesso');


    if(verifica==1){
        return (
            <div className="container-fluid">

                    <Title title='Adm - Gerenciamento' />            

                <div className="row" >
                    <div className="col-12 col-sm-3 d-flex justify-content-center">
                        <SidebarAdm /> 
                    </div>  
                    
                    <div className="col-12 col-sm-6">
                        Área de Gerenciamento dos moradores
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


export default AreaAdmCRUD;

