import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAlWXg3g3EyIwx9HNGDt60MpxlZXeNDQx4",
    authDomain: "my-money-9b328.firebaseapp.com",
    projectId: "my-money-9b328",
    storageBucket: "my-money-9b328.appspot.com",
    messagingSenderId: "951239117287",
    appId: "1:951239117287:web:22f04f78b178ba6b651542"
};


// init firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }