import React from 'react';
import {Link, withRouter} from 'react-router-dom';

// Libraries
import {Card, Button} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

//styles
import './Banner.css';



export const BannerConsume = () =>{

    return(
        <>
            <div className="banner1">
                
                <div className="d-flex justify-content-center my-auto">
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title className="mb-5"></Card.Title>
                            
                            <Card.Text className="text-banner-1">
                                <p>Está descartando de forma correta?</p>
                                <p>Conheça agora o significado de cada cor :)</p>
                            </Card.Text>

                            <Card.Link href="#" className="d-flex justify-content-center">
                                <Button className="btn-light btn-sm">
                                    <Nav.Link as={Link} href="/information" to="/information">
                                        Saiba mais
                                    </Nav.Link>
                                </Button>
                            </Card.Link>                            
                        </Card.Body>
                        </Card>
                </div>                
            </div>
        </>
    );
}


export const BannerInfo = () =>{

    return(
        <>
            <div className="banner2">
                
                <div className="d-flex justify-content-center my-auto">
                    <Card style={{ width: '50rem' }}>
                        <Card.Body>
                            <Card.Title className="mb-5 title-banner-2">Juntos somos mais fortes!</Card.Title>
                            
                            <Card.Text className="text-banner-2">
                            A Re-Ciclo tem o propósito de iniciar projetos em benefício da coletividade, 
                            incentivando o diálogo com a sustentabilidade e a natureza através de uma boa gestão.
                            A amplitude do projeto coletivo poderá ser vista quando todos tiverem a compreensão, 
                            sobre o quão importante praticar pequenas ações sustentáveis no seu dia-a-dia.
                            </Card.Text>

                        </Card.Body>
                        </Card>
                </div>
            </div>
        </>
    );
}