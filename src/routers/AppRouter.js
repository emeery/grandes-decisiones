import React from 'react';
import {
<<<<<<< HEAD
BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import Cabecera from '../componentes/Cabecera';
import Contacto from '../componentes/Contacto';
import Hogar from '../componentes/Hogar';
import PaginaNoEncontrada from '../componentes/PaginaNoEncontrada';
import Portafolio from '../componentes/Portafolio';
import PortafolioItem from '../componentes/PortafolioItem' // COMPONENTE HIJO
=======
BrowserRouter, Switch,Route, Link, NavLink} from 'react-router-dom';
import Cabecera from '../componentes/Cabecera';
//import GastosLista from '../componentes/GastosLista';

import PaginaEscritorio from '../componentes/PaginaEscritorio';
import PaginaSumaGasto from '../componentes/PaginaSumaGasto';
import PaginaEditaGasto from '../componentes/PaginaEditaGasto';
import PaginaAyuda from '../componentes/PaginaAyuda';
import PaginaNoEncontrada from '../componentes/PaginaNoEncontrada';

>>>>>>> 0608cb1624129c0297eabba445c5e9bc3f131dc5
const AppRouter = () => (
    <BrowserRouter>
    <div>
            <Cabecera/>
<<<<<<< HEAD
        <Switch>
            <Route path="/" component={Hogar} exact={true} />
            <Route path="/portafolio" component={Portafolio} exact={true} />
            <Route path="/portafolio/:id" component={PortafolioItem}/>
            <Route path="/contacto" component={Contacto} />
            <Route component={PaginaNoEncontrada} />
        </Switch>
=======
    <Switch>
        <Route path="/" component={PaginaEscritorio} exact={true} />
        <Route path="/crealo" component={PaginaSumaGasto} />
        <Route path="/edita/:id" component={PaginaEditaGasto} />
        <Route path="/ayuda" component={PaginaAyuda} />
        <Route component={PaginaNoEncontrada} />
    </Switch>
>>>>>>> 0608cb1624129c0297eabba445c5e9bc3f131dc5
    </div>
    </BrowserRouter>
); 
export default AppRouter;