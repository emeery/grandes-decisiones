import { Promise } from "core-js";

const promesa = new Promise((resolve, reject)=>{
    
    setTimeout(() => {
        resolve({
            nombre: 'Gerardo',
            edad: 27,

        });
        // reject('hubo un error');
    }, 4000);
});

console.log('antes');

promesa.then((dato) => {
    console.log('1', dato);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('otra promesa');
        }, 4000);
    })
}).then((cadena) => {
    console.log('funciona esto?', cadena);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('despues');