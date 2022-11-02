function navigationFooter(){
  const home = document.getElementById("home");
  function goHome(){
    window.location.href = "/html/main.html";
  }

  home.addEventListener("click", goHome);

  const person = document.getElementById("person");
  function goPerson(){
    window.location.href = "/html/Notifications/Settings0.html";
  }

  person.addEventListener("click", goPerson);
}

navigationFooter();