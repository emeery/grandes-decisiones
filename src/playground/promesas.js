import { Promise } from "core-js";

const promesa = new Promise((resolve, reject)=>{
    
    setTimeout(() => {
        // resolve({
        //     nombre: 'Gerardo',
        //     edad: 27
        // });
        reject('hubo un error');
    }, 4000);
});

console.log('antes');

promesa.then((dato) => {
    console.log(dato);
}).then((datito) => {
    console.log('1', datito);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('despues');