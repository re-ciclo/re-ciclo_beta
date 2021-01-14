import React from 'react';
import imagem1 from './img/img-1.jpg';
import imagem2 from './img/img-2.jpg';
import imagem3 from './img/img-3.jpg';
import imagem4 from './img/img-4.png';
import imagem5 from './img/img-5.png';
import imagem6 from './img/img-6.png';
import { Carousel, Cont, Image } from 'react-bootstrap';



import './projeto.css';
// Libraries

//Components

const Projeto = () => {

    return (
        <div className="container-fluid bg-light">
            <div className="row my-2">
                <h1 className="ml-2"></h1>
            </div>
            <div className="row my-4">
                <div className="col-12 col-sm-6 bg-light">

                    <h1>COMUNIDADE MARACANÃ </h1>

                    <p> A comunidade Maracanã, fica localizada na região Sul de São Paulo.
                Rodeada de prédios populares.</p>

                
                


                </div>
                <div className="col-12 col-sm-4  bg-light">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imagem1} class="img-fluid"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imagem2} class="img-fluid"
                                alt="Third slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imagem3} class="img-fluid"
                                alt="Third slide"

                            />

                        </Carousel.Item>
                    </Carousel>




                </div>
            </div>
            <div className="row my-4">
                <div className="col-12 col-sm-6 bg-light">

                    <Image src={imagem4} roundedCircle />



                </div>




                <div className="col-12 col-sm-6 bg-light">
                    <p> Nosso objetivo, é reverter materias reciclados
                    em beneficios para as comunidades.</p>

                </div>
            </div>
            <div className="row my-4">
                <div className="col-12 col-sm-6  bg-light">

                <p> Assim, com recursos convertidos pela a ação da reciclagem,
                     todos serão beneficiados</p>
                </div>
                

                <div className="col-12 col-sm-4 bg-success">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imagem5} class="img-fluid"
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={imagem6} class="img-fluid"
                                alt="Third slide"
                            />



                        </Carousel.Item>
                    </Carousel>




                </div>
            </div>

            <div className="row my-4">
                <div className="col-12 col-sm-6 bg-success">Carrosell</div>
                <div className="col-12 col-sm-6 bg-primary">Texto</div>
                
            </div>
        </div>
    );
}


export default Projeto;