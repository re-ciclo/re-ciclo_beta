import React from 'react';
import imagem1 from './img/1.png';
import imagem2 from './img/2.png';
import imagem3 from './img/3.png';
import imagem4 from './img/4.png';
import imagem5 from './img/5.png';
import imagem6 from './img/6.png';
import { Carousel, Cont, Image } from 'react-bootstrap';




import './projeto.css';
// Libraries

//Components

const Projeto = () => {

    return (
        <div className="container-fluid bg-white">
            <div className="row my-2">
                <h1 className="ml-2"></h1>
            </div>
            <div className="row my-4">
                <div className="col-12 col-sm-6 bg-white text-center">

               <h2> Maracanã</h2>
               <br>
               </br>

                    <p class="text-sm-center"> A comunidade Maracanã, fica localizada 
                    na região Sul de São Paulo.Essa comunidade sofria por não possuirem
                    uma moradia digna e confortável.Hoje essa realizade mudou, esses moradores vivem
                    em prédios populares, mas infelizmente sem uma infraestrura apropriada.
                </p>

                
                


                </div>
                <div className="col-12 col-sm-6 bg-white ">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-50"
                                src={imagem1} class="img-responsive"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50"
                                src={imagem2} class="img-responsive"
                                alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50"
                                src={imagem3} class="img-responsive"
                                alt="Third slide"

                            />

                        </Carousel.Item>
                    </Carousel>




                </div>
            </div>
            <div className="row my-4">
                <div className="col mx-auto text-center  bg-white">
                    

                    <div className="d-block w-100">
                    
                    <img src={imagem6} class="img-responsive" />

                </div>

                    



                </div>




                <div className="col-12 col-sm-6  bg-white">
                    <h2> Nosso Objetivo</h2>
                    <br>
                    </br>
                    <p class="text-sm-center">Reverter materias reciclados
                    em benefícios para as comunidades.Conscientizando assim, 
                    a importância de adotar estilos sustentáveis de vida.</p>
               
                   

                </div>
            </div>
            <div className="row my-4">
                <div className="col-12 col-sm-6">
                    <h2> Resultados</h2>
                    <br>
                    </br>
                
                    <p class="text-sm-center">Com recursos convertidos pela a ação da reciclagem,
                     todos serão beneficiados</p>
                </div>
                

                <div className="col-12 col-sm-6 bg-white">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-50"
                                src={imagem5} class="img-responsive"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-50"
                                src={imagem4} class="img-responsive"
                                alt="Third slide"
                            />



                        </Carousel.Item>
                    </Carousel>




                </div>
            </div>

            
                </div>
                
        
    );
}


export default Projeto;