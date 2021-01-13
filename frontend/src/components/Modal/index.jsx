// React
import React, { useState } from 'react';

// Libraries
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {ModalBody} from 'reactstrap';

// styles
import './Modal.css';


export function Login() {
    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
  
    return (
      <>
        <a onClick={handleShow} >
          Login
        </a>          
  
        <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Bem-vindo(a) de volta!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" />                
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" />
              </Form.Group>
            </Form>  
          </Modal.Body>

          <Modal.Footer>
            <Button variant="light" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="info" onClick={handleClose}>
              Entrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};


export function Termos() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  

  return (
    <>
      <a onClick={handleShow} >
        Termos de Serviço
      </a>          

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Termos de Serviço</Modal.Title>
        </Modal.Header>

          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </ModalBody>

        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Voltar
          </Button>
          <Button variant="info" onClick={handleClose}>
            Tudo bem
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export function Politica() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  

  return (
    <>
      <a onClick={handleShow} >
        Política de Privacidade
      </a>          

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Política de Privacidade</Modal.Title>
        </Modal.Header>

          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </ModalBody>

        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Voltar
          </Button>
          <Button variant="info" onClick={handleClose}>
            Tudo bem
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};




