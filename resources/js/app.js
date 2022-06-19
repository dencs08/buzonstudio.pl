// var body = document.body,
//     html = document.documentElement;

// var height = Math.max(body.scrollHeight, body.offsetHeight,
//     html.clientHeight, html.scrollHeight, html.offsetHeight);

// var width = document.body.clientWidth;

// const background_img = document.getElementById("background_image")

// background_img.style.height = height * 2.5 + "px";
// background_img.style.width = width + "px";

import Swup from 'swup'
import SwupHeadPlugin from '@swup/head-plugin'
import SwupBodyClassPlugin from '@swup/body-class-plugin'
import SwupPreloadPlugin from '@swup/preload-plugin'
import SwupProgressPlugin from '@swup/progress-plugin'
import SwupGaPlugin from '@swup/ga-plugin'
import SwupJsPlugin from '@swup/js-plugin'
import SwupFormsPlugin from '@swup/forms-plugin';
import SwupDebugPlugin from '@swup/debug-plugin';

import gsap from 'gsap'

import removeComponents from 'gia/removeComponents'
import loadComponents from 'gia/loadComponents'
import config from 'gia/config'
import components from './components/giaComponents'

import { navbarToggle } from './components/navbar';
import { cursorClassRemove } from './components/cursor';
import { locoCreate, locoReload, onScrollHideHeader } from './components/locomotive-scroll';

config.set('log', true);
loadComponents(components)

const jsTransitionOptions = [
    {
        from: '(.*)',
        to: '(.*)',
        in: (next) => {
            document.querySelector('#swup').style.opacity = 0;
            gsap.to(document.querySelector('#swup'), {
                duration: 0.4,
                opacity: 1,
                ease: "ease",
                onComplete: next
            });
        },
        out: (next) => {
            gsap.to(document.querySelector('#swup'), {
                duration: 0.4,
                opacity: 0,
                ease: "expo",
                onComplete: next
            });
        }
    }
];

const swupOptions = {
    animateHistoryBrowsing: true,
    animationSelector: '[class*="transition-"]',
    containers: ["#swup"],
    cache: true,
    plugins: [
        new SwupHeadPlugin(),
        new SwupBodyClassPlugin(),
        new SwupPreloadPlugin(),
        new SwupGaPlugin(),
        new SwupFormsPlugin(),
        new SwupDebugPlugin(),
        new SwupProgressPlugin({
            delay: 1000
        }),
        new SwupJsPlugin(jsTransitionOptions)
    ],
    linkSelector:
        'a[href^="' +
        window.location.origin +
        '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    skipPopStateHandling: function (event) {
        if (event.state && event.state.source == "swup") {
            return false
        }
        return true
    },
}

const swup = new Swup(swupOptions)

document.addEventListener("DOMContentLoaded", function () {
    locoCreate()
    onScrollHideHeader()
});

swup.on('willReplaceContent', function () {
    removeComponents()
    cursorClassRemove()
})

swup.on('contentReplaced', function () {
    loadComponents(components)

    if (!document.querySelector("[data-navigation]").classList.contains('is-active')) return
    navbarToggle()
})

swup.on('transitionEnd', function () {
    if (!document.querySelector("[g-component='Locomotive']")) return
    locoCreate()
    locoReload()
    onScrollHideHeader()
})

function disablePlugin(pluginName) {
    swup.unuse(pluginName)
}

function enablePlugin(pluginName) {
    swup.use(new pluginName())
}

export { disablePlugin as swupDisablePlugin, enablePlugin as swupEnablePlugin }

// document.addEventListener('swup:transitionEnd', (event) => {
//     if (!document.querySelector("#landing-page")) return
//     let landingPage = document.querySelector("#landing-page")

//     if (!landingPage.getAttribute("g-component") == "Locomotive") return
//     create()
//     reload()
// });
