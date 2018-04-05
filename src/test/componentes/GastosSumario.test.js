import React from 'react';
import {shallow } from 'enzyme';
import {GastosSumario} from '../../componentes/GastosSumario';

test('componente GastosSumario con un gasto', ()=>{
    const envoltura = shallow(
        <GastosSumario
            gastosContador={1}
            gastosTotal={120}
        />);
    expect(envoltura).toMatchSnapshot();
});

test('componente GastosSumario con multiples gastos', ()=>{
    const envoltura = shallow(
        <GastosSumario
            gastosContador={2}
            gastosTotal={120932929}
        />);
    expect(envoltura).toMatchSnapshot();
});