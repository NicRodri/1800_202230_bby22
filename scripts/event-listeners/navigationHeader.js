// The back button navigation.
function navigationHeader() {
  const back = document.getElementById("back");

  function getPrevious() {
    window.history.back();
  }

  back.addEventListener("click", getPrevious);
}

navigationHeader();