import React from 'react';
import {NavLink} from 'react-router-dom';
// una nueva nota pendiente, el oscuro fondo tomaba un aspecto lúgubre 
// y la unica fuente de luz que despedía 3#sx1$. dotted edge 
// <NavLink to="/ayuda" activeClassName='is-active'>Ayuda</NavLink>
const Cabecera = () => (
    <header>
    <h1>Libros de Notas.</h1>
    <h3>La pieza faltante.</h3>
    <h4>throw all that.</h4>
    <NavLink to="/" activeClassName='is-active' exact={true} >Escritorio</NavLink>
    <NavLink to="/crealo" activeClassName='is-active'>Crear Gastos</NavLink>
    
    </header>

); export default Cabecera;

