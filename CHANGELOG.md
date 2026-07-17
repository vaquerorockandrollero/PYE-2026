/**
 * ==========================================================
 * COMPONENT LOADER
 * Poder y Energía 2026
 * Versión 2.0
 * ==========================================================
 */

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponents();

});

/*==========================================================
COMPONENTS
==========================================================*/

const components = [

    {
        id: "header",
        html: "components/header/index.html",
        css: "components/header/style.css",
        js: "components/header/script.js",
        init: "initHeader"
    },

    {
        id: "hero",
        html: "components/hero/index.html",
        css: "components/hero/style.css",
        js: "components/hero/script.js",
        init: "initHero"
    },

    {
        id: "features-strip",
        html: "components/features-strip/index.html",
        css: "components/features-strip/style.css",
        js: "components/features-strip/script.js",
        init: "initFeaturesStrip"
    },

    {
        id: "solutions",
        html: "components/solutions/index.html",
        css: "components/solutions/style.css",
        js: "components/solutions/script.js",
        init: "initSolutions"
    },

    {
        id: "brands",
        html: "components/brands/index.html",
        css: "components/brands/style.css",
        js: "components/brands/script.js",
        init: "initBrands"
    },

    {
        id: "experience",
        html: "components/experience/index.html",
        css: "components/experience/style.css",
        js: "components/experience/script.js",
        init: "initExperience"
    },

    {
        id: "process",
        html: "components/process/index.html",
        css: "components/process/style.css",
        js: "components/process/script.js",
        init: "initProcess"
    },

    {
        id: "cta",
        html: "components/cta/index.html",
        css: "components/cta/style.css",
        js: "components/cta/script.js",
        init: "initCTA"
    },

    {
        id: "footer",
        html: "components/footer/index.html",
        css: "components/footer/style.css",
        js: "components/footer/script.js",
        init: "initFooter"
    }

];

/*==========================================================
LOAD COMPONENTS
==========================================================*/

async function loadComponents(){

    for(const component of components){

        loadCSS(component.css);

        await loadHTML(component);

        await loadJS(component.js);

        initComponent(component.init);

    }

}

/*==========================================================
LOAD HTML
==========================================================*/

async function loadHTML(component){

    const container = document.getElementById(component.id);

    if(!container) return;

    try{

        const response = await fetch(component.html);

        if(!response.ok){

            throw new Error(component.html);

        }

        container.innerHTML = await response.text();

    }

    catch(error){

        console.error(error);

    }

}

/*==========================================================
LOAD CSS
==========================================================*/

function loadCSS(file){

    if(document.querySelector(`link[href="${file}"]`)) return;

    const link = document.createElement("link");

    link.rel = "stylesheet";

    link.href = file;

    document.head.appendChild(link);

}

/*==========================================================
LOAD JS
==========================================================*/

function loadJS(file){

    return new Promise(resolve=>{

        if(document.querySelector(`script[src="${file}"]`)){

            resolve();

            return;

        }

        const script=document.createElement("script");

        script.src=file;

        script.onload=resolve;

        document.body.appendChild(script);

    });

}

/*==========================================================
INIT COMPONENT
==========================================================*/

function initComponent(fn){

    if(typeof window[fn]==="function"){

        window[fn]();

    }

}