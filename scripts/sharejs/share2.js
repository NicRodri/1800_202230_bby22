
//Make the button clickable and direct to another page
function closeSelect() {
    const closebutton = document.getElementById("close");

    function closeSelect() {
        window.history.back();
    }

    closebutton.addEventListener("click", closeSelect);
}
closeSelect();