const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(element => {
    element.addEventListener('click', closeNavBar);
});

function closeNavBar() {
    document.getElementById('nav-closer').click();
}