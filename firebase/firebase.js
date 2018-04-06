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

firebase.database().ref().set({
  nombre: 'Jerry Bautista'
});