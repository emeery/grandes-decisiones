import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import 'normalize.css/normalize.css';
import './estilos/styles.scss';
import AppRouter from './routers/AppRouter';
=======
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configuraTienda from './tienda/configuraTienda';
import { crearGasto } from './acciones/gastos';
import { establecerTextoFiltros } from './acciones/filtros';
import mostrarGastos from './selectores/gastos';

import 'normalize.css/normalize.css';
import './estilos/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
>>>>>>> 0608cb1624129c0297eabba445c5e9bc3f131dc5

const tienda = configuraTienda();

<<<<<<< HEAD
ReactDOM.render(<AppRouter/>, document.getElementById('app'));
=======
const jsx = (
    <Provider store={tienda} >
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
>>>>>>> 0608cb1624129c0297eabba445c5e9bc3f131dc5

