// Initialize Firebase
var config = {
  apiKey: "AIzaSyDRnt-RINN9TA3B-04CVHQPoPmvbx8KwpQ",
  authDomain: "bitacora-94f01.firebaseapp.com",
  databaseURL: "https://bitacora-94f01.firebaseio.com",
  projectId: "bitacora-94f01",
  storageBucket: "bitacora-94f01.appspot.com",
  messagingSenderId: "10160378360"
};
firebase.initializeApp(config);
var db = firebase.firestore();
var storage = firebase.storage(); // Storage
const settings = { timestampsInSnapshots: true };
db.settings(settings);