function add(){
  const task = document.getElementById("New-Task");
  const activity = document.getElementById("New-Activity");
  const sleep = document.getElementById("Sleep-Schedule");

  function toTask(){
    window.location.href = "/html/Tasks_And_Activities/task.html"
  }
  function toActivity(){
    window.location.href = "/html/Tasks_And_Activities/activity.html"
  }
  function toSleep(){
    window.location.href = "/html/Sleep_Time/sleep.html"
  }

  task.addEventListener("click", toTask);
  activity.addEventListener("click", toActivity);
  sleep.addEventListener("click", toSleep);
}

add();