import React from 'react';
import {Link} from 'react-router-dom'; 

//Libraries
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon} from 'mdbreact';
import {Nav} from 'react-bootstrap';

//styles
import './Card.css';

function CardsReciclo() {    

    return(
        <>
            <MDBRow className="my-5">
                <MDBCol md='4'>
                    <MDBCard
                    className='card-image'
                    style={{
                        backgroundImage:
                        "linear-gradient(rgba(22, 105, 122, 0.4), rgba(22, 105, 122, 0.5)), url('https://t3.ftcdn.net/jpg/02/24/30/26/240_F_224302664_zZbPKt25blAHEz8eRYkcfbgU1sphuuij.jpg')"
                    }}
                    >
                    <div className='text-white text-center d-flex align-items-center py-5 card-size'>
                        <div>
                        
                            <MDBCardTitle tag='h3' className='pt-2 text-card'>
                                <strong>Conheça nossos projetos</strong>
                            </MDBCardTitle>
                            <MDBBtn className="mt-5">
                                <MDBIcon /> 
                                <Nav.Link className="btn btn-sm btn-success" as={Link} href="/projeto" to = "/projeto">
                                    Ver projetos
                                </Nav.Link>
                            </MDBBtn>
                        </div>
                    </div>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4'>
                    <MDBCard
                    className='card-image'
                    style={{
                        backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url('https://t3.ftcdn.net/jpg/04/00/23/54/240_F_400235487_0KzLkmsbq2rWbuTu0iGFjuHSX5wojozZ.jpg')"
                    }}
                    >
                    <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 card-size'>
                        <div>
                        
                            <MDBCardTitle tag='h3' className='pt-2'>
                                <strong>Saiba mais sobre a Reciclo</strong>
                            </MDBCardTitle>
                            <MDBBtn className="mt-5">
                                <MDBIcon /> 
                                <Nav.Link className="btn btn-sm btn-dark" as={Link} href="/areciclo" to = "/areciclo">
                                    Saber mais
                                </Nav.Link>                            
                            </MDBBtn>
                        </div>
                    </div>
                    </MDBCard>
                </MDBCol>

                <MDBCol md='4'>
                    <MDBCard
                    className='card-image'
                    style={{
                        backgroundImage:
                        "linear-gradient(rgba(23, 48, 114, 0.7), rgba(23, 48, 114, 0.7)), url('https://t4.ftcdn.net/jpg/02/37/19/93/240_F_237199352_lkSiNIsCkzID6vYtN7BGDS6sthAxqMtR.jpg')"
                    }}
                    >
                    <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 card-size'>
                        <div>
                        
                            <MDBCardTitle tag='h3' className='pt-2 text-card'>
                                <strong>Faça parte você também</strong>
                            </MDBCardTitle>
                            <MDBBtn className="mt-5 btn btn-sm btn-primary">
                                <MDBIcon /> Fazer parte
                            </MDBBtn>
                        </div>
                    </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    );
}

export default CardsReciclo;