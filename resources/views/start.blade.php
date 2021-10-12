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
    <body data-barba="wrapper" class="antialiased">

        <!-- WEBGL -->
        <canvas id="web_gl"></canvas>

        <div class="courtain">
            <div class="top-side"></div>
            <div class="bottom-side"></div>
        </div>
        
        <x-navbar/>

<main data-barba="container" data-barba-namespace="home-section" id="web-content">
    <div id="fullpage">

        <section data-scroll-section id="landing-page" class="scroll-snap-start section">
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

        <section data-scroll-section id="attention" class="scroll-snap-start section">
            <div id="attention-content" class="container aboutus">
                <h4 class="my-0 headerline">Wyróżnij się od konkurencji</h4>
                <h3 class="mt-2 mb-3">Przyciągaj uwagę</h3>
                <p class="">
                    Poprzez współpracę z nami, Twoja marka będzie wyjątkowa,
                    sama w sobie będzie "przyciągać wzrok", pozwala to na
                    rozkwit całkowitego potencjału.
                </p>
            </div>
        </section>

        <!-- Remembered -->

        <section data-scroll-section id="remembered" class="scroll-snap-start section">
            <div id="remembered-content" class="container aboutus row">
                <div class="col-md-6 d-none d-md-block"></div>
                    <div class="col-md-6">
                        <h4 class="my-0 headerline">
                            Tworzymy więż pomiędzy klientem a Twoim produktem
                        </h4>
                        <h3 class="mt-2 mb-3">Bądź rozpoznawany i zapadnij w pamięć</h3>
                        <p class="">
                            Twoi klienci będą łączyć Twoją markę z jej unikatowym
                            charakterem. Nie pozwól klientom o sobie zapomnieć!
                        </p>
                    </div>
                </div>
        </section>

        <!-- Sales -->

        <section data-scroll-section id="sales" class="scroll-snap-start section">
            <div  id="sales-content" class="container aboutus">
                <h4 class="my-0 headerline">Pozwól swojemu biznesowi na rozwój</h4>
                <h3 class="mt-2 mb-3">
                    Pomagamy w zwiększeniu <br> Twojej sprzedaży
                </h3>
                <p class="">
                    Z wieloletnim doświadczeniem, które zebraliśmy, doskonale
                    wiemy jak przekonać Twojego klienta do Ciebie i Twojego
                    produktu.
                </p>
            </div>
        </section>

        <!-- Portfolio -->

        <section data-scroll-section id="portfolio" class="scroll-snap-start section">
                <div  id="portfolio-content" class="container">
                    <h4 class="my-0 headerline">Nasze prace</h4>
                    <h3 class="mt-3 mb-5">
                        Kochamy rozmawiać, ale niech nasze portfolio wypowie się za
                        nas.
                    </h3>
                </div>
                <div class="grid-item main">
                    <div class="slide-track">
                        <div class="portfolio-item mx-auto mx-lg-5 item1"></div>
                        <div class="portfolio-item mx-auto mx-lg-5 item2"></div>
                        <div class="portfolio-item mx-auto mx-lg-5 item3"></div>
                        <div class="portfolio-item mx-auto mx-lg-5 item4"></div>
                        <div class="portfolio-item mx-auto mx-lg-5 item5"></div>
                    </div>
                </div>  
                <div class="portfolio-btn-container container">
                    <button class="btn btn-primary my-5">WIĘCEJ PRAC</button>
                </div>
        </section>


        <!-- Lets talk -->

        <section data-scroll-section id="letsTalk-section" class="scroll-snap-start section">
            <div id="letsTalk-content" class="container text-center">
                <h4 class="">Rozwiń swój biznes!</h4>
                <h3 class="">Zatrudnij nas a my zajmiemy się resztą ✌</h3>
                <div class="button-trail mt-5">
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
</main>

        <script src="js/page-transition.js"></script>
        <script src="js/app.js"></script>
        <script src="js/start.js"></script>
    </body>
</html>
