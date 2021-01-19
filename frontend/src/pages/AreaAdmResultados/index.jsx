import React from 'react';


//Components
import { SidebarAdm } from '../../components/Sidebar';
import Title from '../../components/Title';

import { BarChartSemanas, LineChartCondominoPais, RoscaChart, RadarChart } from '../../components/Charts';
import './style.css';

const AreaAdmResultados = () => {

    const verifica = localStorage.getItem('@frontend/nivel_acesso');


    let  [visaoDados, setVisaoDados] = React.useState(28);
    

    function update(){

         setVisaoDados( visaoDados = document.getElementById('periodo').value);
        
    }
    

    // Receber Tabela de reciclados

    const  [dados, setDados] = React.useState([]);
    const[todos, setTodos] = React.useState(true);
	React.useEffect( async () =>{
        console.log("Trouxe os dados");
        const url = "http://localhost/Recode%20Pro/ProjetoSqua07Entrega2/re-ciclo/backend/SendData/jsonReciclados.php";
        const response = await fetch(url);
        setDados(await response.json());
    },[todos])


    if (verifica == 1) {
        return (
            <div className="container-fluid">

                <Title title='Administrador - Painel de Resultados' />

                <div className="row" >
                    <div className="col-12 col-sm-2 d-flex justify-content-center">
                        <div className="ml-2 w-100">
                            <SidebarAdm />
                        </div>
                    </div>

                    <div className="col-12 col-sm-9">
                        <div className="row my-2 justify-content-around">
                           <select id="periodo" name="periodo" onChange={update}> 
                                <option value ="7">Semana 1</option>
                                <option value="14">Semana 2</option>
                                <option value="21">Semana 3</option>
                                <option value="28" checked>Semana 4</option>
                            </select>
                        </div>
                        <div className="row my-2 justify-content-around">
                            <div className="col-12-w-20 col-sm-5 bg-light border shadow">
                                <LineChartCondominoPais visaoDados={visaoDados} />
                                
                            </div>
                            <div className="col-12-w-20 col-sm-5 bg-light border shadow" >

                                <BarChartSemanas visaoDados={visaoDados}/>
                            </div>
                        </div>
                        <div className="row my-2 justify-content-around">
                            <div className="col-12-w-20 col-sm-5  bg-light border shadow">
                                    <RadarChart visaoDados={visaoDados}/>
                                </div>
                            <div className="col-12-w-20 col-sm-5 bg-light border shadow">
                                <RoscaChart visaoDados={visaoDados} />
                            </div>
                        </div>
                        <div className="row my-2 justify-content-around">
                            <div className="col-12-w-20 col-sm-11 my-5 border shadow" style={{"height":"350px","overflow": "auto","border-radius":"5px"}} >

                            <table class="table">
                                <thead class="thead-light">
                                    <tr>
                                        
                                        <th scope="col">ID</th>
                                        <th scope="col">Material</th>
                                        <th scope="col">Preço Kg</th>
                                        <th scope="col">Peso Total</th>
                                        <th scope="col">Valor Total</th>
                                        <th scope="col"><center>Data</center></th>
                                        
                                    
                                    </tr>
                                </thead>
                            <tbody>
                            {dados.map( row =>{
                                
                                return(
                                <tr>
                                    <th scope="row" key={row.id_material}>{row.id_reciclado}</th>
                                    <td>{row.nome}</td>
                                    <td>{row.preco_kg}</td>
                                    <td>{row.peso_total}</td>
                                    <td>{row.valor_total}</td>
                                    <td>{row.data}</td>                               
                                </tr> 
                                    
                                ) }
                                
                               
                            )}
                            </tbody>
                            </table>
                            

                            </div>
                        </div>
                        
                        <br /><br /><br /><br /><br /><br /><br /><br />
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


export default AreaAdmResultados;



