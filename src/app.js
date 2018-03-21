import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configuraTienda from './tienda/configuraTienda';
import { crearGasto } from './acciones/gastos';
import { establecerTextoFiltros } from './acciones/filtros';
import mostrarGastos from './selectores/gastos';
import 'normalize.css/normalize.css';
import './estilos/styles.scss';

const tienda = configuraTienda();
tienda.dispatch(crearGasto({ descripcion: 'factura Agua', monto: 4500}) );
tienda.dispatch(crearGasto({ descripcion: 'factura Gas', date: 1000}) );
tienda.dispatch(crearGasto({ descripcion: 'renta', monto: 109500 }));

// setTimeout(() => {
//     tienda.dispatch(establecerTextoFiltros('factura'));
// }, 2000 );

// setTimeout(() => {
//     tienda.dispatch(establec erTextoFiltros('blinblin'));
// }, 3000 );
// imnutable: objeto que no puede cambiar su estado
const estado = tienda.getState();
const gastosVisibles = mostrarGastos(estado.gastos, estado.filtros );
console.log(gastosVisibles);

const jsx = (<div>
    <Provider store={tienda} >
        <AppRouter />
    </Provider>
</div>);
ReactDOM.render(jsx, document.getElementById('app'));

