import { gsap } from 'gsap'
import * as fullpage from 'fullpage.js'
import Component from 'gia/Component';

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

let tlIn = new gsap.timeline();

export default class Portfolio extends Component {
    constructor(element) {
        super(element);

        this.sections = document.querySelectorAll("[section]");
    }

    mount() {
        this.portfolio()
    }

    unmount() {
        fullpage_api.destroy('all');
    }

    portfolio() {

        const animateIn = ({ currentIndex }) => {
            for (let i = 0; i < this.sections.length; i++) {
                const section = this.sections[i];
                if (currentIndex === i) {
                    if (currentIndex === 0) {
                        tlIn.to(section, animateInParam)
                        this.gsapStaggerAnim(0);
                    } else {
                        gsap.to(section, animateInParam)
                        this.gsapStaggerAnim(i)
                    }
                }
            }
        };

        const animateOut = ({ currentIndex, direction }) => {
            if (direction === "down") {
                for (let i = 0; i < this.sections.length; i++) {
                    const section = this.sections[i];
                    if (currentIndex === i) {
                        tlIn.to(section, animateOutDownParam)
                    }
                }
            } else {
                for (let i = 0; i < this.sections.length; i++) {
                    const section = this.sections[i];
                    if (currentIndex === i) {
                        tlIn.to(section, animateOutDownParam)
                    }
                }
            }
        };

        this.fullPage = new fullpage("#fullpage", {
            licenseKey: '6193823F-901948D3-ACA324B5-09340F06',
            navigation: true,
            // navigationTooltips: [''],
            scrollingSpeed: 750,
            css3: true,
            sectionSelector: '[section]',

            afterLoad: function (origin, destination, direction) {
                animateIn({ currentIndex: destination.index })
                setTimeout(() => {
                    fullpage_api.setAllowScrolling(true)
                    fullpage_api.setKeyboardScrolling(true)
                }, 500);
            },
            onLeave: function (origin, destination, nextIndex, direction) {
                animateOut({ currentIndex: origin.index, direction })
                setTimeout(() => {
                    fullpage_api.setAllowScrolling(false)
                    fullpage_api.setKeyboardScrolling(false)
                }, 50);
            },
        });

        this.switchIndex()
        this.hideElements()
    }

    switchIndex() {
        const { index } = this.fullPage.getActiveSection()
    };

    hideElements() {
        for (let i = 1; i < this.sections.length; i++) {
            const section = this.sections[i];
            gsap.to(section, {
                opacity: 0
            });
        }
    }

    gsapStaggerAnim(i) {
        tlIn.fromTo("[anim-stagger-" + i + ']',
            staggerParamFrom,
            staggerParamTo,
            staggerParamToDelay);
    }
}