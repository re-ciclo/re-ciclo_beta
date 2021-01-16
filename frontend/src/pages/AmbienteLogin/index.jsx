import React from 'react';

// Libraries

//Components
import Title from '../../components/Title';
import {FormLogin} from '../../components/Form';


//styles




 const AmbienteLogin = () => {

    


    const verifica = localStorage.getItem('@frontend/nivel_acesso');


    if(verifica == 1){
        return(
            <>
                <div onLoad={ window.location.href = "http://localhost:3000/areaadm"}>
                    
                </div>
            </>
        );
    }else if(verifica == 0){
        return(
            <>
                <div onLoad={ window.location.href = "http://localhost:3000/areausuario"}>
                    
                </div>
            </>
        );
    }else{
         return(
            <>
                <div className="container-fluid">
                
                    <div className="row">
                        <Title title="Realize seu Login para acessar o Ambiente" />
                    </div>

                    <div className="row mx-5">

                        <div className="col-12 col-sm-9 bg-form" >
                            <FormLogin/>
                        </div>

                        <div className="col-12 col-sm-3 m-auto" >
                            <img className="w-75" src="https://cuc.mponline.gov.in/Portal/Services/CU/newcss/images/loginbg.png" alt="Imagem de Login"/>
                        </div>
                    </div>
                </div>
            
            </>

        );

    }
       
   
}


export default AmbienteLogin;