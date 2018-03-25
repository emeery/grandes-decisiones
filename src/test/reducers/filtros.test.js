import moment from 'moment';
import 
    filtrosReducer  
    from '../../reducers/filtrosReducer';

test('deberia establecer valores default a los filtros',()=>{
    const estado = filtrosReducer(
        undefined, { type: '@@INIT'});
    expect(estado).toEqual({
        texto: '',
        ordenarPor: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('ordena por monto', ()=>{
    const estado = filtrosReducer(
        undefined, { type: 'ORDENA_POR_MONTO' });
        expect(estado.ordenarPor).toBe('monto');
});

test('ordena por fecha', ()=>{
    const estadoActual = {
        texto:'',
        ordenarPor: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const accion = {type: 'ORDENAR_POR_FECHA'}
    const estado = filtrosReducer(estadoActual, accion);
    expect(estado.ordenarPor).toBe('date');
});

test('deberia establecer texto filtro', ()=>{
    const texto = 'esto es un texto';
    const accion = {
        type: 'ESTABLECE_TEXTO_FILTRO',
        texto
    };
    const estado = filtrosReducer(undefined, accion);
    expect(estado.texto).toBe(texto);  
});

test('deberia establecer filtro fechaInicio',()=>{
    const startDate = moment();
    const accion = {
        type: 'ESTABLECE_FECHA_INICIO',
        startDate
    };
    const estado = filtrosReducer(undefined, accion);
    expect(estado.startDate).toEqual(startDate);
});


test('deberia establecer filtro fechaFin',()=>{
    const endDate = moment();
    const accion = {
        type: 'ESTABLECE_FECHA_FIN',
        endDate
    };
    const estado = filtrosReducer(undefined, accion);
    expect(estado.endDate).toEqual(endDate);
});