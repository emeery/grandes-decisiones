import React from 'react';
import { shallow } from 'enzyme';
import {GastosLista} from '../../componentes/GastosLista';
import gastos from '../accesorios/gastos';

test('la lista de gastos con algunos gastos', ()=>{
    const envoltura = shallow(
        <GastosLista gastos={gastos} />
    );
    expect(envoltura).toMatchSnapshot();
});

test('los gastosl lista sin contenido',()=>{
    const envoltura = shallow(
        <GastosLista gastos={[]} />
    );
    expect(envoltura).toMatchSnapshot();
});

