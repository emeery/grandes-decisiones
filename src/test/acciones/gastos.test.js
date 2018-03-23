import { 
    crearGasto,
    removerGasto, 
    editarGasto } from '../../acciones/gastos';

    const suma = (a, b) => a + b;
    const unSaludo = (nombre='anonimo') => `hola ${nombre}!`;

test('esperamos dos numeros que sumen 13',()=>{
    const resultado = suma(8, 5);
    expect(resultado).toBe(13);
});

test('deberia remover el gasto', () => {
    const accion = removerGasto({ id: '123abc'});
    expect(accion).toEqual({
        type: 'REMUEVE_GASTO',
        id: '123abc'
    });
});

test('deberia editar el gasto', () => {
    
    const accion = editarGasto('123abc',
        { nota: 'nueva nota valor' });
    
    expect(accion).toEqual({
        type: 'EDITAR_GASTO', 
        id: '123abc',
        update: { nota: 'nueva nota valor'}
    });
});

test('crea el gasto', () =>{
    const datosGasto = {
        descripcion: 'renta',
        monto: 2000,
        date: 1000,
        nota: 'ultima renta del mes'
    };
    const accion = crearGasto(datosGasto);
    expect(accion).toEqual({
        type: 'CREAR_GASTO',
        gasto: {
            ...datosGasto,
            id: expect.any(String)
        }
    })   
});

test('un gasto con valores default', () =>{
    const accion = crearGasto();
    expect(accion).toEqual({
        type: 'CREAR_GASTO',
        gasto: {
            id: expect.any(String),
            descripcion: '',
            monto: 0,
            date: 0,
            nota: ''
        }
    });
});
