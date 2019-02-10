import React from 'react';
const PortafolioItem = (props) => (
    <div><h2>Portafolio Item.</h2>
        <h4>Esta pagina con numero de id {props.match.params.id}</h4>
    </div>
); export default PortafolioItem;
