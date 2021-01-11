import React from 'react';

// Libraries
import { Switch, Route } from 'react-router-dom';

//Components
// Menu
import Home from '../pages/Home';
import AReciclo from '../pages/AReciclo';
import Projeto from '../pages/Projeto';
import Contato from '../pages/Contato';


// Login


// Area Usuario/Adm

const Routes = () =>{

    return(
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/areciclo" exact component={AReciclo} />
                <Route path="/projeto" exact component={Projeto} />
                <Route path="/contato" exact component={Contato} />
            </Switch>
        </>
    );
}


export default Routes;