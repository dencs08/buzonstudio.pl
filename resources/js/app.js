import { gsap } from 'gsap'

//! page transitions
window.onload = () => {
    const anchors = document.querySelectorAll('.web_link_transitions');
    const anchors_start = document.querySelectorAll('.web_link_active');
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
    if (path == "/start") {
        for (let i = 0; i < anchors_start.length; i++) {
            const anchor_start = anchors_start[i];

            anchor_start.addEventListener('click', e => {
                let target = e.target.href;

                e.preventDefault();
                console.log("prevented on start")
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
    } else {
        for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors[i];
            anchor.addEventListener('click', e => {
                let target = e.target.href;

                console.log("not prevented on start")

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