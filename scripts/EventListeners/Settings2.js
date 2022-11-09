function saveSelect() {
    const submit = document.getElementById("submit");

    function getSave() {
        window.location.href = "/html/main.html";
    }

    submit.addEventListener("click", getSave);
}

saveSelect();

