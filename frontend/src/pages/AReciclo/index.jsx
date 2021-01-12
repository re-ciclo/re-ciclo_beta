import React from 'react';
// Libraries

//Components

const AReciclo = () =>{

    return(
        <div className="container-fluid bg-light">
            <div className="row my-2">
                <h1 className="ml-2">AReciclo</h1>
            </div>
            
                <div className="row">
                    <div className="col-12">
                        <h2>Nossa História</h2>
                        <p>
                            A Re-ciclo surgiu em 2020 como projeto acadêmico da instituição Recode Pro e idealizado pela Squad 07.
                            Nosso objetivo é trazer uma solução em prol do Desenvolvimento Sustentável visando um dos objetivos da ONU: Consumo e Produção Responsáveis. 
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2>Nossa Missão</h2>
                        <p>
                             Criamos uma aplicação que vai conectar pessoas que residem em moradias populares a pontos de coleta. 
                             Além de levarmos informações sobre reciclagem as pessoas terão acesso a páginas personalizadas para realizar uma boa gestão de recicláveis.
                             Através de parceiros será disponibilizada toda a infraestrutura necessária para a implementação do projeto 
                             (armazenagem, coleta, controle da quantidade/peso, gestão dos materiais e valores).
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2>Nossos Valores</h2>
                        <p>
                            A Re-ciclo compreende a importância do equilíbio ambiental que nosso planeta necessita e tem como compromisso levar essa responsabilidade a pessoas 
                            que não dispõe de condições para aderir à reciclagem de lixo em seu dia a dia. Através de informações, estrutura e conscientização acreditamos que a 
                            reciclagem pode levar mais qualidade de vida para pessoas de baixa renda.
                        </p>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2>Nossa Visão</h2>
                        <p>
                            O projeto tem como finalidade reverter os valores que são gerados através da venda do lixo reciclável para ser utilizados como benefício de todos moradores.
                            Cada material será avaliado, seus valores serão acumulados e administrados pelo parceiro e revertido em forma de manutenção para o condomínio (pintura, encanamento, reforma da área de lazer, jardinagem).
                        </p>
                    </div>
                </div>
            
        </div>
    );
}


export default AReciclo;