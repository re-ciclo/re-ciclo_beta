import React from 'react';

// Libraries
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, 
FaWhatsappSquare, FaYoutube} from 'react-icons/fa';


//styles
import './Footer.css';

const Footer = () => {

    return (
        <>

            <footer className="bg-light text-center text-lg-start">

                <div className="container p-4">

                    <div className="row">

                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">                            

                            <p>
                                <h5>Redes Sociais</h5>

                            <div className="d-flex justify-content-center">
                                <div className="icons">                                    
                                    <a href="#" className="img-icons"><FaLinkedin size="1.8x"/></a>
                                </div>
                                <div className="icons">                                    
                                    <a href="#" className="img-icons"><FaFacebookSquare size="1.8x"/></a>
                                </div> 
                                <div className="icons">                                  
                                    <a href="#" className="img-icons"><FaInstagramSquare size="1.8x"/></a>
                                </div> 
                                <div className="icons">                                    
                                    <a href="#" className="img-icons"><FaWhatsappSquare size="1.8x"/></a>
                                </div> 
                                <div className="icons">                                    
                                    <a href="#" className="img-icons"><FaYoutube size="1.8x"/></a>
                                </div> 
                            </div>                            
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5>Sobre a Re-ciclo</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="/areciclo" className="text-dark">A Reciclo</a>
                                </li>
                                <li>
                                    <a href="/areciclo" className="text-dark">Nossa História</a>
                                </li>
                                <li>
                                    <a href="/projeto" className="text-dark">Projeto</a>
                                </li>                               
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5>Contato</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="/contato" className="text-dark">Fale Conosco</a>
                                </li>
                                <li>
                                    <a href="#" className="text-dark">Seja um Parceiro</a>
                                </li>                               
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="text-center p-3 copy" >
                    © Copyright @2021 Re-ciclo
                </div>
            </footer>

        </>
    );
}


export default Footer;