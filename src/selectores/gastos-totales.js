export default (gastos) => {
    return gastos
        .map((gasto) => gasto.monto)
        .reduce((suma, valor) => suma + valor, 0); 
};