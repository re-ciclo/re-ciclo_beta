// React
import React from 'react';
import {Link, withRouter} from 'react-router-dom'; 

// Libraries
import {Nav, Navbar} from 'react-bootstrap';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//Components
import {Login} from '../Modal';

// styles
import './Header.css';

import Logo from './img/logo.png';

function BaseMenu(props){

    const {location} = props;
    
        return( 
            
                    <Navbar className="navbar-dark py-1 menu fixed-top" expand="lg">
                        <Navbar.Brand as={Link} href="/" to = "/">
                            <img src={Logo} alt="logomarca Re-ciclo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="item-menu"/>
                        <Navbar.Collapse id="item-menu" className="justify-content-between">
                            <Nav activeKey={location.pathname} className="w-75 d-flex justify-content-around link">
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/" to = "/">Início</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/reciclo" to = "/areciclo">A Reciclo</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/projeto" to = "/projeto">Projeto</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} href="/lojas" to = "/contato">Contato</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            
                            <Nav activeKey={location.pathname}>
                            
                            <UncontrolledDropdown setActiveFromChild>

                                <DropdownToggle tag="a" className="nav-link" caret>
                                    Entre ou Cadastre-se
                                </DropdownToggle> 
                                <DropdownMenu>                    

                                    <Login/>

                                    <Nav.Link className="drop-link" as={Link} href="/cadastro" to="/cadastro">
                                        Criar Conta
                                    </Nav.Link>                                                                  

                                </DropdownMenu>                                
                            </UncontrolledDropdown>                            

                            <Nav activeKey={location.pathname}>
                                <Nav.Item>
                                    <Nav.Link><Login/></Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link as={Link} href="/cadastro" to="/cadastro">Cadastro</Nav.Link>   
                                </Nav.Item>
                            </Nav>                                
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>                
        );    
}

export const Header = withRouter(BaseMenu);//Seta a propriedade por aqui