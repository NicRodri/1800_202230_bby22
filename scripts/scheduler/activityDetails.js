// used to give functionality to the buttons in the more modal in activity details.
function moreFunctions(collection) {
  let cardTemplate = document.getElementById("activityDetails");
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(uid);
      db.collection("users").doc(uid).collection(collection).get()
        .then(snap => {
          var i = 1;  //if you want to use commented out section
          snap.forEach(doc => { //iterate thru each doc
            if (doc.data().ID_Name == localStorage.getItem("Activity")) {
              var dataName = doc.data().name;
              var dataDetails = doc.data().details;
              var dataDate = doc.data().dueDate;
              var timeDue = doc.data().timeDue;
              var timeEstimated = doc.data().timeEstimated;
              var timeType = doc.data().timeType;
              var urgencyFactor = doc.data().urgencyFactor;
              var dataCommute = doc.data().commute;

              document.getElementById("activityName").value = dataName;
              document.getElementById("activityDetails").value = dataDetails;
              document.getElementById("estimatedTime").value = timeEstimated;
              document.getElementById("estimatedTimeType").value = timeType;
              document.getElementById("activityDate").value = dataDate;
              document.getElementById("activityTime").value = timeDue;
              document.getElementById("activityCommute").value = dataCommute;
              document.getElementById("urgencyFactor").value = urgencyFactor;
            }
            i++;   //if you want to use commented out section
          })
          share();
          deleteActivity(uid);
        })
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}


moreFunctions("activities");

// Opens the share page
function share() {
  const share = document.getElementById("share");
  share.addEventListener("click", function (e) {
    window.location.href = "/html/share/index5.html?" + "$activities$";
  });
}

// Deletes the activity
function deleteActivity(uid) {
  const deleteActivity = document.getElementById("delete");
  const completedActivity = document.getElementById("completedActivity");
  deleteActivity.addEventListener("click", function (e) {
    db.collection("users").doc(uid).collection("activities").doc(localStorage.getItem("Activity")).delete().then(() => {
      console.log("Document successfully deleted!");
      window.location.href = "/html/main.html";

    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  });
}

// Allows the activity to editable
function editUserInfo() {
  //Enable the form fields
  document.getElementById("edit").addEventListener("click", function (e) {
    document.querySelector('.activityFieldSet').disabled = false;
  });
}
editUserInfo();

//Saves/updates the user activity info
function saveUserInfo() {
  const activityName = document.getElementById("activityName");
  const activityDetails = document.getElementById("activityDetails");
  const estimatedTime = document.getElementById("estimatedTime");
  const estimatedTimeType = document.getElementById("estimatedTimeType");
  const activityDate = document.getElementById("activityDate");
  const activityTime = document.getElementById("activityTime");
  const activityCommute = document.getElementById("activityCommute");
  const urgencyFactor = document.getElementById("urgencyFactor");
  const activitySubmit = document.getElementById("save");

  activitySubmit.addEventListener('click', (e) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        db.collection("users").doc(uid).collection("activities").doc(localStorage.getItem("Activity")).update({
          name: activityName.value,
          details: activityDetails.value,
          timeEstimated: estimatedTime.value,
          timeType: estimatedTimeType.value,
          dueDate: activityDate.value,
          timeDue: activityTime.value,
          commute: activityCommute.value,
          urgencyFactor: urgencyFactor.value,
        })
          .then(() => {
            document.querySelector('.activityFieldSet').disabled = true;
            console.log("Document successfully updated!");
          });
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  });

}
saveUserInfo();
