import { gsap } from "gsap";

const HAMBURGER = document.querySelector('[data-hamburger]')
const NAVIGATION = document.querySelector('[data-navigation]')
const PAGECONTENT = document.querySelector('[data-page-content]')
let tl = gsap.timeline()
let isAnimating = false
let yBodyPos = 0;

function init() {
    hamburgerClassToggle()
}

function hamburgerClassToggle() {
    HAMBURGER.addEventListener('click', function () {
        if (isAnimating) return
        isAnimating = true

        HAMBURGER.classList.toggle("is-active")
        NAVIGATION.classList.toggle('is-active')

        if (NAVIGATION.classList.contains("is-active")) {
            navbarShow()
        } else {
            navbarHide()
        }
    })
}

function navbarShow() {
    tl.fromTo(PAGECONTENT, { scale: 1 }, {
        duration: 0.85,
        scale: 1.15,
        ease: "expo",
    })
    tl.fromTo(PAGECONTENT, { opacity: 1 }, {
        duration: 0.75,
        opacity: 0,
        ease: "expo",
    }, "-=0.8")
    tl.fromTo(NAVIGATION, { scale: 0.8 }, {
        duration: 0.7,
        scale: 1,
        ease: "expo",
    }, "-=0.5")
    tl.fromTo(NAVIGATION, { opacity: 0 }, {
        duration: 0.7,
        opacity: 1,
        ease: "expo",
        onComplete: function () {
            isAnimating = false
        }
    }, "-=0.6")
}

function navbarHide() {
    tl.to(NAVIGATION, {
        duration: 0.6,
        scale: 0.6,
        ease: "expo",
    })
    tl.to(NAVIGATION, {
        duration: 0.5,
        opacity: 0,
        ease: "expo",
    }, "-=0.6")
    tl.to(PAGECONTENT, {
        duration: 0.6,
        opacity: 1,
        ease: "expo",

    }, "-=0.2")
    tl.to(PAGECONTENT, {
        duration: 0.75,
        scale: 1,
        ease: "expo",
        onComplete: function () {
            NAVIGATION.classList.remove('is-active')
            isAnimating = false
        }
    }, "-=0.6")
}


export { init as navInit }