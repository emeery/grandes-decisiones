import { 
    crearGasto,
    removerGasto, 
    editarGasto,
    empezarCrearGasto } from '../../acciones/gastos';
import basedatos from '../../firebase/firebase';
import gastos from '../accesorios/gastos';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
 
const middleware = [thunk];
const mockStore = configureStore(middleware);

 // const unSaludo = 
 // (nombre='anonimo') => `hola ${nombre}!`;
 const suma = (a, b) => a + b;
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

test('deberia agregar un objeto gasto on valores proporcionados', () =>{
    const accion = crearGasto(gastos[2]);
    expect(accion).toEqual({
        type: 'CREAR_GASTO',
        gasto: gastos[2]
    });   
});

test('deberia agregar gasto a la base de datos y almacenar', (done)=> {
    const estadoInicial = {}
    const store = mockStore(estadoInicial)
    const gastosDatos = {
        descripcion: 'Mousetrap',
        monto: 250,
        nota: 'solo algo mejor',
        date: 1000
    };
    store.dispatch(empezarCrearGasto(gastosDatos))
    .then(() => {
        const acciones = store.getActions();
        expect(acciones[0]).toEqual({
            type: 'CREAR_GASTO',
            gasto: {
                id: expect.any(String),
                ...gastosDatos
            }
        });
        done();
    });
    // return store.dispatch(empezarCrearGasto(gastosDatos))
    // .then(() => {
    //     expect(1).toBe(1);
    //     done();
    // });
});

// swtup add expense actin object with provided values 
// test('un gasto con valores default', () =>{
//     const accion = crearGasto();
//     expect(accion).toEqual({
//         type: 'CREAR_GASTO',
//         gasto: {
//             id: expect.any(String),
//             descripcion: '',
//             monto: 0,
//             date: 0,
//             nota: ''
//         }
//     });
// });
