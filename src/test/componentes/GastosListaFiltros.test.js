import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {GastosListaFiltros} from '../../componentes/GastosListaFiltros';
import {filtros, altfiltros} from '../accesorios/filtros'

let setTextFilters, sortByAmount, sortByDate, 
setStartDate, setEndDate, envoltura;

beforeEach(()=>{
    setTextFilters = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    envoltura = shallow(
        <GastosListaFiltros
        filtros={filtros}
        establecerTextoFiltros={setTextFilters}
        ordenarPorMonto={sortByAmount}
        ordenarPorFecha={sortByDate}
        establecerFechaInicio={setStartDate}
        establecerFechaFin={setEndDate}
        /> 
    );
});

test('snapshot GastosListaFiltros',()=>{
    expect(envoltura).toMatchSnapshot();
});

test('snapshot GastosListaFiltros con altfiltros',()=>{
    envoltura.setProps({
        filtros: altfiltros
    });
    expect(envoltura).toMatchSnapshot();
});

test('controla el cambio de texto',()=>{
    const value = 'renta';
    envoltura.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilters).toHaveBeenLastCalledWith(value);
});

test('deberia ordenar por fecha',()=>{
    const value = 'date';
    envoltura.setProps({
        filtros: altfiltros
    });
    envoltura.find('select').simulate('change',{
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('deberia ordenar por monto',()=>{
   const value = 'monto';
   envoltura.find('select').simulate('change',{
       target: { value }
   });
   expect(sortByAmount).toHaveBeenCalled();
});

test('controla el cambio de fecha', ()=>{
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    envoltura.find('DateRangePicker').prop('onDatesChange')({startDate, endDate }); 
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('deberia controlar cambio enfoque', ()=>{
    const calendarFocused = 'endDate';
    envoltura.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(envoltura.state('calendarFocused')).toBe(calendarFocused);
});


