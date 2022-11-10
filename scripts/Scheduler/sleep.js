const sleepInfo = document.getElementById("sleepInfo");
const sleepTime = document.getElementById("sleepTime");
const sleepHours = document.getElementById("sleepHours");
const sleepSubmit = document.getElementById("submit");

// sleepSubmit.addEventListener('click', (e) => {
//   e.preventDefault();

function populateInfo(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User

      var uid = user.uid;
      console.log(uid);

      db.collection("users").doc(uid).collection("sleep").doc().get()
        .then(userDoc => {
        // Sleep_Time: sleepTime.value,
        // Sleep_Hours: sleepHours.value,

        var sleepTimeInfo = userDoc.data().sleepTime;
        var sleepHourInfo = userDoc.data().sleepHours;

        if (sleepTimeInfo != null) {
          sleepTime.value = sleepTimeInfo;
        }
        if (sleepHourInfo != null) {
          sleepHours.value = sleepHourInfo;
        }
      })
        // .then(() => {
        //   // activityInfo.reset();
        //   // window.location.href = "/html/main.html";
        // });


      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
populateInfo();


// });
