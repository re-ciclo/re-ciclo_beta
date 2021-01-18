import React from 'react';

// Libraries
import { Switch, Route } from 'react-router-dom';

//Components
// Menu
import Home from '../pages/Home';
import AReciclo from '../pages/AReciclo';
import Projeto from '../pages/Projeto';
import Contato from '../pages/Contato';
import Information from '../pages/Information';

// Menu Acesso
import Cadastro from '../pages/Cadastro';
import AmbienteLogin from '../pages/AmbienteLogin';

// Area Usuário
import AreaUsuario from '../pages/AreaUsuario';
import AreaUsuarioResultados from '../pages/AreaUsuarioResultados';
import DadosUsuario from '../pages/DadosUsuario';

// Area Adm
import AreaAdm from '../pages/AreaAdm';
import AreaAdmResultados from '../pages/AreaAdmResultados';
import DadosAdm from '../pages/DadosAdm';
import AreaAdmCRUD from '../pages/AreaAdmCRUD';


const Routes = () =>{

    return(
        <>
            <Switch>
                 {/* Menu */}
                <Route path="/" exact component={Home} />
                <Route path="/areciclo" exact component={AReciclo} />
                <Route path="/projeto" exact component={Projeto} />
                <Route path="/contato" exact component={Contato} />
                <Route path="/information" exact component={Information} />

                {/* Menu Acesso*/}
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/ambientelogin" exact component={AmbienteLogin} />
                
                 {/* Fora do Menu User */}                 
                <Route path="/areausuario" exact component={AreaUsuario} />
                <Route path="/dadosusuario" exact component={DadosUsuario} />
                <Route path="/areausuarioresultados" exact component={AreaUsuarioResultados} />

                {/* Fora do Menu Adm */}
                <Route path="/areaadm" exact component={AreaAdm} />
                <Route path="/areaadmresultados" exact component={AreaAdmResultados} />
                <Route path="/dadosadm" exact component={DadosAdm} />
                <Route path="/areaadmcrud" exact component={AreaAdmCRUD} />
            </Switch>
        </>
    );
}

export default Routes;