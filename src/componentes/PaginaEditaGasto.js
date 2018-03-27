import React from 'react';
import {connect} from 'react-redux';
import GastosForm from './GastosForm';
import {
    editarGasto, 
    removerGasto 
} from '../acciones/gastos';

const PaginaEditaGasto = (props) => {
    return ( 
        <div>
        <GastosForm
        gasto ={ props.gasto }
        onSubmit ={( gasto ) => {
            props.dispatch( editarGasto(props.gasto.id, gasto));
            props.history.push('/');
        }}
        />
        <button onClick={() => {
            props.dispatch( removerGasto({id: props.gasto.id}));
            props.history.push('/')
        }}> X </button>
    </div> );
};
// subconjunto 
const mapStateToProps = (state, props) => {
    return { 
        gasto: state.gastos.find((gasto) => gasto.id === props.match.params.id) 
    };
};

export default connect(mapStateToProps)(PaginaEditaGasto);

