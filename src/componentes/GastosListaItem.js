import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
const GastosListaItem = ({
    id, descripcion, monto, date}) => (
    <div>
        <Link to={`/edita/${id}`}>
        <h3> {descripcion} </h3>
        </Link>
        <p> 
            {numeral(monto / 100 ).format('$0,0.00')} 
        - 
            {moment(date).format('MMMM Do, YYYY')}
        </p>
       
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