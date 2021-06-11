var firebaseConfig = {
    apiKey: "AIzaSyCIguWYXBEWJ-UPNwSmc7e5N4cnKxk3W7E",
    authDomain: "kwitterpro.firebaseapp.com",
    projectId: "kwitterpro",
    storageBucket: "kwitterpro.appspot.com",
    messagingSenderId: "935759179047",
    appId: "1:935759179047:web:8bb9a07f5c73f9bae1cd02"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name")
  document.getElementById("welcome").innerHTML="WELCOME" + user_name + "!";
  function addroom(){
room_name=document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name" 
});
localStorage.setItem("room_name",room_name);
window.location= "message.html"
  }
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("roomname=" + room_name);
 row="<div class='room_name'id=" + Room_names + "onclick='RedirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
 document.getElementById("list").innerHTML+=row;
 //End code
 });});}
getData();
function RedirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="message.html"
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="login.html";
}