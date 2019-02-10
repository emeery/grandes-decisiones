import React from 'react';
import {shallow} from 'enzyme';
import gastos from '../accesorios/gastos';
import {PaginaEditaGasto} from '../../componentes/PaginaEditaGasto';
//import { removerGasto } from '../../acciones/gastos';
// paises gerardo
// ghana, egipto, 
let editarGasto, remueveGasto, envoltura, history;
// spies
beforeEach(() => {
    editarGasto = jest.fn();
    remueveGasto = jest.fn();
    history = { push: jest.fn() };
    envoltura = shallow(
        <PaginaEditaGasto 
        editarGasto={editarGasto} 
        removerGasto={remueveGasto}
        history={history}
        gasto={gastos[2]}
        />
    );
});
test('snapshot PaginaEditaGasto', ()=>{
    expect(envoltura).toMatchSnapshot();
});

// this.props.editarGasto(this.props.gasto.id, gasto);
test('deberia controlar editarGasto', ()=>{
    envoltura.find('GastosForm').prop('onSubmit')(gastos[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editarGasto).toHaveBeenLastCalledWith(gastos[2].id, gastos[2]);
    //oltura).toMatchSnapshot();
});

test('deberia controlar removerGasto', ()=>{
    envoltura.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(remueveGasto).toHaveBeenLastCalledWith({
        id: gastos[2].id
    });
});