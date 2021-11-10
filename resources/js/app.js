import { gsap } from 'gsap'
import * as $ from 'jquery'

const topCover = document.getElementsByClassName("top-side")
const bottomCover = document.getElementsByClassName("bottom-side")
const tl = gsap.timeline()
const canvas = document.getElementById("web_gl")
let checkIfWebEnteredForCookie = false;

//! page transitions
window.onload = () => {
    const anchors = document.querySelectorAll('.web_link_transitions')
    const startButton = document.getElementById('start-button');
    const courtainWrapper = document.querySelector(".courtain-wrapper")

    let checkI = 0
    if (checkIfWebEnteredForCookie == false) {
        checkIfWebEnteredForCookie = true;
        setInterval(() => {
            if (webEntered == true) {
                for (checkI; checkI < 1; checkI++) {
                    checkCookie(0.5)
                }
            }
        }, 100);
    }

    if (!sessionStorage.noFirstVisit) {
        courtainWrapper.style.display = 'flex';

        tl.to(courtainWrapper, {
            opacity: 1,
            duration: 2.5,
            ease: "expo",
            delay: 0.5,
        })

        startButton.addEventListener('click', e => {
            sessionStorage.noFirstVisit = "1";
            setTimeout(() => {
                tl.to(courtainWrapper, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: function () {
                        courtainWrapper.style.display = "none";
                    }
                })
                courtainAnimStart()

            }, 250);
        })
    } else {
        courtainWrapper.style.display = 'none';

        setTimeout(() => {
            tl.to(courtainWrapper, {
                opacity: 0,
                duration: 0.5,
                onComplete: function () {
                    courtainWrapper.style.display = "none";
                }
            })
            courtainAnimStart()
        }, 250);
    }

    var path = location.pathname;
    //only on offer view to prevent #portfolio section page transition
    if (path == "/oferta" || path == "/") {
        for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors[i];

            anchor.addEventListener('click', e => {
                if (anchor.innerHTML == "Portfolio") {
                    courtainAnimExit()

                    setTimeout(() => {
                        window.location.reload(false);
                    }, 500);
                } else {
                    let target = e.target.href;

                    e.preventDefault();
                    courtainAnimExit()

                    setTimeout(() => {
                        window.location.href = target;
                    }, 500);
                }
            })
        }
    } else {
        for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors[i];
            anchor.addEventListener('click', e => {
                let target = e.target.href;
                e.preventDefault();
                courtainAnimExit()

                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            })
        }
    }
}

const progressBar = document.querySelector(".progress")

gsap.set([progressBar], {
    opacity: 0,
    onComplete: function () {
        progressBar.style.zIndex = "9999";
    }
})
gsap.to([progressBar], {
    opacity: 1,
    delay: 1.5,
    duration: 1
})

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        gsap.to([progressBar], {
            opacity: 0,
            duration: 0.5,
            onComplete: function () {
                progressBar.style.display = "none";
            }
        })
    }
}

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
let vwNew = 0;
let vhNew = 0;

window.addEventListener('resize', function () {
    "use strict";
    vwNew = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    vhNew = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    if (Math.abs(vwNew - vw) > 250 || Math.abs(vhNew - vh) > 650) {
        window.location.reload();
    }
});

function courtainAnimStart() {
    tl.to(topCover, {
        duration: 0.75,
        ease: 'expo.out',
        y: '-50vh'
    })
    tl.to(bottomCover, {
        duration: 0.75,
        ease: 'expo.out',
        y: '50vh',
        onStart: function () {
            webEntered = true;
        }
    },
        "-=0.75")
}

function courtainAnimExit() {
    tl.to(topCover, {
        duration: 0.5,
        ease: 'expo.out',
        y: '-0vh'
    })
    tl.to(bottomCover, {
        duration: 0.5,
        ease: 'expo.out',
        y: '0vh',
    },
        "-=0.5")
}



if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // cursor.style.display = "none";
    // follower.style.display = "none";
} else {
    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0;

    var mouseX = 0,
        mouseY = 0;

    gsap.to(cursor, {
        duration: 0.005,
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            gsap.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            });

            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    $("a, button, input, textarea, input, label, .cursor_expand").on("mouseenter", function () {
        cursor.addClass("active");
        follower.addClass("active");
    });
    $("a, button, input, textarea, input, label, .cursor_expand").on("mouseleave", function () {
        cursor.removeClass("active");
        follower.removeClass("active");
    });
}

const threeDisabler = document.getElementById("three_disabler")
threeDisabler.addEventListener("click", threeJsDNone)

const threeEnabler = document.getElementById("three_enabler")
threeEnabler.addEventListener("click", threeJsDBlock)

const background_image = document.getElementById("background_image")

if (!sessionStorage.noFirstVisit) {
    three_enabled == true
    document.cookie = "three_enable=true; path=/;";
}

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
    // console.log(three_enable);
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

var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);

var width = document.body.clientWidth;

const background_img = document.getElementById("background_image")

background_img.style.height = height * 2.5 + "px";
background_img.style.width = width + "px";