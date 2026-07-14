/* ==========================================================
   PYE-2026
   Aplicación Principal
   Archivo: app.js
   Versión: 1.0
========================================================== */

"use strict";

/* ==========================================================
   INICIALIZACIÓN DE LA APLICACIÓN
========================================================== */

async function initApp(){

    try{

        /* ==============================================
           CARGAR COMPONENTES
        ============================================== */

        await loadComponents();

        /* ==============================================
           INICIALIZAR HEADER
        ============================================== */

        if(typeof window.initHeader === "function"){

            window.initHeader();

        }

        /* ==============================================
           INICIALIZAR FOOTER
        ============================================== */

        if(typeof window.initFooter === "function"){

            window.initFooter();

        }

        /* ==============================================
           EVENTO GLOBAL
        ============================================== */

        document.dispatchEvent(

            new CustomEvent("appReady")

        );

        console.info("PYE 2026 iniciado correctamente.");

    }

    catch(error){

        console.error(

            "Error al iniciar la aplicación:",

            error

        );

    }

}

/* ==========================================================
   ARRANQUE
========================================================== */

document.addEventListener(

    "DOMContentLoaded",

    initApp

);