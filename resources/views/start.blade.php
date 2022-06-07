@extends('layouts.master')
@section('title', 'Buzon Studio | Tworzenie Stron Internetowych Marketing Online')

@section('meta')
<meta name="description" content='W Buzon Studio oferujemy tworzenie stron internetowych, marketing online i socialmedia, wizualizacje i aplikacje.Zlecenia realizujemy od A do Z.'>
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
            <div id="landing-content" class="container landing-page-content mt-5">
                <h1 class="fw-light">
                    BUZONSTUDIO INNOWACYJNE USŁUGI IT.  
                </h1>

                <h2 class="fw-normal font-family-primary">Jesteśmy kreatywnym studio w branży IT zajmującym sie dostarczniem najlepszych <a href="/portfolio" class="link-primary underline-primary fw-bold">produktów</a> i <a href="/oferta" class="link-primary underline-primary fw-bold">usług</a> IT. Tworzymy strony internetowe, wizualizacje, branding, marketing online i inne produkty cyfrowe z pomocą metody <span data-tooltip="Dzięki All-in-One zaosczędzisz czas i pieniądze, nie martw się o zatrudnianie kilku zespołów osobno - my realizujemy wszystko od A do Z." class="text-highlight cursor-pointer"><a href="/oferta" class="link-primary underline-primary">All-in-One.</a></span></h2>
            </div>
        </section>

        <!-- Portfolio -->
        <section data-scroll-section id="portfolio">
            <div  id="portfolio-content" class="container">
                <h4 class="my-0 headerline">Nasze prace</h4>
                <h3 class="mt-1 mb-2">
                    Projekty z, których jesteśmy dumni
                </h3>
            </div>
            <div class="grid-item main-track">
                <div class="slide-track pb-6 mb-4">
                    <div class="track-item mx-auto me-5 d-inline-block">
                        <div class="info-wrapper">
                            <div class="info">
                                <h3 class="font-family-header my-0">danfit</h3>
                                <p class="font-family-primary font-color-secondary mt-0 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur asperiores iure reprehenderit sapiente ducimus officia.</p>
                                <span class="font-family-primary font-color-dark">E-COMMERCE</span>
                            </div>
                        </div>
                        <a href="portfolio/danfit" class="portfolio-item">
                            <img src="{{ asset('images/portfolio/danfit/danfit_portfolio.jpg') }}" alt="tworzenie logotypu i brandingu dla marki danfit" class="portfolio_image-item">
                        </a>
                    </div>
                    <div class="track-item mx-auto me-5 d-inline-block">
                        <div class="info-wrapper">
                            <div class="info">
                                <h3 class="font-family-header my-0">castle</h3>
                                <p class="font-family-primary font-color-secondary mt-0 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur asperiores iure reprehenderit sapiente ducimus officia.</p>
                                <span class="font-family-primary font-color-dark">E-COMMERCE</span>
                            </div>
                        </div>
                        <a href="portfolio/castle3d" class="portfolio-item">
                            <img src="{{ asset('images/portfolio/castle3d/castle3d_portfolio.jpg')}}" alt="wizualizacja archietktoniczna 3D" class="portfolio_image-item">
                        </a>
                    </div>
                    <div class="track-item mx-auto me-5 d-inline-block">                        
                        <div class="info-wrapper">
                            <div class="info">
                                <h3 class="font-family-header my-0">watch</h3>
                                <p class="font-family-primary font-color-secondary mt-0 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur asperiores iure reprehenderit sapiente ducimus officia.</p>
                                <span class="font-family-primary font-color-dark">E-COMMERCE</span>
                            </div>
                        </div>
                        <a href="portfolio/watch3d" class="portfolio-item">
                            <img src="images/portfolio/watch3d/watch3d_portfolio.jpg" alt="wizualizacja produktu zegarka w 3D" class="portfolio_image-item">
                        </a>
                    </div>
                    <div class="track-item mx-auto me-5 d-inline-block">                        
                        <div class="info-wrapper">
                            <div class="info">
                                <h3 class="font-family-header my-0">komb</h3>
                                <p class="font-family-primary font-color-secondary mt-0 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur asperiores iure reprehenderit sapiente ducimus officia.</p>
                                <span class="font-family-primary font-color-dark">E-COMMERCE</span>
                            </div>
                        </div>
                        <a href="portfolio/komb" class="portfolio-item">
                            <img src="images/portfolio/komb/komb_portfolio.jpg" alt="wizualizacja reklamy busa w 3D" class="portfolio_image-item">
                        </a>
                    </div>
                    <div class="track-item mx-auto me-5 d-inline-block">
                        <div class="info-wrapper">
                            <div class="info">
                                <h3 class="font-family-header my-0">zielonewidoki</h3>
                                <p class="font-family-primary font-color-secondary mt-0 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur asperiores iure reprehenderit sapiente ducimus officia.</p>
                                <span class="font-family-primary font-color-dark">E-COMMERCE</span>
                            </div>
                        </div>
                        <a href="portfolio/zielonewidoki" class="portfolio-item">
                            <img src="images/portfolio/zielonewidoki/zielonewidoki_portfolio.jpg" alt="tworzenie stron internetowych i brandingu dla marki zielonewidoki" class="portfolio_image-item">
                        </a>
                    </div>
                </div>
            </div>  
            <div class="portfolio-btn-container container">
                <a href="/portfolio" class="link-primary underline-primary link-arrow my-4 text-uppercase fw-medium">Więcej prac</a>
            </div>
        </section>

        <!-- Aboutus -->
        <section data-scroll-section id="aboutUs">
            <div class="container d-flex align-items-center vh-75">
                <div class="col-md-7"></div>
                <div class="col-md-5 pe-5">
                    <h4 class="my-0 headerline">
                        Rozwiń się razem z nami
                    </h4>
                    <h3 class="mt-1 mb-2 font-family-header lh-1">Tworzymy więź pomiędzy klientem a Twoim produktem</h3>
                    <p class="font-color-dark">
                        <b class="text-uppercase">{{config('app.name')}}</b> to 5 lat doświadczenia w tworzeniu projektów i pomaganiu markom w zwiększaniu efektywności ich działania. Stawiamy czoło wyzwaniom i osiągamy cele poprzez współpracę z Wami. Dzięki naszej pracy, wspólnie możemy uzyskać wspaniałe efekty.
                    </p>
                </div>
            </div>
        </section>

        <!-- Lets talk -->
        <section data-scroll-section id="letsTalk-section">
            <div class="container text-center vh-50">
                <h4 class="">Rozwiń swój biznes razem z nami!</h4>
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

        <!-- Clients section -->
        <section id="clients">
            <div class="container">
                <h4 class="mb-2 gs gs_fromTop">Oni juz nam zaufali:</h4>
                <div class="gs gs_fromBotom">
                    <div align="center" class="client-logo">
                        <img
                            src="{{asset('images/logos/client/danfit.svg')}}"
                            alt="branding (logotyp) danfit"
                            width="350" height="100"
                        />
                    </div>
                    <div align="center" class="client-logo">
                        <img
                            src="{{asset('images/logos/client/komb.svg')}}"
                            alt="branding (logotyp) komb"
                            width="350" height="100"
                        />
                    </div>
                    <div align="center" class="client-logo">
                        <img
                            src="{{asset('images/logos/client/zielonewidoki.svg')}}"
                            alt="branding (logotyp) zielonewidoki"
                            width="350" height="100"
                        />
                    </div>
                    <div align="center" class="client-logo">
                        <img
                            src="{{asset('images/logos/client/ats.svg')}}"
                            alt="branding (logotyp) ats-konsulting"
                            width="350" height="100"
                        />
                    </div>
                    <div align="center" class="client-logo">
                        <img
                            src="{{asset('images/logos/client/bielany.svg')}}"
                            alt="branding (logotyp) bielanypark"
                            width="350" height="100"
                        />
                    </div>
                </div>
            </div>
        </section>

        <x-footer/>

@endsection