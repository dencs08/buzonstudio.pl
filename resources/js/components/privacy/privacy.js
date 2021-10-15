import { gsap } from 'gsap'

const h1 = document.querySelector('h1')
let tl = new gsap.timeline();

tl.fromTo(h1, {
    opacity: 0,
    x: '60px',

}, {
    opacity: 1,
    x: '0px',
    ease: "expo",
    duration: 1.5,
}, "+=1")