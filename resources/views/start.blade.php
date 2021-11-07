<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="W bisonstudio zajmujemy się, tworzeniem stron i sklepów internetowych, wizualizacji aplikacji czy brandingu, zlecenia realizujemy od A do Z">
        <link rel="canonical" href="https://www.bisonstudio.pl"/>
        <link rel="apple-touch-icon" href="{{asset('images/logos/logo_white.svg')}}">
        <link rel="shortcut icon" href="{{asset('images/logos/logo_white.svg')}}" />
        <link rel="stylesheet" href="css/app.css" />
        <link rel="stylesheet" href="css/start.css" />
        <title>Tworzenie Stron Internetowych UI UX DESIGN</title>

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

        <x-navbar/>

<div id="web-content">
    <div id="fullpage">

        <section data-scroll-section id="landing-page" class="scroll-snap-start section first">
            <div  id="landing-content" class="container landing-page-content first-content">
                <h1 class="anim-stagger0">
                    Tworzymy dla marek <br />
                    Pracujemy dla ludzi
                </h1>

                <h2 class="anim-stagger0">Tworzymy strony internetowe, UI, UX, wizualizacje, branding i więcej..</h2>

                <a href="#section5"><button class="btn btn-primary btn-landing1 anim-stagger0">PORTFOLIO</button></a>
                <a class="web_link_transitions a_btn btn-landing2 anim-stagger0" href="oferta">CO ROBIMY?</a>
            </div>
        </section>

        
        <!-- Attention -->

        <section data-scroll-section id="attention" class="scroll-snap-start section second">
            <div id="attention-content" class="container aboutus second-content">
                <h4 class="my-0 headerline anim-stagger1">Przyciągaj uwagę</h4>
                <h3 class="mt-2 mb-3 anim-stagger1">Wyróżnij się od konkurencji</h3>
                <p class="anim-stagger1">
                    Dzięki naszemu <span data-tooltip="Branding to m.in. logo, jest to wygląd Twojej marki co ma wpływ na to jak spostrzegają Cię klienci." class="text-highlight">brandingowi</span> stworzonym pod Twoje potrzeby, Twoja marka będzie niepowtarzalna,
                    sama w sobie będzie "przyciągać wzrok" a klienci będą ją utożsamiać jako wyjątkową i unikalną.
                    Nasz proces tworzenia stron internetowych i brandingu zrobi to wszystko za Ciebie.
                </p>
            </div>
        </section>

        <!-- Remembered -->

        <section data-scroll-section id="remembered" class="scroll-snap-start section third">
            <div id="remembered-content" class="container aboutus row ">
                <div class="col-md-6 d-none d-md-block"></div>
                    <div class="col-md-6 third-content">
                        <h4 class="my-0 headerline anim-stagger2">
                            Bądź rozpoznawany i zapadnij w pamięć
                        </h4>
                        <h3 class="mt-2 mb-3 anim-stagger2">Tworzymy więź pomiędzy klientem a Twoim produktem</h3>
                        <p class="anim-stagger2">
                            Nie pozwól klientom o sobie zapomnieć, logo musi być proste i łatwe do zapamiętania,
                            ale jednocześnie unikalne tak aby wyróżniać się od konkurencji.
                            Dziś, najważniejsza rzecz dla Ciebie to utrzymać klienta przy sobie, nie daj mu odejść!
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
                    wiemy jak przekonać potencjalnego klienta do Ciebie i Twojego
                    produktu, dobry copywritting, niebanalny design czy odpowiedni marketing to tylko kilka zabiegów,
                    które stosujemy aby pomóc Ci rozwinąć skrzydła.
                </p>
            </div>
        </section>

        <!-- Portfolio -->

        <section data-scroll-section id="portfolio" class="scroll-snap-start section fifth">
                <div  id="portfolio-content" class="container">
                    <h4 class="my-0 headerline anim-stagger4">Nasze prace</h4>
                    <h3 class="mt-3 mb-5 anim-stagger4">
                        Kochamy rozmawiać, ale teraz, niech nasze portfolio wypowie się za nas.
                    </h3>
                </div>
                <div class="grid-item main">
                    <div class="slide-track">
                        <a href="portfolio/danfit" class="web_link_transitions portfolio-item portfolio-item3 mx-auto mx-lg-5 item1 anim-stagger4">branding</a>
                        <a href="portfolio/castle3d" class="web_link_transitions portfolio-item portfolio-item1 mx-auto mx-lg-5 item2 d-none d-lg-inline-block anim-stagger4">wizualizacje architektoniczne</a>
                        <a href="portfolio/watch3d" class="web_link_transitions portfolio-item portfolio-item2 mx-auto mx-lg-5 item3 d-none d-lg-inline-block anim-stagger4">wizualizacje produktów</a>
                        <a href="portfolio/komb" class="web_link_transitions portfolio-item portfolio-item4 mx-auto mx-lg-5 item4 d-none d-lg-inline-block anim-stagger4">wizualizacje reklamy</a>
                        <a href="portfolio/zielonewidoki" class="web_link_transitions portfolio-item portfolio-item5 mx-auto mx-lg-5 item5 d-none d-lg-inline-block anim-stagger4">tworzenie stron internetowych</a>
                    </div>
                </div>  
                <div class="portfolio-btn-container container">
                    <a href="oferta#prace" class="web_link_transitions a_btn  my-5 anim-stagger4">WIĘCEJ PRAC</a>
                </div>
        </section>


        <!-- Lets talk -->

        <section data-scroll-section id="letsTalk-section" class="scroll-snap-start section sixth">
            <div id="letsTalk-content" class="container text-center">
                <h4 class="anim-stagger5">Rozwiń swój biznes razem z nami!</h4>
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
</div>

        <!-- <video id="video" loop crossOrigin="anonymous" playsinline style="display:none">
			<source src="images/video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' muted="muted" autoplay="false">
        </video> -->
        <x-global-js-variables/>

        <script src="js/app.js"></script>
        <script src="js/start.js"></script>
    </body>
</html>
