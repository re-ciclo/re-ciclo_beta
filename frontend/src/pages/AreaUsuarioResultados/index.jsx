import React, { useState } from 'react';

//Libraries 
import { Chart } from "react-google-charts";

//Components
import {Sidebar} from '../../components/Sidebar';


function AreaUsuarioResultados() {

    const [options, setOptions] = useState({
      /* title: 'Gráfico de Pizza' */
    });       
    
    const [data, setData] = useState([
      ['Materiais', 'QtdVezesReciclado'],
      ['Papel', 80],
      ['Vidro', 160],
      ['Alumínio', 350],
    ]);    


    return (
        <div className="container-fluid">  

                <div className="row">
                    <div className="col-12 col-sm-4 mx-auto mt-3 d-flex justify-content-center btn-user">                    

                        <button type="button" className="btn btn-lg font-user">
                            Resultados
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
  }
  
  export default AreaUsuarioResultados;



/* const AreaUsuarioResultados = () =>{
    const verifica = localStorage.getItem('@frontend/nivel_acesso');


    if(verifica==0){
        return(
            <div className="container-fluid">

                    <Title title='Área do Usuário' />            

                <div className="row" >
                    <div className="col-12 col-sm-2 d-flex justify-content-center">
                        <Sidebar /> 
                    </div>  
                    
                    <div className="col-12 col-sm-7">
                        Area Resultados
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


export default AreaUsuarioResultados; */