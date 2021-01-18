// React
import React, { useState } from 'react';

// Libraries
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {ModalBody, Input, FormGroup, Label, Col} from 'reactstrap';

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

                    localStorage.setItem('@frontend/cep', dadosValidados[0]['cep']);
                    localStorage.setItem('@frontend/logradouro', dadosValidados[0]['logradouro']);
                    localStorage.setItem('@frontend/complemento', dadosValidados[0]['complemento']);
                    localStorage.setItem('@frontend/numero', dadosValidados[0]['numero']);


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



export const ModalEditar = (props) =>{


    const [show, setShow] = useState(false);
    
      const handleShow = () => setShow(true);
      const handleClose = () => setShow(false);
      
      
      


      const [mensagemVerificar, setMensagemVerificar] = useState(false);
      const [mensagemTamanhoDados, setMensagemTamanhoDados] = useState(false);
      


      const [id, setId] = useState(props.id);
      const [nome, setNome] = useState(props.nome);
      const [email, setEmail] = useState(props.email);
      const [telefone, setTelefone] = useState(props.telefone);
      const [cep, setCep] = useState(props.cep);
      const [logradouro, setLogradouro] = useState(props.logradouro);
      const [complemento, setComplemento] = useState(props.complemento);
      const [numero, setNumero] = useState(props.numero);
     


      function editar(event){
        
        event.preventDefault();
   
        console.log(event.target);
        
        if(nome.length >= 3 && email.length >= 3 && telefone.length >= 3 && cep.length >= 3 && logradouro.length >= 3 && numero.length >= 1){

          const urlCadastro = "http://localhost/Recode%20Pro/ProjetoSqua07Entrega2/re-ciclo/backend/ReceiveData/crudUsuarioCadastroUpdate.php";
                      
          const formData = new FormData(document.getElementById("form"));
          console.log(formData);
          console.log(formData.get("nome"));
          console.log(formData.get("numero"));
          
            fetch(urlCadastro,{

              method: "POST",
              body: formData
              
          })
          .then((response) => response.json())
          .then((dadosValidados) =>{
            // document.getElementByTag('id_usuario').value = "";
            console.log(dadosValidados[0]);
          })




         const urlEndereco = "http://localhost/Recode%20Pro/ProjetoSqua07Entrega2/re-ciclo/backend/ReceiveData/crudUsuarioEnderecoUpdate.php";
          
         fetch(urlEndereco,{

          method: "POST",
          body: formData
          
          })
          .then((response) => response.json())
          .then((dadosValidados) =>{
            
            console.log(dadosValidados[0]);
            document.location.reload(true);
          })


        }else{
            setMensagemTamanhoDados(true);
            setTimeout( () => {setMensagemTamanhoDados(false)}, 3000);

        }
        


        
      }

  return(
      <>



      <a onClick={handleShow} > <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>   </a>   

         <Modal show={show} onHide={handleClose}>
 
           <Modal.Header closeButton>
             <Modal.Title>Editar Usuário</Modal.Title>
                 
           </Modal.Header>

                 
 
           <Modal.Body>
             <Form onSubmit={editar} id="form">

             <Form.Group controlId="formBasicEmail">
                   <Form.Label>ID</Form.Label>
                   <Input type="text" name="id_usuario" value={id}  id="id_usuario" placeholder="Digite..." required/>                
                 </Form.Group>          

                <Form.Group controlId="formBasicEmail">
                   <Form.Label>Nome</Form.Label>
                   <Input type="text" name="nome" value={nome} onChange={(event) => setNome(event.target.value)} id="nome" placeholder="Digite..." required/>                
                 </Form.Group>

                 

                 <FormGroup row>
                    <Label for="localidade" sm={1}>Email</Label>
                    <Col sm={6}>
                    <Input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} id="email" placeholder="Digite..." required/>    
                    </Col>

                    <Label for="logradouro" sm={1}>Tel.</Label>
                    <Col sm={4}>
                    <Input type="text" name="telefone" value={telefone} onChange={(event) => setTelefone(event.target.value)} id="telefone" placeholder="Digite..." required/>                   
                    </Col>

                </FormGroup>


                <FormGroup row>
                    <Label for="localidade" sm={1}>CEP</Label>
                    <Col sm={3}>
                    <Input type="text" name="cep" value={cep} onChange={(event) => setCep(event.target.value)} id="cep" placeholder="Digite..." required/>
                    </Col>

                    <Label for="logradouro" sm={1}>Local</Label>
                    <Col sm={4}>
                    <Input type="text" name="logradouro" value={logradouro} onChange={(event) => setLogradouro(event.target.value)}  minLength="3" maxLength="20" id="logradouro" placeholder="..."   required/>
                    </Col>

                    <Label for="numero" sm={1}>Nº</Label>
                    <Col sm={2}>
                    <Input type="text" name="numero" value={numero} onChange={(event) => setNumero(event.target.value)}  minLength="1" maxLength="5" id="numero" placeholder="..." required/>
                    </Col>
                </FormGroup>

                <Form.Group controlId="formBasicEmail">
                   <Form.Label>Complemento</Form.Label>
                   <Input type="text" name="complemento" value={complemento} onChange={(event) => setComplemento(event.target.value)} id="complemento" placeholder="Digite..." required/>                
                 </Form.Group>
          
                 <Button variant="success" className="container-fluid d-flex justify-content-center" onClick={editar}>
                   Confirmar
                </Button>
             </Form>  
           </Modal.Body>
 
           <Modal.Footer>
                <div className="container-fluid d-flex justify-content-center">
               
               {
                   mensagemVerificar && <div class=" d-flex alert alert-danger mx-auto my-4 w-100 justify-content-around" role="alert">E-mail e/ou senha inválidos</div>
               }
               {
                   mensagemTamanhoDados && <div class=" d-flex alert alert-warning mx-auto my-4 w-100 justify-content-around" role="alert">Se atente ao mínimo de 3 caracteres</div>
               }
               </div>
           </Modal.Footer>
                 
         </Modal>
      
      </>
    );
} 


export const ModalExcluir = (props) =>{


  const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    

   


    function deletar(){
      
      const formData = new FormData(document.getElementById("form"));
     
     
      const urlEndereco = "http://localhost/Recode%20Pro/ProjetoSqua07Entrega2/re-ciclo/backend/ReceiveData/crudUsuarioEnderecoDelete.php";

      fetch(urlEndereco,{

        method: "POST",
        body: formData
        
        })
        .then((response) => response.json())
        .then((dadosValidados) =>{
          
          console.log(dadosValidados[0]);
          
        })



        const urlCadastro = "http://localhost/Recode%20Pro/ProjetoSqua07Entrega2/re-ciclo/backend/ReceiveData/crudUsuarioCadastroDelete.php";

      fetch(urlCadastro,{

        method: "POST",
        body: formData
        
        })
        .then((response) => response.json())
        .then((dadosValidados) =>{
          
          console.log(dadosValidados[0]);
          document.location.reload(true);
        })





    }

return(
    <>



    <a onClick={handleShow} > <i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>   </a>   
       
        
       <Modal show={show} onHide={handleClose}>

         <Modal.Header closeButton>
           <Modal.Title>Excluir Usuário</Modal.Title>
         </Modal.Header>

         <Modal.Body>
            Atenção! Você está prestes a remover o usuário {props.nome}
           <Form onSubmit={deletar} id="form">

           <Form.Group controlId="formBasicEmail">
                 <Form.Label>ID selecionado:</Form.Label>
                 <Input type="text" name="id_usuario" value={props.id}  placeholder="Digite seu email" required/>                
               </Form.Group>

        
               <Button variant="danger" className="container-fluid d-flex justify-content-center" onClick={deletar}>
                 Confirmar
              </Button>
           </Form>  
         </Modal.Body>

         <Modal.Footer>
         
           
         </Modal.Footer>
           
       </Modal>
    
    </>
  );
}




export const ModalCadastrar = () =>{


  const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    
    // Mensagem de Confirmação de Cadastro

    let [mensagemSenha, setMensagemSenha] = React.useState(false);
    let [mensagemEmail, setMensagemEmail] = React.useState(false);
    let [mensagem, setMensagem] = React.useState(false);

    

    // Dados Usuario - Pessoal

    let [ nome, setNome] = React.useState("");
    let [ email, setEmail] = React.useState("");
    let [ telefone, setTelefone] = React.useState("");
    let [ senha, setSenha] = React.useState("");
    let [ senhaConfirme, setSenhaConfirme] = React.useState("");


    // // Dados Usuario - Endereco

    let [ cep, setCep] = React.useState("");
    let [ logradouro, setLogradouro] = React.useState("");
    let [ complemento, setComplemento] = React.useState("");
    let [ bairro, setBairro] = React.useState("");
    let [ localidade, setLocalidade] = React.useState("");
    let [ uf, setUf] = React.useState("");
    let [ numero, setNumero] = React.useState("");
   


    function cadastrar(){
       

        const formData = new FormData(document.getElementById("form"));
        


        if(formData.get("senha") === formData.get("confirme_senha")){

                     
        const url = "http://localhost/Recode%20Pro/ProjetoSqua07Entrega2/re-ciclo/backend/ReceiveData/getCadastro.php";

        fetch(url,{
            
            method: "POST",
            body: formData
            
        })
        .then((response) => response.json())
        .then((dadosValidados) =>{
            if(dadosValidados == true){
                console.log(dadosValidados);
                setMensagem(true);
                setTimeout( () => { setMensagem(false) },3000)
                document.location.reload(true);
            }else{
                console.log(dadosValidados);
                setMensagemEmail(true);
                setTimeout( () => { setMensagemEmail(false) },3000)
            }
            
        })



        }else{

            setMensagemSenha(mensagemSenha = true);
            setTimeout( function(){setMensagemSenha(mensagemSenha = false);}, 3000)

        }
      

      
    }

return(
    <>



    <a onClick={handleShow} > <i className="material-icons text-success">&#xE147;</i>   </a>   

       <Modal show={show} onHide={handleClose}>

         <Modal.Header closeButton>
           <Modal.Title>Cadastrar Usuário</Modal.Title>
               
         </Modal.Header>

               

         <Modal.Body>
            



         <Form onSubmit={cadastrar} id="form">
                <FormGroup row>
                    <Label for="nome" sm={3}>Nome</Label>
                    <Col sm={9}>
                    <Input type="text" name="nome" id="nome" minLength="3" maxLength="50" placeholder="Digite seu nome completo" required/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="email" sm={3}>Email</Label>
                    <Col sm={9}>
                    <Input type="email" name="email" minLength="10" maxLength="50" id="email" placeholder="Digite seu e-mail" required/>
                    
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="telefone" sm={3}>Telefone</Label>
                    <Col sm={9}>
                    <Input type="tel" name="telefone" minLength="10" maxLength="11" id="telefone" placeholder="Digite seu celular com DDD  Ex: 11999995555" required/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="senha" sm={3}>Senha</Label>
                    <Col sm={9}>
                    <Input type="password" minLength="3" maxLength="50" name="senha" id="senha" placeholder="Cadastre uma senha" required/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="confirme_senha" sm={3}>Confirmar Senha</Label>
                    <Col sm={9}>
                    <Input type="password" minLength="3" maxLength="50" name="confirme_senha" id="confirme_senha" placeholder="Confirme sua senha" required/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="cep" sm={3}>CEP</Label>
                    <Col sm={3}>
                    <Input type="text" name="cep" minLength="8" maxLength="8" id="cep" placeholder="..."  onChange={(event) => setCep(event.target.value)} required/>
                    </Col>

                    <Label for="logradouro" sm={2}>Local</Label>
                    <Col sm={4}>
                    <Input type="text" name="logradouro" minLength="3" maxLength="50" id="logradouro" placeholder="..." value={logradouro} onChange={(event) => setLogradouro(event.target.value)} required/>
                    </Col>
                </FormGroup>


                <FormGroup row>
                    <Label for="complemento" sm={3}>Complemento</Label>
                    <Col sm={3}>
                    <Input type="text" name="complemento" minLength="3" maxLength="50" id="complemento" placeholder="..." value={complemento} onChange={(event) => setComplemento(event.target.value)} />
                    </Col>

                    <Label for="bairro" sm={2}>Bairro</Label>
                    <Col sm={4}>
                    <Input type="text" name="bairro" minLength="3" maxLength="50" id="bairro" placeholder="..."  value={bairro} onChange={(event) => setBairro(event.target.value)} required/>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="localidade" sm={3}>Cidade</Label>
                    <Col sm={2}>
                    <Input type="text" name="localidade" minLength="3" maxLength="50" id="localidade" placeholder="..." value={localidade} onChange={(event) => setLocalidade(event.target.value)} required/>
                    </Col>

                    <Label for="uf" sm={1}>Uf</Label>
                    <Col sm={3}>
                    <Input type="text" name="uf" minLength="2" maxLength="2" id="uf" placeholder="..." value={uf} onChange={(event) => setUf(event.target.value)} required/>
                    </Col>

                    <Label for="numero" sm={1}>Nº</Label>
                    <Col sm={2}>
                    <Input type="text" name="numero" minLength="1" maxLength="5" id="numero" placeholder="..." value={numero} onChange={(event) => setNumero(event.target.value)} required/>
                    </Col>
                </FormGroup>
                       {
                            mensagemSenha && <div class=" d-flex alert alert-danger mx-auto my-4 w-100 justify-content-around" role="alert">As senhas precisam ser iguais</div>
                        }
                        {
                            mensagem && <div class=" d-flex alert alert-success mx-auto my-4 w-100 justify-content-around" role="alert">Cadastro efetuado!</div>
                        }  
                        
                        {
                            mensagemEmail && <div class=" d-flex alert alert-danger mx-auto my-4 w-100 justify-content-around" role="alert">E-mail já cadastrado!</div>
                        }
                
                
                
                <Button variant="success" className="container-fluid d-flex justify-content-center" onClick={cadastrar}>
                 Cadastrar
               </Button>
              </Form>
                       

         </Modal.Body>

         <Modal.Footer>
              
         </Modal.Footer>
               
       </Modal>
    
    </>
  );
} 