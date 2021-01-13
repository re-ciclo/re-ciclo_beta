import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagem01 from './img/img-1.png';
import Imagem02 from './img/img-3.png';
import Imagem03 from './img/img-2.png';
import Imagem04 from './img/img-4.png';
import {Carousel} from 'react-bootstrap';
import './style.css'



// Libraries

//Components

const Carroussel = () => {

    return (
        
<>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-75 mx-auto  col-md-6"
      src= {Imagem01} class="img-fluid "
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>O Brasil é o 4º país que mais produz lixo <br/> no mundo segundo a WWF</h3>
      <h6>https://agenciabrasil.ebc.com.br/internacional/noticia/2019-03/brasil-e-o-4o-pais-que-mais-produz-lixo-no-mundo-diz-wwf</h6>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-75 mx-auto  col-md-6"
      src={Imagem02} class="img-fluid"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Onde muitos vêem lixo, nós enxergamos uma oportunidade de melhorar a qualidade de vida</h3>
      <p> Precisamos reciclar para nunca faltar.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-75 mx-auto  col-md-6"
      src={Imagem03} class="img-fluid"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Depositando o seu lixo nas lixeiras correspondentes você também fará parte dessa corrente do bem!</h3>
     
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-75 mx-auto  col-md-6"
      src={Imagem04}class="img-fluid"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Reduza. Recicle. Reuse. O futuro do nosso planeta está em suas mãos.</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  
  


  


</Carousel>
</>
    );
}
    

export default Carroussel;