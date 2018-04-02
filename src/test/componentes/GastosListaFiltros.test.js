import React from 'react';
import {shallow} from 'enzyme';
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

// beforeEach(()=>{
//     crearGastito = jest.fn();
//     history = { push: jest.fn() };
//     envoltura = shallow(<PaginaSumaGasto
//         history={history}
//         crearGasto={crearGastito}      
//         />);
// });