import seleccionaGastosTotales from 
'../../selectores/gastos-totales';
import gastos from '../accesorios/gastos';

test('deberia retornar 0 si no hay gasto',()=>{
    const res = seleccionaGastosTotales([]);
    expect(res).toBe(0);
});

test('deberia agregar un solo gasto',()=>{
    const res = seleccionaGastosTotales([gastos[0]]);
    expect(res).toBe(195);
});


test('deberia agregar multiples gastos',()=>{
    const res = seleccionaGastosTotales(gastos );
    expect(res).toBe(114195);
});