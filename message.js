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
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
function send(){
  message=document.getElementById("msg").value
  firebase.dataase().ref(room_name).push({
    username:user_name,
    Message=message,
    likes:0
  });
  document.getElementById("msg").value="";
}