import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCZd7lkIF8cAKLGA_sLLKSJPjEcRELLoBQ',
  authDomain: 'cropchat-6f6a0.firebaseapp.com',
  databaseURL: 'https://cropchat-6f6a0.firebaseio.com',
  storageBucket: 'cropchat-6f6a0.appspot.com',
  messagingSenderId: '350220892398'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
