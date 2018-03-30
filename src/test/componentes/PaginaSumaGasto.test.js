import React from 'react';
import {shallow} from 'enzyme';
import {PaginaSumaGasto} from '../../componentes/PaginaSumaGasto';
import gastos from '../accesorios/gastos';
import { crearGasto } from '../../acciones/gastos';

let crearGastito, history, envoltura;

beforeEach(()=>{
    crearGastito = jest.fn();
    history = { push: jest.fn() };
    envoltura = shallow(<PaginaSumaGasto
        history={history}
        crearGasto={crearGastito}      
        />);
});

test('componente PaginaSumaGasto',()=>{
    expect(envoltura).toMatchSnapshot()
});

test('controla onSubmit PaginaSumaGasto ',()=>{
    envoltura.find('GastosForm').prop('onSubmit')(gastos[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(crearGastito).toHaveBeenLastCalledWith(gastos[1]);
});