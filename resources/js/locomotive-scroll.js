import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.smooth-locomotive-scroll'),
    smooth: true,
    lerp: .06,
    multiplier: 1.125,
    firefoxMultiplier: 50,
});

let loco_timer = 0;

function locoScrollBool() {
    loco_timer = 0.01
    if (loco_timer >= 0) {
        loco_scrolling = true
    }
}

setInterval(() => {
    loco_timer -= 0.01;
    if (loco_timer < 0) {
        loco_scrolling = false
    }
    // console.log(loco_scrolling)
    // console.log(loco_timer)
}, 100);

locoScroll.on("scroll", ScrollTrigger.update);
locoScroll.on("scroll", locoScrollBool);
// tell ScrollTrigger to use these proxy methods for the ".smooth-locomotive-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-locomotive-scroll", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".smooth-locomotive-scroll").style.transform ? "transform" : "fixed"
});

//!prevent gsap animation stop when scrolling with locomotive scroll
// var parallaxElements = Array.prototype.slice.call(document.querySelectorAll("section"));
// parallaxElements.forEach(function (self) {
//     var gs = self.querySelectorAll(".gs");
//     gsap.to(gs, {
//         scrollTrigger: {
//             scroller: ".smooth-locomotive-scroll",
//             scrub: true,
//             trigger: self,
//             start: "top 100%",
//             end: "bottom 0%",
//         },
//         y: (i, target) => -innerHeight * target.dataset.speed,
//         ease: "none"
//     });
// });

//!auto animations
function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_fromRight")) {
        x = 100;
        y = 0;
    } else if (elem.classList.contains("gs_fromBottom")) {
        y = 50;
        x = 0;
    } else if (elem.classList.contains("gs_fromTop")) {
        y = -50;
        x = 0;
    } else if (elem.classList.contains("gs_fromFadeIn")) {
        y = 0;
        x = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";

    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        autoAlpha: 1,
        duration: 1,
        ease: "expo",
        y: 0,
        x: 0,
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

// //!On doc load hide .gs elements and create scroll trigger
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            start: startTrigger(),
            end: "top top",
            once: true,
            scroller: ".smooth-locomotive-scroll",
            // markers: true,
            onEnter: function () { animateFrom(elem) },
            // onEnterBack: function () { animateFrom(elem) },
            // onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});

function startTrigger() {
    const h = document.documentElement.clientHeight
    const h2 = window.innerHeight
    let start = ""
    if (h == 0) {
        let startTriggerNumber = h2 * 0.85;
        start = "top " + startTriggerNumber
    } else {
        let startTriggerNumber = h * 0.85;
        start = "top " + startTriggerNumber
    }

    return start;
}

if (location.pathname == "/kontakt") {
    const subjectButtonsGroup = document.querySelectorAll(".control-group")
    const subjectButtons = document.querySelectorAll(".form_subject")
    const target = document.querySelector('#Contact');
    const buttonsError = document.querySelector(".control-group-error")
    let checkNumber = 0;

    function validateForm() {
        document.getElementById('contact-form').addEventListener("submit", function () {
            for (let i = 0; i < subjectButtons.length; i++) {
                const element = subjectButtons[i];

                if (element.checked) {
                    checkNumber++
                }
            }

            if (checkNumber < 1) {
                event.preventDefault()
                locoScroll.scrollTo(target, {
                    offset: -200
                });

                let errorTl = new gsap.timeline()
                errorTl.to(buttonsError, {
                    onStart: function () { buttonsError.style.display = "block" },
                    opacity: 1,
                    duration: 1.5,
                    delay: 0.25,
                })
                errorTl.to(buttonsError, {
                    opacity: 0,
                    duration: 0.5,
                    repeat: 3,
                    yoyo: true,
                    ease: "sine"
                })

                return false;
            }

            return true;
        }, false);
    }

    window.addEventListener("load", validateForm, false);
}

setTimeout(() => {
    var path = window.location;
    if (path.hash == "#prace") {
        var workTarget = document.getElementById("works")
        locoScroll.scrollTo(workTarget, {
            offset: -200
        });
    }
}, 1000);

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

