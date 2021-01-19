import React from 'react'
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';







export const LineChartCondominoPais = (props) => {


    // alert(`Chart ${props.visaoDados}`)

    let periodo = props.visaoDados;
    let condominio = [];
    let pais = [];
    let semana = [];
    let dc28 = []; let dc21 = []; let dc14 = []; let dc7 = [];
    let dp28 = []; let dp21 = []; let dp14 = []; let dp7 = [];

    if (periodo == 28) {

        dc28 = [148, 152, 167, 155];
        dp28 = [175, 140, 180, 191];

        condominio = dc28; pais = dp28; semana = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];

    } else if (periodo == 21) {

        dc21 = [148, 152, 167];
        dp21 = [175, 140, 180];
        condominio = dc21; pais = dp21; semana = ['Semana 1', 'Semana 2', 'Semana 3'];

    } else if (periodo == 14) {

        dc14 = [148, 152];
        dp14 = [175, 140];
        condominio = dc14; pais = dp14; semana = ['Semana 1', 'Semana 2'];
    } else if (periodo == 7) {

        dc7 = [148];
        dp7 = [175];
        condominio = dc7; pais = dp7; semana = ['Semana 1'];
    }







    let data = {
        labels: semana,
        datasets: [
            {
                label: 'Quilo por Semana no Condomínio',
                data: condominio,
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
                pointBorderColor: 'rgba(255, 206, 86, 0.2)',
            },
            {
                label: 'Quilo por Semana no País',
                data: pais,
                borderColor: ['rgba(54, 162, 235, 0.2)'],
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
                pointBorderColor: 'rgba(54, 162, 235, 0.2)',
            }
        ]
    }


    // const options = {
    //     title:{
    //         display: true,
    //         text: 'Line Chart'
    //     },
    //     scales:{
    //         yAxes: [
    //             {
    //                 ticks:{
    //                     min: 100,
    //                     max: 300,
    //                     stepSize: 40
    //                 }
    //             }
    //         ]
    //     }
    // }


    return (
        <div>
            <Line data={data}
            //  options={options} 

            />
        </div>
    )
}



export const BarChartSemanas = (props) => {



    let periodo = props.visaoDados;
    let condominio = [];

    let semana = [];
    let dc28 = []; let dc21 = []; let dc14 = []; let dc7 = [];


    if (periodo == 28) {

        dc28 = [148, 152, 167, 155];


        condominio = dc28; semana = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'];

    } else if (periodo == 21) {

        dc21 = [148, 152, 167];

        condominio = dc21; semana = ['Semana 1', 'Semana 2', 'Semana 3'];

    } else if (periodo == 14) {

        dc14 = [148, 152];

        condominio = dc14; semana = ['Semana 1', 'Semana 2'];
    } else if (periodo == 7) {

        dc7 = [148];

        condominio = dc7; semana = ['Semana 1'];
    }


    let data = {
        labels: semana,
        datasets: [
            {
                label: 'Quilo por Semana no Condomínio',
                data: condominio,
                borderColor: ['rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 86, 1),',
                    'rgba(255, 206, 86, 1),',
                    'rgba(255, 206, 86, 1),'
                ],
                backgroundColor: ['rgba(0, 204, 0, 0.3)',
                    'rgba(0, 204, 0, 0.3)',
                    'rgba(0, 204, 0, 0.3)',
                    'rgba(0, 204, 0, 0.3)'
                ],
                pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
                pointBorderColor: 'rgba(255, 206, 86, 0.2)',

            }
        ]
    }

    const options = {
        // title:{
        //     display: true,
        //     text: 'Line Chart'
        // },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 300,
                        stepSize: 20
                    }
                }
            ]
        }
    }

    return (
        <div>
            <Bar data={data}
                options={options}

            />
        </div>
    )
}


export const RoscaChart = (props) => {

    let periodo = props.visaoDados;
    let faltaMeta = 0;
    let arrecadadoMeta = 0;

    if (periodo == 28) {
        arrecadadoMeta = 210;
        faltaMeta = 1890;
    } else if (periodo == 21) {
        faltaMeta = 1870;
        arrecadadoMeta = 130;
    } else if (periodo == 14) {
        faltaMeta = 1900;
        arrecadadoMeta = 100;
    } else if (periodo == 7) {
        faltaMeta = 1950;
        arrecadadoMeta = 50;
    }

    // alert(`f ${faltaMeta}`)
    // alert(`a ${arrecadadoMeta}`)

    let data = {
        labels: [
            'Falta Meta',
            'Arrecadado',

        ],
        datasets: [
            {
                label: 'Quilo por Semana no Condomínio',
                data: [faltaMeta, arrecadadoMeta],
                backgroundColor: ['rgba(255, 99, 132, 0.5)',
                    'rgba(0, 204, 0, 0.5)'
                ],
                borderColor: ['rgba(255, 99, 132, 0.1)',
                    'rgba(0, 204, 0, 0.1)'

                ]
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Pintura dos Apartamentos. Meta 2000 R$'
            // },
            // scales:{
            //     yAxes: [
            //         {
            //             ticks:{
            //                 min: 0,
            //                 max: 300,
            //                 stepSize: 20
            //             }
            //         }
            //     ]
        }
    }

    return (
        <div>
            <Doughnut data={data}
                options={options}

            />
        </div>
    )
}






export const RadarChart = (props) => {

    let periodo = props.visaoDados;
    let materiais = [];
    

    if(periodo == 28){
        materiais = [10, 20, 15, 12, 26, 2, 2, 14];
    }else if(periodo == 21){
        materiais = [10, 12, 15, 11, 8, 20, 2, 10];
    }else if(periodo == 14){
        materiais = [20, 10, 12, 15, 10, 26, 2, 22];
    }else if(periodo == 7){
        materiais = [10, 10, 19, 5, 4, 16, 9, 15];
    }

    // alert(`f ${faltaMeta}`)
    // alert(`a ${arrecadadoMeta}`)

    let data = {
        labels: [
            'Papelão',
            'Papel Branco',
            'Papel Misto',
            'Lata de Aluminio',
            'Cobre',
            'Vidro',
            'Plástico Rigido',
            'Pet'

        ],
        datasets: [
            {
                label: 'Quilo do Material na Semana',
                data: materiais,
                backgroundColor: ['rgba(54, 162, 235, 0.2)'

                ],
                borderColor: ['rgba(54, 162, 235, 0.2)',


                ]
            }
        ]
    }

    const options = {
        // title:{
        //     display: true,
        //     text: 'Pintura dos Apartamentos. Meta 2000 R$'
        //  },
        // scales:{
        //     yAxes: [
        //         {
        //             ticks:{
        //                 min: 0,
        //                 max: 300,
        //                 stepSize: 20
        //             }
        //         }
        //     ]
        //  }
    }

    return (
        <div>
            <Radar data={data}
                options={options}

            />
        </div>
    )
}