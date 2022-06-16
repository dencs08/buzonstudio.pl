// var body = document.body,
//     html = document.documentElement;

// var height = Math.max(body.scrollHeight, body.offsetHeight,
//     html.clientHeight, html.scrollHeight, html.offsetHeight);

// var width = document.body.clientWidth;

// const background_img = document.getElementById("background_image")

// background_img.style.height = height * 2.5 + "px";
// background_img.style.width = width + "px";

import Swup from 'swup';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupProgressPlugin from '@swup/progress-plugin';
import SwupGaPlugin from '@swup/ga-plugin';

import removeComponents from 'gia/removeComponents';
import loadComponents from 'gia/loadComponents';
import config from 'gia/config';
import components from './components/giaComponents';

// import { portfolioInit } from './portfolio';
// import { navInit } from './components/navbar';

config.set('log', false);
loadComponents(components)

const options = {
    animateHistoryBrowsing: true,
    animationSelector: '[class*="transition-"]',
    containers: ["#swup"],
    cache: true,
    plugins: [new SwupHeadPlugin(), new SwupBodyClassPlugin(), new SwupPreloadPlugin(), new SwupProgressPlugin(), new SwupGaPlugin()],
    linkSelector:
        'a[href^="' +
        window.location.origin +
        '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    skipPopStateHandling: function (event) {
        if (event.state && event.state.source == "swup") {
            return false
        }
        return true
    }
};
const swup = new Swup(options)

swup.on('contentReplaced', function () {
    loadComponents(components)
    // document.querySelectorAll('[data-swup]').forEach(function (container) {
    //     loadComponents(components, container)
    // })
})

swup.on('willReplaceContent', function () {
    removeComponents()
})

swup.on('transitionEnd', function () {
    // locoReload()
})
