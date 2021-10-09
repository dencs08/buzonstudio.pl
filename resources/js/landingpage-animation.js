import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
//! Landing page timeline
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const tl = gsap.timeline()

//!timeline 1
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
    "+=0.5")
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