function notificationSelect() {
    const settings = document.getElementById("settings");

    function getSettings() {
        window.location.href = "/html/notifications/Settings1.html";
    }

    settings.addEventListener("click", getSettings);
}

notificationSelect();

function borderSelect() {



    const border11 = document.getElementById("border11");

    function getBorder11() {
        window.location.href = "/html/notifications/Settings2.html";
    }

    border11.addEventListener("click", getBorder11);

}

borderSelect();