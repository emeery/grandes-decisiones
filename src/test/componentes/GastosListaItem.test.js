import React from 'react';
import {shallow} from 'enzyme';
import gastos from '../accesorios/gastos';
import GastosListaItem 
from '../../componentes/GastosListaItem'
test(' el componente GastosListaItem',()=>{
    const envoltura = shallow(<GastosListaItem 
        {...gastos[1]}
        />
    );
    expect(envoltura).toMatchSnapshot();
});