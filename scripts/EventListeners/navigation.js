function navigation(){
  const back = document.getElementById("back");

  function getPrevious(){
    window.history.back();
  }

  back.addEventListener("click", getPrevious);
}

navigation();