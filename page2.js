
var firebaseConfig = {
      apiKey: "AIzaSyDBIBZQlbqySv64wNAIW4LmxXycrcQ28V0",
      authDomain: "tic-tac-toe-7ade5.firebaseapp.com",
      databaseURL: "https://tic-tac-toe-7ade5-default-rtdb.firebaseio.com",
      projectId: "tic-tac-toe-7ade5",
      storageBucket: "tic-tac-toe-7ade5.appspot.com",
      messagingSenderId: "362513387767",
      appId: "1:362513387767:web:9692c4bd9a7f256c3a03f2"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
