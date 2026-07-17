/* ==========================================================
   PYE-2026
   Loader
   Archivo: loader.js
   Versión: 3.0
========================================================== */

"use strict";

/* ==========================================================
   LOADER DE COMPONENTES
========================================================== */

class ComponentLoader {

    constructor(){

        this.loadedScripts = new Set();

    }

    /* ======================================================
       CARGAR HTML
    ====================================================== */

    async loadHTML(containerId, file){

        const container = document.getElementById(containerId);

        if(!container){

            console.warn(`Contenedor #${containerId} no encontrado.`);

            return;

        }

        try{

            const response = await fetch(file);

            if(!response.ok){

                throw new Error(`No se pudo cargar: ${file}`);

            }

            container.innerHTML = await response.text();

        }

        catch(error){

            console.error(error);

            throw error;

        }

    }

    /* ======================================================
       CARGAR SCRIPT
    ====================================================== */

    async loadScript(file){

        if(this.loadedScripts.has(file)){

            return;

        }

        return new Promise((resolve,reject)=>{

            const script = document.createElement("script");

            script.src = file;

            script.defer = true;

            script.onload = () => {

                this.loadedScripts.add(file);

                resolve();

            };

            script.onerror = () => {

                reject(
                    new Error(`No se pudo cargar: ${file}`)
                );

            };

            document.head.appendChild(script);

        });

    }

}

/* ==========================================================
   INSTANCIA
========================================================== */

const Loader = new ComponentLoader();

/* ==========================================================
   HEADER
========================================================== */

async function loadHeader(){

    await Loader.loadHTML(

        "header",

        "/components/header/index.html"

    );

    await Loader.loadScript(

        "/components/header/script.js"

    );

}

/* ==========================================================
   FOOTER
========================================================== */

async function loadFooter(){

    await Loader.loadHTML(

        "footer",

        "/components/footer/index.html"

    );

    await Loader.loadScript(

        "/components/footer/script.js"

    );

}

/* ==========================================================
   CARGAR COMPONENTES
========================================================== */

async function loadComponents(){

    await loadHeader();

    await loadFooter();

}

/* ==========================================================
   API PÚBLICA
========================================================== */

window.loadComponents = loadComponents;