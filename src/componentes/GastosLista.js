import React from 'react';
import { connect } from 'react-redux';
import GastosListaItem from './GastosListaItem';
import seleccionaGastos from '../selectores/gastos';
import gastos from '../test/accesorios/gastos';

// conecta tu componente a la tienda redux
export const GastosLista = (props) => (
    <div>
        {
            props.gastos.length === 0 ? (
            <p> No hay Gastos ! </p>
        ) : (
            props.gastos.map((gastitos)=>{
                return <GastosListaItem 
                key={gastitos.id} 
                {...gastitos}
                />;
            })
        )}
        
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
