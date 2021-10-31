import { gsap } from 'gsap'

const h1 = document.querySelector('h1')
const imgLanding = document.querySelector('.img_landing')
let tl = new gsap.timeline();

tl.fromTo(h1, {
    opacity: 0,
    x: '60px',

}, {
    opacity: 1,
    x: '0px',
    ease: "expo",
    duration: 1.5,
}, "+=1"),
    tl.fromTo(imgLanding, {
        opacity: 0,
        y: '60px',

    }, {
        opacity: 1,
        y: '0px',
        ease: "expo",
        duration: 1.5,
    }, "-=1.125")