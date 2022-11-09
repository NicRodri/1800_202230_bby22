// function saveSelect() {
//     const submit = document.getElementById("submit");

//     function getSave() {
//         window.location.href = "/html/main.html";
//     }

//     submit.addEventListener("click", getSave);
// }

// saveSelect();




const notificationsInfo = document.getElementById("notification-information");
const notificationsSubmit = document.getElementById("submit");
const turnOnNoti = document.getElementById("turn-on-noti");
const sound = document.getElementById("sound");
const pause = document.getElementById("pause");




notificationsSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
  
  
  
        var uid = user.uid;
  
        console.log(uid);
  
        db.collection("users").doc(uid).collection("notifications").doc().set({
          // Can be changed for different forms
          notifications: turnOnNoti.value,
          sound: sound.value,
          pause: pause.value,
          
        })
          .then(() => {
            notificationsInfo.reset();
            window.location.href = "/html/main.html";
          });
  
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  });
  