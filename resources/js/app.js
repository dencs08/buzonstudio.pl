import { gsap } from 'gsap'

const topCover = document.getElementsByClassName("top-side")
const bottomCover = document.getElementsByClassName("bottom-side")
const tl = gsap.timeline()

//! page transitions
window.onload = () => {
    const anchors = document.querySelectorAll('.web_link_transitions')
    const startButton = document.getElementById('start-button');
    const courtainWrapper = document.querySelector(".courtain-wrapper")

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
    //only on start to prevent #portfolio section page transition
    if (path == "/start" || path == "/") {
        for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors[i];

            anchor.addEventListener('click', e => {
                if (anchor.innerHTML == "Portfolio") {

                } else {
                    let target = e.target.href;

                    console.log(target)

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