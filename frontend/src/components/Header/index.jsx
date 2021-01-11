 // Pacotes/Frameworks
 import React from 'react';
 import {Navbar, Nav} from 'react-bootstrap';
 import {Link, withRouter} from 'react-router-dom'; 
 // Libraries

//Components

 function BaseMenu(props){

     const {location} = props;
        
         return( 
             
                     <Navbar className="navbar-dark py-4" bg="success" expand="lg" >
                         <Navbar.Brand as={Link} href="/" to = "/">
                             Logo
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="item-menu"/>
                         <Navbar.Collapse id="item-menu">
                             <Nav activeKey={location.pathname} className="d-flex ml-auto mr-auto">
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
                                    <Nav.Item className="">
                                        <Nav.Link as={Link} href="/login" to="/login">Login</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} href="/cadastro" to="/cadastro">Cadastro</Nav.Link>   
                                    </Nav.Item>
                             </Nav>
                         </Navbar.Collapse>
                     </Navbar>
                 
         );
     
 }

 export const Header = withRouter(BaseMenu);//Seta a propriedade por aqui