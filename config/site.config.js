/* ==========================================================
   PYE-2026
   Configuración Global del Sitio
   Archivo: site.config.js
   Versión: 1.0
========================================================== */

const SiteConfig = {

    /* ======================================================
       EMPRESA
    ====================================================== */

    company: {

        name: "Poder y Energía",

        slogan:
            "Soluciones inteligentes para la continuidad y eficiencia energética.",

        description:
            "En Poder y Energía diseñamos e implementamos soluciones confiables para garantizar la continuidad operativa de empresas e industrias. Ofrecemos suministro, instalación y soporte especializado en sistemas UPS, energía solar y soluciones eléctricas, con un enfoque en calidad, seguridad y eficiencia.",

        domain: "https://poderyenergia.com"

    },

    /* ======================================================
       LOGOS
    ====================================================== */

    logo: {

        primary: "assets/img/ui/logo.png",

        alt: "Poder y Energía"

    },

    /* ======================================================
       CONTACTO
    ====================================================== */

    contact: {

        phone: {

            text: "55 3112 2108",

            link: "tel:+525531122108"

        },

        whatsapp: {

            text: "55 3715 3646",

            link: "https://wa.me/525537153646"

        },

        email: {

            sales: {

                text: "ventas@poderyenergia.com",

                link: "mailto:ventas@poderyenergia.com"

            },

            contact: {

                text: "contacto@poderyenergia.com",

                link: "mailto:contacto@poderyenergia.com"

            }

        }

    },

    /* ======================================================
       REDES SOCIALES
    ====================================================== */

    social: {

        facebook: {

            name: "Facebook",

            url: "https://www.facebook.com/share/14gEcFXY9Zk/"

        }

    },

    /* ======================================================
       MENÚ PRINCIPAL
    ====================================================== */

    menu: [

    { text: "Inicio", url: "#hero" },

    { text: "Soluciones", url: "#solutions" },

    { text: "Marcas", url: "#brands" },

    { text: "Catálogo", url: "#" },

    { text: "Nosotros", url: "#" },

    { text: "Contacto", url: "#footer" }

],

    /* ======================================================
       CTA PRINCIPAL
    ====================================================== */

    cta: {

    text: "Solicitar asesoría",

    url: "#footer"

},

    /* ======================================================
       COPYRIGHT
    ====================================================== */

    copyright:
        "© 2026 Poder y Energía. Todos los derechos reservados."

};