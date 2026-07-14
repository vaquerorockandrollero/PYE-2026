/* ==========================================================
   PYE-2026
   Core UI
   Componente: Footer
   Archivo: script.js
   Versión: 3.0
========================================================== */

/* ==========================================================
   API PÚBLICA
========================================================== */

window.initFooter = function(){

    buildLogo();

    buildCompany();

    buildMenu();

    buildContact();

    buildSocial();

    buildCTA();

    buildCopyright();

};

/* ==========================================================
   LOGO
========================================================== */

function buildLogo(){

    const container = document.getElementById("footerLogo");

    if(!container) return;

    container.innerHTML = `
        <img
            src="${SiteConfig.logo.primary}"
            alt="${SiteConfig.logo.alt}">
    `;

}

/* ==========================================================
   EMPRESA
========================================================== */

function buildCompany(){

    const slogan = document.getElementById("footerSlogan");

    const description = document.getElementById("footerDescription");

    if(slogan){

        slogan.textContent = SiteConfig.company.slogan;

    }

    if(description){

        description.textContent = SiteConfig.company.description;

    }

}

/* ==========================================================
   MENÚ
========================================================== */

function buildMenu(){

    const container = document.getElementById("footerMenu");

    if(!container) return;

    let html = "";

    SiteConfig.menu.forEach(item => {

        html += `
            <li>
                <a href="${item.url}">
                    ${item.text}
                </a>
            </li>
        `;

    });

    container.innerHTML = html;

}

/* ==========================================================
   CONTACTO
========================================================== */

function buildContact(){

    const container = document.getElementById("footerContact");

    if(!container) return;

    container.innerHTML = `
        <li>
            <a href="${SiteConfig.contact.phone.link}">
                📞 ${SiteConfig.contact.phone.text}
            </a>
        </li>

        <li>
            <a
                href="${SiteConfig.contact.whatsapp.link}"
                target="_blank"
                rel="noopener noreferrer">
                WhatsApp: ${SiteConfig.contact.whatsapp.text}
            </a>
        </li>

        <li>
            <a href="${SiteConfig.contact.email.sales.link}">
                ${SiteConfig.contact.email.sales.text}
            </a>
        </li>

        <li>
            <a href="${SiteConfig.contact.email.contact.link}">
                ${SiteConfig.contact.email.contact.text}
            </a>
        </li>
    `;

}

/* ==========================================================
   REDES SOCIALES
========================================================== */

function buildSocial(){

    const container = document.getElementById("footerSocial");

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
   BOTÓN CTA
========================================================== */

function buildCTA(){

    const container = document.getElementById("footerCTA");

    if(!container) return;

    container.innerHTML = `
        <a
            href="${SiteConfig.cta.url}"
            class="btn btn-primary btn-block">

            ${SiteConfig.cta.text}

        </a>
    `;

}

/* ==========================================================
   COPYRIGHT
========================================================== */

function buildCopyright(){

    const container = document.getElementById("footerCopyright");

    if(!container) return;

    container.textContent = SiteConfig.copyright;

}