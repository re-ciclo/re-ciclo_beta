import React from 'react';

// Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
/* import {Carousel} from 'react-bootstrap'; */

import Title from '../Title';

import './Carroussel.css';

//images
import Recode from './img/recode.jpg';
import Itau from './img/itau.jpg';
import Akatu from './img/akatu.png';
import Maeda from './img/maeda.png';

/* import Imagem01 from './img/img-1.png';
import Imagem02 from './img/img-2.png';
import Imagem03 from './img/img-3.png';
import Imagem04 from './img/img-4.png';




export const Carroussel = () => {

  return (
      
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto  col-md-4 col-md-offset-3"
            src= {Imagem01} 
            alt="First slide"/>
          <Carousel.Caption>
            <h4>O Brasil é o 4º país que mais produz lixo <br/> no mundo segundo a WWF</h4>
            <h6>https://agenciabrasil.ebc.com.br/internacional/noticia/2019-03/brasil-e-o-4o-pais-que-mais-produz-lixo-no-mundo-diz-wwf</h6>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto  col-md-4 col-md-offset-3"
            src={Imagem02}
            alt="Third slide"/>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto  col-md-4 col-md-offset-3"
            src={Imagem03}
            alt="Third slide"/>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 mx-auto  col-md-4 col-md-offset-3"
            src={Imagem04}
            alt="Third slide"/>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>
    </>
  );
} */

export const CarrousselSupporters = () => {

  return (

    <>
      <section>

        <Title title="Apoiadores" />
           
          <div className="d-flex justify-content-around align-items-center my-5">   

            <div>
              <img src={Recode} 
                className="image-supporters" alt="logomarca Recode"/>            
            </div>

            <div>
              <img src={Itau} 
                className="image-supporters-small" alt="logomarca Itau"/>            
            </div>

            <div>
              <img src={Akatu} 
                className="image-supporters" alt="logomarca Recode"/>            
            </div>

            <div>
              <img src={Maeda} 
                className="image-supporters" alt="logomarca Recode"/>
            </div>

          </div>
      </section>

    </>
  );
}