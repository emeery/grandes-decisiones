import React from 'react';
import {connect} from 'react-redux';
import GastosForm from './GastosForm';
import {crearGasto} from '../acciones/gastos';
// props - gastillo

export class PaginaSumaGasto extends React.Component {
    onSubmit = (gasto) => {
        this.props.crearGasto(gasto);
        this.props.history.push('/');
    }
    render() {
        return(<div>
        <h1>Agrega el gasto de hoy</h1>
        <GastosForm
        onSubmit={this.onSubmit}/>
        </div> 
        );
    }
}; 


const mapDispatchToProps = (dispatch) => ({
        crearGasto: (gasto) => dispatch(crearGasto(gasto))
});
export default connect(undefined, mapDispatchToProps)(PaginaSumaGasto);

