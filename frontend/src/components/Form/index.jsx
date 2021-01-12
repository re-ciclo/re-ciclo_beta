import React from 'react';

// Libraries
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Termos, Politica} from '../Modal';

//styles
import './Form.css';


const FormRegister = () =>{

    return(
        <>
            <Form>
                <FormGroup row>
                    <Label for="name" sm={3}>Nome</Label>
                    <Col sm={9}>
                    <Input type="text" name="name" id="name" placeholder="Digite seu nome completo" />
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
                    <Label for="password" sm={3}>Senha</Label>
                    <Col sm={9}>
                    <Input type="password" name="password" id="password" placeholder="Cadastre uma senha" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="repeat-password" sm={3}>Confirmar Senha</Label>
                    <Col sm={9}>
                    <Input type="password" name="repeat-password" id="repeat-password" placeholder="Confirme sua senha" />
                    </Col>
                </FormGroup>

                <FormGroup check className="mt-4">
                    <Label check>
                        <Input type="checkbox" name="check" id="check" />{' '}
                        Criando sua conta você concorda com nossos <span className="link"><Termos/></span> e nossa <span className="link"><Politica/></span>
                    </Label>
                </FormGroup>

                <div className="d-flex justify-content-center">
                    <Button className="mt-4 btn-register" size="lg">Cadastrar</Button>{' '}
                </div>              
            </Form>
        </>
    );
}

export default FormRegister;