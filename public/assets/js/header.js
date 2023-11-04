document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const closeButton = document.querySelector(".close-button");
    const menu = document.querySelector(".menu");

    menuButton.addEventListener("click", function () {
        menu.style.right = "0";
    });

    closeButton.addEventListener("click", function () {
        menu.style.right = "-250px";
    });
});