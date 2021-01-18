import React from 'react';

// Libraries
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Title from '../Title';

//Images - Carrossel
import Imagem01 from './img/img-1.jpeg';
import Imagem02 from './img/img-3.png';
import Imagem03 from './img/img-2.png';
import Imagem04 from './img/img-4.png';
import {Carousel} from 'react-bootstrap';

// Images - Supporters
import Recode from './img/recode.jpg';
import Itau from './img/itau.jpg';
import Akatu from './img/akatu.png';
import Maeda from './img/maeda.png';

// Styles
import './Carroussel.css';      



 export const Carroussel = () => {
 

    return (
        
          <>
            <Carousel>

              <Carousel.Item>
                <img
                  className="img-carroussel d-block w-75 mx-auto col-md-6"
                  src= {Imagem01} class="img-fluid "
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="font-carousel">Destinação inadequada de lixo cresce 16% em uma década segundo a Abrelpe.</h3>
                  <p className="font-carousel">https://abrelpe.org.br/noticias/</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="img-carroussel d-block w-75 mx-auto col-md-6"
                  src={Imagem02} class="img-fluid"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 className="font-carousel">Onde muitos vêem lixo, nós enxergamos uma oportunidade de melhorar a qualidade de vida.</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="img-carroussel d-block w-75 mx-auto col-md-6"
                  src={Imagem03} class="img-fluid"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 className="font-carousel">Depositando o seu lixo nas lixeiras correspondentes você também fará parte dessa corrente do bem!</h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="img-carroussel d-block w-75 mx-auto col-md-6"
                  src={Imagem04}class="img-fluid"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3 className="font-carousel">Reduza. Recicle. Reuse. O futuro do nosso planeta está em suas mãos.</h3>                  
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </>
    );
}


export const CarrousselSupporters = () => {

  return (

    <>
      <section>

        <Title title="Apoiadores" />
           
          <div className="d-flex justify-content-around align-items-center my-5">   

            <div>
              <img src={Recode} 
                className="img-big" alt="logomarca Recode"/>            
            </div>

            <div>
              <img src={Itau} 
                className="img-small" alt="logomarca Itau"/>            
            </div>

            <div>
              <img src={Akatu} 
                className="img-big" alt="logomarca Akatu"/>            
            </div>

            <div>
              <img src={Maeda} 
                className="img-big" alt="logomarca Maeda"/>
            </div>

          </div>
      </section>

    </>

   
  );
}


