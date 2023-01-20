var firebaseConfig = {
  apiKey: "AIzaSyDaHxLr5YBObsotfFNEzr_E6cc0axRQFSA",
  authDomain: "chat-app100-f111a.firebaseapp.com",
  databaseURL: "https://chat-app100-f111a-default-rtdb.firebaseio.com",
  projectId: "chat-app100-f111a",
  storageBucket: "chat-app100-f111a.appspot.com",
  messagingSenderId: "1020203998332",
  appId: "1:1020203998332:web:b54cb6f3911aa1f0ffbdf9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user").innerHTML = "Welcome " + user_name + "!";

room_name = localStorage.getItem("room_name");
document.getElementById("room").innerHTML = "Room: " + room_name;

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location="chat_room.html";
  
  
}
 
function logoutUser()
{
  
    
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
    
    window.location = "index.html";
    
};
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="chat_room.html";

}

function getdata()
{firebase.database().ref("/").on('value',
function (snapshot)   {document.getElementById("output").innerHTML=
"";snapshot.array.forEach(function (childSnapshot) {childkey = 
childSnapshot.key;
Room_names=childKey;
//start code//
console.log("Room Name -" + Room_names);
row="<div class='room_name' id="+ Room_names +"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//end code// 
})
});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="chat_room.html";
}