const firebaseConfig = {
    apiKey: "AIzaSyBkQgwKH5_ijLgtzzypWGZn-DbhkXWQfBM",
    authDomain: "chat-app-77aec.firebaseapp.com",
    databaseURL: "https://chat-app-77aec-default-rtdb.firebaseio.com",
    projectId: "chat-app-77aec",
    storageBucket: "chat-app-77aec.appspot.com",
    messagingSenderId: "580456015499",
    appId: "1:580456015499:web:ca0ab3a564b86a5419568e",
    measurementId: "G-7XEKDQKXM2"
  };
  
  firebase.initializeApp(firebaseConfig);




function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}


user_name=localStorage.getItem("user_name", user_name);
room_name=localStorage.getItem("room_name", room_name);

function send()
{
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  })
}

function getData() {firebase.database().ref("/"+room_name).on('value', function(snapshot) {document.getElementById("output"

firebase_message_id = childKey;
message_data = childData;
//start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message=message_data['message'];
like = message_data ['like'];
name_with_tag = "<h4>"+ name +"</h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Likes ;"+ like +"</button>";

row = name_with_tag + message_with_tag +like_button;
document.getElementById("output").innerHTML += row;
//end code
})};
getData();

function updateLike(message_id)
{
  console.log("clicked")
}