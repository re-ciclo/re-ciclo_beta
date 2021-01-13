import React from 'react';

// Libraries
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, 
FaWhatsappSquare, FaYoutube} from 'react-icons/fa'; 

//styles
import './Footer.css';

const Footer = () => {

    return (
        <>

            <footer class="bg-light text-center text-lg-start">

                <div class="container p-4">

                    <div class="row">

                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">                            

                            <p>
                                <h5>Redes Sociais</h5>

                            <div className="d-flex justify-content-center">
                                <div className="icons">                                    
                                    <FaLinkedin />
                                </div>
                                <div className="icons">                                    
                                    <FaFacebookSquare />
                                </div> 
                                <div className="icons">                                    
                                    <FaInstagramSquare />
                                </div> 
                                <div className="icons">                                    
                                    <FaWhatsappSquare />
                                </div> 
                                <div className="icons">                                    
                                    <FaYoutube />
                                </div> 
                            </div>                            
                            </p>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5>Sobre a Re-ciclo</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="/areciclo" class="text-dark">A Reciclo</a>
                                </li>
                                <li>
                                    <a href="/areciclo" class="text-dark">Nossa História</a>
                                </li>
                                <li>
                                    <a href="/projeto" class="text-dark">Projeto</a>
                                </li>                               
                            </ul>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5>Contato</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a href="/contato" class="text-dark">Fale Conosco</a>
                                </li>
                                <li>
                                    <a href="#" class="text-dark">Seja um Parceiro</a>
                                </li>                               
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="text-center p-3" >
                    © Copyright @2021 Re-ciclo
                </div>
            </footer>

        </>
    );
}


export default Footer;