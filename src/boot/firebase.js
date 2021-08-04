import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

var firebaseConfig = {
  apiKey: "AIzaSyDPHHVsdDPE_HH3ygWrA11lIxpgIjzCAsE",
  authDomain: "maverick-d131b.firebaseapp.com",
  databaseURL: "https://maverick-d131b-default-rtdb.firebaseio.com",
  projectId: "maverick-d131b",
  storageBucket: "maverick-d131b.appspot.com",
  messagingSenderId: "19495247977",
  appId: "1:19495247977:web:f366a4b77c7f102ff682f8"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export {
  firebaseAuth,
  firebaseDb
}
