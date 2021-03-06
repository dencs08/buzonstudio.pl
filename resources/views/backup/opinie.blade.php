<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Opinie klientów bisonstudio mówią same za siebie, jeśli nie jesteś do czegoś przekonany, skontaktuj się z nami!">
        <link rel="canonical" href="https://www.bisonstudio.pl/opinie"/>
        <link rel="shortcut icon" href="{{asset('images/logos/logo_white.svg')}}" />
        <link rel="apple-touch-icon" href="{{asset('images/logos/logo_white.svg')}}">
        <link rel="stylesheet" href="css/app.css" />
        <link rel="stylesheet" href="css/testimonials.css" />
        <title>Bison Studio - Opinie</title>

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
                    Wiemy, że czasami ciężko komuś zaufać
                </h1>

                <h2 class="mb-5">Wierzymy jendak, że nasze doswiadczenie i usługi mogą to zmienić, dlatego też, w naszym studio nasze pracę opieramy na wynikach tak aby dostarczyć Tobie usługę której potrzebujesz.</h2>


                <x-arrow/>
            </div>
        </section>

        <section data-scroll-section id="testimonials">
            <div class="container">
                <div data-scroll data-scroll-speed="1.5" class="row">
                    <div class="col-md-6 d-flex justify-content-center place-items-center">
                        <div class="card gs gs_fromLeft">
                            <div class="card-body gs gs_fromLeft">
                                <h3 class="card-header my-0 mb-1 gs gs_fromLeft">Jarosław Buzon</h3>
                                <h4 class="my-0 gs gs_fromLeft">KOMB Constructions</h4>
                                <p class="gs gs_fromLeft">Wspaniała opieka, pomoc i zrozumienie. Świetne pomysły i rewelacyjne rozwiązania. Szczerze polecam. Jarek Buzon</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center place-items-center">
                        <div class="card gs gs_fromLeft">
                            <div class="card-body gs gs_fromLeft">
                                <h3 class="card-header my-0 mb-1 gs gs_fromLeft">Jolanta Brasuń - Sitkowska</h3>
                                <h4 class="my-0 gs gs_fromLeft">Biuro Rachunkowe JBS</h4>
                                <p class=" gs gs_fromLeft">Bardzo konkretna i rzeczowa współpraca. Nie pierwszy już zrealizowany projekt i na pewno nie ostatni. Świetna komunikacja i dużą elastyczność. Polecam. Jola Brasuń</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

    <x-footer/>
    </div>

    <x-global-js-variables/>

    <script src="js/app.js"></script>
    <script src="js/testimonials.js"></script>


    </body>
</html>