// var body = document.body,
//     html = document.documentElement;

// var height = Math.max(body.scrollHeight, body.offsetHeight,
//     html.clientHeight, html.scrollHeight, html.offsetHeight);

// var width = document.body.clientWidth;

// const background_img = document.getElementById("background_image")

// background_img.style.height = height * 2.5 + "px";
// background_img.style.width = width + "px";

import { portfolioInit } from './portfolio';
import { navInit } from './components/navbar';

function init() {
    if (document.querySelector("body")) {
        navInit()
    }
    if (document.querySelector("#fullpage")) {
        if (window.innerWidth < 992) return
        portfolioInit()
    }
}

init()