import * as $ from 'jquery'

const navItems = document.querySelectorAll('.web_link');
const navWebItems = document.querySelectorAll('.web_link_active');

navItems.forEach(element => {
    element.addEventListener('click', closeNavBar);
});

function closeNavBar() {
    document.getElementById('nav-closer').click();
}

$(function () {
    var pathLink = location.pathname;
    var currentLink = pathLink.replace('/', '');

    $(navWebItems).each(function () {
        var $this = $(this);
        // if the current path is like this link, make it active
        if ($this.attr('href').indexOf(currentLink) !== -1) {
            $this.addClass('active');
        }
    })
})
