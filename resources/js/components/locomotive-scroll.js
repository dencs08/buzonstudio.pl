import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import Component from 'gia/Component';

let locoScroll;
export default class Locomotive extends Component {
    async require() {
        this.throttle = await import('locomotive-scroll');
        this.throttle = await import('gsap');
        this.throttle = await import('gsap/ScrollTrigger');
    }

    constructor(element) {
        super(element)

        document.addEventListener("DOMContentLoaded", function () {
            create()
        });
    }

    mount() {

    }

    unmount() {
        locoScroll.destroy()
        // locoScroll = null;
    }
}

function create() {
    locoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-locomotive-scroll]'),
        smooth: true,
        lerp: .1,
        // firefoxMultiplier: 50,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.scrollerProxy("[data-locomotive-scroll]", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("[data-locomotive-scroll]").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("[data-gs]").forEach(function (elem) {
        hide(elem);
        ScrollTrigger.create({
            trigger: elem,
            start: scrollTriggerStart(),
            end: "bottom top",
            once: true,
            scroller: "[data-locomotive-scroll]",
            markers: true,
            onEnter: function () { animateFrom(elem) },
        });
    });
}

function scrollTriggerStart() {
    //get one height or the other (some browsers / devices doesnt provide both)
    const height = document.documentElement.clientHeight
    let start = ""
    if (height == 0) {
        height = window.innerHeight
        let startTriggerNumber = height * 0.95;
        start = "top " + startTriggerNumber
    } else {
        let startTriggerNumber = height * 0.95;
        start = "top " + startTriggerNumber
    }

    return start;
}

//!auto animations
function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.hasAttribute("data-gs_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.hasAttribute("data-gs_fromRight")) {
        x = 100;
        y = 0;
    } else if (elem.hasAttribute("data-gs_fromBottom")) {
        y = 50;
        x = 0;
    } else if (elem.hasAttribute("data-gs_fromTop")) {
        y = -50;
        x = 0;
    } else if (elem.hasAttribute("data-gs_fromFadeIn")) {
        y = 0;
        x = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";

    let delay = elem.getAttribute("data-gs-delay")
    if (isNaN(delay) || delay == null) {
        delay = 0.15
    }

    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        autoAlpha: 1,
        duration: 1,
        ease: "expo",
        y: 0,
        x: 0,
        delay: delay
    });
}

function reload() {
    locoScroll.update()
    ScrollTrigger.refresh()
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

export { create as locoCreate, reload as locoReload }

// if (location.pathname == "/kontakt") {
//     const subjectButtonsGroup = document.querySelectorAll(".control-group")
//     const subjectButtons = document.querySelectorAll(".form_subject")
//     const target = document.querySelector('#Contact');
//     const buttonsError = document.querySelector(".control-group-error")
//     let checkNumber = 0;

//     function validateForm() {
//         document.getElementById('contact-form').addEventListener("submit", function () {
//             for (let i = 0; i < subjectButtons.length; i++) {
//                 const element = subjectButtons[i];

//                 if (element.checked) {
//                     checkNumber++
//                 }
//             }

//             if (checkNumber < 1) {
//                 event.preventDefault()
//                 locoScroll.scrollTo(target, {
//                     offset: -200
//                 });

//                 let errorTl = new gsap.timeline()
//                 errorTl.to(buttonsError, {
//                     onStart: function () { buttonsError.style.display = "block" },
//                     opacity: 1,
//                     duration: 1.5,
//                     delay: 0.25,
//                 })
//                 errorTl.to(buttonsError, {
//                     opacity: 0,
//                     duration: 0.5,
//                     repeat: 3,
//                     yoyo: true,
//                     ease: "sine"
//                 })

//                 return false;
//             }

//             return true;
//         }, false);
//     }

//     window.addEventListener("load", validateForm, false);
// }