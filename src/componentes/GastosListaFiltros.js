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

class GastosListaFiltros extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(establecerFechaInicio(startDate) );
        this.props.dispatch(establecerFechaFin(endDate) );
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }
    render() {
        return  ( 
        <div>
        
        <input 
        type='text' 
        value={this.props.filtros.texto}
        onChange={(e) => {
            this.props.dispatch(establecerTextoFiltros(e.target.value));
        }} />
        
        <select 
        value={this.props.filtros.ordenarPor}
        onChange={(e) => {
            if (e.target.value === 'fecha') {
                this.props.dispatch(ordenarPorFecha() );
            } else if (e.target.value === 'monto') {
                this.props.dispatch(ordenarPorMonto() );
            }
        }}
        >
        <option value='fecha'>
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

const mapStateToProps = (state) => {
    return { filtros: state.filtros };
};

export default connect(mapStateToProps)(GastosListaFiltros);