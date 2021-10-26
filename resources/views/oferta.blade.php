<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="images/logos/logo_white-cropped.svg" />
        <link rel="stylesheet" href="css/app.css" />
        <link rel="stylesheet" href="css/offer.css" />

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
                <h1 data-splitting>
                    Dla was budujemy <br> wspaniałe <span id="typed"></span>
                </h1>

                <h2 data-splitting class="mb-5">W naszym studio kreujemy prace które, działają, zdobywają serca użytkowników i zapadają w pamięć</h2>
                <x-arrow/>
            </div>
        </section>

        <section data-scroll-section id="offer">
            <div class="container">
                <h3 data-scroll data-scroll-speed="2" class="gs gs_fromLeft headerline">Działamy po to abyś się rozwijał</h3>
                <div class="row">
                    <div data-scroll class="col-md-6 d-flex justify-content-center">
                        <div class="col-content1">
                            <h2 data-scroll data-scroll-speed="1.5" class="gs gs_fromTop">Produkty cyfrowe</h2>
                            <p data-scroll data-scroll-speed="1.25" class="gs gs_fromLeft">Tworzymy i rozwijamy, strony internetowe, aplikacje, wizualizacje, grafiki, projekty UI i UX adekwatnie pod Twoje potrzeby, tak abyś otrzymał najlepiej dostosowany produkt który działa. </p>
                            <ul data-scroll data-scroll-speed="1.1" class="gs gs_fromFadeIn">
                                <li>Strony internetowe</li>
                                <li>E-commerce</li>
                                <li>UI / UX </li>
                                <li>Projekty graficzne</li>
                                <li>Wizualizacje 3D</li>
                                <li>Modelowanie 3D</li>
                                <li>Aplikacje</li>
                                <li>Gry</li>
                            </ul>
                        </div>
                    </div>
                    <div data-scroll class="col-md-6 d-flex justify-content-center">
                        <div class="col-content2">
                            <h2 data-scroll data-scroll-speed="1.5" class="gs gs_fromTop">Branding</h2>
                            <p data-scroll data-scroll-speed="1.25" class="gs gs_fromLeft">Dziś branding jest najważniejszym elementem każdego dobrze prosperującego biznesu, łatwe do zapamiętania logo, charakterystyczna identyfikacja wizualna czy dobrze obrana strategia marketingowa, to wszystko ma znaczenie w jaki sposób odbierze Ciebie przyszły klient.</p>
                            <ul data-scroll data-scroll-speed="1.1" class="gs gs_fromFadeIn">
                                <li>Nazewnictwo</li>
                                <li>Identyfikacja wizualna</li>
                                <li>Logotypy</li>
                                <li>Marketing</li>
                                <li>Strategie biznesowe w social mediach</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="liquid"></div>
                    <a data-scroll-speed="1.5" href="kontakt" class="contact-us underline gs gs_fromLeft">Napisz do nas i stwórzmy coś razem.</a>
            </div>
        </section>

        <section data-scroll-section id="works">
            <div class="container">
            <h3 data-scroll data-scroll-speed="1" class="gs gs_fromLeft headerline">Nasze prace</h3>
            <div class="project-preview d-sm-block d-none"></div>
            <div class="navigation-wrapper">
                <div class="project-overlay"></div>
                    <ul id="works_images" class="navigation-list">
                        <li data-scroll data-scroll-speed="1" class="navigation-item gs gs_fromLeft">
                            <a class="js-hover navigation-link" href="#">
                                <span data-text="CASTLE3D">CASTLE3D</span>
                            </a>
                        </li>
                        <div class="li-separate"></div>
                        <li data-scroll data-scroll-speed="1.25" class="navigation-item gs gs_fromLeft">
                            <a class="js-hover navigation-link" href="#">
                                <span data-text="WATCH3D">WATCH3D</span>
                            </a>
                        </li>
                        <div class="li-separate"></div>
                        <li data-scroll data-scroll-speed="1.5" class="navigation-item gs gs_fromLeft">
                            <a class="js-hover navigation-link" href="#">
                                <span data-text="DANFIT">DANFIT</span>
                            </a>
                        </li>
                        <div class="li-separate"></div>
                        <li data-scroll data-scroll-speed="1.75" class="navigation-item gs gs_fromLeft">
                            <a class="js-hover navigation-link" href="#">
                                <span data-text="KOMB">KOMB</span>
                            </a>
                        </li>
                        <div class="li-separate"></div>
                        <li data-scroll data-scroll-speed="2.0" class="navigation-item gs gs_fromLeft">
                            <a class="js-hover navigation-link" href="#">
                                <span data-text="ZIELONEWIDOKI">ZIELONEWIDOKI</span>
                            </a>
                        </li>
                        <div class="li-separate"></div>
                        <li data-scroll data-scroll-speed="2.25" class="navigation-item gs gs_fromLeft">
                            <a class="js-hover navigation-link" href="#">
                                <span data-text="ATSKONSULTING">ATSKONSULTING</span>
                            </a>
                        </li>
                        <div class="li-separate"></div>
                    </ul>
                </div>
            </div>
        </section>

        <x-footer/>
        </div>

        <x-global-js-variables/>

        <script src="js/app.js"></script>
        <script src="js/offer.js"></script>

    </body>
</html>