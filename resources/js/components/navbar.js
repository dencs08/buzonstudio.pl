import { gsap } from "gsap";
import Component from 'gia/Component';

let isAnimating = false
const hamburger = document.querySelector('[data-hamburger]')
const navigation = document.querySelector('[data-navigation]')
const pagecontent = document.querySelector('[data-page-content]')
let tl = gsap.timeline()
let yBodyPos = 0;
export default class Navbar extends Component {
    constructor(element) {
        super(element);

    }

    mount() {
        hamburger.addEventListener('click', this.hamburgerClassToggle.bind(this));
    }

    hamburgerClassToggle() {
        if (isAnimating) return
        isAnimating = true

        hamburger.classList.toggle("is-active")
        navigation.classList.toggle('is-active')

        if (navigation.classList.contains("is-active")) {
            this.navbarShow()
        } else {
            this.navbarHide()
        }
    }

    navbarShow() {
        tl.fromTo(pagecontent, { scale: 1 }, {
            duration: 0.85,
            scale: 1.15,
            ease: "expo",
        })
        tl.fromTo(pagecontent, { opacity: 1 }, {
            duration: 0.75,
            opacity: 0,
            ease: "expo",
        }, "-=0.8")
        tl.fromTo(navigation, { scale: 0.8 }, {
            duration: 0.7,
            scale: 1,
            ease: "expo",
        }, "-=0.5")
        tl.fromTo(navigation, { opacity: 0 }, {
            duration: 0.7,
            opacity: 1,
            ease: "expo",
            onComplete: function () {
                isAnimating = false
            }
        }, "-=0.6")
    }

    navbarHide() {
        tl.to(navigation, {
            duration: 0.6,
            scale: 0.6,
            ease: "expo",
        })
        tl.to(navigation, {
            duration: 0.5,
            opacity: 0,
            ease: "expo",
        }, "-=0.6")
        tl.to(pagecontent, {
            duration: 0.6,
            opacity: 1,
            ease: "expo",

        }, "-=0.2")
        tl.to(pagecontent, {
            duration: 0.75,
            scale: 1,
            ease: "expo",
            onComplete: function () {
                navigation.classList.remove('is-active')
                isAnimating = false
            }
        }, "-=0.6")
    }
}