import React from 'react';

//Components
import Title from '../../components/Title';

//styles and images
import './Information.css';
import Img01 from './img/lixeiras.jpg';
import Img02 from './img/reciclagem.jpg';

const Information = () =>{

    return(
        <>

        <div className="container-fluid">         
            
            <div className="row">
                <Title title='Informativos' />

                <h4 className="mt-5 mx-auto">Saiba mais sobre as cores da reciclagem</h4>

                <div className="col-12 text-center mt-5">                                      
                    <img src={Img01} alt="imagem de lixeiras coloridas para reciclagem"/>                     
                </div>

                <div className="col-12 my-3">                                      
                    <p className="mx-5 txt-information">Para que a reciclagem seja possível, o material de descarte deve ser separado de acordo com sua natureza. Assim, foi desenvolvido um sistema de cores e vamos apresentar a seguir como separar, de forma correta, cada resíduo produzido na sua residência.
                        Seguindo as recomendação apresentadas nesse artigo, estaremos dando a destinação correta ao lixo que produzimos e fazendo uma diferença enorme na preservação do meio ambiente!<p/>

                        <h5 className="text-blue">Azul: Papel</h5>
                        <p className="txt-information">A decomposição do papel pode variar de dois meses a dois anos. O principal problema para a natureza são as tintas usadas na impressão pois contém metais pesados em suas fórmulas contaminando o solo e a água quando descartados em aterros. Antes do descarte evite que o papel tenha contato com resíduos líquidos como o café, leite, sucos, restos de alimentos e papel de banheiro. Use um saco de lixo distinto para esse material e coloque nas lixeiras de cor azul.</p>
                        
                        <h5 className="text-red">Vermelho: Plástico</h5>
                        <p className="txt-information">A reciclagem do plástico acontece a partir dos processos de separação (conforme sua composição de origem), revalorização (volta a ser matéria-prima) e transformação (gera um novo produto). Existem empresas especializadas na reciclagem de plásticos. Descarte nas lixeiras de cor vermelha.</p>
                        
                        <h5 className="text-green">Verde: Vidro</h5>
                        <p className="txt-information">O tempo estimado para a decomposição do vidro na natureza é de 10 mil anos. A boa notícia é que esse material pode ser reciclado infinita vezes sem perder a qualidade. A correta separação deve ser feita observando as cores dos objetos (branca, verde e marrom) e sempre que possível separar os vidros planos de outros formatos como garrafas, vasos ou frascos. Ao descartar o vidro, use as lixeiras de cor verde.</p>
                        
                        <h5 className="text-yellow">Amarelo: Metal</h5>
                        <p className="txt-information">Peças enferrujadas e que não tem mais utilidade podem ser vendidas em centros de reciclagem. Esses centros destinam esse material para fundições que os derretem e os transformam em matéria prima para novos itens. Sempre que possível, separe as peças de metal ferroso dos demais metais. Os metais ferrosos são magnéticos e atraem os imãs. Mesmo que não tenha como fazer essa separação, destine o material de descarte, feito de metal, nas lixeiras amarelas.</p>
                        
                        <h5 className="text-brown">Marrom: Orgânicos</h5>
                        <p className="txt-information">O lixo orgânico é produzido por resíduos de origem animal ou vegetal. Necessita de uma destinação correta para evitar consequências como mau cheiro ou aparecimento de animais, como ratos e insetos, que podem transmitir muitas doenças. A melhor forma de uso do lixo orgânico é através da compostagem e fertilização do solo para a agricultura. A maioria das cidades possui serviço de coleta do lixo orgânico. Deve ser acondicionado em sacos plásticos muito bem fechados e colocados nas lixeiras de cor marrom.</p>
                    </p>            
                </div>
            </div>


            <div className="row">                

                <h4 className="mt-5 mx-auto">Benefícios da reciclagem</h4>

                <div className="col-12 text-center">                                      
                    <img src={Img02} alt="imagem de pessoas beneficiando o mundo"/>                     
                </div>

                <div className="col-12 my-3">                                      
                    <p className="mx-5 txt-information">
                        Os benefícios são muitos, tanto para o meio ambiente, quanto para a área socioeconômica.
                    </p>

                    <p className="mx-5 txt-information">
                        Para o meio ambiente o grande benefício é a redução de resíduos, evitando a produção de novos materiais como o papel, que exige o corte de árvores que emite gases como metano e gás carbônico, consumo de energia, agressões ao solo, ar e água.
                    </p>

                    <p className="mx-5 txt-information">
                        Na questão socioeconômica, a reciclagem contribui para o uso racional dos recursos naturais e da reposição dos recursos que podem ser reaproveitados. A reciclagem também proporciona uma melhora na qualidade de vida das pessoas, com a preservação das condições ambientais, 
                        e também gera renda para aquelas pessoas que encontram nessa atividade uma oportunidade de negócio.
                    </p>

                    <p className="mx-5 txt-information">
                    Reciclar embalagens usadas, ou outros materiais, traz diversas vantagens ambientais e econômicas:

                        <ul>
                            <li>contribui para o uso racional dos recursos naturais;</li>
                            <li>reduz a acumulação de resíduos;</li>
                            <li>evita a produção de novos produtos;</li>
                            <li>evita o consumo de energia;</li>
                            <li>evita agressões ao solo, ar e água;</li>                            
                            <li>proporciona fonte de renda;</li> 
                            <li>proporciona melhor qualidade vida.</li>
                        </ul>
                    </p>                               
                </div>
            </div>

        </div>
        </>
    );
}

export default Information;