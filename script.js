document.addEventListener("DOMContentLoaded", function() {
    const links = document.getElementById("myLinks");
    const menu = document.getElementById("menu");

    function updateMenuDisplay() {
        if (window.innerWidth <= 426) {
            links.style.display = "none";
            menu.style.display = "block";
            menu.innerHTML = "<i class='fa-solid fa-bars' style='color: #ffffff;'></i>";
            
            menu.addEventListener("click", function() {
                links.style.display = "flex";
                document.querySelector("nav").style.height = "auto";
                menu.innerHTML = "<i class='fa-solid fa-xmark' style='color: #ffffff;''></i>";
            })
        } else {
            links.style.display = "flex";
            menu.style.display = "none";
        }
    }

    window.addEventListener("resize", updateMenuDisplay);
});