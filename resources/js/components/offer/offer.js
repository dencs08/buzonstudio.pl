import * as $ from 'jquery'
import { gsap } from "gsap";

const hoverEl = document.querySelectorAll('.js-hover')
let imgArray = []
let hrefArray = []
let image;

const url = "images/portfolio";
const objectToArray = portfolios => {
    const keys = Object.keys(portfolios);
    const res = [];
    for (let i = 0; i < keys.length; i++) {
        res.push(portfolios[keys[i]]);
    };
    return res;
};
const portfoliosArr = (objectToArray(portfolios));

hrefArray = document.querySelectorAll(".navigation-link")

portfoliosArr.forEach((el, i) => {
    image = document.createElement('div')
    document.getElementById("works_images").appendChild(image)
    image.className = "project-preview"
    image.style.backgroundImage = `url('${url}/${el}/${el}_portfolio.jpg')`
    imgArray.push(image)
})


hoverEl.forEach((el, i) => {
    el.addEventListener('mouseover', function (e) {
        imgArray[i].classList.add('visible')
        gsap.fromTo(imgArray[i], { width: "0px" }, {
            duration: 1,
            width: "600px",
            ease: "expo.inOut",
        });
        gsap.to(".project-preview", {
            duration: 0.5,
            css: {
                left: e.pageX,
                top: e.pageY / 2
            },
            delay: 0.03
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