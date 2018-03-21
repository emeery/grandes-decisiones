import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// ad, remve, set text, sort date, sort mount, set start, set end
// store.subscribe, store.dispatch, createStore

tienda.subscribe(() => {
    const estado = tienda.getState();
    const losGastos = mostrarGastos
    (estado.gastos, estado.filtros );
    console.log(losGastos);
});


const gastoUno = tienda.dispatch(
    sumaGasto({ 
        descripcion: 'Renta', monto: 1000, fecha: -21000 
}));
const gastoDos = tienda.dispatch(
    sumaGasto({ 
        descripcion: 'Café', monto: 130, fecha: -1000
}));



const demoState = {
  gastos: [{
    id: 'poijasdfhwer',
    descripcion: 'January Rent',
    nota: 'This was the final payment for that address',
    monto: 54500,
    fecha: 0
  }],
  filtros: {
    texto: 'rent',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};



// tienda.dispatch(removerGasto({ id: gastoUno.gasto.id }));
//tienda.dispatch(establecerTextoFiltros('rentota'));
// tienda.dispatch(establecerTextoFiltros());
 //tienda.dispatch(ordenarPorMonto());
// tienda.dispatch(ordenarPorFecha());
// tienda.dispatch(establecerFechaInicio(125));
// tienda.dispatch(establecerFechaInicio());
// tienda.dispatch(establecerFechaFin(1250));

//tienda.dispatch(editarGasto( gastoDos.gasto.id, { monto: 500, nota: 'AYYY' }));