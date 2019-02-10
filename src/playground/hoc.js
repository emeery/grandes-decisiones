// hoc - un componnte que renderiza otro componente 
import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
    <div>
    <h2>Informacion</h2>
    <p>La informacion es: {props.info}</p>
    </div>
);

const conAccesoRestringido = (ComponenteHijo) => {
    return (props) => (
        <div>
        {props.esAdmin && <p> Esto es informacion privada</p>}
        <ComponenteHijo {...props} />
        </div>
    );
};

const requiereAutenticacion = (ComponenteHijo) => {
    // return jsx 
    return (props) => (
        <div>
            {props.esAut ? (
                <ComponenteHijo {...props} />
            ) : (
                <p>Debes Registrarte</p>
            )}
        </div>
    );
};

const AdminInfo = conAccesoRestringido(Info);
const AutInfo = requiereAutenticacion(Info);
// ReactDOM.render(<AdminInfo 
// esAdmin={true}
// info='Servicio a la Comunidad'/>, 
// document.getElementById('app') );

ReactDOM.render(<AutInfo
    esAut={true}
    info='Servicio a la Comunidad'/>, 
    document.getElementById('app') );