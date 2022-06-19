import * as Typed from 'typed.js'
import Component from 'gia/Component';

export default class TypedOffer extends Component {
    constructor(element) {
        super(element)
    }

    mount() {
        var typed = new Typed('#typed', {
            strings: ["doświadczenia", "pomysły", "aplikacje", "strony internetowe", "wizaulizacje"],
            backSpeed: 75,
            typeSpeed: 100,
            backDelay: 500,
            startDelay: 500,
            loop: true,
            cursorChar: '_',
            // shuffle: true
        });
    }

    unmount() {

    }
}

