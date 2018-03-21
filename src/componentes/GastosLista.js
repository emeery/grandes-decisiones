import React from 'react';
import { connect } from 'react-redux';
import GastosListaItem from './GastosListaItem';
import seleccionaGastos from '../selectores/gastos';

// conecta tu componente a la tienda redux
const GastosLista = (props) => (
    <div><h1>Expendio Lista</h1>
        {props.gastos.length}
        {props.gastos.map((gastitos) => {
           return <GastosListaItem 
                key={gastitos.id} {...gastitos}/>
        })}
    </div>
); 
// definimos lo que queremos de la tienda
// y definimos el componnte GastosLista 

const mapStatetoProps = (state) => {
    return { 
        gastos: seleccionaGastos(state.gastos, state.filtros)
    };
};
export default connect(mapStatetoProps)(GastosLista);
