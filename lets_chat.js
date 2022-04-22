// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6X60D73JN35_nyII_41wmu1sY6FkG0CA",
    authDomain: "lets-chat-402eb.firebaseapp.com",
    projectId: "lets-chat-402eb",
    storageBucket: "lets-chat-402eb.appspot.com",
    messagingSenderId: "775600773316",
    appId: "1:775600773316:web:040f71a7af00becac35191",
    measurementId: "G-Z016WRMLDL"
  };
  
  user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "letschat_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log ("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >="+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

});
});
}


getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "letschat_page.html";
}

      function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
