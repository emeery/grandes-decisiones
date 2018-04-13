import uuid from 'uuid';
import basedatos from '../firebase/firebase';

// exporta una accion que llama a una funcion y un objeto gasto
export const crearGasto = (gasto) => ({
    type: 'CREAR_GASTO',
    gasto
});

export const empezarCrearGasto = (gastoDato= {}) => {
    return (dispatch) => {
        const { descripcion = '', nota = '', 
        monto= 0, date=0} = gastoDato;
        const gasto = {descripcion, nota, monto, date };
        basedatos.ref('gastos').push(gasto).then((ref) => {
            dispatch(crearGasto({
                id: ref.key,
                ...gasto
            }));
        });
    };
}

export const removerGasto = ({ id } = {}) => ({
    type: 'REMUEVE_GASTO',
    id
});
// editar descripcion o monto, 
export const editarGasto = (id, update) => ({
    type: 'EDITAR_GASTO',
    id,
    update
});