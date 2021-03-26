import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyCPyjUrEo-B4HegApA2y5BqkKCHmyG8Rhc",
  authDomain: "maverick-91a14.firebaseapp.com",
  databaseURL: "https://maverick-91a14-default-rtdb.firebaseio.com",
  projectId: "maverick-91a14",
  storageBucket: "maverick-91a14.appspot.com",
  messagingSenderId: "1089137349686",
  appId: "1:1089137349686:web:cc94703af442337623b497"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
