import * as $ from 'jquery'
import { gsap } from "gsap";

var preview = document.querySelectorAll('.project-preview');


let timer = 0

$(document).ready(function () {
    gsap.set(preview, { width: 0 });
    $(document)
        .on("mouseover", ".navigation-item", function (evt) {
            gsap.fromTo(preview, { width: "0px", opacity: 0.5 }, {
                duration: 1,
                opacity: 1,
                width: "600px",
                ease: "expo.inOut",
            });
        })
        .on("mouseout", ".navigation-item", function (evt) {
            gsap.fromTo(preview, { opacity: 1, width: "600px" }, {
                duration: 0.5,
                opacity: 0,
                width: "0px",
                ease: "expo.inOut",
            });
            gsap.set(preview, { width: 0, delay: 1 });
        });
});

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

$(".navigation-link-1").hover(function () {
    $(".project-preview").css({ "background-image": "url(images/portfolio2.png)" });
});
$(".navigation-link-2").hover(function () {
    $(".project-preview").css({ "background-image": "url(images/portfolio1.png)" });
});

$(".navigation-link-3").hover(function () {
    $(".project-preview").css({ "background-image": "url(images/portfolio2.png)" });
});

$(".navigation-link-4").hover(function () {
    $(".project-preview").css({ "background-image": "url(images/portfolio1.png)" });
});








