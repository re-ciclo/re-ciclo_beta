import React from 'react';

//Libraries
import {Card} from 'react-bootstrap';

//styles and images
import './Card.css';
import Card1 from './img/Card1.jpg';
import Card2 from './img/Card2.jpg';
import Card3 from './img/Card3.jpg';


const CardsReciclo = () =>{

    return(
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
                    <Card.Img className="card-img" variant="top" src={Card2}/>
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

export default CardsReciclo;