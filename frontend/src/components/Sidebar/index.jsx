import React from 'react';
import {Link, withRouter} from 'react-router-dom';

//Libraries
import {Nav} from 'react-bootstrap';

function SidebarUsuario (props) {

    const {location} = props;

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
                </Nav>  

                {/* <div activeKey={location.pathname} className="list-group" id="minhaLista" role="tablist">

                    <a className="list-group-item list-group-item-action" data-toggle="list" 
                        as={Link} to= "areausuario" role="tab">
                            Área Principal
                    </a>

                    <a className="list-group-item list-group-item-action" data-toggle="list" 
                        as={Link} to= "areausuarioresultados" role="tab">
                            Painel de Resultados
                    </a>

                    <a className="list-group-item list-group-item-action" data-toggle="list" 
                        as={Link} to= "dadosusuario" role="tab">
                            Meus Dados
                    </a>              
                </div> */}
        </>
    );
}

export const Sidebar = withRouter(SidebarUsuario);