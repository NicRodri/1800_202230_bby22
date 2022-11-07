function multipleSelect() {
    const multibutton = document.getElementById("multiple");

    function multipleSelect() {
        window.location.href = "/html/share/index2.html";
    }

    multibutton.addEventListener("click", multipleSelect);
}

 multipleSelect();
 
 function closeSelect() {
    const closebutton = document.getElementById("close");

    function closeSelect() {
        window.location.href = "/html/share/index0.html";
    }

    closebutton.addEventListener("click", closeSelect);
}

 closeSelect();


 function add(){
    const task = document.getElementById("New-Task");
    const activity = document.getElementById("New-Activity");
    const sleep = document.getElementById("Sleep-Schedule");
  
    function toTask(){
      window.location.href = "/html/Tasks_And_Activities/task.html";
    }
    function toActivity(){
      window.location.href = "/html/Tasks_And_Activities/activity.html";
    }
    function toSleep(){
      window.location.href = "/html/Sleep_Time/sleep.html";
    }
  
    task.addEventListener("click", toTask);
    activity.addEventListener("click", toActivity);
    sleep.addEventListener("click", toSleep);
  }
  
  add();