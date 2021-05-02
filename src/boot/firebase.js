import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

var firebaseConfig = {
  apiKey: "AIzaSyAczu6EROsCrUzBjVZ3Eem8n8TieXyoPJU",
  authDomain: "maverick-2df9b.firebaseapp.com",
  databaseURL: "https://maverick-2df9b-default-rtdb.firebaseio.com",
  projectId: "maverick-2df9b",
  storageBucket: "maverick-2df9b.appspot.com",
  messagingSenderId: "1086402461655",
  appId: "1:1086402461655:web:a1d0f570423d9b52629592"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
