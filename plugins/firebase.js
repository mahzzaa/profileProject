import * as firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCdVfmUQyUjVtVDF8VWlaM2-SVghxpVEqI",
    authDomain: "profileproject-bd88d.firebaseapp.com",
    projectId: "profileproject-bd88d",
    storageBucket: "profileproject-bd88d.appspot.com",
    messagingSenderId: "533344160136",
    appId: "1:533344160136:web:09fdaf9fcfa29e708a123d",
    measurementId: "G-RPLX7KK7DF"
};


let app = nil;
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

}
export default firebase;