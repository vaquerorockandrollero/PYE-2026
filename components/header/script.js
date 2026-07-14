/* ==========================================================
   PYE-2026
   Core UI
   Componente: Header
   Archivo: script.js
   Versión: 3.0
========================================================== */

/* ==========================================================
   API PÚBLICA
========================================================== */

window.initHeader = function(){

    buildLogo();

    buildContact();

    buildSocial();

    buildMenu();

    buildCTA();

    initStickyHeader();

    initMobileMenu();

    setActiveMenu();

};

/* ==========================================================
   LOGO
========================================================== */

function buildLogo(){

    const container = document.getElementById("navbarLogo");

    if(!container) return;

    container.innerHTML = `
        <img
            src="${SiteConfig.logo.primary}"
            alt="${SiteConfig.logo.alt}">
    `;

}

/* ==========================================================
   CONTACTO
========================================================== */

function buildContact(){

    const container = document.getElementById("topbarContact");

    if(!container) return;

    container.innerHTML = `

        <a href="${SiteConfig.contact.phone.link}">

            📞 ${SiteConfig.contact.phone.text}

        </a>

        <a href="${SiteConfig.contact.email.sales.link}">

            ✉ ${SiteConfig.contact.email.sales.text}

        </a>

    `;

}

/* ==========================================================
   REDES SOCIALES
========================================================== */

function buildSocial(){

    const container = document.getElementById("topbarSocial");

    if(!container) return;

    let html = "";

    if(SiteConfig.social.facebook){

        html += `

            <a
                href="${SiteConfig.social.facebook.url}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="${SiteConfig.social.facebook.name}">

                ${SiteConfig.social.facebook.name}

            </a>

        `;

    }

    container.innerHTML = html;

}

/* ==========================================================
   MENÚ
========================================================== */

function buildMenu(){

    const desktop = document.getElementById("navbarMenu");

    const mobile = document.getElementById("mobileMenuList");

    if(!desktop || !mobile) return;

    let desktopHTML = "";

    let mobileHTML = "";

    SiteConfig.menu.forEach(item => {

        desktopHTML += `
            <li>
                <a href="${item.url}">
                    ${item.text}
                </a>
            </li>
        `;

        mobileHTML += `
            <li>
                <a href="${item.url}">
                    ${item.text}
                </a>
            </li>
        `;

    });

    desktop.innerHTML = desktopHTML;

    mobile.innerHTML = mobileHTML;

}
/* ==========================================================
   CTA
========================================================== */

function buildCTA(){

    const container = document.getElementById("navbarCTA");

    if(!container) return;

    container.innerHTML = `
        <a
            href="${SiteConfig.cta.url}"
            class="btn btn-primary">

            ${SiteConfig.cta.text}

        </a>
    `;

}

/* ==========================================================
   HEADER STICKY
========================================================== */

function initStickyHeader(){

    const header = document.getElementById("siteHeader");

    if(!header) return;

    window.addEventListener("scroll", () => {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );

    });

}

/* ==========================================================
   MENÚ ACTIVO
========================================================== */

function setActiveMenu(){

    const current = window.location.pathname;

    document
        .querySelectorAll(".navbar-menu a, .mobile-menu a")
        .forEach(link => {

            const href = link.getAttribute("href");

            if(href === current){

                link.classList.add("active");

            }

        });

}

/* ==========================================================
   MENÚ MÓVIL
========================================================== */

function initMobileMenu(){

    const toggle = document.getElementById("menuToggle");

    const menu = document.getElementById("mobileMenu");

    const overlay = document.getElementById("mobileOverlay");

    const mobileMenuList = document.getElementById("mobileMenuList");

    if(
        !toggle ||
        !menu ||
        !overlay ||
        !mobileMenuList
    ){
        return;
    }

    function closeMenu(){

        menu.classList.remove("open");

        overlay.classList.remove("show");

        toggle.classList.remove("open");

        toggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

    toggle.addEventListener("click", () => {

        const opened = menu.classList.toggle("open");

        overlay.classList.toggle("show");

        toggle.classList.toggle("open");

        toggle.setAttribute(
            "aria-expanded",
            opened ? "true" : "false"
        );

    });

    overlay.addEventListener(
        "click",
        closeMenu
    );

    mobileMenuList
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMenu
            );

        });

}