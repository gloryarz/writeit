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


const uploader = document.getElementById('uploader');
// Evento del botón para subir archivos
document.getElementById('btnFile').addEventListener('change', (el) => {
    let file = el.target.files[0];
    console.log(file.name)
    if (file.name.includes('.mp3')){
        let storageRef = firebase.storage().ref('music/' + file.name);
    let task = storageRef.put(file);
    task.on('state_changed', 

        function progress (snapshot) {
            var percentage = (snapshot.bytesTransferred /
            snapshot.totalBytes) * 100;
            uploader.value = percentage;
        }, 
        function error(err) {

        },
        function completed() {
 
        }

);
    } else if (file.name.includes('.jpg') || file.name.includes('.png') ) {
        let storageRef = firebase.storage().ref('images/' + file.name);
    let task = storageRef.put(file);
    task.on('state_changed', 

        function progress (snapshot) {
            var percentage = (snapshot.bytesTransferred /
            snapshot.totalBytes) * 100;
            uploader.value = percentage;
        }, 
        function error(err) {

        },
        function completed() {
            console.log('completed');
        }
    )} else {
        alert('Escoge un archivo .mp3, .jpg o .png')
    }
});

const btnDown = document.getElementById('btnDown');
