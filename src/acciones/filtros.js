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

export const establecerFechaInicio = (startDate) => ({
    type: 'ESTABLECE_FECHA_INICIO',
    startDate
});

export const establecerFechaFin = (endDate) => ({
    type: 'ESTABLECE_FECHA_FIN',
    endDate
});