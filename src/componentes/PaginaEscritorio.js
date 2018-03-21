import React from 'react';
import GastosLista from './GastosLista'
import GastosListaFiltros from './GastosListaFiltros';
const PaginaEscritorio = () => (
    <div>
        <GastosListaFiltros/>
        <h2>Página Escritorio.</h2>
        <GastosLista/>
    </div>
); export default PaginaEscritorio;

