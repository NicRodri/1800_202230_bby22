
//Make the button clickable and direct to another page
function multipleSelect() {
    const multibutton = document.getElementById("multiple");

    function multipleSelect() {
        window.location.href = "/html/share/index2.html";
    }

    multibutton.addEventListener("click", multipleSelect);
}

 multipleSelect();
 
 //Make the button clickable and direct to another page
 function closeSelect() {
    const closebutton = document.getElementById("close");

    function closeSelect() {
        window.history.back();
    }

    closebutton.addEventListener("click", closeSelect);
}

 closeSelect();

