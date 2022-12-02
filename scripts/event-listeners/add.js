function add(){
  const task = document.getElementById("New-Task");
  const activity = document.getElementById("New-Activity");
  const sleep = document.getElementById("Sleep-Schedule");

  function toTask(){
    window.location.href = "/html/tasks-and-activities/task.html";
  }
  function toActivity(){
    window.location.href = "/html/tasks-and-activities/activity.html";
  }
  function toSleep(){
    window.location.href = "/html/sleep-time/sleep.html";
  }

  task.addEventListener("click", toTask);
  activity.addEventListener("click", toActivity);
  sleep.addEventListener("click", toSleep);
}

add();