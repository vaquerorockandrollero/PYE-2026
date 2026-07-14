/* ==========================================================
   FEATURES STRIP
   Vincora Premium UI v0.4
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".vp-feature");

    if(!cards.length) return;

    /* =====================================
       Observer
    ===================================== */

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("vp-visible");

            }

        });

    },{
        threshold:.20
    });

    cards.forEach(card=>{

        observer.observe(card);

    });

});