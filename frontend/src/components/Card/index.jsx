import React from 'react';

//Libraries
import { Card, CardGroup,  Button, Nav } from 'react-bootstrap';


//styles and images
import './Card.css';
import Card1 from './img/Card1.jpg';
import Card2 from './img/Card2.jpg';
import Card3 from './img/Card3.jpg';


export const CardsReciclo = () => {

    return (
        <>

            <div className="row justify-content-around">
                <Card style={{ width: '18rem' }} className="d-flex text-center align-items-center">
                    <Card.Img className="card-img" variant="top" src={Card1} />
                    <Card.Body>
                        <Card.Link href="#">
                            Conheça nossos projetos
                            </Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="d-flex text-center align-items-center">
                    <Card.Img className="card-img" variant="top" src={Card2} />
                    <Card.Body>
                        <Card.Link href="#">
                            Saiba mais sobre a Reciclo
                            </Card.Link>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="d-flex text-center align-items-center">
                    <Card.Img className="card-img" variant="top" src={Card3} />
                    <Card.Body>
                        <Card.Link href="#">
                            Faça parte você também
                        </Card.Link>
                    </Card.Body>
                </Card>

            </div>
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