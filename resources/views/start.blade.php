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
        <section data-scroll-section g-component="Locomotive" id="landing-page">
            <div class="container mt-3 mt-lg-0 mt-xl-4 pt-5 pt-md-6">
                <h1 class="fw-light">
                    BUZONSTUDIO INNOWACYJNE USŁUGI IT.  
                </h1>

                <h2 class="fw-normal font-family-primary pe-0 pe-md-6">Jesteśmy kreatywnym studio w branży IT zajmującym sie dostarczniem najlepszych <a href="/portfolio" class="link-primary underline-primary fw-bold">produktów</a> i <a href="/oferta" class="link-primary underline-primary fw-bold">usług</a> IT. Tworzymy strony internetowe, wizualizacje, branding, marketing online i inne produkty cyfrowe z pomocą metody <span data-tooltip="Dzięki All-in-One zaosczędzisz czas i pieniądze, nie martw się o zatrudnianie kilku zespołów osobno - my realizujemy wszystko od A do Z." class="text-highlight cursor-pointer"><a href="/oferta" class="link-primary underline-primary">All-in-One.</a></span></h2>
                <x-arrow/>
            </div>
        </section>

        <!-- Portfolio -->
        <section data-scroll-section id="portfolio">
            <div data-gs data-gs_fromBottom id="portfolio-content" class="container mt-5">
                <h4 class="my-0 headerline">Nasze prace</h4>
                <h3 class="mt-1 mb-3">
                    Projekty z, których jesteśmy dumni
                </h3>
            </div>
            <div data-gs data-gs_fromBottom class="grid-item main-track">
                <div class="slide-track pb-2 pb-md-3 pb-lg-6 mb-1">

                @foreach ($portfolio_data as $portfolio)
                    <a href="/portfolio/{{$portfolio->name}}">
                        <div class="track-item mx-auto ms-md-5 me-md-5 mb-6 mb-lg-0 d-md-inline-block link-activate-wrapper">
                            <div class="info-wrapper">
                                <div class="info">
                                    <h3 class="font-family-header my-0 link-bracket-display link-move">{{$portfolio->name}}</h3>
                                    <p class="font-family-primary font-color-secondary mt-0 mb-2">{{$portfolio->info}}</p>
                                    <span class="font-family-primary font-color-dark">{{$portfolio->category}}</span>
                                </div>
                            </div>
                            <a href="/portfolio/{{$portfolio->name}}" class="portfolio-item px-2 px-md-0">
                                <img src="{{ asset('images/portfolio/' . $portfolio->name . '/' . $portfolio->name . '_portfolio.jpg') }}" alt="tworzenie logo i brandingu dla marki danfit" class="portfolio_image-item">
                            </a>
                        </div>
                    </a>
                @endforeach
                    
                </div>
            </div>  
            <div data-gs data-gs_fromLeft class="portfolio-btn-container container">
                <a href="/portfolio" class="link-primary underline-primary link-arrow my-4 text-uppercase fw-medium">Więcej prac</a>
            </div>
        </section>

        <!-- Aboutus -->
        <section data-scroll-section id="aboutUs">
            <div class="container d-flex align-items-center">
                <div class="col-md-7"></div>
                <div class="col-12 col-sm-9 col-md-5 pe-1 pe-lg-5">
                    <p data-gs data-gs_fromRight class="font-color-dark">
                        <b class="text-uppercase">{{config('app.name')}}</b> to 5 lat doświadczenia w tworzeniu projektów i pomaganiu markom w zwiększaniu efektywności ich działania. Stawiamy czoło wyzwaniom i osiągamy cele poprzez współpracę z Wami. Dzięki naszej pracy, wspólnie możemy uzyskać wspaniałe efekty.
                    </p>
                </div>
            </div>
        </section>

        <!-- Offer -->
        <x-offer-columns/>

        <!-- Lets talk -->
        <section data-scroll-section id="contact">
            <div class="container text-center">
                <h4 data-gs data-gs_fromTop>Napisz do nas!</h4>
                <h3 data-gs data-gs_fromTop class="my-0">Zatrudnij nas a my zajmiemy się resztą.</h3>
                <div data-gs data-gs_fromBottom class="button-trail mt-5">
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
        <x-clients/>

        <x-footer/>
@endsection