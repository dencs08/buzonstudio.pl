<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="images/logos/logo_white-cropped.svg" />
        <link rel="stylesheet" href="css/app.css" />
        <link rel="stylesheet" href="css/testimonials.css" />
        <title>bisonstudio</title>
    </head>
    <body class="antialiased">

    <!-- WEBGL -->
    <canvas id="web_gl"></canvas>
    <x-loader/>

    <x-navbar/>

    <div id="web-content" class="smooth-locomotive-scroll">
    <section data-scroll-section id="landing-page">
            <div data-scroll data-scroll-speed="3" class="container landing-page-content">
                <h1>
                    Wiemy, że czasami ciężko komuś zaufać
                </h1>

                <h2 class="mb-5">Wierzymy jendak, że nasze doswiadczenie i usługi mogą to zmienić dlatego też, w naszym studio naszę pracę opieramy na wynikach tak aby dostarczyć Tobie usługę której potrzebujesz.</h2>


                <x-arrow/>
            </div>
        </section>

        <section data-scroll-section id="testimonials">
            <div class="container">
                <div data-scroll data-scroll-speed="1.5" class="row">
                    <div class="col-md-6 d-flex justify-content-center place-items-center">
                        <div class="card gs gs_fromLeft">
                            <div class="card-body gs gs_fromLeft">
                                <h3 class="card-header my-0 mb-1 gs gs_fromLeft">Imię Nazwisko</h3>
                                <h4 class="my-0 gs gs_fromLeft">Firma Stanowisko</h4>
                                <p class="gs gs_fromLeft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo eos corporis corrupti esse repudiandae vero dolorum quisquam temporibus illum, consequatur necessitatibus iste quibusdam ut laboriosam dolorem porro doloribus ipsa!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center place-items-center">
                        <div class="card gs gs_fromRight">
                            <div class="card-body gs gs_fromRight">
                                <h3 class="card-header my-0 mb-1 gs gs_fromRight">Imię Nazwisko</h3>
                                <h4 class="my-0 gs gs_fromRight">Firma Stanowisko</h4>
                                <p class="gs gs_fromRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo eos corporis corrupti esse repudiandae vero dolorum quisquam temporibus illum, consequatur necessitatibus iste quibusdam ut laboriosam dolorem porro doloribus ipsa!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-scroll data-scroll-speed="2" class="row">
                    <div class="col-md-6 d-flex justify-content-center place-items-center">
                        <div class="card gs gs_fromLeft">
                            <div class="card-body gs gs_fromLeft">
                                <h3 class="card-header my-0 mb-1 gs gs_fromLeft">Imię Nazwisko</h3>
                                <h4 class="my-0 gs gs_fromLeft">Firma Stanowisko</h4>
                                <p class=" gs gs_fromLeft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo eos corporis corrupti esse repudiandae vero dolorum quisquam temporibus illum, consequatur necessitatibus iste quibusdam ut laboriosam dolorem porro doloribus ipsa!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center place-items-center">
                        <div class="card gs gs_fromRight">
                            <div class="card-body gs gs_fromRight">
                                <h3 class="card-header my-0 mb-1 gs gs_fromRight">Imię Nazwisko</h3>
                                <h4 class="my-0 gs gs_fromRight">Firma Stanowisko</h4>
                                <p class=" gs gs_fromRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo eos corporis corrupti esse repudiandae vero dolorum quisquam temporibus illum, consequatur necessitatibus iste quibusdam ut laboriosam dolorem porro doloribus ipsa!</p>
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