
function displayCardTasks(collection) {
  let cardTemplate = document.getElementById("taskCardTemplate");
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
            if (doc.data().ID_Name == localStorage.getItem("Task")) {
              var dataName = doc.data().name;
              var dataDetails = doc.data().details;
              var dataDate = doc.data().date;
              var dataCommute = doc.data().tasksCommute;
              var timeStart = doc.data().timeFrom;
              var timeEnd = doc.data().timeTo;
              var doesNotRepeat = doc.data().tasksDoesNotRepeat;
              // let newcard = cardTemplate.content.cloneNode(true);

              //update title and text and image
              // newcard.querySelector('.name').innerHTML = dataName;
              // newcard.querySelector('.details').innerHTML = dataDetails;
              // newcard.querySelector('.date').innerHTML = "Task on: " + dataDate;
              // newcard.querySelector('.timeStart').innerHTML = timeStart + " - ";
              // newcard.querySelector('.timeEnd').innerHTML = timeEnd;

              document.getElementById("taskName").value = dataName;
              document.getElementById("taskDetails").value = dataDetails;
              document.getElementById("date").value = dataDate
              document.getElementById("timeFrom").value = timeStart
              document.getElementById("timeTo").value = timeEnd
              document.getElementById("does-not-repeat").value = doesNotRepeat
              document.getElementById("commute").value = dataCommute

              //attach to gallery

              // if (Number(dataCommute) > 0) {
              //   console.log(Number(dataCommute));
              //   newcard.querySelector('.commute').innerHTML = "Commute Time: " + dataCommute + " mins";
              // } else {
              //   newcard.querySelector('.commute').innerHTML = "Commute Time: " + "0" + " mins";
              // }
              // document.getElementById(collection + "-go-here").appendChild(newcard);
            }

            i++;   //if you want to use commented out section
          })
          share();
          deleteTask(uid);



          // if (document.getElementById("edit") != null){
          //   editUserInfo();
          // } else {
          //   saveUserInfo();
          // }

        })
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}


displayCardTasks("tasks");

function share() {
  const share = document.getElementById("share");
  share.addEventListener("click", function (e) {
    window.location.href = "/html/share/index5.html?" + "$tasks$";
  });
}

function deleteTask(uid) {
  const deleteTask = document.getElementById("delete");
  const completedTask = document.getElementById("completed");
  deleteTask.addEventListener("click", function (e) {
    db.collection("users").doc(uid).collection("tasks").doc(localStorage.getItem("Task")).delete().then(() => {
      console.log("Document successfully deleted!");
      window.location.href = "/html/main.html";

    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  });
  completedTask.addEventListener("click", function (e) {
    db.collection("users").doc(uid).collection("tasks").doc(localStorage.getItem("Task")).delete().then(() => {
      console.log("Document successfully deleted!");
      window.location.href = "/html/main.html";

    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  });
}

function editUserInfo() {
  //Enable the form fields
  document.getElementById("edit").addEventListener("click", function (e) {
    document.querySelector('.taskFieldSet').disabled = false;
    saveUserInfo();
  });
}
// if (document.getElementById("edit") != null){
editUserInfo();
// }



function saveUserInfo() {
  const tasksName = document.getElementById("taskName");
  const tasksDetails = document.getElementById("taskDetails");
  const tasksDate = document.getElementById("date");
  const tasksTimeFrom = document.getElementById("timeFrom");
  const tasksTimeTo = document.getElementById("timeTo");
  const tasksDoesNotRepeat = document.getElementById("does-not-repeat");
  const tasksCommute = document.getElementById("commute");
  const tasksSubmit = document.getElementById("save");

  tasksSubmit.addEventListener('click', (e) => {
    // e.preventDefault();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        db.collection("users").doc(uid).collection("tasks").doc(localStorage.getItem("Task")).update({
          // Can be changed for different forms
          name: tasksName.value,
          details: tasksDetails.value,
          date: tasksDate.value,
          timeFrom: tasksTimeFrom.value,
          timeTo: tasksTimeTo.value,
          tasksDoesNotRepeat: tasksDoesNotRepeat.value,
          tasksCommute: tasksCommute.value,
        })
          .then(() => {
              document.querySelector('.taskFieldSet').disabled = true;
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



// function is delayed to make sure content loads first
// setTimeout(share, 1500);
