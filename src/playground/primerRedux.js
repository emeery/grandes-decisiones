import {createStore} from 'redux';
// dos puntos

// ACCIONES: unica fuente de informacio a tu store  
const unIncremento = ({incrementoPor = 1} = {}) => ({
    type: 'INCREMENTO',
    incrementoPor
});
// funcion que regresa un objeto de forma implicita 
const unDecremento = ({decrementoPor = 1} = {}) => ({
    type: 'DECREMENTO',
    decrementoPor
});
const establecerContador = ({contador}) => ({
    type: 'SET',
    contador
});
const unReset = () => ({
    type: 'RESET'
});
// operador ternario para utilizar el valor default o el valor pasado

// REDUCERS: funciones puras, no modificar el estado o
const contadorReducer = (state = {contador:0}, action) => {
    switch (action.type) {
        case 'INCREMENTO': 
        return { contador: state.contador + action.incrementoPor
        };
        case 'DECREMENTO': 
        return { contador: state.contador - action.decrementoPor
        };
        case 'SET': 
        return { contador: action.contador };
        case 'RESET': 
        return { contador: 0 }
        default: return state;
    }
};

const store = createStore(contadorReducer);

const suscripcion = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(unIncremento({ incrementoPor: 5}) );
store.dispatch(unIncremento());

store.dispatch(unReset());
//store.dispatch(establecerContador() );

store.dispatch(unDecremento());
store.dispatch(unDecremento({ decrementoPor: 10}));

store.dispatch(establecerContador({ contador: 100}));


