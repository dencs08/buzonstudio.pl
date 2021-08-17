const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .react()
//     .sass('resources/sass/app.scss', 'public/css');

mix.js([
    'resources/js/app.js',
    'resources/js/three.js'
], 'public/js/app.js').version()
    .sass('resources/sass/app.scss', 'public/css');

mix.browserSync('127.0.0.1:8000');