// React
import React, { useState } from 'react';

// Libraries
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {ModalBody} from 'reactstrap';

import {Link, withRouter} from 'react-router-dom'; 
import {Nav} from 'react-bootstrap';
// styles
import './Modal.css';


export function Login() {
  
    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    

    const [mensagemAcesso, setMensagemAcesso] = useState(false);
    const [mensagemVerificar, setMensagemVerificar] = useState(false);


    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function acessar(event){
        event.preventDefault();
        console.log(event.target);

        console.log(email);
        console.log(senha);


        // {Ajustemail:email, AjustSenha:senha}
        var formData = { a: email, b: senha };
        

        console.log("formData:");
        console.log(formData);
        console.log(formData.a);
        console.log(formData.b);

        const url = "http://localhost/Recode%20Pro/ProjetoSqua07Entrega2/re-ciclo/backend/ReceiveData/getLogin.php";


       fetch(url,{

            method: "POST",
            body: formData
            
        })
        .then((response) => response.json());
        // .then((dadosValidados) =>{
        //   console.log(dadosValidados);
        // })


      
      // handleClose();
    }




  
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
            <Form onSubmit={acessar}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Digite seu email" />                
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" name="senha" value={senha} onChange={(event) => setSenha(event.target.value)} placeholder="Digite sua senha" />
                </Form.Group>
                <Button variant="info" className="container-fluid d-flex justify-content-center" onClick={acessar}>
                Entrar
               </Button>
            </Form>  
          </Modal.Body>

          <Modal.Footer>
          
            <Nav.Link as={Link} href="/" to = "/cadastro" onClick={handleClose} >Não tenho cadastro</Nav.Link>
            {/* <Button variant="success" className="container-fluid d-flex justify-content-center" onClick={paginaCadastro}>
              Não tenho cadastro
            </Button> */}
           
          </Modal.Footer>
                <div className="container-fluid d-flex justify-content-center">
                {
                    mensagemAcesso && <div class=" d-flex alert alert-success mx-auto my-4 w-100 justify-content-around" role="alert">Cadastro efetuado!</div>
                }  
                {
                    mensagemVerificar && <div class=" d-flex alert alert-danger mx-auto my-4 w-100 justify-content-around" role="alert">E-mail e/ou senha inválidos</div>
                }
                </div>
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




