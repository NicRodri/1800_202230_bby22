const tasksInfo = document.getElementById("task-information");
const tasksName = document.getElementById("taskName");
const tasksDetails = document.getElementById("taskDetails");
const tasksDate = document.getElementById("date");
const tasksTimeFrom = document.getElementById("timeFrom");
const tasksTimeTo = document.getElementById("timeTo");
const tasksDoesNotRepeat = document.getElementById("does-not-repeat");
const tasksCommute = document.getElementById("commute");
const tasksSubmit = document.getElementById("submit");

tasksSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User



      var uid = user.uid;

      console.log(uid);
      let docID = db.collection("users").doc(uid).collection("tasks").doc();
        docID.set({
        // Can be changed for different forms
        name: tasksName.value,
        details: tasksDetails.value,
        date: tasksDate.value,
        timeFrom: tasksTimeFrom.value,
        timeTo: tasksTimeTo.value,
        tasksDoesNotRepeat: tasksDoesNotRepeat.value,
        tasksCommute: tasksCommute.value,
        ID_Name: docID.id,
      })
        .then(() => {
          tasksInfo.reset();
          window.location.href = "/html/main.html";
        });

      // ...
    } else {
      // User is signed out
      // ...
    }
  });
});


