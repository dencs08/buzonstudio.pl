import * as $ from 'jquery'

const navItems = document.querySelectorAll('.web_link');
const navWebItems = document.querySelectorAll('.web_link_active');
const start_web_link = document.querySelector('.web_link');

navItems.forEach(element => {
    element.addEventListener('click', closeNavBar);
});

function closeNavBar() {
    document.getElementById('nav-closer').click();
}

$(function () {
    var pathLink = location.pathname;
    var currentLink = pathLink.replace('/', '');

    if (pathLink == "/") {
        $(start_web_link).addClass('active');
    } else {
        $(navWebItems).each(function () {
            var $this = $(this);
            // if the current path is like this link, make it active
            if ($this.attr('href').indexOf(currentLink) !== -1) {
                $this.addClass('active');
            }
        })
    }
})
