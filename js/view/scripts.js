function checkNavbarShrink(navbarCollapsible) {
    if (navbarCollapsible) {
        navbarCollapsible.classList.toggle('navbar-shrink', window.scrollY !== 0);
    }
}

function initNavbar() {
    const navbarCollapsible = document.querySelector('#mainNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = Array.from(document.querySelectorAll('#navbarResponsive .nav-link'));

    checkNavbarShrink(navbarCollapsible);
    window.addEventListener('scroll', () => checkNavbarShrink(navbarCollapsible));

    responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
}

function initSimpleLightbox() {
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
}

function initialize() {
    initNavbar();
    AOS.init();
    initSimpleLightbox();
}

window.addEventListener('DOMContentLoaded', initialize);
