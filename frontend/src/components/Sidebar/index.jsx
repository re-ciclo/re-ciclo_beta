import React from 'react';
import {Link, withRouter} from 'react-router-dom';

//Libraries
import {Nav} from 'react-bootstrap';

function SidebarUsuario (props) {

    const {location} = props;


    function sair(){

        localStorage.removeItem('@frontend/nivel_acesso'); 
        
    }


    
    return(
        <>           
                           
                <Nav activeKey={location.pathname} className="w-75 d-flex justify-content-around list-group" id="minhaLista" role="tablist">
                    <Nav.Item className="list-group-item list-group-item-action" data-toggle="list">
                        <Nav.Link as={Link} to= "areausuario" role="tab">
                            Área Principal
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="list-group-item list-group-item-action" data-toggle="list">
                        <Nav.Link as={Link} to= "areausuarioresultados" role="tab">
                            Painel de Resultados
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="list-group-item list-group-item-action" data-toggle="list">
                        <Nav.Link as={Link} to= "dadosusuario" role="tab">
                            Meus Dados
                        </Nav.Link>
                    </Nav.Item>      
                    <Nav.Item className="list-group-item list-group-item-action" data-toggle="list">
                        <Nav.Link onClick={sair} as={Link} to= "/" role="tab" >
                           Sair
                        </Nav.Link>
                    </Nav.Item> 
                </Nav>  
        </>
    );
}

export const Sidebar = withRouter(SidebarUsuario);


function sair(){

    localStorage.removeItem('@frontend/nivel_acesso'); 
  
}


function SidebarAdministrador (props) {

    const {location} = props;

    return(
        <>           
                           
                <Nav activeKey={location.pathname} className="w-75 d-flex justify-content-around list-group" id="minhaLista" role="tablist">
                    <Nav.Item className="list-group-item list-group-item-action" data-toggle="list">
                        <Nav.Link as={Link} to= "areaadm" role="tab">
                            Área Principal
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="list-group-item list-group-item-action" data-toggle="list">
                        <Nav.Link as={Link} to= "areaadmresultados" role="tab">
                            Painel de Resultados
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="list-group-item list-group-item-action" data-toggle="list">
                        <Nav.Link as={Link} to= "dadosadm" role="tab">
                            Meus Dados
                        </Nav.Link>
                    </Nav.Item>      

                    <Nav.Item className="list-group-item list-group-item-action" data-toggle="list">
                        <Nav.Link as={Link} to= "areaadmcrud" role="tab">
                            Gerenciamento
                        </Nav.Link>
                    </Nav.Item>  
                    <Nav.Item className="list-group-item list-group-item-action" data-toggle="list">
                         <Nav.Link onClick={sair} as={Link} to= "/" role="tab" >
                            Sair
                        </Nav.Link>
                    </Nav.Item> 

                </Nav>  

        
        </>
    );
}

export const SidebarAdm = withRouter(SidebarAdministrador);