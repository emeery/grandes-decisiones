import React from 'react';
import {NavLink} from 'react-router-dom';
// una nueva nota pendiente, el oscuro fondo tomaba un aspecto lúgubre 
// y la unica fuente de luz que despedía 3#sx1$. dotted edge 

const Cabecera = () => (
    <header>
    <h1>Portafolio</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>Hogar</NavLink>
    <NavLink to='/portafolio' activeClassName='is-active' exact={true}>Portafolio</NavLink>
    <NavLink to='/contacto'activeClassName='is-active'>Contacto</NavLink>
    </header>

); export default Cabecera;

