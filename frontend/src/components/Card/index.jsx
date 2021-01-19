import React from 'react';
import {Link} from 'react-router-dom'; 

//Libraries

import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon} from 'mdbreact';



import { Nav, Card, CardGroup,  Button } from 'react-bootstrap';

//styles
import './Card.css';


export const CardsReciclo = () => {


    return (
        <>
            <MDBRow className="my-5 row">
                <MDBCol className="col-12 col-sm-4 px-3 d-flex justify-content-center">
                    <MDBCard
                    className='card-image'
                    style={{
                        backgroundImage:
                        "linear-gradient(rgba(22, 105, 122, 0.4), rgba(22, 105, 122, 0.5)), url('https://t3.ftcdn.net/jpg/02/24/30/26/240_F_224302664_zZbPKt25blAHEz8eRYkcfbgU1sphuuij.jpg')"
                    }}
                    >
                    <div className='text-white mx-auto d-flex align-items-center py-5 card-size'>
                        <div>
                        
                            <MDBCardTitle tag='h3' className='pt-2 text-center'>
                                <strong>Conheça nossos projetos</strong>
                            </MDBCardTitle>
                            <MDBBtn className="mt-5 mx-auto d-flex justify-content-center">
                                <MDBIcon /> 
                                <Nav.Link className="btn btn-sm btn-success" as={Link} href="/projeto" to = "/projeto">
                                    Ver projetos
                                </Nav.Link>
                            </MDBBtn>
                        </div>
                    </div>
                    </MDBCard>
                </MDBCol>

                <MDBCol className="col-12 col-sm-4 px-3 d-flex justify-content-center">
                    <MDBCard
                    className='card-image'
                    style={{
                        backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url('https://t3.ftcdn.net/jpg/04/00/23/54/240_F_400235487_0KzLkmsbq2rWbuTu0iGFjuHSX5wojozZ.jpg')"
                    }}
                    >
                    <div className='text-white mx-auto d-flex align-items-center py-5 card-size'>
                        <div>
                        
                            <MDBCardTitle tag='h3' className='pt-2 text-center'>
                                <strong>Saiba mais sobre a Reciclo</strong>
                            </MDBCardTitle>
                            <MDBBtn className="mt-5 mx-auto d-flex justify-content-center">
                                <MDBIcon /> 
                                <Nav.Link className="btn btn-sm btn-dark" as={Link} href="/areciclo" to = "/areciclo">
                                    Saber mais
                                </Nav.Link>                            
                            </MDBBtn>
                        </div>
                    </div>
                    </MDBCard>
                </MDBCol>

                <MDBCol className="col-12 col-sm-4 px-3 d-flex justify-content-center">
                    <MDBCard
                    className='card-image'
                    style={{
                        backgroundImage:
                        "linear-gradient(rgba(23, 48, 114, 0.7), rgba(23, 48, 114, 0.7)), url('https://t4.ftcdn.net/jpg/02/37/19/93/240_F_237199352_lkSiNIsCkzID6vYtN7BGDS6sthAxqMtR.jpg')"
                    }}
                    >
                    <div className='text-white mx-auto d-flex align-items-center py-5 card-size'>
                        <div>
                        
                            <MDBCardTitle tag='h3' className='pt-2 text-center'>
                                <strong>Faça parte você também</strong>
                            </MDBCardTitle>
                            <MDBBtn className="mt-5 mx-auto d-flex justify-content-center">
                                <MDBIcon />
                                <Nav.Link className="btn btn-sm btn-primary " as={Link} href="/sejaparceiro" to = "/sejaparceiro">
                                    Fazer parte
                                </Nav.Link> 
                            </MDBBtn>
                        </div>
                    </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    );
}
        
        
export const CardsAmbiente = (props) => {

    return (
        <>
            <div className="container d-fex justify-content-around">

                <CardGroup className="">
                    <Card className="mx-5 shadow">
                        
                        <Card.Body>
                            <Card.Title><h4><b>Dados Pessoais</b></h4></Card.Title>
                            <Card.Text>
                                <p>Nome:{props.nome}</p>
                                <p>E-mail:{props.email}</p>
                                <p>Telefone:{props.telefone}</p>
                               
                         </Card.Text>
                        </Card.Body>
                        <Button variant="primary">Editar</Button>
                            
                       
                    </Card>
                    
                    <Card className="shadow">
                        
                        <Card.Body>
                            <Card.Title><h4><b>Endereço</b></h4></Card.Title>
                            <Card.Text>
                                <p>Cep:{props.cep}</p>
                                <p>Logradouro:{props.logradouro}</p>
                                <p>Complemento:{props.complemento}</p>
                                <p>Nº:{props.numero}</p>
                     </Card.Text>
                        </Card.Body>
                        
                        <Button variant="primary">Editar</Button>    
                       
                    </Card>
                </CardGroup>

                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </>
    );
}