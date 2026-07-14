/* ==========================================================
   WHY US
   Vincora Premium UI v0.7
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".vp-why-us");

    if (!section) return;

    /* ==========================================
       Watermark dinámico
    ========================================== */

    const value = section.dataset.watermark;

    if (value) {

        section.style.setProperty("--vp-watermark", `"${value}"`);

    }

    /* ==========================================
       Animación de entrada
    ========================================== */

    const cards = document.querySelectorAll(".vp-stat");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach((entry,index)=>{

            if(entry.isIntersecting){

                setTimeout(()=>{

                    entry.target.classList.add("vp-show");

                },index*120);

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:.20

    });

    cards.forEach(card=>observer.observe(card));

});