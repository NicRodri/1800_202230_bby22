var currentUser;
const sleepInfo = document.getElementById("sleepInfo");
const sleepTime = document.getElementById("sleepTime");
const sleepHours = document.getElementById("sleepHours");
const sleepSubmit = document.getElementById("submit");

sleepSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  saveUserInfo();
  populateInfo();
});


function populateInfo() {
  firebase.auth().onAuthStateChanged(user => {
    // Check if user is signed in:
    if (user) {

      //go to the correct user document by referencing to the user uid
      currentUser = db.collection("users").doc(user.uid)
      //get the document for current user.
      currentUser.get()
        .then(userDoc => {
          //get the data fields of the user
          var sleepHoursInfo = userDoc.data().sleepHours;
          var sleepTimeInfo = userDoc.data().sleepTime;

          //if the data fields are not empty, then write them in to the form.
          if (sleepHoursInfo != null) {
            sleepHours.value = sleepHoursInfo;
          }
          if (sleepTimeInfo != null) {
            sleepTime.value = sleepTimeInfo;
          }
        })
    } else {
      // No user is signed in.
      console.log("No user is signed in");
    }
  });
}
populateInfo();

function saveUserInfo() {
  firebase.auth().onAuthStateChanged(user => {
    // Check if user is signed in:
    if (user) {
      currentUser.update({
        sleepHours: sleepHours.value,
        sleepTime: sleepTime.value
      }).then(() => {
        console.log("Document successfully updated!");
      })
    } else {
      // No user is signed in.
      console.log("No user is signed in");
    }
  })
}