import { createStore, combineReducers,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';  
import gastosReducer from '../reducers/gastosReducer';
import filtrosReducer from '../reducers/filtrosReducer';  

const componePotencia = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
// reducer general
export default () => {
    const tienda = createStore(
        combineReducers({ 
            gastos: gastosReducer,
            filtros: filtrosReducer
        }),
        applyMiddleware(thunk)
    ); return tienda;
};