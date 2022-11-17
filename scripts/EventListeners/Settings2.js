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
const turnOnNoti = document.getElementById("notifications");
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
          // notificationsInfo.reset();
          window.location.href = "/html/main.html";
        });

      // ...
    } else {
      // User is signed out
      // ...
    }
  });
});


function saveSettings() {
  firebase.auth().onAuthStateChanged(user => { //find out who's logged in
    console.log("in save function");
    const n = document.querySelector('#notifications');
    console.log(n.checked); //get checked attribute
    db.collection("users").doc(user.uid).update({ //update user's doc
      notifications: n.checked
    })
  })
}

function showSettings() {
  firebase.auth().onAuthStateChanged(user => {
    db.collection("users").doc(user.uid)
      .get()
      .then(function (doc) {
          console.log("notfications is: " + doc.data().notifications);
        })
      })
  }
  showSettings();