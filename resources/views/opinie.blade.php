<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="images/logo_white.svg" />
        <link rel="stylesheet" href="css/app.css" />
        <link rel="stylesheet" href="css/testimonials.css" />
        <title>bisonstudio</title>
    </head>
    <body class="antialiased">

    <!-- WEBGL -->
    <canvas id="web_gl"></canvas>

    <x-navbar/>

    <div id="web-content" class="smooth-locomotive-scroll">
    <section data-scroll-section id="landing-page">
            <div data-scroll data-scroll-speed="3" class="container landing-page-content">
                <h1>
                    Wiemy, że czasami ciężko komuś zaufać
                </h1>

                <h2 class="mb-5">Wierzymy jendak, że nasze doswiadczenie i usługi mogą to zmienić dlatego też, w naszym studio naszę pracę opieramy na wynikach tak aby dostarczyć Tobie usługę której potrzebujesz.</h2>


                <svg
                    width="24"
                    height="102"
                    viewBox="0 0 24 102"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.9393 101.061C11.5251 101.646 12.4749 101.646 13.0607 101.061L22.6066 91.5147C23.1924 90.9289 23.1924 89.9792 22.6066 89.3934C22.0208 88.8076 21.0711 88.8076 20.4853 89.3934L12 97.8787L3.51472 89.3934C2.92893 88.8076 1.97918 88.8076 1.39339 89.3934C0.807608 89.9792 0.807607 90.9289 1.39339 91.5147L10.9393 101.061ZM10.5 -6.55671e-08L10.5 100L13.5 100L13.5 6.55671e-08L10.5 -6.55671e-08Z"
                        class="arrow-down-icon"
                    />
                </svg>
            </div>
        </section>

        <section data-scroll-section id="testimonials">
            <div class="container">
                <div data-scroll data-scroll-speed="1.5" class="row">
                    <div class="col-md-6 d-flex justify-content-center place-items-center">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-header my-0 mb-1">Imię Nazwisko</h3>
                                <h4 class="my-0">Firma Stanowisko</h4>
                                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo eos corporis corrupti esse repudiandae vero dolorum quisquam temporibus illum, consequatur necessitatibus iste quibusdam ut laboriosam dolorem porro doloribus ipsa!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center place-items-center">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-header my-0 mb-1">Imię Nazwisko</h3>
                                <h4 class="my-0">Firma Stanowisko</h4>
                                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo eos corporis corrupti esse repudiandae vero dolorum quisquam temporibus illum, consequatur necessitatibus iste quibusdam ut laboriosam dolorem porro doloribus ipsa!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-scroll data-scroll-speed="2" class="row">
                    <div class="col-md-6 d-flex justify-content-center place-items-center">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-header my-0 mb-1">Imię Nazwisko</h3>
                                <h4 class="my-0">Firma Stanowisko</h4>
                                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo eos corporis corrupti esse repudiandae vero dolorum quisquam temporibus illum, consequatur necessitatibus iste quibusdam ut laboriosam dolorem porro doloribus ipsa!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center place-items-center">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-header my-0 mb-1">Imię Nazwisko</h3>
                                <h4 class="my-0">Firma Stanowisko</h4>
                                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo eos corporis corrupti esse repudiandae vero dolorum quisquam temporibus illum, consequatur necessitatibus iste quibusdam ut laboriosam dolorem porro doloribus ipsa!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <x-footer/>
    </div>
    <script src="js/app.js"></script>
    <script src="js/testimonials.js"></script>


    </body>
</html>