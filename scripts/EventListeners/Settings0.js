function notificationSelect() {
    const settings = document.getElementById("settings");

    function getSettings() {
        window.location.href = "/html/notifications/Settings1.html";
    }

    settings.addEventListener("click", getSettings);
}

notificationSelect();

