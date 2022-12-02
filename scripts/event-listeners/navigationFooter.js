//The navigaion menu at the bottom of all pages.
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
    window.location.href = "/html/notifications/settings0.html";
  }
  person.addEventListener("click", goPerson);

}

navigationFooter();