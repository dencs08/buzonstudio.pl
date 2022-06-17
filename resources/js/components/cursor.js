import gsap from 'gsap'
import Component from 'gia/Component';

const cursor = document.querySelector("[cursor]")
const follower = document.querySelector("[cursor-follower]")
const label = document.querySelector("[cursor-label]")
let itemsGrow
let itemsShrink
let itemsAction
export default class Cursor extends Component {
    constructor(element) {
        super(element);

        itemsGrow = document.querySelectorAll("a, button, [cursor-expand]")
        itemsShrink = document.querySelectorAll("[cursor-shrink]")
        itemsAction = document.querySelectorAll("[cursor-action]")
    }

    mount() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            cursor.style.display = "none";
            follower.style.display = "none";
            label.style.display = "none";
        } else {

            var posX = 0,
                posY = 0;

            var mouseX = 0,
                mouseY = 0;

            gsap.to(cursor, {
                duration: 0.005,
                repeat: -1,
                onRepeat: function () {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    gsap.set(follower, {
                        css: {
                            left: posX - 12,
                            top: posY - 12
                        }
                    });

                    gsap.set(label, {
                        css: {
                            left: posX - 17,
                            top: posY - 14
                        }
                    });

                    gsap.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });

                }
            });


            document.addEventListener("mousemove", function (e) {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            for (var i = 0; i < itemsGrow.length; i++) {
                (function (index) {
                    itemsGrow[index].addEventListener("mouseover", function () {
                        cursor.classList.add("active-expand");
                        follower.classList.add("active-expand");
                        label.classList.add("active-expand");
                    })
                    itemsGrow[index].addEventListener("mouseleave", function () {
                        cursor.classList.remove("active-expand");
                        follower.classList.remove("active-expand");
                        label.classList.remove("active-expand");
                    })
                })(i);
            }

            for (var i = 0; i < itemsShrink.length; i++) {
                (function (index) {
                    itemsShrink[index].addEventListener("mouseover", function () {
                        cursor.classList.add("active-shrink");
                        follower.classList.add("active-shrink");
                        label.classList.add("active-shrink");
                    })
                    itemsShrink[index].addEventListener("mouseleave", function () {
                        cursor.classList.remove("active-shrink");
                        follower.classList.remove("active-shrink");
                        label.classList.remove("active-shrink");
                    })
                })(i);
            }

            for (var i = 0; i < itemsAction.length; i++) {
                (function (index) {
                    itemsAction[index].addEventListener("mouseover", function () {
                        cursor.classList.add("active-action");
                        follower.classList.add("active-action");
                        label.classList.add("active-action");
                        label.innerHTML = itemsAction[index].getAttribute("data-cursor-label")
                    })
                    itemsAction[index].addEventListener("mouseleave", function () {
                        cursor.classList.remove("active-action");
                        follower.classList.remove("active-action");
                        label.classList.remove("active-action");
                        label.innerHTML = ""
                    })
                })(i);
            }
        }
    }
}

function classRemove() {
    cursor.classList.remove("active-action");
    follower.classList.remove("active-action");
    label.classList.remove("active-action");
    label.innerHTML = ""

    cursor.classList.remove("active-shrink");
    follower.classList.remove("active-shrink");
    label.classList.remove("active-shrink");

    cursor.classList.remove("active-expand");
    follower.classList.remove("active-expand");
    label.classList.remove("active-expand");
}

export { classRemove as cursorClassRemove }