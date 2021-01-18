import React from 'react';

//Libraries
import Title from '../../components/Title';

//Components
import {FormContact} from '../../components/Form';

//images
import Img01 from './img/parceria.jpg';

const SejaParceiro = () => {

    return (
        
        <div className="container-fluid">
            
            <div className="row">                
                    <Title title='Seja também um parceiro !' />                
            </div>

            <div className="row mx-5">
                <div className="col-12 px-2">                    
                    <p className="text-center text-contact my-4">
                        Deixe sua mensagem que retornaremos o contato o mais breve possível.
                    </p>                  
                </div>
            </div>
            
            <div className="row mx-5 d-flex justify-content-center">
                <div className="col-12 col-sm-9 bg-form">
                    <FormContact />                    
                </div>

                <div className="col-12 col-sm-3 m-auto" >
                    <img className="img-fluid" src={Img01} alt="Imagem de duas pessoas batendo as mãos"/>
                </div>
            </div>
        </div>
        
    );
}


export default SejaParceiro;