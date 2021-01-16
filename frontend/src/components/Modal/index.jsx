// React
import React, { useState } from 'react';

// Libraries
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {ModalBody, Input} from 'reactstrap';

import {Link, withRouter} from 'react-router-dom'; 
import {Nav} from 'react-bootstrap';
// styles
import './Modal.css';


export function Login() {
  
    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    
    


    const [mensagemVerificar, setMensagemVerificar] = useState(false);
    const [mensagemTamanhoDados, setMensagemTamanhoDados] = useState(false);
    


    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    






    function acessar(event){
        event.preventDefault();
        console.log(event.target);

        // console.log(email.length);
        // console.log(senha);


       
        if(email.length >= 3 && senha.length >= 3){

                var formData = { email: email, senha: senha };
              
                

                console.log("formData:");
                console.log(formData);
                

                const url = "http://localhost/Recode%20Pro/ProjetoSqua07Entrega2/re-ciclo/backend/ReceiveData/getLogin.php";


              fetch(url,{

                    method: "POST",
                    body: new FormData(document.getElementById("form"))
                    
                })
                .then((response) => response.json())
                .then((dadosValidados) =>{
                  console.log(dadosValidados[0]);
                  // console.log(dadosValidados[0]['nome']);

                  

                  if(dadosValidados[0]['id_usuario'] > 0){ // Não há id negativo no BD

                    localStorage.setItem('@frontend/id_usuario', dadosValidados[0]['id_usuario']);
                    localStorage.setItem('@frontend/nome', dadosValidados[0]['nome']);
                    localStorage.setItem('@frontend/email', dadosValidados[0]['email']);
                    localStorage.setItem('@frontend/telefone', dadosValidados[0]['telefone']);
                    localStorage.setItem('@frontend/nivel_acesso', dadosValidados[0]['nivel_acesso']);


                        if(localStorage.getItem('@frontend/nivel_acesso') == 1){
                          handleClose();
                          window.location.href = "http://localhost:3000/areaadm";
                        }else{
                          handleClose();
                          window.location.href = "http://localhost:3000/areausuario";
                        }

              
                        
                  }else{
                    setMensagemVerificar(true);
                    setTimeout( () => {setMensagemVerificar(false)},3000);
                  }
                })
            }else{

                setMensagemTamanhoDados(true);
                setTimeout( () => {setMensagemTamanhoDados(false)},3000);
            }

    }




  
    return (
      <>

          
        <a onClick={handleShow} > Login  </a>   
         
          
        <Modal show={show} onHide={handleClose}>

          <Modal.Header closeButton>
            <Modal.Title>Bem-vindo(a) de volta!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={acessar} id="form">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Digite seu email" required/>                
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                   <Input type="password" name="senha" value={senha} onChange={(event) => setSenha(event.target.value)} placeholder="Digite sua senha" required/>
                </Form.Group>

            



                <Button variant="info" className="container-fluid d-flex justify-content-center" onClick={acessar}>
                  Entrar
               </Button>
            </Form>  
          </Modal.Body>

          <Modal.Footer>
          
            <Nav.Link as={Link} href="/" to = "/cadastro" onClick={handleClose} >Não tenho cadastro</Nav.Link>
          </Modal.Footer>
                <div className="container-fluid d-flex justify-content-center">
                
                {
                    mensagemVerificar && <div class=" d-flex alert alert-danger mx-auto my-4 w-100 justify-content-around" role="alert">E-mail e/ou senha inválidos</div>
                }
                {
                    mensagemTamanhoDados && <div class=" d-flex alert alert-warning mx-auto my-4 w-100 justify-content-around" role="alert"> O mínimo de caracteres a ser inserido nos campos é 3</div>
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




