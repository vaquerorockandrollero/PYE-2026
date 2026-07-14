/* ==========================================================
   VINCORA PREMIUM UI
   Navbar v0.2
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementById("vpNavbar");

    const menu = document.getElementById("vpMobileMenu");

    const overlay = document.getElementById("vpOverlay");

    const openButton = document.getElementById("vpMenuButton");

    const closeButton = document.getElementById("vpCloseMenu");

    /* ===============================
       Navbar al hacer scroll
    =============================== */

    function updateNavbar(){

        if(window.scrollY > 60){

            navbar.classList.add("scrolled");

        }else{

            navbar.classList.remove("scrolled");

        }

    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar);

    /* ===============================
       Abrir menú
    =============================== */

    function openMenu(){

        menu.classList.add("active");

        overlay.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    /* ===============================
       Cerrar menú
    =============================== */

    function closeMenu(){

        menu.classList.remove("active");

        overlay.classList.remove("active");

        document.body.style.overflow = "";

    }

    openButton.addEventListener("click", openMenu);

    closeButton.addEventListener("click", closeMenu);

    overlay.addEventListener("click", closeMenu);

    /* ===============================
       Dropdown móvil
    =============================== */

    const dropdowns = document.querySelectorAll(".vp-mobile-dropdown");

    dropdowns.forEach(dropdown => {

        const button = dropdown.querySelector("button");

        const submenu = dropdown.querySelector("ul");

        submenu.style.display = "none";

        button.addEventListener("click", () => {

            const isOpen = submenu.style.display === "block";

            document.querySelectorAll(".vp-mobile-dropdown ul").forEach(list => {

                list.style.display = "none";

            });

            if(!isOpen){

                submenu.style.display = "block";

            }

        });

    });

});