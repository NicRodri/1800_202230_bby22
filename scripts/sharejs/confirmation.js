function confirmation(){
    const cancel = document.getElementById("Cancel");
    const confirm = document.getElementById("Confirm");
   
    function toCancel(){
      window.location.href = "/html/share/index1.html";
    }
    function toConfirm(){
      window.location.href = "/html/Tasks_And_Activities/activity.html";
    }
   
  
    cancel.addEventListener("click", toCancel);
    confirm.addEventListener("click", toConfirm);
   
  }
  
  confirmation();