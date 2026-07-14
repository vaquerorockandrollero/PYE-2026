/* ==========================================================
   CTA PREMIUM
   Vincora Premium UI v0.8
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".vp-cta");

    if (!section) return;

    const card = section.querySelector(".vp-cta-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                card.classList.add("vp-show");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold:0.25

    });

    observer.observe(section);

});