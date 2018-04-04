import React from 'react';
import {NavLink} from 'react-router-dom';

// <NavLink to="/ayuda" activeClassName='is-active'>Ayuda</NavLink>
const Cabecera = () => (
    <header>
    <h1>Cuales son tus gastos ?</h1>
    <h3>estrategias para el ahorro</h3>
    <NavLink to="/" activeClassName='is-active' exact={true} >Escritorio</NavLink>
    <NavLink to="/crealo" activeClassName='is-active'>Crear Gastos</NavLink>
    
    </header>

); export default Cabecera;

