const mix = require('laravel-mix');

mix.js([
    'resources/js/components/gsap/gsapAnims.js',
    'resources/js/components/navbar.js',
    'resources/js/app.js'
], 'public/js/app.js').version()
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/start.scss', 'public/css')
    .sass('resources/sass/offer.scss', 'public/css')
    .sass('resources/sass/testimonials.scss', 'public/css')
    .sass('resources/sass/privacy.scss', 'public/css')
    .sass('resources/sass/portfolio.scss', 'public/css')
    .sass('resources/sass/contact.scss', 'public/css');

mix.browserSync('127.0.0.1:8000');

