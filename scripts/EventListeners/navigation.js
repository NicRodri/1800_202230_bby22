function navigation(){
  const back = document.getElementById("back");
  const home = document.getElementById("home");

  function getPrevious(){
    window.history.back();
  }

  function goHome(){
    window.location.href = "/html/main.html";
  }


  back.addEventListener("click", getPrevious);
  home.addEventListener("click", goHome);
}

navigation();