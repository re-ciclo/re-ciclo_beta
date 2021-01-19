import React from 'react';
import {Link, withRouter} from 'react-router-dom';

//Libraries
import {Nav} from 'react-bootstrap';
import './Sidebar.css';
function SidebarUsuario (props) {

    const {location} = props;


    function sair(){

        localStorage.removeItem('@frontend/nivel_acesso'); 
        
    }


    
    return(
        <>           
                <div className="pt-1 container-fluid text-center">        
                    <Nav activeKey={location.pathname} className="w-100 d-flex justify-content-around list-group" id="minhaLista" role="tablist">
                        <Nav.Item className="list-group-item list-group-item-action" data-toggle="list">
                            <Nav.Link as={Link} to= "areausuario" role="tab">
                                Principal
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item className="list-group-item list-group-item-action" data-toggle="list">
                            <Nav.Link as={Link} to= "areausuarioresultados" role="tab">
                                Resultados
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
                </div>  
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
                           
                <Nav activeKey={location.pathname} className=" ajuste w-20 ml-2 d-flex justify-content-around list-group " id="minhaLista" role="tablist">
                    <Nav.Item className="list-group-item list-group-item-action" data-toggle="list">
                        <Nav.Link as={Link} to= "areaadm" role="tab">
                            Principal
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className="list-group-item list-group-item-action" data-toggle="list">
                        <Nav.Link as={Link} to= "areaadmresultados" role="tab">
                            Resultados
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




