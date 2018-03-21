import { createStore, combineReducers } from 'redux';
import gastosReducer from '../reducers/gastosReducer';
import filtrosReducer from '../reducers/filtrosReducer';  
// reducer general
export default () => {
    const tienda = createStore(
        combineReducers({ 
            gastos: gastosReducer,
            filtros: filtrosReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); return tienda;
};