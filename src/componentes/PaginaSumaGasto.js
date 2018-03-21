import React from 'react';
import {connect} from 'react-redux';
import GastosForm from './GastosForm';
import {crearGasto} from '../acciones/gastos';
// props - gastillo
const PaginaSumaGasto = (props) => (
    <div><h1>Tu gasto de hoy ? </h1>
        <GastosForm
        onSubmit={(gasto) => {
            props.dispatch(crearGasto(gasto));
            props.history.push('/');
        }} />
    </div>
); 

export default connect()(PaginaSumaGasto);

