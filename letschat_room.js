//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDxP8Yw2DYgL8vtln4qikWH6M1VLlCMX2s",
    authDomain: "kwitter-9d16f.firebaseapp.com",
    databaseURL: "https://kwitter-9d16f-default-rtdb.firebaseio.com",
    projectId: "kwitter-9d16f",
    storageBucket: "kwitter-9d16f.appspot.com",
    messagingSenderId: "50232802815",
    appId: "1:50232802815:web:056fbb324485f7fc25bbca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();