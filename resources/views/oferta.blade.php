<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="W bisonstudio oferujemy kompleksowe rozwiązanie na każde zlecenie, dzięki systemowi All-In-One nie będziesz już musiał pracować osobno z różnymi deweloperami od dziś robimy wszystko od A do Z!">
        <link rel="canonical" href="https://www.bisonstudio.pl/oferta"/>
        <link rel="shortcut icon" href="{{asset('images/logos/logo_white.svg')}}" />
        <link rel="apple-touch-icon" href="{{asset('images/logos/logo_white.svg')}}">
        <link rel="stylesheet" href="css/app.css" />
        <link rel="stylesheet" href="css/offer.css" />

        <title>Oferta - Tworzenie Stron i Sklepów Internetowych</title>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-M2VGTFKH7L"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-M2VGTFKH7L');
</script>

<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2678438,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>

    </head>
    <body class="antialiased">

        <!-- WEBGL -->
        <canvas id="web_gl"></canvas>

        <x-loader/>

        <x-3d-disable/>

        <x-navbar/>
        <div id="web-content" class="smooth-locomotive-scroll">
        <x-background-image/>
        <section data-scroll-section id="landing-page">
            <div data-scroll data-scroll-speed="3" class="container landing-page-content">
                <h1>
                    Dla was budujemy <br> wspaniałe <span id="typed"></span>
                </h1>

                <h2 class="mb-5">W naszym studio kreujemy prace które, działają, zdobywają serca użytkowników i zapadają w pamięć
                    Tworzymy strony internetowe, wizualizacje architektoniczne, 
                </h2>
                <x-arrow/>
            </div>
        </section>

        <section data-scroll-section id="offer">
            <div class="container">
                <div data-scroll data-scroll-speed="2" class="content-loco-wrapper">
                    <h3 class="gs gs_fromLeft headerline">Działamy po to abyś się rozwijał</h3>
                </div>
                <div class="row">
                    <div data-scroll class="col-md-6 d-flex justify-content-center">
                        <div data-scroll data-scroll-speed="1" class="col-content1">
                            <div data-scroll data-scroll-speed="1.5" class="content-loco-wrapper">
                                <h2 class="gs gs_fromTop">Produkty cyfrowe</h2>
                            </div>
                            <div data-scroll data-scroll-speed="1.25" class="content-loco-wrapper">
                                <p class="gs gs_fromLeft">Tworzymy i rozwijamy, strony internetowe, aplikacje, wizualizacje, grafiki, projekty UI i UX adekwatnie pod Twoje potrzeby, tak abyś otrzymał najlepiej dostosowany produkt który działa. </p>
                            </div>
                            <ul data-scroll data-scroll-speed="1">
                                <li data-scroll data-scroll-speed="0.5"><span class="gs gs_fromFadeIn">Strony internetowe</span></li>
                                <li data-scroll data-scroll-speed="0.75"><span class="gs gs_fromFadeIn">E-commerce</span></li>
                                <li data-scroll data-scroll-speed="1.0"><span class="gs gs_fromFadeIn">UI / UX </span></li>
                                <li data-scroll data-scroll-speed="1.25"><span class="gs gs_fromFadeIn">Projekty graficzne</span></li>
                                <li data-scroll data-scroll-speed="1.5"><span class="gs gs_fromFadeIn">Wizualizacje 3D</span></li>
                                <li data-scroll data-scroll-speed="1.75"><span class="gs gs_fromFadeIn">Modelowanie 3D</span></li>
                                <li data-scroll data-scroll-speed="2.0"><span class="gs gs_fromFadeIn">Aplikacje</span></li>
                                <li data-scroll data-scroll-speed="2.25"><span class="gs gs_fromFadeIn">Gry</span></li>
                            </ul>
                        </div>
                    </div>
                    <div data-scroll class="col-md-6 d-flex justify-content-center">
                        <div data-scroll data-scroll-speed="3" class="col-content2">
                            <div data-scroll data-scroll-speed="1.5" class="content-loco-wrapper">
                                <h2 class="gs gs_fromTop">Branding</h2>
                            </div>
                            <div data-scroll data-scroll-speed="1.25" class="content-loco-wrapper">
                                <p class="gs gs_fromLeft">Dziś branding jest najważniejszym elementem każdego dobrze prosperującego biznesu, łatwe do zapamiętania logo, charakterystyczna identyfikacja wizualna czy dobrze obrana strategia marketingowa, to wszystko ma znaczenie w jaki sposób odbierze Ciebie przyszły klient.</p>
                            </div>
                            <ul>
                                <li data-scroll data-scroll-speed="0.5"><span class="gs gs_fromFadeIn">Nazewnictwo</span> </li>
                                <li data-scroll data-scroll-speed="0.75"><span class="gs gs_fromFadeIn">Identyfikacja wizualna</span> </li>
                                <li data-scroll data-scroll-speed="1.0"><span class="gs gs_fromFadeIn">Logotypy</span> </li>
                                <li data-scroll data-scroll-speed="1.25"><span class="gs gs_fromFadeIn">Marketing</span> </li>
                                <li data-scroll data-scroll-speed="1.5"><span class="gs gs_fromFadeIn">Strategie biznesowe w social mediach</span> </li>
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
            <div data-scroll data-scroll-speed="1.5" class="content-loco-wrapper">
                <h3 class="gs gs_fromLeft headerline">Nasze prace</h3>
            </div>
            <div class="project-preview d-sm-block d-none"></div>
            <div class="navigation-wrapper">
                <div class="project-overlay"></div>
                    <ul id="works_images" class="navigation-list">
                    @php
                    $i = 1;
                    @endphp

                    @foreach($portfolios as $id)
                    <li data-scroll data-scroll-speed="{{$i++ / 3}}" class="navigation-item li-separate">
                        <a class="js-hover navigation-link web_link_transitions" href="portfolio/{{ $id }}">
                            <span data-text="{{ $id }}" class="text-uppercase gs gs_fromLeft">{{ $id }}</span>
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