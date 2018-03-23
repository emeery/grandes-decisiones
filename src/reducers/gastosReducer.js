// gastos reducer

const gastosReducerDefaultState = [];
export default (state=gastosReducerDefaultState, action) => {
    switch(action.type) { 
        case 'CREAR_GASTO':
        return [...state, action.gasto];
        
        case 'REMUEVE_GASTO':
        return state.filter(({ id }) => 
        id !== action.id);
        
        case 'EDITAR_GASTO':
        // agrramos descripcion, nota O monto
        // accion.update sobreescribe solo los que pasan 
        return state.map((gasto) => {
            if(gasto.id === action.id) {
                return { 
                    ...gasto, 
                    ...action.update
                };
            } else { return gasto; }
        });
        default: return state; 
    }
};