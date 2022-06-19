import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
import Component from 'gia/Component';

const header = document.querySelector('[data-header]')
var locoScroll;
export default class Locomotive extends Component {
    constructor(element) {
        super(element)
    }

    mount() {
    }

    unmount() {
        locoScroll.stop()
        locoScroll.destroy()
    }
}

function create() {
    locoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-locomotive-scroll]'),
        smooth: true,
        lerp: .1,
        getDirection: true,
        // firefoxMultiplier: 50,
    });

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
            // markers: true,
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
        let startTriggerNumber = height * 0.9;
        start = "top " + startTriggerNumber
    } else {
        let startTriggerNumber = height * 0.9;
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

function onScrollHideHeader() {
    locoScroll.on("scroll", (args) => {
        ScrollTrigger.update()
        if (args.direction == 'down') {
            header.style.top = "-100px";
        } else {
            header.style.top = "0"
        }
    })
}

function scrollTo(target, offset) {
    locoScroll.scrollTo(target, {
        offset: offset
    });
}

export { create as locoCreate, reload as locoReload, onScrollHideHeader, scrollTo as locoScrollTo }

