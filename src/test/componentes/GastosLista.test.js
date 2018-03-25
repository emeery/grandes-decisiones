import React from 'react';
import { shallow } from 'enzyme';
import {GastosLista} from '../../componentes/GastosLista';
import gastos from '../accesorios/gastos';

test('deberia renderizar la cabecera ', ()=>{
    const envoltura = shallow(
        <GastosLista gastos={gastos} />);
    expect(envoltura).toMatchSnapshot();
});

