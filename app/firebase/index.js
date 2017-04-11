import firebase from 'firebase';

try {
  const config = {
    apiKey: 'AIzaSyBi2Q7bO8bUWKEesIh6JjFmgfTpXsu0l_M',
    authDomain: 'todo-app-cd5e2.firebaseapp.com',
    databaseURL: 'https://todo-app-cd5e2.firebaseio.com',
    storageBucket: 'todo-app-cd5e2.appspot.com',
    messagingSenderId: '937712064266',
  };

  firebase.initializeApp(config);
} catch (e) {
  //
}

export const firebaseRef = firebase.database().ref();
export default firebase;
