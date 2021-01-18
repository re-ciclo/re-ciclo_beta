// React
import React from 'react';
import {Link, withRouter} from 'react-router-dom'; 

// Libraries
import {Nav, Navbar, Dropdown, DropdownButton} from 'react-bootstrap';

//Components
import {Login} from '../Modal';

// styles and images
import './Header.css';
import Logo from './img/logo.png';


function BaseMenu(props){

    const {location} = props;
    
        return( 
            
                    <Navbar className="navbar-dark py-1 px-5 fixed-top menu" expand="lg">
                        <Navbar.Brand as={Link} href="/" to = "/">
                            <img src={Logo} alt="logomarca Re-ciclo" className="img-logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="item-menu"/>
                        
                        <Navbar.Collapse id="item-menu" className="justify-content-between font-weight-bold">

                            <Nav activeKey={location.pathname} className="w-75 d-flex justify-content-around link">
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/" to = "/" className="font-menu">
                                        Início
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link as={Link} href="/reciclo" to = "/areciclo" className="font-menu">
                                        A Reciclo
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link as={Link} href="/projeto" to = "/projeto" className="font-menu">
                                        Projeto
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link as={Link} href="/lojas" to = "/contato" className="font-menu">
                                        Contato
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            
                            
                            {['Entre ou Cadastre-se'].map(
                                (variant) => (
                                    <DropdownButton
                                        
                                        key={variant}
                                        id={`dropdown-variants-${variant}`}
                                        variant={variant.toLowerCase()}
                                        title={variant}>
                                            
                                        <Dropdown.Item>
                                            <Nav.Link>
                                                <Login/>
                                            </Nav.Link>
                                        </Dropdown.Item>

                                        <Dropdown.Item>
                                            <Nav.Link as={Link} href="/cadastro" to="/cadastro">
                                                Cadastro
                                            </Nav.Link>
                                        </Dropdown.Item>
                                        
                                        <Dropdown.Item>
                                            <Nav.Link as={Link} href="/ambientelogin" to="/ambientelogin">
                                                Ambiente
                                            </Nav.Link>
                                        </Dropdown.Item>

                                    </DropdownButton>
                                ),
                            )}

                        </Navbar.Collapse>                        
                    </Navbar>                
        );    
}

export const Header = withRouter(BaseMenu);//Seta a propriedade por aqui