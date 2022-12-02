// Opens the share page
function share() {
  const share = document.getElementById("share");
  share.addEventListener("click", function (e) {
    window.location.href = "/html/share/index5.html?" + "$tasks$";
  });
}

// Deletes the task
function deleteTask(uid) {
  const deleteTask = document.getElementById("delete");
  const completedTask = document.getElementById("completedTask");
  deleteTask.addEventListener("click", function (e) {
    db.collection("users").doc(uid).collection("tasks").doc(localStorage.getItem("Task")).delete().then(() => {
      console.log("Document successfully deleted!");
      window.location.href = "/html/main.html";

    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  });
}

// Allows the task to editable
function editUserInfo() {
  //Enable the form fields
  document.getElementById("edit").addEventListener("click", function (e) {
    document.querySelector('.taskFieldSet').disabled = false;

  });
}
editUserInfo();

//Saves/updates the user task info
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        db.collection("users").doc(uid).collection("tasks").doc(localStorage.getItem("Task")).update({
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
saveUserInfo();
