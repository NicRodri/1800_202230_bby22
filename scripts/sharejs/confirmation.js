function confirmation(){
    const cancelbutton = document.getElementById("Cancel");
    const confirmbutton = document.getElementById("Confirm");
    const singleSelect =document.getElementById("carly");
  
   
    function toCancel(){
      window.location.href = "/html/share/index1.html";
    }
    function toConfirm(){
      window.location.href = "/html/Tasks_And_Activities/activity.html";
    }
   
    function toSingleSelect(){
      window.location.href = "/html/share/confirmation.html";
    }
    cancelbutton.addEventListener("click", toCancel);
    confirmbutton.addEventListener("click", toConfirm);
    singleSelect.addEventListener("click", toSingleSelect);
   
  }
  
  confirmation();