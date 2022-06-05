@extends('layouts.master')
@section('title', 'Buzon Studio | Tworzenie Stron Internetowych Marketing Online')

@section('meta')
<meta name="description" content='Buzon Studio to tworzenie stron internetowych, marketing online i socialmedia, wizualizacje i aplikacje, zlecenia realizujemy od A do Z'>
<link rel="canonical" href="https://www.buzon.studio/start"/>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('css/start.css') }}">
@endsection

@section('js')
    <!-- <script src="{{ asset('js/start.js') }}"></script> -->
@endsection

@section('content')

        <!-- Hero -->
        <section data-scroll-section id="landing-page">
            <div id="landing-content" class="container landing-page-content">
                <h1>
                    BUZONSTUDIO - MIEJSCE <br>
                    KTÓRE, TWORZY DLA CIEBIE.
                    
                </h1>

                <h2>Strony internetowe, wizualizacje, branding, UI, UX i więcej..</h2>

                <a href="/portfolio"><button class="btn btn-primary btn-landing1">PORTFOLIO</button></a>
                <a class="a_btn btn-landing2" href="oferta">CO ROBIMY?</a>
            </div>
        </section>

        <!-- Attention -->
        <section data-scroll-section id="attention">
            <div id="attention-content" class="container">
                <h4 class="my-0 headerline">Przyciągaj uwagę</h4>
                <h3 class="mt-2 mb-3">Wyróżnij się od konkurencji</h3>
                <p class="">
                    Dzięki naszemu <span data-tooltip="Branding to m.in. logo, jest to wygląd Twojej marki, to on wpływa na to jak postrzegają Cię klienci." class="text-highlight cursor-pointer">brandingowi</span> stworzonym pod Twoje potrzeby, Twoja marka będzie niepowtarzalna,
                    sama w sobie będzie "przyciągać wzrok" a klienci będą ją utożsamiać jako wyjątkową i unikalną.
                    Nasz proces tworzenia stron internetowych i brandingu zrobi to wszystko za Ciebie.
                </p>
            </div>
        </section>

        <!-- Remembered -->
        <section data-scroll-section id="remembered">
            <div id="remembered-content" class="container row">
                <div class="col-md-6 d-none d-md-block"></div>
                    <div class="col-md-6">
                        <h4 class="my-0 headerline">
                            Bądź rozpoznawany i zapadnij w pamięć
                        </h4>
                        <h3 class="mt-2 mb-3">Tworzymy więź pomiędzy klientem a Twoim produktem</h3>
                        <p class="">
                            Nie pozwól klientom o sobie zapomnieć, logo musi być proste i łatwe do zapamiętania,
                            ale jednocześnie unikalne tak aby wyróżniać się od konkurencji.
                            Dziś, najważniejsza rzecz dla Ciebie to utrzymać klienta przy sobie, nie daj mu odejść!
                        </p>
                    </div>
                </div>
        </section>

        <!-- Sales -->
        <section data-scroll-section id="sales">
            <div  id="sales-content" class="container">
                <h4 class="my-0 headerline">Pozwól swojemu biznesowi na rozwój</h4>
                <h3 class="mt-2 mb-3">
                    Pomagamy w zwiększeniu <br> Twojej sprzedaży
                </h3>
                <p class="">
                    Z wieloletnim doświadczeniem, które zebraliśmy, doskonale
                    wiemy jak przekonać potencjalnego klienta do Ciebie i Twojego
                    produktu, dobry <span data-tooltip="Copywritting często nazywany 'kopią'. Jest to treść na stronie, jeśli dobrze napisana ma ogromny wpływ na ostateczną decyzję klienta." class="text-highlight cursor-pointer">copywritting</span>, niebanalny design czy odpowiedni marketing to tylko kilka zabiegów,
                    które stosujemy aby pomóc Ci rozwinąć skrzydła.
                </p>
            </div>
        </section>

        <!-- Portfolio -->
        <section data-scroll-section id="portfolio">
                <div  id="portfolio-content" class="container">
                    <h4 class="my-0 headerline">Nasze prace</h4>
                    <h3 class="mt-3 mb-5">
                        Kochamy rozmawiać, ale teraz, niech nasze portfolio wypowie się za nas.
                    </h3>
                </div>
                <div class="grid-item main">
                    <div class="slide-track">
                        <a href="portfolio/danfit" class="portfolio-item portfolio-item3 mx-auto mx-lg-5 item1"><img src="{{ asset('images/portfolio/danfit/danfit_portfolio.jpg') }}" alt="tworzenie logotypu i brandingu" class="portfolio_image_item"></a>
                        <a href="portfolio/castle3d" class="portfolio-item portfolio-item1 mx-auto mx-lg-5 item2 d-none d-lg-inline-block"><img src="{{ asset('images/portfolio/castle3d/castle3d_portfolio.jpg')}}" alt="wizualizacja archietktoniczna 3D" class="portfolio_image_item"></a>
                        <a href="portfolio/watch3d" class="portfolio-item portfolio-item2 mx-auto mx-lg-5 item3 d-none d-lg-inline-block"><img src="images/portfolio/watch3d/watch3d_portfolio.jpg" alt="wizualizacja produktu zegarka w 3D" class="portfolio_image_item"></a>
                        <a href="portfolio/komb" class="portfolio-item portfolio-item4 mx-auto mx-lg-5 item4 d-none d-lg-inline-block"><img src="images/portfolio/komb/komb_portfolio.jpg" alt="wizualizacja reklamy busa w 3D" class="portfolio_image_item"></a>
                        <a href="portfolio/zielonewidoki" class="portfolio-item portfolio-item5 mx-auto mx-lg-5 item5 d-none d-lg-inline-block"><img src="images/portfolio/zielonewidoki/zielonewidoki_portfolio.jpg" alt="tworzenie stron internetowych" class="portfolio_image_item"></a>
                    </div>
                </div>  
                <div class="portfolio-btn-container container">
                    <a href="oferta#prace" class="a_btn my-5">WIĘCEJ PRAC</a>
                </div>
        </section>

        <!-- Lets talk -->
        <section data-scroll-section id="letsTalk-section">
            <div id="letsTalk-content" class="container text-center">
                <h4>Rozwiń swój biznes razem z nami!</h4>
                <h3>Zatrudnij nas a my zajmiemy się resztą.</h3>
                <div class="button-trail mt-5">
                    <form>
                        <a href="/kontakt">
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

@endsection