// import { gsap } from "gsap";

// //!navbar
// const navBurger = document.getElementById("nav-burger")
// const navWrapper = document.getElementById("nav-wrapper")
// const navOutlinedContent = document.getElementById("nav-content-outlined")
// const navBg = document.getElementById("nav-bg")
// const scaledContent = document.getElementById("nav-ul")
// const scaledContent2 = document.getElementById("nav-info")
// const webContent = document.getElementById("web-content")
// const body = document.getElementsByTagName("body")[0]

// const navFloater = document.getElementById("nav-floater")
// var position = getPosition(navFloater);

// let i = 0;

// navBurger.addEventListener("click", navBarAnimation);

// navWrapper.style.zIndex = "-99";
// navBg.style.zIndex = "-99";

// function navBarAnimation() {
//     if (i % 2 == 0) {
//         //opened
//         navBarIsOpened = true;
//         let yScroll = 0;
//         if (location.pathname == "/" || location.pathname == "/start") {
//             yScroll = position.y * 2;
//         } else {
//             yScroll = position.y;
//         }

//         navWrapper.style.zIndex = "98";
//         navBg.style.zIndex = "97";

//         gsap.to(navBg, {
//             duration: 0.75,
//             ease: "expo",
//             opacity: 1,
//             delay: 0.3,
//         })
//         gsap.to(navWrapper, {
//             duration: 0.75,
//             ease: "expo",
//             opacity: 1,
//             delay: 0.4,
//         })
//         gsap.to(scaledContent, {
//             duration: 1.25,
//             ease: "expo",
//             scale: 1,
//             delay: 0.3,
//         })
//         gsap.to(scaledContent2, {
//             duration: 1.25,
//             ease: "expo",
//             scale: 1,
//             delay: 0.3,
//         })
//         gsap.to(navOutlinedContent, {
//             duration: 1.5,
//             ease: "expo",
//             opacity: 1,
//             delay: 0.5,
//         })
//         gsap.to(webContent, {
//             duration: 1,
//             ease: "expo",
//             opacity: 0,
//             scale: 1.35,
//             y: yScroll + "px",
//             onComplete: function () { webContent.style.display = "none"; }
//         })
//     } else {
//         //closed
//         navBarIsOpened = false;
//         gsap.to(navBg, {
//             duration: 0.75,
//             ease: "expo",
//             opacity: 0,
//             delay: 0.15
//         })
//         gsap.to(navWrapper, {
//             duration: 0.75,
//             ease: "power.inOut",
//             opacity: 0,
//         })
//         gsap.to(scaledContent, {
//             duration: 1.25,
//             ease: "expo",
//             scale: 0.8,
//         })
//         gsap.to(scaledContent2, {
//             duration: 1.25,
//             ease: "expo",
//             scale: 0.8,
//         })
//         gsap.to(navOutlinedContent, {
//             duration: 1.5,
//             ease: "expo",
//             opacity: 0,
//             delay: 0.25
//         })
//         gsap.to(webContent, {
//             duration: 1.5,
//             ease: "expo",
//             opacity: 1,
//             scale: 1,
//             y: "0",
//             onStart: function () { webContent.style.display = "block"; }
//         })

//         setInterval(zIndexNavBar(), 1250);
//     }
//     i++
// }

// function getPosition(el) {
//     var xPos = 0;
//     var yPos = 0;

//     while (el) {
//         if (el.tagName == "BODY") {
//             // deal with browser quirks with body/window/document and page scroll
//             var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
//             var yScroll = el.scrollTop || document.documentElement.scrollTop;

//             xPos += (el.offsetLeft - xScroll + el.clientLeft);
//             yPos += (el.offsetTop - yScroll + el.clientTop);
//         } else {
//             // for all other non-BODY elements
//             xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//             yPos += (el.offsetTop - el.scrollTop + el.clientTop);
//         }

//         el = el.offsetParent;
//     }
//     return {
//         x: xPos,
//         y: yPos
//     };

// }

// function zIndexNavBar() {
//     navWrapper.style.zIndex = "-5";
//     navBg.style.zIndex = "-5";
// }