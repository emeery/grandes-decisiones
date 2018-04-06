import moment from 'moment';
// valida las fechas y el texto /
// seleccionaGasto
export default (gastos, {texto, ordenarPor, startDate, endDate}) => {
    return gastos.filter((gasto) => {
        const creadoEnElMomento = moment(gasto.date);
        const fechaInicioMatch = startDate ? startDate.isSameOrBefore(creadoEnElMomento, 'day') : true;
        const fechaFinMatch = endDate ? endDate.isSameOrAfter(creadoEnElMomento, 'day'): true;
        const textoMatch = gasto.descripcion.toLowerCase().includes(texto);
        return textoMatch && fechaInicioMatch && fechaFinMatch;
    }).sort(( a , b )=> {
        if (ordenarPor === 'date') {
            return a.date < b.date ? 1 : -1;
        } else if (ordenarPor === 'monto') {
            return a.monto < b.monto ? 1 : -1;
        }
    });
};

// The selectors are functions that take the status of Redux 
// as an argument and return some data to pass to the component.

// const fechaInicioMatch = typeof fechaInicio !== 'number' || gasto.fecha >= fechaInicio;
// const fechaFinMatch = typeof fechaFin !== 'number' || gasto.fecha <= fechaFinMatch;
