function notificationSelect() {
    const settings = document.getElementById("settings");

    function getSettings() {
        window.location.href = "/html/notifications/Settings1.html";
    }

    settings.addEventListener("click", getSettings);
}

notificationSelect();


function favoriteSelect() {
    const favorites = document.getElementById("favorites");

    function getFavorites() {
        window.location.href = "/html/notifications/favorites.html";
    }

    favorites.addEventListener("click", getFavorites);
}

favoriteSelect();
