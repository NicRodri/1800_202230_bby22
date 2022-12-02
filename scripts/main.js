// Used to display tasks on main page.
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
        .orderBy("date").orderBy("timeFrom") //activities are ordered bydate and timeFrom
        .limit(5) // only a limit of 5 tasks present at once.
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
            newcard.querySelector('.timeStart').innerHTML = "Time: " + timeStart + " - ";
            newcard.querySelector('.timeEnd').innerHTML = timeEnd;

            //give unique ids to all elements for future use
            newcard.querySelector('.date').setAttribute("id", "tdate" + i);
            newcard.querySelector('.card-title').setAttribute("id", "tTitle" + i);
            newcard.querySelector('.card-title').setAttribute("class", "tTitle" + " btn onyx lavender-blush-text card-href card-title d-block");
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

// Used to display activities on main page.
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
        .orderBy("dueDate").orderBy("urgencyFactor") //activities are ordered by due date and urgencyfactor      
        .limit(5) // only a limit of 5 activities present at once.
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

            // use to check if no time was entered, and if so have a default output.
            if (Number(timeEstimated) > 0) {
              newcard.querySelector('.estimatedTime').innerHTML = " Estimated Time: " + timeEstimated + " " + timeEstimatedType;
            } else {
              newcard.querySelector('.estimatedTime').innerHTML = " Estimated Time: " + "0" + " " + timeEstimatedType;
            }

            //give unique ids to all elements for future use
            newcard.querySelector('.date').setAttribute("id", "adate" + i);
            newcard.querySelector(".card-title").setAttribute("id", "aTitle" + i);
            newcard.querySelector('.card-title').setAttribute("class", "aTitle" + " btn onyx lavender-blush-text card-href card-title d-block");

            newcard.querySelector(".estimatedTime").setAttribute("id", "estimatedTime" + i);

            //attach to gallery
            document.getElementById(collection + "-go-here").appendChild(newcard);
            i++;
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

// Used to open task details page and pass the current information to next page
function taskDetails(ID) {
  const tasksNum = document.getElementsByClassName("tTitle");
  for (let i = 0; i < tasksNum.length; i++) {
    tasksNum[i].addEventListener("click", function (e) {
      localStorage.setItem("Task", ID[i]);
      window.location.href = "/html/tasks-and-activities/taskDetails.html?" + tasksNum[i].innerText;
    });
  }
}

// Used to open activity details page and pass the current information to next page.
function activityDetails(ID) {
  const activitiesNum = document.getElementsByClassName("aTitle");
  for (let i = 0; i < activitiesNum.length; i++) {
    activitiesNum[i].addEventListener("click", function (e) {
      localStorage.setItem("Activity", ID[i]);
      window.location.href = "/html/tasks-and-activities/activityDetails.html?" + activitiesNum[i].innerText;
    });
  }
}

// Used to open a page to create a task.
function createTask() {
  const task = document.getElementById("CreateTasks");
  task.addEventListener("click", function (e) {
    window.location.href = "/html/tasks-and-activities/task.html";
  });
}
createTask();

// Used to open a page to create an activity.
function createActivity() {
  const activity = document.getElementById("CreateActivities");
  activity.addEventListener("click", function (e) {
    window.location.href = "/html/tasks-and-activities/activity.html";
  });
}
createActivity();