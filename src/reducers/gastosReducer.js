// gastos reducer

const gastosReducerDefaultState = [];
export default (state=gastosReducerDefaultState, action) => {
    switch(action.type) { 
        case 'SUMA_GASTO':
        return [...state, action.gasto];
        case 'REMUEVE_GASTO':
        return state.filter(({ id }) => id !== action.id);
        case 'EDITA_GASTO':
        // agrramos descripcion, nota O monto
        // accion.update sobreescribe solo los que pasan 
        return state.map((gastito) => {
            if(gastito.id === action.id) {
                return { ...gastito, ...action.update}
            } else { return gastito; }
        });
        default: return state; 
    }
};