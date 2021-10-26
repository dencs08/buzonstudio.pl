import * as $ from 'jquery'
import { gsap } from "gsap";

var preview = document.querySelectorAll('.project-preview');

// $(document).ready(function () {
//     gsap.set(preview, { width: 0 });
//     $(document)
//         .on("mouseover", ".navigation-item", function (evt) {
//             gsap.fromTo(preview, { width: "0px", opacity: 0.5 }, {
//                 duration: 1,
//                 opacity: 1,
//                 width: "600px",
//                 ease: "expo.inOut",
//             });
//         })
//         .on("mouseout", ".navigation-item", function (evt) {
//             gsap.fromTo(preview, { opacity: 1, width: "600px" }, {
//                 duration: 0.5,
//                 opacity: 0,
//                 width: "0px",
//                 ease: "expo.inOut",
//             });
//             gsap.set(preview, { width: 0, delay: 1 });
//         });
// });

$(document).on('mousemove', function (e) {
    gsap.to(".project-preview", {
        duration: 0.5,
        css: {
            left: e.pageX,
            top: e.pageY / 2
        },
        delay: 0.03
    });
});

const hoverEl = document.querySelectorAll('.js-hover')
let imgArray = []
let image;
const data = ["url('images/portfolio/portfolio1.png')", "url('images/portfolio/portfolio2.png')", "url('images/portfolio/portfolio1.png')", "url('images/portfolio/portfolio2.png')", "url('images/portfolio/portfolio1.png')", "url('images/portfolio/portfolio2.png')", "url('images/portfolio/portfolio1.png')"]

data.forEach((el, i) => {
    image = document.createElement('div')
    document.getElementById("works_images").appendChild(image)
    image.className = "project-preview"
    // image.setAttribute('src', el)
    image.style.backgroundImage = el
    imgArray.push(image)

})

hoverEl.forEach((el, i) => {
    el.addEventListener('mouseover', () => {
        imgArray[i].classList.add('visible')
        gsap.fromTo(imgArray[i], { width: "0px" }, {
            duration: 1,
            width: "600px",
            ease: "expo.inOut",
        });
    })

    el.addEventListener('mouseleave', () => {
        imgArray[i].classList.remove('visible')
        gsap.fromTo(imgArray[i], { width: "600px" }, {
            duration: 0.5,
            width: "0px",
            ease: "expo.inOut",
        });
    })
})