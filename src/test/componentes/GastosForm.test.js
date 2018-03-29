import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
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

test('cambio de monto montoCambio invalido',()=>{
    const value = '12.122';
    const envoltura = shallow(<GastosForm/>);
    envoltura.find('input').at(1).simulate('change',{
        target : { value }
    });
    expect(envoltura.state('monto')).toBe('');
}); 
// sin haber sido llamado
test('onSubmit GastosForm',()=>{
    const onSubmitSpy = jest.fn();
    const envoltura = shallow(<GastosForm 
        gasto={gastos[0]} onSubmit={onSubmitSpy} /> );
    envoltura.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    
    expect(envoltura.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
            descripcion: gastos[0].descripcion,
            monto: gastos[0].monto,
            nota: gastos[0].nota,
            date: gastos[0].date
    });
});

test('establece la fecha onDatesChange DtaPcker',()=>{
    const ahora = moment();
    const envoltura = shallow(<GastosForm/>);
    envoltura.find('SingleDatePicker').prop('onDateChange')(ahora);
    expect(envoltura.state('date')).toEqual(ahora)
});

test('establece onFocusChange DtaPcker',()=>{
    const focused= true;
    const envoltura = shallow(<GastosForm/> );
    envoltura.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(envoltura.state('calendarFocused')).toBe(focused);
});