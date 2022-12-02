// Gets the elements from the activity form.
const activityInfo = document.getElementById("activityInfo");
const activityName = document.getElementById("activityName");
const activityDetails = document.getElementById("activityDetails");
const estimatedTime = document.getElementById("estimatedTime");
const estimatedTimeType = document.getElementById("estimatedTimeType");
const activityDate = document.getElementById("activityDate");
const activityTime = document.getElementById("activityTime");
const activityCommute = document.getElementById("activityCommute");
const urgencyFactor = document.getElementById("urgencyFactor");
const activitySubmit = document.getElementById("submit");

// Submits the data stored into firebase
activitySubmit.addEventListener('click', (e) => {
  e.preventDefault();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;

      console.log(uid);
      let docID = db.collection("users").doc(uid).collection("activities").doc();
      docID.set({
        name: activityName.value,
        details: activityDetails.value,
        timeEstimated: estimatedTime.value,
        timeType: estimatedTimeType.value,
        dueDate: activityDate.value,
        timeDue: activityTime.value,
        commute: activityCommute.value,
        urgencyFactor: urgencyFactor.value,
        ID_Name: docID.id,
      })
        .then(() => {
          activityInfo.reset();
          window.location.href = "/html/main.html";
        });


      // ...
    } else {
      // User is signed out
      // ...
    }
  });

});