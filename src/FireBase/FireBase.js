import * as firebase from "firebase";
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBnSqmO2Y2Vi5WKeqwRzxiviHXxkcGGuQ8",
    authDomain: "lppfe-cea75.firebaseapp.com",
    databaseURL: "https://lppfe-cea75.firebaseio.com",
    projectId: "lppfe-cea75",
    storageBucket: "lppfe-cea75.appspot.com",
    messagingSenderId: "827113434324",
    appId: "1:827113434324:web:db8b9f8b3d850326fc1f41",
    measurementId: "G-NH3G2TGW03"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const storage = app.storage();
export const auth = app.auth();
