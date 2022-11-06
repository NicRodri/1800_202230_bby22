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
insertName(); //run the function

function readQuote() {
  db.collection("quotes").doc("Tuesday")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
    .onSnapshot(somedoc => {                                                               //arrow notation
      console.log("current document data: " + somedoc.data());                          //.data() returns data object
      document.getElementById("quote-goes-here").innerHTML = somedoc.data().quote;      //using javascript to display the data on the right place

      //Here are other ways to access key:value data fields
      //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
      //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
    })
}
readQuote();        //calling the function

function getTime() {
  const myDate = new Date();
  var hour = myDate.getHours();
  var minute = myDate.getMinutes();
  let time = hour + ":" + minute;
  // Will remove the milliseconds at a later time
  return time;
}


function getDate() {
  const obj = new Date();
  date = obj.toDateString();
  // Still need to add comma after day
  date = date.replace(/(?<=\d) /, ", ");
  return date;
}


function addTask() {
  //define a variable for the collection you want to create in Firestore to populate data
  var tasksRef = db.collection("tasks");

  tasksRef.add({
    code: "Task1",
    taskName: "Comp1800 lecture",    //replace with your own city?
    taskDetails: "projects lectures with carly",
    date: getDate(),
    timeStart: getTime(),
    timeEnd: getTime(),
    repeats: "Weekly",
    commutingTime: "0",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
}

//addTask(); // only use once to setup.

function addActivity() {
  //define a variable for the collection you want to create in Firestore to populate data
  var activitiesRef = db.collection("activities");

  activitiesRef.add({
    code: "Activity1",
    activityName: "1510 assignment2",    //replace with your own city?
    activityDetails: "Assignment 2 consisting of 4 questions",
    estimatedTime: 10,
    dueDate: getDate(),
    commutingTime: 0,
    urgencyFactor: "Weekly",
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
}

//addActivity(); // only use once to setup.

function displayCardTasks(collection) {
  let cardTemplate = document.getElementById("taskCardTemplate");

  db.collection(collection).get()
    .then(snap => {
      var i = 1;  //if you want to use commented out section
      snap.forEach(doc => { //iterate thru each doc
        var title = doc.data().name;        // get value of the "name" key
        var timeStart = doc.data().timeFrom;
        var timeEnd = doc.data().timeTo;
        let newcard = cardTemplate.content.cloneNode(true);

        //update title and text and image
        newcard.querySelector('.card-title').innerHTML = title;
        newcard.querySelector('.timeStart').innerHTML = timeStart + " - ";
        newcard.querySelector('.timeEnd').innerHTML = timeEnd;

        //give unique ids to all elements for future use
        newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
        newcard.querySelector('.timeStart').setAttribute("id", "tStart" + i);
        newcard.querySelector('.timeEnd').setAttribute("id", "tEnd" + i);

        //attach to gallery
        document.getElementById(collection + "-go-here").appendChild(newcard);
        i++;   //if you want to use commented out section
      })
    })

}

displayCardTasks("tasks");

function displayCardActivities(collection) {
  let cardTemplate = document.getElementById("activityCardTemplate");

  db.collection(collection).get()
    .then(snap => {
      var i = 1;  //if you want to use commented out section
      snap.forEach(doc => { //iterate thru each doc
        var title = doc.data().activityName;
        var timeEstimated = doc.data().estimatedTime;
        let newcard = cardTemplate.content.cloneNode(true);

        //update title and text and image
        newcard.querySelector(".card-title").innerHTML = title;
        newcard.querySelector(".estimatedTime").innerHTML = "Estimated: " + timeEstimated + " Minutes";

        //give unique ids to all elements for future use
        newcard.querySelector(".card-title").setAttribute("id", "ctitle" + i);
        newcard.querySelector(".estimatedTime").setAttribute("id", "estimatedTime" + i);

        //attach to gallery
        document.getElementById(collection + "-go-here").appendChild(newcard);
        i++;   //if you want to use commented out section
      })
    })

}

displayCardActivities("activities");