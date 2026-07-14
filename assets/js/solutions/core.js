/* ==========================================================
   Vincora Premium UI
   Component Loader
========================================================== */

document.addEventListener("DOMContentLoaded", async () => {

    const components = document.querySelectorAll("[data-component]");

    for (const component of components) {

        const name = component.dataset.component;

        try {

            const response = await fetch(
                `components/${name}/${name}.html`
            );

            component.innerHTML = await response.text();

        } catch (error) {

            console.error(
                `Error cargando ${name}`,
                error
            );

        }

    }

});