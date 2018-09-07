import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDQGHt32HeQRxWuCxWgGV11NodMOib2LaE',
  authDomain: 'cropcat-28625.firebaseapp.com',
  databaseURL: 'https://cropcat-28625.firebaseio.com',
  storageBucket: 'cropcat-28625.appspot.com',
  messagingSenderId: '505217482394'
}
const fire = firebase.initializeApp(config)

export {
  fire
}
