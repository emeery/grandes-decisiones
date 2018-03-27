import React from 'react';
import {shallow} from 'enzyme';
import gastos from '../accesorios/gastos';
import PaginaEscritorio
from '../../componentes/PaginaEscritorio';
test(' el componente escritorio',()=>{
    const envoltura = shallow(<PaginaEscritorio />
    );
    expect(envoltura).toMatchSnapshot();
});