
function insertName() {
  firebase.auth().onAuthStateChanged(user => {
    // Check if a user is signed in:
    if (user) {
      // Do something for the currently logged-in user here: 
      console.log(user.uid);
      console.log(user.displayName);
      user_Name = user.displayName;


      //method #1:  insert with html only
      //document.getElementById("name-goes-here").innerText = user_Name;    //using javascript
      //method #2:  insert using jquery
      $("#name-goes-here").text(user_Name); //using jquery

    } else {
      // No user is signed in.
    }
  });
}
insertName(); 


function displayCardTasks(collection) {
  let cardTemplate = document.getElementById("taskCardTemplate");


  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(uid);
      var ID = [];
      db.collection("users").doc(uid).collection(collection)
      .orderBy("date").orderBy("timeFrom")
      .limit(5)
      .get()
        .then(snap => {
          var i = 1;  //if you want to use commented out section
          snap.forEach(doc => { //iterate thru each doc
            ID.push(doc.data().ID_Name);
            var date = doc.data().date;
            var title = doc.data().name;        // get value of the "name" key
            var timeStart = doc.data().timeFrom;
            var timeEnd = doc.data().timeTo;
            let newcard = cardTemplate.content.cloneNode(true);

            //update title and text and image
            newcard.querySelector('.date').innerHTML = "Date: " + date;
            newcard.querySelector('.card-title').innerHTML = title;
            newcard.querySelector('.timeStart').innerHTML = "Time: " +timeStart + " - ";
            newcard.querySelector('.timeEnd').innerHTML = timeEnd;

            //give unique ids to all elements for future use
            newcard.querySelector('.date').setAttribute("id", "tdate" + i);
            newcard.querySelector('.card-title').setAttribute("id", "tTitle" + i);
            newcard.querySelector('.card-title').setAttribute("class", "tTitle" + " btn btn-primary card-href card-title d-block");
            newcard.querySelector('.timeStart').setAttribute("id", "tStart" + i);
            newcard.querySelector('.timeEnd').setAttribute("id", "tEnd" + i);

            //attach to gallery
            document.getElementById(collection + "-go-here").appendChild(newcard);
            i++;   //if you want to use commented out section

          })
          taskDetails(ID);

        })
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}


displayCardTasks("tasks");

function displayCardActivities(collection) {
  let cardTemplate = document.getElementById("activityCardTemplate");

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(uid);
      var ID = [];
      db.collection("users").doc(uid).collection(collection)
      .orderBy("dueDate").orderBy("urgencyFactor")
      .limit(5)
      .get()
        .then(allActivities => {
          var i = 1;  //if you want to use commented out section
          allActivities.forEach(doc => { //iterate thru each doc
            ID.push(doc.data().ID_Name);
            var title = doc.data().name;
            var date = doc.data().dueDate;
            var timeEstimated = doc.data().timeEstimated;
            var timeEstimatedType = doc.data().timeType;
            let newcard = cardTemplate.content.cloneNode(true);

            //update title and text and image
            newcard.querySelector(".date").innerHTML = "Due: " + date;
            newcard.querySelector(".card-title").innerHTML = title;
            // newcard.querySelector('.estimatedTime').innerHTML = " Estimated Time: ";
            if (Number(timeEstimated) >0){
              newcard.querySelector('.estimatedTime').innerHTML = " Estimated Time: " + timeEstimated + " " + timeEstimatedType;
            } else {
              newcard.querySelector('.estimatedTime').innerHTML = " Estimated Time: " + "0" + " " + timeEstimatedType;
            }

            //give unique ids to all elements for future use
            newcard.querySelector('.date').setAttribute("id", "adate" + i);
            newcard.querySelector(".card-title").setAttribute("id", "aTitle" + i);
            newcard.querySelector('.card-title').setAttribute("class", "aTitle" + " btn btn-primary card-href card-title d-block");

            newcard.querySelector(".estimatedTime").setAttribute("id", "estimatedTime" + i);

            //attach to gallery
            document.getElementById(collection + "-go-here").appendChild(newcard);
            i++;   //if you want to use commented out section
          })
          activityDetails(ID);

        })
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

displayCardActivities("activities");


function taskDetails(ID) {
  console.log(ID);
  const tasksNum = document.getElementsByClassName("tTitle");
  for (let i = 0; i < tasksNum.length; i++) {
    tasksNum[i].addEventListener("click", function (e) {
    localStorage.setItem("Task", ID[i]);
    window.location.href = "/html/Tasks_And_Activities/taskDetails.html?" + tasksNum[i].innerText;
    });
  }
}
// Doesnt run function till after information loads
// setTimeout(taskDetails, 1500);


function activityDetails(ID) {
  const activitiesNum = document.getElementsByClassName("aTitle");
  for (let i = 0; i < activitiesNum.length; i++) {
    activitiesNum[i].addEventListener("click", function (e) {
    localStorage.setItem("Activity", ID[i]);
    window.location.href = "/html/Tasks_And_Activities/activityDetails.html?" + activitiesNum[i].innerText;
    });
  }
}

// Doesnt run function till after information loads
// setTimeout(activityDetails, 1500);

var ImageFile;      //global variable to store the File Object reference


