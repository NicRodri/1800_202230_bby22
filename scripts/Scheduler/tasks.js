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
    db.collection("tasks").doc().set({
        name: tasksName.value,
        details: tasksDetails.value,
        date: tasksDate.value,
        timeFrom: tasksTimeFrom.value,
        timeTo: tasksTimeTo.value,
        tasksDoesNotRepeat: tasksDoesNotRepeat.value,
        tasksCommute: tasksCommute.value,
    }) 
    .then(() => {
        tasksInfo.reset();
        window.location.href = "/html/main.html";
    });
});