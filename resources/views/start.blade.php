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

        <section data-scroll-section id="landing-page" class="scroll-snap-start section first">
            <div  id="landing-content" class="container landing-page-content first-content">
                <h1 class="anim-stagger0">
                    Tworzymy dla marek <br />
                    Pracujemy dla ludzi
                </h1>

                <h2 class="anim-stagger0">digital products, branding & marketing</h2>

                <button class="btn btn-primary btn-landing1 anim-stagger0">PORTFOLIO</button>
                <a class="web_link_transitions a_btn btn-landing2 anim-stagger0" href="oferta">CO ROBIMY?</a>
            </div>
        </section>

        
        <!-- Attention -->

        <section data-scroll-section id="attention" class="scroll-snap-start section second">
            <div id="attention-content" class="container aboutus second-content">
                <h4 class="my-0 headerline anim-stagger1">Wyróżnij się od konkurencji</h4>
                <h3 class="mt-2 mb-3 anim-stagger1">Przyciągaj uwagę</h3>
                <p class="anim-stagger1">
                    Poprzez współpracę z nami, Twoja marka będzie wyjątkowa,
                    sama w sobie będzie "przyciągać wzrok", pozwala to na
                    rozkwit całkowitego potencjału.
                </p>
            </div>
        </section>

        <!-- Remembered -->

        <section data-scroll-section id="remembered" class="scroll-snap-start section third">
            <div id="remembered-content" class="container aboutus row ">
                <div class="col-md-6 d-none d-md-block"></div>
                    <div class="col-md-6 third-content">
                        <h4 class="my-0 headerline anim-stagger2">
                            Tworzymy więż pomiędzy klientem a Twoim produktem
                        </h4>
                        <h3 class="mt-2 mb-3 anim-stagger2">Bądź rozpoznawany i zapadnij w pamięć</h3>
                        <p class="anim-stagger2">
                            Twoi klienci będą łączyć Twoją markę z jej unikatowym
                            charakterem. Nie pozwól klientom o sobie zapomnieć!
                        </p>
                    </div>
                </div>
        </section>

        <!-- Sales -->

        <section data-scroll-section id="sales" class="scroll-snap-start section fourth">
            <div  id="sales-content" class="container aboutus">
                <h4 class="my-0 headerline anim-stagger3">Pozwól swojemu biznesowi na rozwój</h4>
                <h3 class="mt-2 mb-3 anim-stagger3">
                    Pomagamy w zwiększeniu <br> Twojej sprzedaży
                </h3>
                <p class="anim-stagger3">
                    Z wieloletnim doświadczeniem, które zebraliśmy, doskonale
                    wiemy jak przekonać Twojego klienta do Ciebie i Twojego
                    produktu.
                </p>
            </div>
        </section>

        <!-- Portfolio -->

        <section data-scroll-section id="portfolio" class="scroll-snap-start section fifth">
                <div  id="portfolio-content" class="container">
                    <h4 class="my-0 headerline anim-stagger4">Nasze prace</h4>
                    <h3 class="mt-3 mb-5 anim-stagger4">
                        Kochamy rozmawiać, ale niech nasze portfolio wypowie się za
                        nas.
                    </h3>
                </div>
                <div class="grid-item main">
                    <div class="slide-track">
                        <div class="portfolio-item mx-auto mx-lg-5 item1 anim-stagger4"></div>
                        <div class="portfolio-item mx-auto mx-lg-5 item2 d-none d-lg-inline-block anim-stagger4"></div>
                        <div class="portfolio-item mx-auto mx-lg-5 item3 d-none d-lg-inline-block anim-stagger4"></div>
                        <div class="portfolio-item mx-auto mx-lg-5 item4 d-none d-lg-inline-block anim-stagger4"></div>
                        <div class="portfolio-item mx-auto mx-lg-5 item5 d-none d-lg-inline-block anim-stagger4"></div>
                    </div>
                </div>  
                <div class="portfolio-btn-container container">
                    <button class="btn btn-primary my-5 anim-stagger4">WIĘCEJ PRAC</button>
                </div>
        </section>


        <!-- Lets talk -->

        <section data-scroll-section id="letsTalk-section" class="scroll-snap-start section sixth">
            <div id="letsTalk-content" class="container text-center">
                <h4 class="anim-stagger5">Rozwiń swój biznes!</h4>
                <h3 class="anim-stagger5">Zatrudnij nas a my zajmiemy się resztą ✌</h3>
                <div class="button-trail mt-5 anim-stagger5">
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
