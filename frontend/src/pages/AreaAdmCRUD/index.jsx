import React from 'react';


//Components
import { SidebarAdm } from '../../components/Sidebar';
import Title from '../../components/Title';

import { ModalCadastrar, ModalEditar, ModalExcluir } from '../../components/Modal';


const AreaAdmCRUD = () => {

    const verifica = localStorage.getItem('@frontend/nivel_acesso');

            

    const[dados, setDados] = React.useState([]);
    const[render, setRender] = React.useState(false);

    const[todos, setTodos] = React.useState(true);
    const[id_selecionado, setId_selecionado] = React.useState("");
    const[email_selecionado, setEmail_selecionado] = React.useState("");




    React.useEffect( async () =>{
        console.log("Trouxe os dados");
        const url = "http://localhost/re-ciclo/backend/SendData/jsonDadosUsuarioEditaveis.php";
        const response = await fetch(url);
        setDados(await response.json());
    },[todos])




    if (verifica == 1) {
        return (
            <div className="container-fluid">

                <Title title='Adm - Gerenciamento' />

                <div className="row" >
                    <div className="col-12 col-sm-2 d-flex justify-content-center">
                        <div className="ml-2 w-100">
                            <SidebarAdm />
                        </div>
                    </div>

                    <div className="col-12 col-sm-9">
                        
                        <div className="my-2">

                                <div>
                                    <label className="mx-2">Filtros</label>
                                    <input className="mx-2" type="number" min="1" max="300" placeholder="ID" onChange={ (event) => setId_selecionado(event.target.value)} />

                                    <input className="mx-2" type="text" placeholder="E-mail" onChange={ (event) => setEmail_selecionado(event.target.value)} />
                                    <button className="btn"><ModalCadastrar /></button>
                                </div>
                            
                        </div>

                        <div style={{"height":"350px","overflow": "auto","border-radius":"5px"}}>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">CEP</th>
                                    <th scope="col">Logradouro</th>
                                    <th scope="col">Complemento</th>
                                    <th scope="col">Nº</th>
                                    <th colspan="2"><center>Opções</center></th>
                                  
                                </tr>
                            </thead>
                            <tbody>

                            
                            {todos && dados.map( row =>

                                {if(id_selecionado == "" && email_selecionado == ""){

                                    return(
                                        <tr>
                                            <th scope="row" key={row.id_usuario}>{row.id_usuario}</th>
                                            <td>{row.nome}</td>
                                            <td>{row.email}</td>
                                            <td>{row.telefone}</td>
                                            <td>{row.cep}</td>
                                            <td>{row.logradouro}</td>
                                            <td>{row.complemento}</td>
                                            <td>{row.numero}</td>
                                            <td className="btn text-success"><ModalEditar 
                                                        id={row.id_usuario}     
                                                        nome={row.nome} 
                                                        email={row.email}
                                                        telefone={row.telefone}
                                                        cep={row.cep}
                                                        logradouro={row.logradouro}
                                                        complemento={row.complemento}
                                                        numero={row.numero}                                                    
                                                        />
                                            </td>
                                            <td className="btn text-danger"><ModalExcluir id={row.id_usuario} nome={row.nome}/></td>
                                        </tr>              
                                    );

                                    }else if(id_selecionado == row.id_usuario){

                                        return(
                                            <>

                                            <tr>
                                                <th scope="row" key={row.id_usuario}>{row.id_usuario}</th>
                                                <td>{row.nome}</td>
                                                <td>{row.email}</td>
                                                <td>{row.telefone}</td>
                                                <td>{row.cep}</td>
                                                <td>{row.logradouro}</td>
                                                <td>{row.complemento}</td>
                                                <td>{row.numero}</td>
                                                <td className="btn text-success"><ModalEditar 
                                                            id={row.id_usuario}     
                                                            nome={row.nome} 
                                                            email={row.email}
                                                            telefone={row.telefone}
                                                            cep={row.cep}
                                                            logradouro={row.logradouro}
                                                            complemento={row.complemento}
                                                            numero={row.numero}                                                    
                                                            />
                                                </td>
                                                <td className="btn text-danger"><ModalExcluir id={row.id_usuario} nome={row.nome}/></td>
                                            </tr>



                                            </>
                                        );
                                        
                                    }else if(email_selecionado == row.email){

                                        
                                        return(
                                            <>

                                            <tr>
                                                <th scope="row" key={row.id_usuario}>{row.id_usuario}</th>
                                                <td>{row.nome}</td>
                                                <td>{row.email}</td>
                                                <td>{row.telefone}</td>
                                                <td>{row.cep}</td>
                                                <td>{row.logradouro}</td>
                                                <td>{row.complemento}</td>
                                                <td>{row.numero}</td>
                                                <td className="btn text-success"><ModalEditar 
                                                            id={row.id_usuario}     
                                                            nome={row.nome} 
                                                            email={row.email}
                                                            telefone={row.telefone}
                                                            cep={row.cep}
                                                            logradouro={row.logradouro}
                                                            complemento={row.complemento}
                                                            numero={row.numero}                                                    
                                                            />
                                                </td>
                                                <td className="btn text-danger"><ModalExcluir id={row.id_usuario} nome={row.nome}/></td>
                                            </tr>



                                            </>
                                        );


                                    }
                                }     
                        )}
                             
                            </tbody>
                        </table>
                    </div>            












                    </div>
                   
                </div>
            </div>
        );
    } else {
        return (
            <>
                <div onLoad={window.location.href = "http://localhost:3000/"}>

                </div>
            </>
        );
    }
}


export default AreaAdmCRUD;

