/* ==========================================================
   SOLUTIONS
   Vincora Premium UI v0.5
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".vp-solution-card");

    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    entry.target.classList.add("vp-show");

                }, index * 120);

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.20

    });

    cards.forEach(card => observer.observe(card));

});