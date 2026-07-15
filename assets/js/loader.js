/**
 * ==========================================================
 * COMPONENT LOADER
 * Poder y Energía 2026
 * ==========================================================
 */

document.addEventListener("DOMContentLoaded", () => {

    loadComponents();

});

/*==========================================================
COMPONENTS
==========================================================*/

const components = [

    {
        id: "header",
        html: "components/header/index.html",
        css: "components/header/style.css"
    },

    {
        id: "hero",
        html: "components/hero/index.html",
        css: "components/hero/style.css"
    },

    {
        id: "features-strip",
        html: "components/features-strip/index.html",
        css: "components/features-strip/style.css"
    },

    {
        id: "solutions",
        html: "components/solutions/index.html",
        css: "components/solutions/style.css"
    },

    {
        id: "brands",
        html: "components/brands/index.html",
        css: "components/brands/style.css"
    },

    {
        id: "experience",
        html: "components/experience/index.html",
        css: "components/experience/style.css"
    },

    {
        id: "process",
        html: "components/process/index.html",
        css: "components/process/style.css"
    },

    {
        id: "cta",
        html: "components/cta/index.html",
        css: "components/cta/style.css"
    },

    {
        id: "footer",
        html: "components/footer/index.html",
        css: "components/footer/style.css"
    }

];

/*==========================================================
LOAD COMPONENTS
==========================================================*/

async function loadComponents(){

    for(const component of components){

        loadCSS(component.css);

        await loadHTML(component);

    }

}

/*==========================================================
LOAD HTML
==========================================================*/

async function loadHTML(component){

    const container = document.getElementById(component.id);

    if(!container){

        return;

    }

    try{

        const response = await fetch(component.html);

        if(!response.ok){

            throw new Error(component.html);

        }

        container.innerHTML = await response.text();

    }

    catch(error){

        console.error(

            `Error loading ${component.html}`,

            error

        );

    }

}

/*==========================================================
LOAD CSS
==========================================================*/

function loadCSS(file){

    if(document.querySelector(`link[href="${file}"]`)){

        return;

    }

    const link = document.createElement("link");

    link.rel = "stylesheet";

    link.href = file;

    document.head.appendChild(link);

}