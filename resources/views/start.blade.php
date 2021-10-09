<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="images/logos/logo_white-cropped.svg" />
        <link rel="stylesheet" href="css/app.css" />
        <link rel="stylesheet" href="css/start.css" />
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

<div id="web-content" class="smooth-locomotive-scroll">
    <div class="panel-scroller">


        <section data-scroll-section id="landing-page" class="scroll-snap-start panel">
            <div  id="landing-content" class="container landing-page-content">
                <h1>
                    Tworzymy dla marek <br />
                    Pracujemy dla ludzi
                </h1>

                <h2>digital products, branding & marketing</h2>

                <button class="btn btn-primary btn-landing1">PORTFOLIO</button>
                <a href="oferta"><button class="btn btn-primary btn-landing2">CO ROBIMY?</button></a>
            </div>
        </section>

        
        <!-- Attention -->

        <section data-scroll-section id="attention" class="display-centered scroll-snap-start vh-100 panel">
            <div id="attention-content" class="container aboutus">
                <h4 class="gs gs_fromLeft my-0 headerline">Wyróżnij się od konkurencji</h4>
                <h3 class="gs gs_fromLeft mt-2 mb-3">Przyciągaj uwagę</h3>
                <p class="gs gs_fromLeft ">
                    Poprzez współpracę z nami, Twoja marka będzie wyjątkowa,
                    sama w sobie będzie "przyciągać wzrok", pozwala to na
                    rozkwit całkowitego potencjału.
                </p>
            </div>
        </section>

        <!-- Remembered -->

        <section data-scroll-section id="remembered" class="display-centered scroll-snap-start vh-100 panel">
            <div id="remembered-content" class="container aboutus row">
                <div class="col-md-6 d-none d-md-block"></div>
                    <div class="col-md-6">
                        <h4 class="gs gs_fromTop my-0 headerline">
                            Tworzymy więż pomiędzy klientem a Twoim produktem
                        </h4>
                        <h3 class="gs gs_fromRight mt-2 mb-3">Bądź rozpoznawany i zapadnij w pamięć</h3>
                        <p class="gs gs_fromBottom ">
                            Twoi klienci będą łączyć Twoją markę z jej unikatowym
                            charakterem. Nie pozwól klientom o sobie zapomnieć!
                        </p>
                    </div>
                </div>
        </section>

        <!-- Sales -->

        <section data-scroll-section id="sales" class="display-centered scroll-snap-start vh-100 panel">
            <div  id="sales-content" class="container aboutus">
                <h4 class="gs gs_fromLeft my-0 headerline">Pozwól swojemu biznesowi na rozwój</h4>
                <h3 class="gs gs_fromLeft mt-2 mb-3">
                    Pomagamy w zwiększeniu <br> Twojej sprzedaży
                </h3>
                <p class="gs gs_fromLeft ">
                    Z wieloletnim doświadczeniem, które zebraliśmy, doskonale
                    wiemy jak przekonać Twojego klienta do Ciebie i Twojego
                    produktu.
                </p>
            </div>
        </section>

        <!-- Portfolio -->

        <section data-scroll-section id="portfolio" class="scroll-snap-start panel">
                <div  id="portfolio-content" class="container">
                    <h4 class="gs gs_fromLeft my-0 headerline">Nasze prace</h4>
                    <h3 class="gs gs_fromLeft mt-3 mb-5">
                        Kochamy rozmawiać, ale niech nasze portfolio wypowie się za
                        nas.
                    </h3>
                </div>
                <div class="gs gs_fromLeft grid-item main">
                    <div class="slide-track">
                        <div class="portfolio-item mx-auto mx-lg-5 item1"></div>
                        <div class="portfolio-item mx-auto mx-lg-5 item2"></div>
                        <div class="portfolio-item mx-auto mx-lg-5 item3"></div>
                        <div class="portfolio-item mx-auto mx-lg-5 item4"></div>
                        <div class="portfolio-item mx-auto mx-lg-5 item5"></div>
                    </div>
                </div>  
                <div class="gs gs_fromBottom portfolio-btn-container container">
                    <button class="btn btn-primary my-5">WIĘCEJ PRAC</button>
                </div>
        </section>


        <!-- Lets talk -->

        <section data-scroll-section id="letsTalk-section" class="scroll-snap-start vh-100 panel">
            <div id="letsTalk-content" class="container text-center">
                <h4 class="gs gs_fromTop">Rozwiń swój biznes!</h4>
                <h3 class="gs gs_fromTop">Zatrudnij nas a my zajmiemy się resztą ✌</h3>
                <div class="gs gs_fromBottom button-trail mt-5">
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

         <!-- Clients section -->

         <section data-scroll-section id="clients" class="scroll-snap-start">
                <div class="container clients-content">
                    <h4  class="gs gs_fromLeft lh-sm my-2">Oni juz nam zaufali:</h4>
                    <div style="text-align:center;"> <div></div>
                    <div class="client-logos">
                        <div align="center" class="client-logo">
                            <img
                                src="images/logos/danfit.svg"
                                alt=""
                                class="client-logo-svg gs gs_fromBottom"
                            />
                        </div>
                        <div align="center" class="client-logo">
                            <img
                                src="images/logos/komb.svg"
                                alt=""
                                class="client-logo-svg gs gs_fromBottom"
                            />
                        </div>
                        <div align="center" class="client-logo">
                            <img
                                src="images/logos/logo_white-cropped.svg"
                                alt=""
                                class="client-logo-svg gs gs_fromBottom"
                            />
                        </div>
                        <div align="center" class="client-logo">
                            <img
                                src="images/logos/zielonewidoki.svg"
                                alt=""
                                class="client-logo-svg gs gs_fromBottom"
                            />
                        </div>
                        <div align="center" class="client-logo">
                            <img
                                src="images/logos/ats.svg"
                                alt=""
                                class="client-logo-svg gs gs_fromBottom"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    </div>
</div>

        <x-footer/>
        
        <script src="js/app.js"></script>
        <script src="js/start.js"></script>

    </body>
</html>
