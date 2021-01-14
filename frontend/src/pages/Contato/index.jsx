import React from 'react';

//Components
import Title from '../../components/Title';
import {FormContact} from '../../components/Form';

// images
import Whatsapp from './img/whatsapp.png';
import Email from './img/email.png';

//styles
import './Contato.css'

const Contato = () => {


    return (
        <div className="container-fluid">
            
            <div className="row">
                <div className="col-12">
                    <Title title='Entre em contato conosco' /> 
                </div>
            </div>

            <div className="row mx-5 my-3">
                <div className="col-12 px-2">
                    <p className="text-center text-contact">
                        Quer receber a Re-ciclo na sua comunidade, deseja dar alguma sugestão ou ser um apoiador? 
                    </p>     
                    <p className="text-center text-contact">
                        Deixe sua mensagem que retornaremos o contato o mais breve possível.
                    </p>                  
                </div>
            </div>            
        
            <div className="row m-5">
                <div className="col-12 col-sm-6">                    
                        <div className="d-flex justify-content-center">
                            <img src={Whatsapp} alt="Whatsapp" className="mx-2"/>
                            <p className="text-contact">(11) 99999-9999</p>
                        </div>                    
                </div>

                <div className="col-12 col-sm-6">                    
                        <div className="d-flex justify-content-center">
                            <img src={Email} alt="Email" className="mx-2"  />
                            <p className="text-contact">contato@re-ciclo.com.br</p>
                        </div>                    
                </div>
            </div>

            <div className="row m-auto d-flex justify-content-center">
                <div className="col-12 col-sm-7">
                    <FormContact />                    
                </div>
            </div>

        </div>
    );
}


export default Contato;