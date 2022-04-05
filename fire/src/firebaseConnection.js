import firebase from 'firebase/app'
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBj7tXkIUy1sZZLsKVjrQ9ukX18Oolw7BE",
    authDomain: "curso-react-bbafb.firebaseapp.com",
    projectId: "curso-react-bbafb",
    storageBucket: "curso-react-bbafb.appspot.com",
    messagingSenderId: "150645905",
    appId: "1:150645905:web:fdb532539071fc83422330",
    measurementId: "G-0EH2XESW89"
};
  
// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
  
