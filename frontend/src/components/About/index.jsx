import React from 'react';

//Components
import Title from '../Title';

//styles and images
import './About.css';
import ImgAbout from './img/about.svg';


const About = () => {

    return (
  
      <>
        <section>
  
          <Title title="O que faz a Re-ciclo" />             
          
            <div className="row justify-content-center">

              <div className="col-10 col-sm-5 mx-auto p-5">
                    <p className="txt-areciclo">
                      Somos um grupo que trabalha pela conscientização e mobilização da sociedade para o descarte correto do próprio lixo, 
                      conscientizando a importância de adotar estilos sustentáveis de vida.
                    </p>
                    <p className="txt-areciclo">
                      Além disso, temos um diferencial de proporcionar melhorias em moradias populares através do lixo reciclado. 
                      Você já pensou em ter um estilo de vida mais sustentável? Se cadastre e venha também fazer parte dessa mudança!
                    </p>
              </div>

              <div className="col-10 col-sm-5 m-auto align-middle">
                    <img className="img-about" src={ImgAbout} alt="Imagem de itens para reciclar"/>
              </div>

            </div>
          
        </section>
    </>
  );
}

export default About;