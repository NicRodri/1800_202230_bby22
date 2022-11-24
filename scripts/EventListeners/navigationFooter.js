function navigationFooter(){
  const home = document.getElementById("home");
  const history = document.getElementById("history");
  const completed = document.getElementById("completed");
  const person = document.getElementById("person");

  function goHome(){
    window.location.href = "/html/main.html";
  }
  home.addEventListener("click", goHome);

  function goPerson(){
    window.location.href = "/html/notifications/Settings0.html";
  }
  person.addEventListener("click", goPerson);


  // history.addEventListener("click" , function (e){
  //   window.location.href = "/html/All_Tasks_and_Activities/history.html";
  // });
  // completed.addEventListener("click", function (e){
  //   window.location.href = "/html/Completed_Tasks_and_Activities/completed.html";
  // });

}

navigationFooter();