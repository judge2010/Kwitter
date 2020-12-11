
//ADD YOUR FIREBASE LINKS HERE

  var username = localStorage.getItem("username");
  function  Logout(){
   localStorage.removeItem("username");
   window.location = "index.html"
  }
  document.getElementById("welcome").innerHTML="Welcome " + username +"!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       
      //End code
      });});}
getData();
