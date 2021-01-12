import React from 'react';
// Libraries
import { Form, FormGroup, Col, Button, Input, Label } from 'reactstrap';

//Components

const Contato = () => {


    return (
        <div className="container-fluid bg-light">
            <div className="row my-2">
                <h1 className="ml-2">Contato</h1>
            </div>
            <div className="row bg-primary my-4">
                <div className="col-12 d-flex justify-content-center">
                    <h2>Entre em Contato Conosco</h2>
                </div>
            </div>
            <div className="row bg-success my-4">
                <div className="col-12 d-flex justify-content-center">
                    <p>
                        O projeto tem como finalidade reverter os valores que são gerados através da venda do lixo reciclável para ser utilizados como benefício de todos moradores.
                        Cada material será avaliado, seus valores serão acumulados e administrados pelo parceiro e revertido em forma de manutenção para o condomínio (pintura, encanamento, reforma da área de lazer, jardinagem).
                        </p>
                        
                </div>
            </div>
            <div className="row my-4">
                <div className="col-12 col-sm-6 bg-primary">Whats</div>
                <div className="col-12 col-sm-6 bg-success">E-mail</div>
            </div>
            <div className="row bg-success my-4">
                <div className="col-12 d-flex justify-content-center">

                
                    <Form>
                        <FormGroup row>
                            <Label for="assunto" sm={3}>Assunto</Label>
                            <Col sm={9}>
                                <Input type="assunto" name="assunto" id="assunto" placeholder="Assunto da mensagem" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="nome" sm={3}>Nome</Label>
                            <Col sm={9}>
                                <Input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="email" sm={3}>Email</Label>
                            <Col sm={9}>
                                <Input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="telephone" sm={3}>Telefone</Label>
                            <Col sm={9}>
                                <Input type="tel" name="telephone" minLength="10" maxLength="11" id="telephone" placeholder="Digite seu celular com DDD  Ex: 11999995555" />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="repeat-password" sm={3}>Confirmar Senha</Label>
                            <Col sm={9}>
                                <Input type="password" name="repeat-password" id="repeat-password" placeholder="Confirme sua senha" />
                            </Col>
                        </FormGroup>
                        
                            
                        <div className="d-flex justify-content-center">
                            <Button className="mt-4 btn-register" size="lg">Enviar</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}


export default Contato;