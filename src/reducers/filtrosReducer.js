// estado inicial de los filtros
// reducer switch 
import moment from 'moment';
const filtrosReducerDefaultState = {
    texto: '',
    ordenarPor: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};
 // llama a las acciones 
export default (state=filtrosReducerDefaultState, accion) => {
    switch(accion.type) {
        case 'ESTABLECE_TEXTO_FILTRO':
        return { ...state, texto: accion.texto }
        case 'ORDENA_POR_MONTO':
        return {...state, ordenarPor: 'monto' }
        case 'ORDENA_POR_FECHA':
        return {...state, ordenarPor: 'date'}
        case 'ESTABLECE_FECHA_INICIO':
        return {...state, startDate: accion.startDate}
        case 'ESTABLECE_FECHA_FIN':
        return {...state, endDate: accion.endDate}
        default: return state; 
    }
}; 