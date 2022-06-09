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
                <x-arrow/>
            </div>

        </section>

        <!-- Portfolio -->
        <section data-scroll-section id="portfolio">
            <div  id="portfolio-content" class="container mt-5">
                <h4 class="my-0 headerline">Nasze prace</h4>
                <h3 class="mt-1 mb-2">
                    Projekty z, których jesteśmy dumni
                </h3>
            </div>
            <div class="grid-item main-track">
                <div class="slide-track pb-5 pb-lg-6 mb-1">
                    <div class="track-item mx-auto ms-md-5 me-md-5 mb-6 mb-sm-5 mb-md-0 d-md-inline-block link-activate-wrapper">
                        <div class="info-wrapper">
                            <div class="info">
                                <h3 class="font-family-header my-0 link-bracket-display link-move">danfit</h3>
                                <p class="font-family-primary font-color-secondary mt-0 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur asperiores iure reprehenderit sapiente ducimus officia.</p>
                                <span class="font-family-primary font-color-dark">E-COMMERCE</span>
                            </div>
                        </div>
                        <a href="portfolio/danfit" class="portfolio-item">
                            <img src="{{ asset('images/portfolio/danfit/danfit_portfolio.jpg') }}" alt="tworzenie logo i brandingu dla marki danfit" class="portfolio_image-item">
                        </a>
                    </div>
                    <div class="track-item mx-auto me-md-5 mb-6 mb-sm-5 mb-md-0 d-md-inline-block link-activate-wrapper">
                        <div class="info-wrapper">
                            <div class="info">
                                <h3 class="font-family-header my-0 link-bracket-display link-move">castle</h3>
                                <p class="font-family-primary font-color-secondary mt-0 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur asperiores iure reprehenderit sapiente ducimus officia.</p>
                                <span class="font-family-primary font-color-dark">E-COMMERCE</span>
                            </div>
                        </div>
                        <a href="portfolio/castle3d" class="portfolio-item">
                            <img src="{{ asset('images/portfolio/castle3d/castle3d_portfolio.jpg')}}" alt="wizualizacja archietktoniczna 3D" class="portfolio_image-item">
                        </a>
                    </div>
                    <div class="track-item mx-auto me-md-5 mb-6 mb-sm-5 mb-md-0 d-md-inline-block link-activate-wrapper">                        
                        <div class="info-wrapper">
                            <div class="info">
                                <h3 class="font-family-header my-0 link-bracket-display link-move">watch</h3>
                                <p class="font-family-primary font-color-secondary mt-0 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur asperiores iure reprehenderit sapiente ducimus officia.</p>
                                <span class="font-family-primary font-color-dark">E-COMMERCE</span>
                            </div>
                        </div>
                        <a href="portfolio/watch3d" class="portfolio-item">
                            <img src="{{asset('images/portfolio/watch3d/watch3d_portfolio.jpg')}}" alt="wizualizacja produktu zegarka w 3D" class="portfolio_image-item">
                        </a>
                    </div>
                    <div class="track-item mx-auto me-md-5 mb-6 mb-sm-5 mb-md-0 d-md-inline-block link-activate-wrapper">                        
                        <div class="info-wrapper">
                            <div class="info">
                                <h3 class="font-family-header my-0 link-bracket-display link-move">komb</h3>
                                <p class="font-family-primary font-color-secondary mt-0 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur asperiores iure reprehenderit sapiente ducimus officia.</p>
                                <span class="font-family-primary font-color-dark">E-COMMERCE</span>
                            </div>
                        </div>
                        <a href="portfolio/komb" class="portfolio-item">
                            <img src="{{asset('images/portfolio/komb/komb_portfolio.jpg')}}" alt="wizualizacja reklamy busa w 3D" class="portfolio_image-item">
                        </a>
                    </div>
                    <div class="track-item mx-auto me-md-5 d-md-inline-block link-activate-wrapper">
                        <div class="info-wrapper">
                            <div class="info">
                                <h3 class="font-family-header my-0 link-bracket-display link-move">zielonewidoki</h3>
                                <p class="font-family-primary font-color-secondary mt-0 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur asperiores iure reprehenderit sapiente ducimus officia.</p>
                                <span class="font-family-primary font-color-dark">E-COMMERCE</span>
                            </div>
                        </div>
                        <a href="portfolio/zielonewidoki" class="portfolio-item">
                            <img src="{{asset('images/portfolio/zielonewidoki/zielonewidoki_portfolio.jpg')}}" alt="tworzenie stron internetowych i brandingu dla marki zielonewidoki" class="portfolio_image-item">
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
            <div class="container d-flex align-items-center">
                <div class="col-md-7"></div>
                <div class="col-12 col-sm-9 col-md-5 pe-1 pe-lg-5">
                    <p class="font-color-dark">
                        <b class="text-uppercase">{{config('app.name')}}</b> to 5 lat doświadczenia w tworzeniu projektów i pomaganiu markom w zwiększaniu efektywności ich działania. Stawiamy czoło wyzwaniom i osiągamy cele poprzez współpracę z Wami. Dzięki naszej pracy, wspólnie możemy uzyskać wspaniałe efekty.
                    </p>
                </div>
            </div>
        </section>

        <!-- Offer -->
        <section data-scroll-section id="offer">
            <div class="container mb-5 mb-lg-0">
                <div data-scroll-speed="2">
                    <h3 class="gs gs_fromLeft headerline">Działamy po to abyś się rozwijał</h3>
                </div>
                <div class="row">
                    <div class="col-md-6 d-flex justify-content-center mb-3 mb-md-0 px-2 px-lg-5 link-activate-wrapper">
                        <div data-scroll-speed="1" class="offer-div">
                            <div data-scroll-speed="1.5" class="offer-info-div">
                                <a href="/oferta" class="gs gs_fromTop font-family-header my-0 link-primary">
                                    <h3 class="my-0 link-bracket-display link-move">Produkty cyfrowe</h3>
                                </a>
                                <p class="gs gs_fromLeft">Tworzymy i rozwijamy, strony internetowe, aplikacje, wizualizacje, grafiki, projekty UI i UX adekwatnie pod Twoje potrzeby, tak abyś otrzymał najlepiej dostosowany produkt który pracuje dla Ciebie.</p>
                            </div>
                            <div class="img">
                                <img src="{{asset('images/branding.jpg')}}" alt="">                            
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center px-2 px-lg-5 link-activate-wrapper">
                        <div data-scroll-speed="3" class="offer-div">
                            <div data-scroll-speed="1.5" class="offer-info-div">
                                <a href="/oferta" class="gs gs_fromTop font-family-header my-0 link-primary">
                                    <h3 class="my-0 link-bracket-display link-move">Branding</h3>
                                </a>
                                <p class="gs gs_fromLeft">Dziś branding jest najważniejszym elementem każdego dobrze prosperującego biznesu, łatwe do zapamiętania logo, charakterystyczna identyfikacja wizualna czy dobrze obrana strategia marketingowa, ma ogromne znaczenie w jaki sposób będziesz odbierany na rynku</p>
                            </div>
                            <div class="img">
                                <img src="{{asset('images/branding.jpg')}}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Lets talk -->
        <section data-scroll-section id="contact">
            <div class="container text-center">
                <h4>Napisz do nas!</h4>
                <h3 class="my-0">Zatrudnij nas a my zajmiemy się resztą.</h3>
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