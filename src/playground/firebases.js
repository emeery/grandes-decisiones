const firebaseNotas = {
    peliculas: {
      hfhhfhfhfhf: {
        titulo: 'Tiempos Violentos',
        director: 'Tarantino'
      } ,
      sjsjksjksjks:  {
        titulo: 'El exterminador',
        director: 'James Cameron'
      }
    }
  };
  
  const notas = [{
    id: '1234',
    nota: 'una primera nota',
    cuerpo: 'el ave emprendió el vuelo'
  }, {
    id: '4321',
    nota: 'una segunda nota',
    cuerpo: 'todos contaban la misma historia'
  }];

basedatos.ref('notas').set(notas);
basedatos.ref('notas/12');

// .remove()
basedatos.ref('notas/-L9ryl3-rEbXwFWXiWy2').update({
  body: 'Escucha musica un rato'
});

basedatos.ref('notas').push({
  titulo: 'Que hacer',
  body: 'Lee un rato!'
});
// imrpime el nombre, puesto y compañia
basedatos.ref().on('value', (snapshot) => {
  const val = snapshot.val()
  console.log(`
  ${val.nombre} era un 
  ${val.empleo.puesto} en 
  ${val.empleo.compañia} `); 
});

// estableve base de datos
basedatos.ref().set({
  nombre: 'Gerardo Manuel Bautista',
  edad: 27,
  empleo: {
    puesto: 'Analista/Programador',
    compañia: 'BBVA',
    lapso: '6 meses'
  },
  estadoCivil: 'soltero',
  nivelEstres: 6,  
  locacion: {
    estado: 'Distrito Federal',
    delegacion: 'Gustavo A. Madero',
    calle: 'Eduardo Molina '
  }
}).then(()=>{
  console.log('datos salvados !');
}).catch((e) => {
  console.log('hay error', e);
});

basedatos.ref().set({

})

// captura de los valores de la base
const onValueChange = basedatos.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
}, (e) => {
  console.log('error la busca de los datos');
});
// .then, .catch, .off, setTimeOut(() => {})

setTimeout(() => {
  basedatos.ref('edad').set(28);
}, 3500);

// anula todas las llamadas de retorno (callbacks)
setTimeout(() => {
  basedatos.ref().off('value', onValueChange);
}, 7000);

setTimeout(() => {
  basedatos.ref('edad').set(29);
}, 10500);
basedatos.ref('locacion/estado')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('hubo un error');
  });


basedatos.ref('esSoltero')
  .remove()
  .then(() => {
    console.log('los datos fueron removidos');
  }).catch((e) => {
    console.log('no se removieron los datos', e);
  });
basedatos.ref('edad').set(23);
basedatos.ref('locacion/estado').set('Veracruz');

basedatos.ref('atributos').set({
  altura: 170,
  peso: 70
}).then(() => {
  console.log('segunda llamada funciono')
}).catch((e) => {
  console.log('no funciono para el segundo error', e);
});

basedatos.ref('esSoltero').set(null);

basedatos.ref().set({
  nombre: ''
})

basedatos.ref()
  .remove()
  .then(() => {
    console.log('dato eliminado');
  }).catch((e) => {
    console.log('el dato no se pudo eliminar');
  })

basedatos.ref().update({
  'locacion/delegacion': 'Benito Juarez', 
  nivelEstres: 7
});
  
//   esSoltero: null,
//   'locacion/estado': 'Veracruz'  

basedatos.ref('gastos').push({
    descripcion: 'libro',
    nota: '1984, Orwell',
    monto: 250,
    date: 'KGDFWUQFGUGWÑ'
  });
  
  basedatos.ref('gastos').push({
    descripcion: 'audífonos',
    nota: '',
    monto: 6000,
    date: 'KGDFWSSUQFGUGWÑ'
  });
  
  basedatos.ref('gastos').push({
    descripcion: 'bicicleta',
    nota: 'una nota',
    monto: 12000,
    date: '',
    date: 'KGDFWDDDAAAÑ'
  });
  

  basedatos.ref('gastos').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

basedatos.ref('gastos').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

basedatos.ref('gastos').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
})

basedatos.ref('gastos').on('value', (snapshot) => {
  
    const gastos = [];
      
      snapshot.forEach((hijoSnap) => {
        gastos.push({
          id: hijoSnap.key,
          ...hijoSnap.val()
        });
      });
      console.log(gastos);
  });