import React from 'react';


//Components
import {SidebarAdm} from '../../components/Sidebar';
import Title from '../../components/Title';

import Magazine from '../../components/Magazine';




const AreaAdm = () => {


    const verifica = localStorage.getItem('@frontend/nivel_acesso');

    const nome = localStorage.getItem('@frontend/nome');



    if(verifica==1){
    
            return (
                <div className="container-fluid" >

                        <Title title='Área do Administrador' />            

                   
                    <div className="row" >
                        <div className="col-12 col-sm-2 d-flex justify-content-center"> 
                            <div className="ml-2 w-100">
                                <SidebarAdm />
                            </div>
                        </div>  
                        
                        <div className="col-12 col-sm-10" >
                            <Magazine nome={nome}/>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                            <br/><br/><br/><br/><br/><br/><br/><br/>
                            
                            {/* <JumbotronAmbiente jumboNome={nome}/> */}
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

export default AreaAdm;