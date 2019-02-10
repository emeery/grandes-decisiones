import React from 'react';
import {NavLink} from 'react-router-dom';
<<<<<<< HEAD
// una nueva nota pendiente, el oscuro fondo tomaba un aspecto lúgubre 
// y la unica fuente de luz que despedía 3#sx1$. dotted edge 

const Cabecera = () => (
    <header>
    <h1>Portafolio</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>Hogar</NavLink>
    <NavLink to='/portafolio' activeClassName='is-active' exact={true}>Portafolio</NavLink>
    <NavLink to='/contacto'activeClassName='is-active'>Contacto</NavLink>
=======

// <NavLink to="/ayuda" activeClassName='is-active'>Ayuda</NavLink>
const Cabecera = () => (
    <header>
    <h1>Cuales son tus gastos ?</h1>
    <h3>estrategias para el ahorro</h3>
    <NavLink to="/" activeClassName='is-active' exact={true} >Escritorio</NavLink>
    <NavLink to="/crealo" activeClassName='is-active'>Crear Gastos</NavLink>
    
>>>>>>> 0608cb1624129c0297eabba445c5e9bc3f131dc5
    </header>

); export default Cabecera;

