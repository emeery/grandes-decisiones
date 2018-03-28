import React from 'react';
import {shallow} from 'enzyme';
import GastosForm 
from '../../componentes/GastosForm';
import gastos from '../accesorios/gastos';
test('componente GastosForm',()=>{
    const envoltura = shallow(<GastosForm/>);
    expect(envoltura).toMatchSnapshot();
});

test('componente GastosForm con gastos',()=>{
    const envoltura = shallow(<GastosForm gasto={gastos[1]}/>);
    expect(envoltura).toMatchSnapshot();
});

test('deberia renderizar error para submit no valido',()=>{
    const envoltura = shallow(<GastosForm/>);
    envoltura.find('form').simulate('submit', {
        preventDefault: () => {}  });
    expect(envoltura.state('error').length).toBeGreaterThan(0);
    expect(envoltura).toMatchSnapshot();
});

test('descripcionCambio', ()=>{
    const value = 'descripciones';
    const envoltura = shallow(<GastosForm />);
    envoltura.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(envoltura.state('descripcion')).toBe(value);
});
// sin at(0) porque solo existe un textarea
test('cambio de nota notaCambio',()=>{
    const value = 'nuevo valor nota';
    const envoltura = shallow(<GastosForm/>);
    envoltura.find('textarea').simulate('change',{
        target: { value }
    });
    expect(envoltura.state('nota')).toBe(value  );
});

test('cambio de monto montoCambio',()=>{
    const value = '23.50';
    const envoltura = shallow(<GastosForm/>);
    envoltura.find('input').at(1).simulate('change',{
        target : { value }
    });
    expect(envoltura.state('monto')).toBe(value);
}); 

test('cambio de monto montoCambio',()=>{
    const value = '12.122';
    const envoltura = shallow(<GastosForm/>);
    envoltura.find('input').at(1).simulate('change',{
        target : { value }
    });
    expect(envoltura.state('monto')).toBe('');
}); 