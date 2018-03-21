import uuid from 'uuid';

export const crearGasto = ({
    descripcion = '', 
    nota = '',
    monto = 0,
    date = 0
 }) => ({
    type: 'SUMA_GASTO',
    gasto: {
        id: uuid(),
        descripcion,
        nota,
        monto,
        date
    }
});
// 
export const removerGasto = ({ id } = {}) => ({
    type: 'REMUEVE_GASTO',
    id
});
// editar descripcion o monto, 
export const editarGasto = (id, update) => ({
    type: 'EDITA_GASTO',
    id,
    update
});