import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

//!navbar
const navBurger = document.getElementById("nav-burger")
const navWrapper = document.getElementById("nav-wrapper")
const navOutlinedContent = document.getElementById("nav-content-outlined")
const navBg = document.getElementById("nav-bg")
const scaledContent = document.getElementById("nav-ul")
const scaledContent2 = document.getElementById("nav-info")
const webContent = document.getElementById("web-content")
const body = document.getElementsByTagName("body")[0]

let i = 0;

navBurger.addEventListener("click", navBarAnimation);

navWrapper.style.zIndex = "-99";
navBg.style.zIndex = "-99";

function navBarAnimation() {
    if (i % 2 == 0) {
        //opened
        let yScroll = (-getScroll() / 2) + (body.clientHeight / 5)

        navWrapper.style.zIndex = "98";
        navBg.style.zIndex = "97";

        gsap.to(navBg, {
            duration: 0.75,
            ease: "expo",
            opacity: 1,
            delay: 0.3,
        })
        gsap.to(navWrapper, {
            duration: 0.75,
            ease: "expo",
            opacity: 1,
            delay: 0.4,
        })
        gsap.to(scaledContent, {
            duration: 1.25,
            ease: "expo",
            scale: 1,
            delay: 0.3,
        })
        gsap.to(scaledContent2, {
            duration: 1.25,
            ease: "expo",
            scale: 1,
            delay: 0.3,
        })
        gsap.to(navOutlinedContent, {
            duration: 1.5,
            ease: "expo",
            opacity: 1,
            delay: 0.5,
        })
        gsap.to(webContent, {
            duration: 1,
            ease: "expo",
            opacity: 0,
            scale: 1.35,
            y: yScroll + "px",
            onComplete: function () { dNoneContent() },
        })
    } else {
        //closed
        dBlockContent()
        gsap.to(navBg, {
            duration: 0.75,
            ease: "expo",
            opacity: 0,
            delay: 0.15
        })
        gsap.to(navWrapper, {
            duration: 0.75,
            ease: "power.inOut",
            opacity: 0,
        })
        gsap.to(scaledContent, {
            duration: 1.25,
            ease: "expo",
            scale: 0.8,
        })
        gsap.to(scaledContent2, {
            duration: 1.25,
            ease: "expo",
            scale: 0.8,
        })
        gsap.to(navOutlinedContent, {
            duration: 1.5,
            ease: "expo",
            opacity: 0,
            delay: 0.25
        })
        gsap.to(webContent, {
            duration: 1.5,
            ease: "expo",
            opacity: 1,
            scale: 1,
            y: "0",
        })

        setInterval(zIndexNavBar(), 1250);
    }
    i++
}

function dNoneContent() {
    webContent.style.display = "none"
}

function dBlockContent() {
    webContent.style.display = "block"
}


function getScroll() {
    if (window.pageYOffset != undefined) {
        return pageYOffset;
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}

function zIndexNavBar() {
    navWrapper.style.zIndex = "-5";
    navBg.style.zIndex = "-5";
}

//!auto animations
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
        delay: 1
        // overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
    console.log("hidden")
}


// //!On doc load hide .gs elements and create scroll trigger
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            start: "center center",
            end: "center center",
            onEnter: function () { animateFrom(elem) },
            once: true,
            // markers: true,
            // scroller: ".smooth-locomotive-scroll",
            // onEnterBack: function () { animateFrom(elem, -1) },
            // onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view

        });
    });
});
