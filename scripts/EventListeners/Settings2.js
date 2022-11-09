function saveSelect() {
    const rcorners1 = document.getElementById("rcorners1");

    function getSave() {
        window.location.href = "/html/main.html";
    }

    rcorners1.addEventListener("click", getSave);
}

saveSelect();

