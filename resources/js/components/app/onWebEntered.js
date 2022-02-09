import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);
//! Landing page timeline
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const three = document.getElementById('web_gl')
const tl = gsap.timeline()
const background_image = document.getElementById("background_image")
const canvas = document.getElementById("web_gl")

let isLandingAnimDone = {
    isReady: false,
    get check() {
        return this.isReady;
    },
    set set(value) {
        this.isReady = value
    }
};
function mainWebEnter() {
    webEntered = true;

    var path = location.pathname;
    if (path == "/start" || path == "/") {
        const line = CSSRulePlugin.getRule('.landing-page-content:before')
        const button1 = document.getElementsByClassName("btn-landing1")
        const button2 = document.getElementsByClassName("btn-landing2")
        const rightNav = document.getElementById('fp-nav')
        gsap.set([three, h1, h2, button1, button2, rightNav], {
            opacity: 0
        })
        gsap.set(line, {
            cssRule: {
                scaleY: 0
            },
        })
        tl.to(rightNav, {
            duration: 1,
            ease: "expo",
            opacity: 1,
            onComplete: function () {
                isLandingAnimDone.set = true
                // console.log(isLandingAnimDone.check)
            },
        },
            "-=0.75")
        tl.to(line, {
            delay: 1.5,
            duration: 1.25,
            ease: "expo",
            cssRule: {
                scaleY: 1
            },
        },
            "-=1.65")
        tl.fromTo(h2, {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            opacity: 0,
            x: '-30px'
        }, {
            opacity: 1,
            x: '0px',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            ease: "expo",
            duration: 1.5,
        },
            "-=0.65")
        tl.fromTo(h1, {
            opacity: 0,
            y: '60px',
        }, {
            opacity: 1,
            y: '0px',
            ease: "expo",
            duration: 1.25,
        },
            "-=1.05")
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
            "-=0.8")
        tl.fromTo(button2, {
            ease: "expo",
            opacity: 0,
            y: '-40px',
        }, {
            duration: 1.25,
            ease: "expo",
            opacity: 1,
            y: '0px',
        },
            "-=1.05")
        tl.to(line, {
            duration: 1,
            ease: "expo",
            cssRule: {
                scaleY: 0
            },
        },
            "-=0.6")
    } else if (path.includes("/portfolio")) {
    } else if (path == "/polityka") {
    } else {
        const arrow = document.getElementsByClassName('arrow-down-icon')
        const three = document.getElementById('web_gl')

        gsap.set([three, h1, h2, arrow], {
            opacity: 0
        })

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
    checkCookie(0.5)
}

function checkCookie(initDelay) {
    let three_enable = getCookie("three_enable");
    if (three_enable == "true") {
        three_enabled = true;
        threeJsDBlock(initDelay)
        gsap.set(threeEnabler, {
            opacity: 0,
        })
    } else {
        three_enabled = false;
        threeJsDNone(initDelay)
        gsap.set(threeDisabler, {
            opacity: 0,
        })
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const threeDisabler = document.getElementById("three_disabler")
threeDisabler.addEventListener("click", threeJsDNone)

const threeEnabler = document.getElementById("three_enabler")
threeEnabler.addEventListener("click", threeJsDBlock)


function threeJsDNone(delay) {
    document.cookie = "three_enable=false; path=/;";
    var tl = new gsap.timeline()
    gsap.to(canvas, {
        opacity: 0,
        duration: 1,
        ease: "expo",
        onComplete: function () {
            canvas.style.display = "none"
        }
    })
    gsap.to(background_image, {
        opacity: 1,
        duration: 1,
        ease: "expo",
        onStart: function () {
            background_image.style.display = "block"
        }
    })
    gsap.to(threeDisabler, {
        opacity: 0,
        duration: 0.75,
        ease: "expo",
        onComplete: function () {
            threeDisabler.style.zIndex = "-10"
            threeEnabler.style.zIndex = "99"
        }
    })
    gsap.to(threeEnabler, {
        opacity: 1,
        duration: 0.75,
        ease: "expo",
    })

}

function threeJsDBlock(delay) {
    document.cookie = "three_enable=true; path=/;";
    var tl = new gsap.timeline()
    gsap.fromTo(canvas, { opacity: 0 }, {
        opacity: 1,
        duration: 1.5,
        ease: "sine2",
        onStart: function () {
            canvas.style.display = "block"
        }
    }, "=" + delay)
    gsap.to(background_image, {
        opacity: 0,
        duration: 1,
        ease: "expo",
        onComplete: function () {
            background_image.style.display = "none"
        }
    })
    gsap.to(threeEnabler, {
        opacity: 0,
        duration: 0.75,
        ease: "expo",
        onComplete: function () {
            threeDisabler.style.zIndex = "99"
            threeEnabler.style.zIndex = "-10"
        }
    })
    gsap.to(threeDisabler, {
        opacity: 1,
        duration: 0.75,
        ease: "expo",
    })
}

export { mainWebEnter, threeJsDNone, isLandingAnimDone }
