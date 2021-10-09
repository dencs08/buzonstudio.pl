import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

const slider = document.querySelector('.slide-track');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    beginMomentumTracking();
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    var prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    velX = slider.scrollLeft - prevScrollLeft;
});

// Momentum 
var velX = 0;
var momentumID;

slider.addEventListener('wheel', (e) => {
    cancelMomentumTracking();
});

function beginMomentumTracking() {
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
}
function cancelMomentumTracking() {
    cancelAnimationFrame(momentumID);
}
function momentumLoop() {
    slider.scrollLeft += velX;
    velX *= 0.95;
    if (Math.abs(velX) > 0.5) {
        momentumID = requestAnimationFrame(momentumLoop);
    }
}

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
tl.fromTo(h1, {
    opacity: 0,
    x: '-30px',
    clipPath: 'clip-path: polygon(0 0, 0 0, 0 100%, 0 100%)',

}, {
    opacity: 1,
    x: '0px',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    ease: "expo",
    duration: 1.25,
},
    "-=1.125")
tl.fromTo(h2, {
    clipPath: 'clip-path: polygon(0 0, 0 0, 0 100%, 0 100%)',
    opacity: 1,
    x: '-30px'
}, {
    opacity: 1,
    x: '0px',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    ease: "expo",
    duration: 1.75,
},
    "-=0.75")
tl.fromTo(button1, {
    ease: "expo",
    opacity: 0,
    y: '30px',
}, {
    opacity: 1,
    y: '0px',
    ease: "expo",
    duration: 1.25,
},
    "-=1.25")
tl.fromTo(button2, {
    opacity: 0,
    y: '30px'
}, {
    duration: 1.25,
    ease: "expo",
    opacity: 1,
    y: '0px'
},
    "-=0.8")
tl.to(line, {
    duration: 1,
    ease: "expo",
    cssRule: {
        scaleY: 0
    }
},
    "-=0.35")

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    yPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".panel-scroller",
        pin: true,
        scrub: 1,
        snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.2
        },
        end: () => "+=" + document.querySelector(".panel-scroller").offsetHeight
    }
});

