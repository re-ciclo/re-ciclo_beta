import React from 'react';
// Libraries

//Components
import Title from '../../components/Title';

//styles and images
import './AReciclo.css';
import Img01 from './img/img-01.png';
import Img02 from './img/img-02.jpg';
import Img03 from './img/img-03.jpg';
import Img04 from './img/img-04.jpg';


const AReciclo = () =>{

    return(

        
        <div className="container-fluid">         
            
            <div className="row">
                <Title title='Nossa História' />

                <div className="col-12 col-sm-7 my-3 mx-5">                                      
                    <p className="mx-4 txt-areciclo">
                        A Re-ciclo surgiu em 2020 como projeto acadêmico da instituição Recode Pro e idealizado pela Squad 07.
                        Nosso objetivo é trazer uma solução em prol do Desenvolvimento Sustentável visando um dos objetivos da ONU: Consumo e Produção Responsáveis. 
                    </p>            
                </div>

                <div className="col-12 col-sm-3 d-flex justify-content-center my-3">                                      
                    <img src={Img01} alt="imagem 0DS12 ONU" className="img-areciclo mx-5"/>                     
                </div>
            </div>


            <div className="row">
                <Title title='Nossa Missão' />

                <div className="col-12 col-sm-3 d-flex justify-content-center my-3">                                      
                    <img src={Img02} alt="imagem de folhas e braços" className="img-areciclo mx-5"/>                     
                </div>

                <div className="col-12 col-sm-7 my-3 mx-5">                                      
                    <p className="mx-4 txt-areciclo">
                    Criamos uma aplicação que vai conectar pessoas que residem em moradias populares a pontos de coleta. 
                        Além de levarmos informações sobre reciclagem as pessoas terão acesso a páginas personalizadas para realizar uma boa gestão de recicláveis.
                        Através de parceiros será disponibilizada toda a infraestrutura necessária para a implementação do projeto 
                        (armazenagem, coleta, controle da quantidade/peso, gestão dos materiais e valores).
                    </p>                       
                </div>
            </div>


            <div className="row">
                <Title title='Nossos Valores' />

                <div className="col-12 col-sm-7 my-3 mx-5">                                      
                    <p className="mx-4 txt-areciclo">
                        A Re-ciclo compreende a importância do equilíbio ambiental que nosso planeta necessita e tem como compromisso levar essa responsabilidade a pessoas 
                        que não dispõe de condições para aderir à reciclagem de lixo em seu dia a dia. Através de informações, estrutura e conscientização acreditamos que a 
                        reciclagem pode levar mais qualidade de vida para pessoas de baixa renda.
                    </p>                       
                </div>

                <div className="col-12 col-sm-3 d-flex justify-content-center my-3">                                      
                    <img src={Img03} alt="imagem de lixo e folha" className="img-areciclo mx-5"/>                     
                </div>
            </div>


            <div className="row">
                <Title title='Nossa Visão' />

                <div className="col-12 col-sm-3 d-flex justify-content-center my-3">                                      
                    <img src={Img04} alt="imagem de casinha e árvore de madeira" className="img-areciclo mx-5"/>                     
                </div> 

                <div className="col-12 col-sm-7 my-3 mx-5">                                      
                    <p className="mx-4 txt-areciclo">
                    O projeto tem como finalidade reverter os valores que são gerados através da venda do lixo reciclável para ser utilizados como benefício de todos moradores.
                        Cada material será avaliado, seus valores serão acumulados e administrados pelo parceiro e revertido em forma de manutenção para o condomínio (pintura, encanamento, reforma da área de lazer, jardinagem).
                    </p>                       
                </div>               
            </div>   

        </div>
    );
}


export default AReciclo;