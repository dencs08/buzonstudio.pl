import { gsap } from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// gsap.registerPlugin(ScrollToPlugin);

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.to(".we-create-section-header", {
    scrollTrigger: {
        trigger: ".we-create-section-header",
        start: "-150 top",
        end: "+=1625",
        markers: true,
        pin: true,
        // start: "top bottom",
        // end: "bottom bottom"
    },
});

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_fromLeft")) {
        x = -250;
        y = 0;
    } else if (elem.classList.contains("gs_fromRight")) {
        x = 250;
        y = 0;
    } else if (elem.classList.contains("gs_fromBottom")) {
        y = 250;
        x = 0;
    } else if (elem.classList.contains("gs_fromTop")) {
        y = -250;
        x = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        lazy: false,
        // overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            start: "-250 center",
            onEnter: function () { animateFrom(elem) },
            once: true,
            // onEnterBack: function () { animateFrom(elem, -1) },
            // onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});
