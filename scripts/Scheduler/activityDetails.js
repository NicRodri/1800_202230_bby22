function displayCardTasks(collection) {
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
              let newcard = cardTemplate.content.cloneNode(true);

              //update title and text and image
              newcard.querySelector('.name').innerHTML = dataName;
              newcard.querySelector('.details').innerHTML = dataDetails;
              newcard.querySelector('.date').innerHTML = "Due on: " + dataDate;
              newcard.querySelector('.timeDue').innerHTML = "At: " + timeDue;
              if (Number(timeEstimated) > 0) {
                newcard.querySelector('.timeEstimated').innerHTML = " Estimated Time: " + timeEstimated + " " + timeType;
              } else {
                newcard.querySelector('.timeEstimated').innerHTML = " Estimated Time: " + "0" + " " + timeType;
              }
              if (urgencyFactor == '1') {
                newcard.querySelector('.urgencyFactor').innerHTML = "Urgency: " + "Important";
              } else if (urgencyFactor == "2") {
                newcard.querySelector('.urgencyFactor').innerHTML = "Urgency: " + "Neutral_Importance";
              } else {
                newcard.querySelector('.urgencyFactor').innerHTML = "Urgency: " + "Less_Important";
              }


              //attach to gallery

              if (Number(dataCommute) > 0) {
                console.log(Number(dataCommute));
                newcard.querySelector('.commute').innerHTML = "Commute Time: " + dataCommute + " mins";
              } else {
                newcard.querySelector('.commute').innerHTML = "Commute Time: " + "0" + " mins";
              }
              document.getElementById(collection + "-go-here").appendChild(newcard);
            }
            i++;   //if you want to use commented out section
          })
          share();
        })
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}


displayCardTasks("activities");

function share() {
  const activity = document.querySelector(".name");
  const share = document.getElementById("share");
  share.addEventListener("click", function (e) {
    window.location.href = "/html/share/index5.html?" + activity.innerText + "$activities$";
  });
}
// function is delayed to make sure content loads first
// setTimeout(share, 1500);
