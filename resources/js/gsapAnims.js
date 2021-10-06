import { gsap } from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

//! Landing page timeline
const line = CSSRulePlugin.getRule('.landing-page-content:before')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const button1 = document.getElementsByClassName("btn-landing1")
const button2 = document.getElementsByClassName("btn-landing2")
const topCover = document.getElementsByClassName("top-side")
const bottomCover = document.getElementsByClassName("bottom-side")
const tl = gsap.timeline()

// Using Locomotive Scroll

// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     lerp: .05,
// });

// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".smooth-scroll", {
//     scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     }
// });

//!timeline 1
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
tl.from(line, {
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
tl.to(h2, {
    duration: 1.75,
    ease: "expo",
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    opacity: 1,
    x: '30px'
},
    "-=0.75")
tl.to(button1, {
    duration: 0.1,
    ease: "expo",
    // clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    opacity: 1,
    x: '30px'
},
    "-=1.25")
tl.to(button2, {
    duration: 0.1,
    ease: "expo",
    // clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    opacity: 1,
    x: '30px'
},
    "-=1.25")
tl.to(line, {
    duration: 1,
    ease: "expo",
    cssRule: {
        scaleY: 0
    }
},
    "-=0.35")

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
        })
        gsap.to(navWrapper, {
            duration: 0.75,
            ease: "expo",
            opacity: 1,
            delay: 0.1,
        })
        gsap.to(scaledContent, {
            duration: 1.25,
            ease: "expo",
            scale: 1,
        })
        gsap.to(scaledContent2, {
            duration: 1.25,
            ease: "expo",
            scale: 1,
        })
        gsap.to(navOutlinedContent, {
            duration: 1.5,
            ease: "expo",
            opacity: 1,
            delay: 0.3,
        })
        gsap.to(webContent, {
            duration: 1,
            ease: "expo",
            opacity: 0,
            scale: 1.35,
            y: yScroll + "px"
        })
    } else {
        //closed
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
            y: "0"
        })

        setInterval(zIndexNavBar(), 1250);
    }
    i++
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

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
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
        delay: 0.25
        // overwrite: "auto"
    });
}

//!On doc load hide .gs elements and create scroll trigger
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


// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
