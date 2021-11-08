const mix = require('laravel-mix');

mix.js([
    'resources/js/gsapAnims.js',
    'resources/js/navbar.js',
    'resources/js/app.js'
], 'public/js/app.js').version()
    .js([
        'resources/js/components/start/start.js',
        'resources/js/momentum-slider.js',
        'resources/js/three.js',
    ], 'public/js/start.js').version()
    .js([
        'resources/js/components/testimonials/testimonials.js',
        'resources/js/landingpage-animation.js',
        'resources/js/locomotive-scroll.js',
        'resources/js/three_other_pages.js',
    ], 'public/js/testimonials.js').version()
    .js([
        'resources/js/typeAnim.js',
        'resources/js/components/offer/offer.js',
        'resources/js/locomotive-scroll.js',
        'resources/js/landingpage-animation.js',
        'resources/js/three_other_pages.js',
    ], 'public/js/offer.js').version()
    .js([
        'resources/js/contactform.js',
        'resources/js/components/contact/contact.js',
        'resources/js/landingpage-animation.js',
        'resources/js/locomotive-scroll.js',
        'resources/js/three_other_pages.js',
    ], 'public/js/contact.js').version()
    .js([
        'resources/js/landingpage-animation.js',
        'resources/js/locomotive-scroll.js',
        'resources/js/three_other_pages.js',
    ], 'public/js/contactSent.js').version()
    .js([
        'resources/js/components/privacy/privacy.js',
        'resources/js/locomotive-scroll.js',
        'resources/js/three_other_pages.js',
    ], 'public/js/privacy.js').version()
    .js([
        'resources/js/components/portfolio/portfolio.js',
        'resources/js/locomotive-scroll.js',
        'resources/js/three_other_pages.js',
    ], 'public/js/portfolio.js').version()
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/components/start.scss', 'public/css')
    .sass('resources/sass/components/offer.scss', 'public/css')
    .sass('resources/sass/components/testimonials.scss', 'public/css')
    .sass('resources/sass/components/privacy.scss', 'public/css')
    .sass('resources/sass/components/portfolio.scss', 'public/css')
    .sass('resources/sass/components/contact.scss', 'public/css');

mix.browserSync('127.0.0.1:8000');

