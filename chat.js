// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCHJQNpexuSgaj5Y037SgJS87vvARaNe0U",
  authDomain: "lest-chat-10dbc.firebaseapp.com",
  databaseURL: "https://lest-chat-10dbc-default-rtdb.firebaseio.com",
  projectId: "lest-chat-10dbc",
  storageBucket: "lest-chat-10dbc.appspot.com",
  messagingSenderId: "102846365609",
  appId: "1:102846365609:web:128b2b03451f45166b8eb8"
};
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



// Initialize Firebase
