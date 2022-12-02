const notificationsInfo = document.getElementById("notification-information");
const notificationsSubmit = document.getElementById("submit");
const turnOnNoti = document.getElementById("notifications");
const sound = document.getElementById("sound");


//Stores information of toggles inside firestore.
notificationsSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties



      var uid = user.uid;

      console.log(uid);

      db.collection("users").doc(uid).collection("notifications").doc().set({
          // Can be changed for different forms
          notifications: turnOnNoti.value,
          sound: sound.value,

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


//saves notification status.
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

//shows notification status so when user revisits it stays in its current condition.
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