import * as $ from 'jquery'
import { gsap } from "gsap";


$(document).ready(function () {
    gsap.set(".project-preview", { width: 0 });

    var tl = gsap.timeline()

    $(document)
        .on("mouseover", ".navigation-item", function (evt) {
            tl.to($(".project-preview"), {
                duration: 1,
                width: "600px",
                ease: "expo.inOut"
            });
        })
        .on("mouseout", ".navigation-item", function (evt) {
            tl.to($(".project-preview"), {
                duration: 0.5,
                width: 0,
                ease: "expo.inOut"
            });
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

var offsets = $('.project-preview').offset();
var top = offsets.top;
var left = offsets.left;

$(document).on('mousemove', function (e) {
    $('.project-preview').css({
        left: (e.pageX / 1),
        top: top + (e.pageY / 10)
    });
});
