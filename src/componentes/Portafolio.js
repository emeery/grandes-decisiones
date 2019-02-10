import React from 'react';
import {Link} from 'react-router-dom';
 const Portafolio = () => (
    <div>
        <h2>My Trabajo</h2>
        <h4>Proyectos creados por mi.</h4>
        <Link to='/portafolio/1' > Item 1 </Link>
        <Link to='/portafolio/2'exact='true'> Item 2 </Link>
    </div>
 ); export default Portafolio;