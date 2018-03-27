import React from 'react';
import {Link} from 'react-router-dom';
const PaginaNoEncontrada = () => (
    <div>
        <h2>404 - UPS!</h2>
        <h3>No es lo que buscas?</h3>
        <Link to='/'>a casa</Link>
    </div>
); export default PaginaNoEncontrada;