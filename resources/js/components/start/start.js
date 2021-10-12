import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import * as fullpage from 'fullpage.js'

new fullpage('#fullpage', {
    licenseKey: 'YOUR_KEY_HERE',
    navigation: true,
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'],
    navigationTooltips: ['Start', 'Przyciągnij uwagę', 'Zapadnij w pamięć', 'Większa sprzedaż', 'Portfolio', 'Kontakt', 'Stopka'],
    scrollingSpeed: 1000
});

gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

//! Landing page timeline
const line = CSSRulePlugin.getRule('.landing-page-content:before')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const button1 = document.getElementsByClassName("btn-landing1")
const button2 = document.getElementsByClassName("btn-landing2")
const tl = gsap.timeline()

//!timeline
tl.from(line, {
    delay: 1,
    duration: 2,
    ease: "expo",
    cssRule: {
        scaleY: 0
    }
},
    "-=0.5")
tl.fromTo(h2, {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
    opacity: 0,
    x: '-30px'
}, {
    opacity: 1,
    x: '0px',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    ease: "expo",
    duration: 1.75,
},
    "-=1")
tl.fromTo(h1, {
    opacity: 0,
    y: '60px',
}, {
    opacity: 1,
    y: '0px',
    ease: "expo",
    duration: 1.25,
},
    "-=1.25")
tl.fromTo(button1, {
    ease: "expo",
    opacity: 0,
    y: '-40px',
}, {
    opacity: 1,
    y: '0px',
    ease: "expo",
    duration: 1.25,
},
    "-=0.85")
tl.fromTo(button2, {
    opacity: 0,
    y: '-40px',
}, {
    duration: 1.25,
    ease: "expo",
    opacity: 1,
    y: '0px',
},
    "-=1")
tl.to(line, {
    duration: 1,
    ease: "expo",
    cssRule: {
        scaleY: 0
    }
},
    "-=0.6")

gsap.registerPlugin(ScrollTrigger);