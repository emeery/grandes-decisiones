export const establecerTextoFiltros = (texto='') => ({
    type: 'ESTABLECE_TEXTO_FILTRO',
    texto
});

export const ordenarPorMonto = () => ({
    type: 'ORDENA_POR_MONTO',
});

export const ordenarPorFecha = () => ({
    type: 'ORDENA_POR_FECHA'
});

export const establecerFechaInicio = (fechaInicio) => ({
    type: 'ESTABLECE_FECHA_INICIO',
    fechaInicio
});

export const establecerFechaFin = (fechaFin) => ({
    type: 'ESTABLECE_FECHA_FIN',
    fechaFin
});