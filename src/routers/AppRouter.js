import React from 'react';
import {
BrowserRouter, Switch,Route, Link, NavLink} from 'react-router-dom';
import Cabecera from '../componentes/Cabecera';
//import GastosLista from '../componentes/GastosLista';

import PaginaEscritorio from '../componentes/PaginaEscritorio';
import PaginaSumaGasto from '../componentes/PaginaSumaGasto';
import PaginaEditaGasto from '../componentes/PaginaEditaGasto';
import PaginaAyuda from '../componentes/PaginaAyuda';
import PaginaNoEncontrada from '../componentes/PaginaNoEncontrada';

const AppRouter = () => (
    <BrowserRouter>
    <div>
            <Cabecera/>
    <Switch>
        <Route path="/" component={PaginaEscritorio} exact={true} />
        <Route path="/crealo" component={PaginaSumaGasto} />
        <Route path="/edita/:id" component={PaginaEditaGasto} />
        <Route path="/ayuda" component={PaginaAyuda} />
        <Route component={PaginaNoEncontrada} />
    </Switch>
    </div>
    </BrowserRouter>
); 
export default AppRouter;