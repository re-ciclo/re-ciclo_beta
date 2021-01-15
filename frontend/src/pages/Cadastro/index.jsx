import React from 'react';

// Libraries

//Components
import Title from '../../components/Title';
import {FormRegister} from '../../components/Form';


//styles
import './Cadastro.css';

import ImgCadastro from './img/cadastro.jpg';

const Cadastro = () => {

    return(
        <>
        <div className="container-fluid">
        
            <div className="row">
                <Title title="Realize seu cadastro" />
            </div>

            <div className="row mx-5">

                <div className="col-12 col-sm-9 bg-form" >
                    <FormRegister />
                </div>

                <div className="col-12 col-sm-3 m-auto" >
                    <img src={ImgCadastro} alt="Imagem de uma chave para cadastro"/>
                </div>

            </div>
        </div>
        
        </>

    );
}


export default Cadastro;