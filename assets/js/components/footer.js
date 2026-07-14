/* ==========================================================
   FOOTER PREMIUM
   Vincora Premium UI v0.9
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const footer = document.querySelector(".vp-footer");

    if (!footer) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                footer.classList.add("vp-show");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold:0.15

    });

    observer.observe(footer);

});