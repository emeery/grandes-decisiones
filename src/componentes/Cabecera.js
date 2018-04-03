import React from 'react';
import {NavLink} from 'react-router-dom';

// <NavLink to="/ayuda" activeClassName='is-active'>Ayuda</NavLink>
const Cabecera = () => (
    <header>
    <h1>Libros de Notas.</h1>
    <h3>La pieza faltante.</h3>
    <NavLink to="/" activeClassName='is-active' exact={true} >Escritorio</NavLink>
    <NavLink to="/crealo" activeClassName='is-active'>Crear Gastos</NavLink>
    
    </header>

); export default Cabecera;

