document.addEventListener("DOMContentLoaded", function() {
    const links = document.getElementById("myLinks");
    const menu = document.getElementById("menu");
    const nav = document.querySelector("nav");

    if (window.innerWidth <= 426) {
        nav.style.height = "50px";
        links.style.display = "none";
        menu.innerHTML = "<i class='fa-solid fa-bars' style='color: #ffffff;'></i>";
        
        menu.addEventListener("click", function() {
            if (links.style.display === "none") {
                links.style.display = "flex";
                document.querySelector("nav").style.height = "auto";
                menu.innerHTML = "<i class='fa-solid fa-xmark' style='color: #ffffff;'></i>";
            } else {
                nav.style.height = "50px";
                links.style.display = "none";
                menu.innerHTML = "<i class='fa-solid fa-bars' style='color: #ffffff;'></i>";
            }
        });
    } else {
        links.style.display = "flex";
        menu.style.display = "none";
    }
});