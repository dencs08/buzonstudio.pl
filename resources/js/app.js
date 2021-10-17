import { gsap } from 'gsap'
import * as $ from 'jquery'

//! page transitions
window.onload = () => {
    const anchors = document.querySelectorAll('.web_link_transitions');
    const topCover = document.getElementsByClassName("top-side")
    const bottomCover = document.getElementsByClassName("bottom-side")
    const tl = gsap.timeline()

    setTimeout(() => {
        tl.to(topCover, {
            duration: 1.25,
            ease: 'expo.out',
            y: '-50vh'
        })
        tl.to(bottomCover, {
            duration: 1.25,
            ease: 'expo.out',
            y: '50vh'
        },
            "-=1.25")
    }, 250);


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
                    tl.to(topCover, {
                        duration: 0.5,
                        ease: 'expo.out',
                        y: '0vh'
                    })
                    tl.to(bottomCover, {
                        duration: 0.5,
                        ease: 'expo.out',
                        y: '0vh'
                    },
                        "-=0.5")

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

                tl.to(topCover, {
                    duration: 0.5,
                    ease: 'expo.out',
                    y: '0vh'
                })
                tl.to(bottomCover, {
                    duration: 0.5,
                    ease: 'expo.out',
                    y: '0vh'
                },
                    "-=0.5")


                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            })
        }
    }
}

const progressBar = document.querySelector(".progress")
const infoAccept = document.querySelector(".info-accept")



gsap.set([progressBar, infoAccept], {
    opacity: 0,
    onComplete: function () {
        progressBar.style.zIndex = "9999";
        infoAccept.style.zIndex = "9999";
    }
})
gsap.to([progressBar, infoAccept], {
    opacity: 1,
    delay: 1.5,
    duration: 1
})

document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        gsap.to([progressBar, infoAccept], {
            opacity: 0,
            duration: 0.5,
            onComplete: function () {
                progressBar.style.display = "none";
                infoAccept.style.display = "none";
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