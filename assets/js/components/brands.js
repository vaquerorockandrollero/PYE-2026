/* ==========================================================
   BRANDS
   Vincora Premium UI v0.6
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".vp-brands");

    if(!section) return;

    /* ================================
       Entrada
    ================================ */

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                section.classList.add("vp-visible");

            }

        });

    },{

        threshold:.20

    });

    observer.observe(section);

    /* ================================
       Parallax del texto gigante
    ================================ */

    const watermark = document.querySelector(".vp-brands-watermark");

    if(!watermark) return;

    window.addEventListener("scroll",()=>{

        const rect = section.getBoundingClientRect();

        const offset = rect.top * -0.08;

        watermark.style.transform =
            `translate(-50%, ${offset}px)`;

    });

});