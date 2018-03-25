import gastosReducer from '../../reducers/gastosReducer';
import gastos from '../accesorios/gastos'; // array
import { crearGasto } from '../../acciones/gastos';


test('deberia establecer valores default',()=>{
    const estado = gastosReducer(undefined, {type: '@@INIT'});
    expect(estado).toEqual([]);
});
test('deberia remover gasto',()=>{
    const accion = {
        type: 'REMUEVE_GASTO',
        id: gastos[1].id
    };
    const estado = gastosReducer(gastos, accion);
    expect(estado).toEqual([gastos[0], gastos[2] ]);
});
test('no deberia remover gasto si no es el id',()=>{
    const accion = {
        type: 'EDITAR_GASTO',
        id: -1
    };
    const estado = gastosReducer(gastos, accion);
    expect(estado).toEqual(gastos);
});

test('deberia crear gasto',()=>{
    const gasto = {
        id: 201,
        descripcion: 'ni idea',
        nota: '',
        monto: 3000,
        date: 20000
    };
    const accion = {
        type: 'CREAR_GASTO',
        gasto
    };
    const estado = gastosReducer(gastos, accion);
    expect(estado).toEqual([ ...gastos, gasto]);
});

test('deberia editar gasto',()=>{
    const monto = 2000;
    const accion = {
        type: 'EDITAR_GASTO',
        id: gastos[1].id,
        update: {
            monto
        }
    };
    const estado = gastosReducer(gastos, accion);
    expect(estado[1].monto).toBe(monto);
}); 


test('deberia editar gasto si se encuentra el id ',()=>{
    const monto = 2000;
    const accion = {
        type: 'EDITAR_GASTO',
        id: -1,
        update: {
            monto
        }
    };
    const estado = gastosReducer(gastos, accion);
    expect(estado).toEqual(gastos);
}); 