import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates'; 

import {
    establecerTextoFiltros, 
    ordenarPorMonto, 
    ordenarPorFecha,
    establecerFechaInicio, 
    establecerFechaFin
} from '../acciones/filtros';

export class GastosListaFiltros extends React.Component {
    state = {
        calendarFocused: null
    };
    // this.props.dispatch
    onDatesChange = ({startDate, endDate}) => {
        this.props.establecerFechaInicio(startDate);
        this.props.establecerFechaFin(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextoChange = (e) => {
        this.props.establecerTextoFiltros(e.target.value);
    };
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.ordenarPorFecha();
        } else if (e.target.value === 'monto') {
            this.props.ordenarPorMonto();
        }
    };
    render() {
        return  ( 
        <div>
        
        <input 
        type='text' 
        value={this.props.filtros.texto}
        onChange={this.onTextoChange}
        />
        
        <select 
        value={this.props.filtros.ordenarPor}
        onChange={this.onSortChange}
        >
        
        <option value='date'>
            fecha </option>
        <option value='monto'>
            monto </option>
        
        </select>
        <DateRangePicker
        startDate={this.props.filtros.startDate}
        endDate={this.props.filtros.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
        />
    </div> );
    }
};

const mapStateToProps = (state) => ({
    filtros: state.filtros });
const mapDispatchToProps = (dispatch) => ({
    establecerTextoFiltros: (texto) => dispatch(establecerTextoFiltros(texto) ),
    ordenarPorMonto: () => dispatch(ordenarPorMonto() ),
    ordenarPorFecha: () => dispatch(ordenarPorFecha() ),
    establecerFechaInicio: (startDate) => dispatch(establecerFechaInicio(startDate) ),
    establecerFechaFin: (endDate) => dispatch(establecerFechaFin(endDate) )
});
export default connect(mapStateToProps, mapDispatchToProps)(GastosListaFiltros);