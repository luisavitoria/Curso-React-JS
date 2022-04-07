import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDbGdh-CbOQ7UBTh99sEcZI3vF76vwJ_eU",
    authDomain: "sistema-ae870.firebaseapp.com",
    projectId: "sistema-ae870",
    storageBucket: "sistema-ae870.appspot.com",
    messagingSenderId: "329987104973",
    appId: "1:329987104973:web:654c1770f3cb50e3570984",
    measurementId: "G-V1GX152B47"
};
  
  // Initialize Firebase
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase