import React from 'react';
import {connect} from 'react-redux';
import GastosForm from './GastosForm';
import {
    editarGasto, 
    removerGasto 
} from '../acciones/gastos';

export class PaginaEditaGasto extends React.Component {
    onSubmit = ( gasto ) => {
        this.props.editarGasto(this.props.gasto.id, gasto);
        this.props.history.push('/');
    };
    removerEsto = () => {
        this.props.removerGasto({id: this.props.gasto.id});
        this.props.history.push('/');
    };
    render() {
        return(<div>
            <GastosForm
            gasto={this.props.gasto}
            onSubmit={this.onSubmit}
            />
            <button 
            onClick={this.removerEsto} 
            > X </button>
        </div>
        );
    }
};

// subconjuntos
const mapStateToProps = (state, props) => ({
    gasto: state.gastos.find((gasto) => gasto.id === props.match.params.id) 
});

const mapDispatchToProps = (dispatch, props) => ({
    editarGasto: (id, gasto) => dispatch(editarGasto(id, gasto)),
    removerGasto: (data) => dispatch(removerGasto( data ))
});

export default connect(mapStateToProps, mapDispatchToProps )(PaginaEditaGasto);


