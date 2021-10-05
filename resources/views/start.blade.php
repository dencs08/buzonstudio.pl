<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="images/logos/logo_white-cropped.svg" />
        <link rel="stylesheet" href="css/start.css" />
        <link rel="stylesheet" href="css/app.css" />
        <title>bisonstudio</title>
    </head>
    <body class="antialiased">

        <!-- WEBGL -->
        <canvas id="web_gl"></canvas>
        <!-- Courtain -->
        
        <div class="courtain">
            <div class="top-side"></div>
            <div class="bottom-side"></div>
        </div>
        
        <x-navbar/>

        <div data-scroll-container id="web-content">

        <!-- Landing Page -->
        <section data-scroll-section id="landing-page">
            <div data-scroll class="container landing-page-content">
                <h1>
                    Tworzymy dla marek <br />
                    Pracujemy dla ludzi
                </h1>

                <h2 class="mb-5">digital products, branding & marketing</h2>

                <button class="btn btn-primary mr-5 btn-landing1">PORTFOLIO</button>
                <a href="oferta"><button class="btn btn-primary btn-landing2  mt-md-0 mt-3">CO ROBIMY?</button></a>
            </div>
        </section>

        <!-- Clients section -->

        <section data-scroll-section id="clients">
            <div data-scroll class="container clients-content">
                <h4 data-scroll data-scroll-speed="3" class="lh-sm my-2">Oni juz nam zaufali:</h4>
                <div style="text-align:center;"> <div></div>
                <div data-scroll data-scroll-speed="2" class="client-logos">
                    <div align="center" class="client-logo">
                        <img
                            src="images/logos/danfit.svg"
                            alt=""
                            class="client-logo-svg"
                        />
                    </div>
                    <div align="center" class="client-logo">
                        <img
                            src="images/logos/komb.svg"
                            alt=""
                            class="client-logo-svg"
                        />
                    </div>
                    <div align="center" class="client-logo">
                        <img
                            src="images/logos/logo_white-cropped.svg"
                            alt=""
                            class="client-logo-svg"
                        />
                    </div>
                    <div align="center" class="client-logo">
                        <img
                            src="images/logos/zielonewidoki.svg"
                            alt=""
                            class="client-logo-svg"
                        />
                    </div>
                    <div align="center" class="client-logo">
                        <img
                            src="images/logos/ats.svg"
                            alt=""
                            class="client-logo-svg"
                        />
                    </div>
                </div>
            </div>
        </section>

        <!-- Attention -->

        <section  data-scroll-section id="attention">
            <div data-scroll class="container aboutus">
                <h4 data-scroll data-scroll-speed="0.75" class="my-0 headerline">Wyróżnij się od konkurencji</h4>
                <h3 data-scroll data-scroll-speed="0.75" class="mt-2 mb-3">Przyciągaj uwagę</h3>
                <p data-scroll data-scroll-speed="1">
                    Poprzez współpracę z nami, Twoja marka będzie wyjątkowa,
                    sama w sobie będzie "przyciągać wzrok", pozwala to na
                    rozkwit całkowitego potencjału.
                </p>
            </div>
        </section>

        <!-- Remembered -->

        <section data-scroll-section id="remembered">
            <div data-scroll class="container aboutus row">
                <div class="col-md-6 d-none d-md-block"></div>
                    <div class="col-md-6">
                        <h4 data-scroll data-scroll-speed="0.75" class="my-0 headerline">
                            Tworzymy więż pomiędzy klientem a Twoim produktem
                        </h4>
                        <h3 data-scroll data-scroll-speed="0.75" class="mt-2 mb-3">Bądź rozpoznawany i zapadnij w pamięć</h3>
                        <p data-scroll data-scroll-speed="1">
                            Twoi klienci będą łączyć Twoją markę z jej unikatowym
                            charakterem. Nie pozwól klientom o sobie zapomnieć!
                        </p>
                    </div>
                </div>
        </section>

        <!-- Sales -->

        <section data-scroll-section id="sales">
            <div data-scroll class="container aboutus">
                <h4 data-scroll data-scroll-speed="0.75" class="my-0 headerline">Pozwól swojemu biznesowi na rozwój</h4>
                <h3 data-scroll data-scroll-speed="0.75" class="mt-2 mb-3">
                    Pomagamy w zwiększeniu <br> Twojej sprzedaży
                </h3>
                <p data-scroll data-scroll-speed="1">
                    Z wieloletnim doświadczeniem, które zebraliśmy, doskonale
                    wiemy jak przekonać Twojego klienta do Ciebie i Twojego
                    produktu.
                </p>
            </div>
        </section>

        <!-- Portfolio -->

        <section data-scroll-section id="portfolio">
            <div data-scroll class="container">
                <h4 data-scroll data-scroll-speed="0.75" class="my-0 headerline">Nasze prace</h4>
                <h3 data-scroll data-scroll-speed="0.75" class="mt-3 mb-5">
                    Kochamy rozmawiać, ale niech nasze potrfolio wypowie się za
                    nas.
                </h3>
                <div data-scroll data-scroll-speed="1" class="container porfolio-container">
                    <div class="slide-track">
                        <div class="container portfolio-img"></div>
                        <div class="container portfolio-img"></div>
                    </div>
                </div>
                <div data-scroll data-scroll-speed="1" class="portfolio-btn-container">
                    <button class="btn btn-primary my-5">WIĘCEJ PRAC</button>
                </div>
            </div>
        </section>

        <!-- Lets talk -->

        <section data-scroll-section id="letsTalk-section">
            <div data-scroll class="container text-center">
                <h4 data-scroll data-scroll-speed="0.75">Rozwiń swój biznes!</h4>
                <h3 data-scroll data-scroll-speed="0.75">Zatrudnij nas a my zajmiemy się resztą ✌</h3>
                <div data-scroll data-scroll-speed="1" class="button-trail mt-5">
                    <form>
                        <a href="kontakt">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Porozmawiajmy!
                        </a>
                    </form>
                </div>
            </div>
        </section>

        <x-footer/>
    </div>
    

        <script src="js/app.js"></script>
    </body>
</html>
