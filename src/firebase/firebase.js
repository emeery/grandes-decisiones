import * as firebase from 'firebase';
//import * as gastosAcciones from '../acciones/gastos';

const config = {
    apiKey: "AIzaSyD6hEKDr6qnlpHPhAlCWXb6E7oQy3duBGo",
    authDomain: "expendio-4e2c8.firebaseapp.com",
    databaseURL: "https://expendio-4e2c8.firebaseio.com",
    projectId: "expendio-4e2c8",
    storageBucket: "expendio-4e2c8.appspot.com",
    messagingSenderId: "665971969002"
  };

firebase.initializeApp(config);

const basedatos = firebase.database();

export {firebase, basedatos as default };

// push, on, off, set, update, then, catch - firebase
// push genera una nueva propiedad
// operaciones CRUD


//
// basedatos.ref('gastos').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
