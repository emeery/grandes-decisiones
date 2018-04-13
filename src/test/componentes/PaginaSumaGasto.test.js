import React from 'react';
import {shallow} from 'enzyme';
import {PaginaSumaGasto} from '../../componentes/PaginaSumaGasto';
import gastos from '../accesorios/gastos';
import { empezarCrearGasto } from '../../acciones/gastos';

let empezarUnGasto, history, envoltura;

beforeEach(()=>{
    empezarUnGasto = jest.fn();
    history = { push: jest.fn() };
    envoltura = shallow(
        <PaginaSumaGasto
        history={history}
        empezarCrearGasto={empezarUnGasto}      
        />);
});

test('componente PaginaSumaGasto',()=>{
    expect(envoltura).toMatchSnapshot()
});

test('controla onSubmit PaginaSumaGasto ',()=>{
    envoltura.find('GastosForm').prop('onSubmit')(gastos[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(empezarUnGasto).toHaveBeenLastCalledWith(gastos[1]);
});