import React from 'react';
import { Link } from 'react-router-dom';
//import {connect } from 'react-redux';
// import {removerGasto} from '../acciones/gastos'; connect 

// destructuracion dispatch
        
//dispatch, id, descripcion, monto, fecha
const GastosListaItem = ({
    id, descripcion, monto, date}) => (
    <div>
        <Link to={`/edita/${id}`}>
        <h3> {descripcion} </h3>
        </Link>
        <h2> {monto} - {date}</h2>
       
    </div>
);
export default GastosListaItem;

// const GastosListaItem = ({ 
//      dispatch, id, descripcion, monto, fecha}) => (
//      <div>
//         <h3> descripcion </h3>
//         <h2>fecha: {fecha} - monto: {monto}</h2>
//         <button onClick={() => {
//             dispatch(removeGasto({ id }));
//         }}
//         > remover </button>
//     </div>
// );
// export default connect()(GastosListaItem);

// <h2> monto fecha </h2>
// <button onClick={() => {
//     dispatch(removerGasto({ id }));
// }}
// > remover </button>