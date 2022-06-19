import $ from 'jquery';

import { locoScrollTo } from './locomotive-scroll';
import gsap from 'gsap'
import Component from 'gia/Component';

import { swupDisablePlugin, swupEnablePlugin } from '../app'

export default class ContactForm extends Component {
    constructor(element) {
        super(element);

    }

    mount() {
        labelLift()

        window.addEventListener("load", validateForm, false);
    }
}

function labelLift() {
    $('.js-input').keyup(function () {
        if ($(this).val()) {
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    });
}

let contactContainer
let form
let subjectButtonsGroup
let subjectButtons
let buttonsError
let checkNumber
function validateForm() {
    contactContainer = document.querySelector('#Contact')
    form = contactContainer.querySelector('.contact-form')
    subjectButtonsGroup = form.querySelectorAll(".control-group")
    subjectButtons = form.querySelectorAll(".form_subject")
    buttonsError = form.querySelector(".control-group-error")
    checkNumber = 0;

    document.addEventListener('swup:submitForm', function (event) {
        event.preventDefault()

        // swupDisablePlugin('SwupFormsPlugin')
    });

    document.addEventListener('swup:openFormSubmitInNewTab', function (event) {
        event.preventDefault()
    });

    contactContainer.addEventListener("submit", function (event) {
        event.preventDefault()
        swupDisablePlugin('SwupFormsPlugin')

        swupEnablePlugin('SwupFormsPlugin')
        // isAtLeastOneOptionChecked(event)

        // form.setAttribute("data-swup-form", "true")
        // return true;
    });
}

function isAtLeastOneOptionChecked(event) {
    for (let i = 0; i < subjectButtons.length; i++) {
        const element = subjectButtons[i];

        if (element.checked) {
            checkNumber++
        }
    }

    if (checkNumber < 1) {
        event.preventDefault()
        locoScrollTo(contactContainer, -200)

        let errorTl = new gsap.timeline()
        errorTl.to(buttonsError, {
            onStart: function () { buttonsError.style.display = "block" },
            opacity: 1,
            duration: 1.5,
            delay: 0.1,
        })
        errorTl.to(buttonsError, {
            opacity: 0,
            duration: 0.5,
            repeat: 5,
            yoyo: true,
            ease: "sine"
        }, "-=0.4")

        return false;
    }
}