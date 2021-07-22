import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCyILhAinfXbJAIiUIj1Uvgb6yHfHKxe2U",
  authDomain: "meme-website-bc.firebaseapp.com",
  projectId: "meme-website-bc",
  storageBucket: "meme-website-bc.appspot.com",
  messagingSenderId: "973411943270",
  appId: "1:973411943270:web:3ee83c3b46149cb915bea7"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
