import moment from 'moment';
import { 
    establecerFechaInicio, 
    establecerFechaFin,
    establecerTextoFiltros,
    ordenarPorFecha,
    ordenarPorMonto } 
    from '../../acciones/filtros';

test('establece fecha inicio', () => {
    const accion = establecerFechaInicio(moment(0));
    expect(accion).toEqual({
        type: 'ESTABLECE_FECHA_INICIO',
        fechaInicio: moment(0)
    });
});

test(' establcer fecha fin', () =>{
    const accion = establecerFechaFin(moment(0));
    expect(accion).toEqual({
        type: 'ESTABLECE_FECHA_FIN',
        fechaFin: moment(0)
    });
});

test('establecer texto filtros', () => {
    //const accion = establecerTextoFiltros(texto='');
    const texto = 'algo en'
    const accion = establecerTextoFiltros(texto);
    expect(accion).toEqual({
        type: 'ESTABLECE_TEXTO_FILTRO',
        texto
    });
});



test('ordena por monto', ()=>{
    //const accion = ordenarPorMonto();
    expect(ordenarPorMonto()).toEqual({
        type: 'ORDENA_POR_MONTO'});
});
test('ordena por fecha', ()=>{
    expect(ordenarPorFecha()).toEqual({
        type: 'ORDENA_POR_FECHA'
    });
});
