import { gsap } from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";



gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

const content = CSSRulePlugin.getRule('.landing-page-content:before')
const h1 = document.querySelector('h1');
const secondHeader = document.getElementsByClassName("landing-page_content_text_second")
const landingButton = document.getElementsByClassName("btn-landing")
const topCover = document.getElementsByClassName("top-side")
const bottomCover = document.getElementsByClassName("bottom-side")
const tl = gsap.timeline()

tl.to(topCover, {
    delay: .5,
    duration: 1.5,
    ease: 'expo.out',
    y: '-50vh'
})
tl.to(bottomCover, {
    duration: 1.5,
    ease: 'expo.out',
    y: '50vh'
},
    "-=1.5")
tl.from(content, {
    duration: 2,
    ease: "expo",
    cssRule: {
        scaleY: 0
    }
},
    "-=0.5")
tl.to(h1, {
    duration: 1.25,
    ease: "expo",
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    opacity: 1,
    x: '30px'
},
    "-=1.125")
tl.to(secondHeader, {
    duration: 1.75,
    ease: "expo",
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    opacity: 1,
    x: '30px'
},
    "-=0.75")
tl.to(landingButton, {
    duration: 0.1,
    ease: "expo",
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    opacity: 1,
    x: '30px'
},
    "-=1.25")



gsap.registerPlugin(ScrollTrigger);
gsap.to(".we-create-section-header", {
    scrollTrigger: {
        trigger: ".we-create-section-header",
        start: "-150 top",
        end: "+=1625",
        markers: true,
        pin: true,
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
    } else if (elem.classList.contains("gs_fromFadeIn")) {
        y = 0;
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
        delay: 0.25
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
