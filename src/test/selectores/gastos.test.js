import seleccionaGasto from '../../selectores/gastos';
import moment from 'moment';
// valueOf : devueve el valor primitivo de un objeto 

const gastos = [{
    id: '1',
    descripcion: 'goma',
    nota: '',
    monto: 195,
    date: 0,
},{
    id: '2',
    descripcion: 'renta',
    nota: '',
    monto: 109500,
    date: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    descripcion: 'tarjeta credito',
    nota:'',
    monto: 4500,
    date: moment(0).add(4, 'days').valueOf()
}];    

test(' deberia filtrar por el valor texto', ()=>{
    const filtros = {
        texto: 'e',
        ordenarPor: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const resultado = seleccionaGasto(
        gastos, filtros );
    expect(resultado).toEqual([
        gastos[2],
        gastos[1]
    ]);
});

test('deberia filtrar por fecha inicio',()=>{
    const filtros = {
        texto:'',
        ordenarPor: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const resultado = seleccionaGasto(
        gastos, filtros);
    expect(resultado).toEqual([
        gastos[2],
        gastos[0]
    ]);
});

test('deberia filtrar por fecha fin',()=>{
    const filtros = {
        texto:'',
        ordenarPor: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days'),
    };
    const resultado = seleccionaGasto(
        gastos, filtros );
    expect(resultado).toEqual([
        gastos[0],
        gastos[1]
    ]);
});

test('deberia de ordenar por fecha',()=>{
    const filtros = {
        texto:'',
        ordenarPor: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const resultado = seleccionaGasto(
        gastos, filtros );
    expect(resultado).toEqual([
        gastos[2],
        gastos[0],
        gastos[1]
    ]);
});

test('deberia de ordenar por monto',()=>{
    const filtros = {
        texto:'',
        ordenarPor: 'monto',
        startDate: undefined,
        endDate: undefined
    };
    const resultado = seleccionaGasto(
        gastos, filtros );
    expect(resultado).toEqual([
        gastos[1],
        gastos[2],
        gastos[0]
    ]);
});