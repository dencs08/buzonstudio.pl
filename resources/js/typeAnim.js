import * as Typed from 'typed.js'

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function () {
    var typed = new Typed('#typed', {
        strings: ["doświadczenia.", "pomysły.", "aplikacje.", "strony internetowe.", "wizaulizacje."],
        backSpeed: 75,
        typeSpeed: 100,
        backDelay: 100,
        startDelay: 100,
        loop: true,
        cursorChar: '_',
        shuffle: true
    });
});
