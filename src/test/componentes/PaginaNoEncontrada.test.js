import React from 'react';
import { shallow } from 'enzyme';
import PaginaNoEncontrada 
from '../../componentes/PaginaNoEncontrada';
test('el componnte PaginaNoEncontrada',()=>{
    const envoltura = shallow(<PaginaNoEncontrada/>);
    expect(envoltura).toMatchSnapshot();
});