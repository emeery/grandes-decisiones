import React from 'react';
import GastosLista from './GastosLista'
import GastosListaFiltros from './GastosListaFiltros';
import GastosSumario from './GastosSumario';
const PaginaEscritorio = () => (
    <div>
        <GastosSumario/> 
        <GastosListaFiltros/>
        <GastosLista/>
    </div>
); export default PaginaEscritorio;

