import { gsap, Splitting } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";


// Splitting();
gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
//! Landing page timeline
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const arrow = document.getElementsByClassName('arrow-down-icon')

const tl = gsap.timeline()

//!timeline 1
tl.fromTo(h2, {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
    opacity: 0,
    x: '-30px'
}, {
    delay: 0.5,
    opacity: 1,
    x: '0px',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    ease: "expo",
    duration: 1.5,
    stagger: 0.5
},
    "+=0.5")
tl.fromTo(h1, {
    opacity: 0,
    y: '60px',
    // clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',

}, {
    opacity: 1,
    y: '0px',
    // clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    ease: "expo",
    duration: 1.5,
    stagger: 0.5
},
    "-=1")
tl.fromTo(arrow, {
    opacity: 0,
    y: '-60px',
}, {
    opacity: 1,
    y: '0px',
    duration: 0.5,
},
    "-=1.25")