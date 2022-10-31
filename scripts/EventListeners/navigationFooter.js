function navigationFooter(){
  const home = document.getElementById("home");
  function goHome(){
    window.location.href = "/html/main.html";
  }

  home.addEventListener("click", goHome);
}

navigationFooter();