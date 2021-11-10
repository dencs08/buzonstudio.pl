import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
//! Landing page timeline
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const arrow = document.getElementsByClassName('arrow-down-icon')
const three = document.getElementById('web_gl')

const tl = gsap.timeline()

gsap.set([three, h1, h2, arrow], {
    opacity: 0
})

let stopCheck = false;
let checkI = 0
if (stopCheck == false) {
    setInterval(function () {
        if (webEntered == true) {
            stopCheck = true
            for (checkI; checkI < 1; checkI++) {
                //!timeline 1
                // tl.fromTo(three, {
                //     opacity: 0,
                // }, {
                //     opacity: 1,
                //     delay: 0.25,
                //     duration: 0.75,
                //     ease: "sine.in",
                // })
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
                    "-=0.35")
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
            }
        }
    }, 250);
}

