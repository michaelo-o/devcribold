import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCpaC91_0-wlDGfvFf77LxnB12WpQ3_9cs",
    authDomain: "devcrib-4d83d.firebaseapp.com",
    projectId: "devcrib-4d83d",
    storageBucket: "devcrib-4d83d.appspot.com",
    messagingSenderId: "42065434121",
    appId: "1:42065434121:web:1182bdf642c0e607b80ad8"
};


// init firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
