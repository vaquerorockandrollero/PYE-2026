/* ==========================================================
   HERO PREMIUM
   Vincora Premium UI v0.3
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".vp-hero");
    const content = document.querySelector(".vp-hero-content");
    const scroll = document.querySelector(".vp-scroll");
    const bg = document.querySelector(".vp-hero-bg");

    /* ==========================================
       Animación de entrada
    ========================================== */

    content.animate([
        {
            opacity:0,
            transform:"translateY(60px)"
        },
        {
            opacity:1,
            transform:"translateY(0)"
        }
    ],{
        duration:900,
        easing:"ease-out",
        fill:"forwards"
    });

    /* ==========================================
       Parallax ligero
    ========================================== */

    window.addEventListener("scroll",()=>{

        const y = window.scrollY;

        if(y < hero.offsetHeight){

            bg.style.transform =
                `translateY(${y*0.25}px) scale(1.05)`;

        }

    });

    /* ==========================================
       Scroll automático
    ========================================== */

    if(scroll){

        scroll.addEventListener("click",()=>{

            window.scrollTo({

                top:hero.offsetHeight-80,

                behavior:"smooth"

            });

        });

    }

});