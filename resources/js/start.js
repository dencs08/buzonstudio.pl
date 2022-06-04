import { gsap } from "gsap";
import * as fullpage from 'fullpage.js'
import { isLandingAnimDone } from './components/onWebEntered'

var sections = document.getElementsByClassName("section");

var staggerParamFrom = {
    y: 25,
    opacity: 0,
}

var staggerParamTo = {
    y: 0,
    opacity: 1,
    duration: 0.5,
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
    duration: 0.25,
    ease: "power1",
};

var animateOutOtherParam = {
    autoAlpha: 0,
    opacity: 0,
    duration: 0.25,
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
                    // if (isLandingAnimDone.check === true) {
                    tlIn.to(section, animateInParam)
                    gsapStaggerAnim(0);
                    // }
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
        scrollingSpeed: 750,
        css3: true,

        afterLoad: function (origin, destination, direction) {
            animateIn({ currentIndex: destination.index });
            setTimeout(() => {
                fullpage_api.setAllowScrolling(true);
                fullpage_api.setKeyboardScrolling(true);
            }, 600);
            startSectionIndex = destination.index
        },
        onLeave: function (origin, destination, nextIndex, direction) {
            animateOut({ currentIndex: origin.index, direction });
            setTimeout(() => {
                fullpage_api.setAllowScrolling(false);
                fullpage_api.setKeyboardScrolling(false);
            }, 50);
            startSectionIndex = destination.index
        },
    });
    const switchIndex = () => {
        const { index } = fullPage.getActiveSection();
    };

    switchIndex();
    hideElements();
})();