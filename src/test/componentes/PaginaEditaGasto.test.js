import React from 'react';
import {shallow} from 'enzyme';
import gastos from '../accesorios/gastos';
import {removerGasto, editarGasto} from '../../acciones/gastos';
import {PaginaEditaGasto} from '../../componentes/PaginaEditaGasto';

let editaGasto, remueveGasto, envoltura, history;
// spies
beforeEach(() => {
    editaGasto = jest.fn();
    remueveGasto = jest.fn();
    history = { push: jest.fn() };
    envoltura = shallow(
        <PaginaEditaGasto 
        editarGasto={editarGasto} 
        remueveGasto={removerGasto}
        history={history}
        gasto={gastos[2]}
        />
    );
});
test('snapshot PaginaEditaGasto',()=>{
    expect(envoltura).toMatchSnapshot();
});

// test('deberia controlar editarGasto',()=>{
//     const envoltura = shallow(<PaginaEditaGasto/>);
//     expect(envoltura).toMatchSnapshot();
// });
