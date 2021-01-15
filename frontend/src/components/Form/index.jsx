import React from 'react';

// Libraries
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Termos, Politica} from '../Modal';

//styles
import './Form.css';



export const FormRegister = () =>{


    // Dados Usuario - Pessoal

    // let [ nome, setNome] = React.useState("");
    // let [ email, setEmail] = React.useState("");
    // let [ telefone, setTelefone] = React.useState("");
    // let [ senha, setSenha] = React.useState("");
    // let [ senhaConfirme, setSenhaConfirme] = React.useState("");


    // // Dados Usuario - Endereco

    let [ cep, setCep] = React.useState("");
    let [ logradouro, setLogradouro] = React.useState("");
    let [ complemento, setComplemento] = React.useState("");
    let [ bairro, setBairro] = React.useState("");
    let [ localidade, setLocalidade] = React.useState("");
    let [ uf, setUf] = React.useState("");
    let [ numero, setNumero] = React.useState("");


    // Mensagem de Confirmação de Cadastro

    let [mensagemSenha, setMensagemSenha] = React.useState(false);
    let [mensagemEmail, setMensagemEmail] = React.useState(false);
    let [mensagem, setMensagem] = React.useState(false);


    async function getCep(event){

        // if(event =! 1){
             
            console.log(event.target.value);
            console.log(event.target.value.length);         

            if(event.target.value.length === 8){
            setCep(event.target.value);
        
            // url da API
            const url = `https://viacep.com.br/ws/${cep}/json/`;
            
            const response = await fetch(url);
            const dados = await response.json();
            
                console.log(dados);
                setLogradouro(dados.logradouro);
                setComplemento(dados.complemento);
                setLocalidade(dados.localidade);
                setBairro(dados.bairro);
                setUf(dados.uf);

                
        
        }
    }


    function cadastro(event){
        event.preventDefault();
        console.log(event.target);

        let formData = new FormData(event.target);
        console.log("Form Data:")
        console.log(formData.get("nome"));
        console.log(formData.get("senha"));


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
                setMensagem(dadosValidados);
                setTimeout( () => { setMensagem(false) },3000)
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
            <Form onSubmit={cadastro}>
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
                    <Input type="text" name="cep" minLength="8" maxLength="8" id="cep" placeholder="00000-000" onMouseMove={getCep} onChange={(event) => setCep(event.target.value)} required/>
                    </Col>

                    <Label for="logradouro" sm={2}>Logradouro</Label>
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
                

                <FormGroup check className="mt-4">
                    <Label check>
                        <Input type="checkbox" name="check" id="check" required />{' '}
                        Criando sua conta você concorda com nossos <span className="link"><Termos/></span> e nossa <span className="link"><Politica/></span>
                    </Label>
                </FormGroup>


                <div className="d-flex justify-content-center">
                    <Button className="mt-4 btn-register" size="lg">Cadastrar</Button>{' '}
                </div>              
            </Form>
                        {
                            mensagem && <div class=" d-flex alert alert-success mx-auto my-4 w-100 justify-content-around" role="alert">Cadastro efetuado!</div>
                        }  
                        {
                            mensagemSenha && <div class=" d-flex alert alert-danger mx-auto my-4 w-100 justify-content-around" role="alert">As senhas precisam ser iguais</div>
                        }
                        {
                            mensagemEmail && <div class=" d-flex alert alert-danger mx-auto my-4 w-100 justify-content-around" role="alert">E-mail já cadastrado!</div>
                        }
        </>
    );
}

export const FormContact = () =>{

    return(
        <>
        
            <Form className="bg-form">
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
                <Label for="telefone" sm={3}>Telefone</Label>
                <Col sm={9}>
                <Input type="tel" name="telephone" minLength="10" maxLength="11" id="telephone" placeholder="Digite seu celular com DDD Ex: 11999995555" />
                </Col>
                </FormGroup>
                
                <FormGroup row>
                <Label for="select"sm={3}>Assunto</Label>
                <Col sm={9}>
                <Input type="select" name="select" id="select">
                <option selected>Escolha o assunto</option>
                <option>Solicitar informação</option>
                <option>Elogio</option>
                <option>Sugestão</option>
                <option>Reclamação</option>
                <option>Outro</option>
                </Input>
                </Col>
                </FormGroup> 
                
                <FormGroup row>
                <Label for="text" sm={3}>Mensagem</Label>
                <Col sm={9}>
                <Input type="textarea" name="text" id="text" />
                </Col>
                </FormGroup>
            
                <div className="d-flex justify-content-center">
                <Button className="mt-4 btn-register" size="lg">Enviar</Button>
                </div>
            </Form>
        </>
    );
}