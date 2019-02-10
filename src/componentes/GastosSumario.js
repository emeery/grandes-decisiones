import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import seleccionaGastos from '../selectores/gastos'; // creadoEnElMomento
import seleccionaGastosTotal from '../selectores/gastos-totales';

export const GastosSumario = ({ gastosContador, gastosTotal}) => {
    //const sinGastos = gastosContador === 0 ? 'no hay gastos' : gastosContador;
    const gastosPalabra = gastosContador === 1 ? 'Gasto' : 'Gastos';
    //gastosPalabra === 0 ? '' : gastosContador;
    const formatoGastosTotal = numeral(gastosTotal / 100).format('$0,0.00'); 
    
    return(<div>
        <h2> 
        Viendo -
        {gastosContador}
        {gastosPalabra} -
        Total - 
        {formatoGastosTotal}</h2>
        </div>);
};

const mapStatetoProps = (state) => {
    const gastosVisibles = seleccionaGastos(state.gastos, state.filtros );
    return {
        gastosContador: gastosVisibles.length,
        gastosTotal: seleccionaGastosTotal(gastosVisibles)
    };
};

export default connect(mapStatetoProps)(GastosSumario)