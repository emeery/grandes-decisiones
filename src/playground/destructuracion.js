/**
 *    Destructuracion de Objetos.
 */


const persona = {
    nombre: 'Jerry',
    edad: 27,
    direccion: {
        ciudad: 'Distrito Federal',
        temp: 30
    }
};
//const tipo = typeof persona;
const { nombre:primerNombre = 'Anonimo', edad } = persona;
console.log(`tu nombre es ${primerNombre} y tu edad es de ${edad}`);

const { ciudad, temp:temperatura } = persona.direccion;
// ciudad y temperatura existen
if (ciudad && temperatura) {
    console.log(`la temperatura en el ${ciudad} es de ${temperatura} grados.`);
} else { console.log('faltan datos'); } 

// console.log(`${persona.nombre} tiene actualmente ${persona.edad}`); 
const pista = {
    titulo: 'Hear Me Now',
    autor: [
        'Alok',
        'Bruno Martini'
    ], 
    compañia: 'Spinnin Records'
};

const { nombre:nombreEditorial= 'Auto-Publicado'} = libro.editorial;
//const {nombre: nombreEditorial= 'auto-publicado' } = libro; // error
console.log(nombreEditorial); //

/**
 *  Destructuracion de Arreglos
 */

 const direccion = ['Av. Insurgentes', 'Ciudad de México',
    'Distrito Federal', '#E0749' ];
const [, ciudad, estado,] = direccion;
console.log(`Actualmente resides en la ${ciudad}, ${estado}`);

// iced
const item = [ 'Café (frío)', '$2.00', '$2.50', '$2.75'];
const [nombreItem,, Preciomediano] = item;
console.log(`El ${nombreItem} mediano cuesta ${Preciomediano} ` );