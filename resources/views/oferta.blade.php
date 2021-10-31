<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="W bisonstudio oferujemy kompleksowe rozwiązanie na każde zlecenie, dzięki systemowi All-In-One nie będziesz już musiał pracować osobno z różnymi deweloperami od dziś robimy wszystko od A do Z!">
        <link rel="canonical" href="https://bisonstudio.pl/oferta"/>
        <link rel="shortcut icon" href="{{asset('images/logos/logo_white.svg')}}" />
        <link rel="stylesheet" href="css/app.css" />
        <link rel="stylesheet" href="css/offer.css" />

        <title>Bison Studio - Oferta</title>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-M2VGTFKH7L"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-M2VGTFKH7L');
</script>
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
                    Dla was budujemy <br> wspaniałe <span id="typed"></span>
                </h1>

                <h2 class="mb-5">W naszym studio kreujemy prace które, działają, zdobywają serca użytkowników i zapadają w pamięć</h2>
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
                    @php
                    $i = 1;
                    @endphp

                    @foreach($portfolios as $id)
                    <li data-scroll data-scroll-speed="{{$i++ / 3}}" class="navigation-item gs gs_fromLeft li-separate">
                        <a class="js-hover navigation-link web_link_transitions" href="portfolio/{{ $id }}">
                            <span data-text="{{ $id }}" class="text-uppercase">{{ $id }}</span>
                        </a>
                    </li>
                    @endforeach
                    </ul>
                </div>
            </div>
        </section>

        <x-footer/>
        </div>

        <x-global-js-variables/>

        <script>    
            var portfolios = {!! json_encode($portfolios) !!};
        </script>

        <script src="js/app.js"></script>
        <script src="js/offer.js"></script>

    </body>
</html>