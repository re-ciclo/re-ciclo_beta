import React from 'react';
import {Link, withRouter} from 'react-router-dom';

// Libraries
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare, 
FaWhatsappSquare, FaYoutube} from 'react-icons/fa';


//styles
import './Footer.css';

function Footer() {    

    return (
        <>
            <div className="contauner-fluid">
                <footer className="bg-light text-center text-lg-start">

                    <div className="container p-4">

                        <div className="row">

                            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">                            

                                <p>
                                    <h5 className="txt-footer">Redes Sociais</h5>

                                <div className="d-flex justify-content-center">
                                    <div className="icons">                                    
                                        <a href="#" className="img-icons"><FaLinkedin size="1.4x"/></a>
                                    </div>
                                    <div className="icons">                                    
                                        <a href="#" className="img-icons"><FaFacebookSquare size="1.4x"/></a>
                                    </div> 
                                    <div className="icons">                                  
                                        <a href="#" className="img-icons"><FaInstagramSquare size="1.4x"/></a>
                                    </div> 
                                    <div className="icons">                                    
                                        <a href="#" className="img-icons"><FaWhatsappSquare size="1.4x"/></a>
                                    </div> 
                                    <div className="icons">                                    
                                        <a href="#" className="img-icons"><FaYoutube size="1.4x"/></a>
                                    </div> 
                                </div>                            
                                </p>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="txt-footer">Sobre a Re-ciclo</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link to = "/areciclo" className="text-dark">
                                            A Reciclo
                                        </Link>                                        
                                    </li>

                                    <li>
                                        <Link to = "/areciclo" className="text-dark">
                                            Nossa História
                                        </Link>                                        
                                    </li>
                                    
                                    <li>
                                        <Link to = "/projeto" className="text-dark">
                                            Projetos
                                        </Link>                                        
                                    </li>                               
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 className="txt-footer">Contato</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <Link to = "/contato" className="text-dark">
                                            Fale Conosco
                                        </Link>                                        
                                    </li>

                                    <li>
                                        <Link to = "/sejaparceiro" className="text-dark">
                                            Seja um Parceiro
                                        </Link>
                                        <a href="#" className="text-dark"></a>
                                    </li>                               
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="text-center p-3 copy" >
                        © Copyright @2021 Re-ciclo
                    </div>
                </footer>
            </div>
        </>
    );
}


export default Footer;