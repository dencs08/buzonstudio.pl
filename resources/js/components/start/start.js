import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import * as fullpage from 'fullpage.js'

gsap.registerPlugin(CSSPlugin, CSSRulePlugin);
var sections = document.getElementsByClassName("section");

let isLandingAnimDone = false;

var staggerParamFrom = {
    y: 25,
    opacity: 0,
}

var staggerParamTo = {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
}

var staggerParamToDelay = "-=0"

var animateInParam = {
    autoAlpha: 1,
    opacity: 0.75,
    duration: 0,
    ease: "power2",
};

var animateOutDownParam = {
    autoAlpha: 0,
    opacity: 0,
    duration: 0.5,
    ease: "power1",
};

var animateOutOtherParam = {
    autoAlpha: 0,
    opacity: 0,
    duration: 0.5,
    ease: "power1",
};

function hideElements() {
    for (let i = 1; i < sections.length; i++) {
        const section = sections[i];
        gsap.to(section, {
            opacity: 0
        });
    }
}

function gsapStaggerAnim(i) {
    tlIn.fromTo(".anim-stagger" + i,
        staggerParamFrom,
        staggerParamTo,
        staggerParamToDelay);
}

let tlIn = new gsap.timeline();
(() => {
    const animateIn = ({ currentIndex }) => {
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            if (currentIndex === i) {
                if (currentIndex === 0) {
                    if (isLandingAnimDone == true) {
                        tlIn.to(section, animateInParam)
                        gsapStaggerAnim(0);
                    }
                } else {
                    gsap.to(section, animateInParam)
                    gsapStaggerAnim(i)
                }
            }

        }
    };

    const animateOut = ({ currentIndex, direction }) => {
        if (direction === "down") {
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                if (currentIndex === i) {
                    tlIn.to(section, animateOutDownParam)
                }
            }
        } else {
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                if (currentIndex === i) {
                    tlIn.to(section, animateOutDownParam)
                }
            }
        }
    };

    const fullPage = new fullpage("#fullpage", {
        licenseKey: '6193823F-901948D3-ACA324B5-09340F06',
        navigation: true,
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7'],
        navigationTooltips: ['Start', 'Przyciągnij uwagę', 'Zapadnij w pamięć', 'Większa sprzedaż', 'Portfolio', 'Kontakt', 'Stopka'],
        scrollingSpeed: 1000,
        css3: true,

        afterLoad: function (origin, destination, direction) {
            animateIn({ currentIndex: destination.index });
        },
        onLeave: function (origin, nextIndex, direction) {
            animateOut({ currentIndex: origin.index, direction });
        },
    });
    const switchIndex = () => {
        const { index } = fullPage.getActiveSection();
    };

    switchIndex();
    hideElements();
})();

//! Landing page timeline
const line = CSSRulePlugin.getRule('.landing-page-content:before')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const button1 = document.getElementsByClassName("btn-landing1")
const button2 = document.getElementsByClassName("btn-landing2")
const tl = gsap.timeline()

//!timeline
tl.from(line, {
    delay: 1.25,
    duration: 2,
    ease: "expo",
    cssRule: {
        scaleY: 0
    },
    onComplete: function () { isLandingAnimDone = true },
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
    },
},
    "-=0.6")

gsap.registerPlugin(ScrollTrigger);