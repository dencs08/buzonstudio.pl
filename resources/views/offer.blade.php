@extends('layouts.master')
@section('title', 'Buzon Studio | Oferta - Tworzenie Stron i Sklepów Internetowych')

@section('meta')
<meta name="description" content='W bisonstudio oferujemy kompleksowe rozwiązanie na każde zlecenie, dzięki systemowi All-In-One nie będziesz już musiał pracować osobno z różnymi deweloperami od dziś robimy wszystko od A do Z!'>
<link rel="canonical" href="https://www.buzon.studio/oferta"/>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('css/offer.css') }}">
@endsection

@section('js')
    <!-- <script src="{{ asset('js/offer.js') }}"></script> -->
@endsection

@section('content')

        <section data-scroll-section id="landing-page">
            <div data-scroll data-scroll-speed="3" class="container landing-page-content">
                <h1>
                    Dla was budujemy <br> wspaniałe <span id="typed"></span>
                </h1>

                <h2 class="fw-normal">W naszym studio kreujemy prace które, działają, zdobywają serca użytkowników i zapadają w pamięć. Tworzymy wszystko od A do Z, tak jak chcesz.
                </h2>
                <x-arrow/>
            </div>
        </section>

        <section data-scroll-section id="offer">
            <div class="container mb-5 mb-lg-0">
                <div data-scroll-speed="2">
                    <h3 class="gs gs_fromLeft headerline">Działamy po to abyś się rozwijał</h3>
                </div>
                <div class="row">
                    <div class="col-md-6 px-0 px-md-3 px-lg-5 mb-4 mb-md-0 link-activate-wrapper">
                        <div data-scroll-speed="3" class="offer-wrapper">
                            <div class="d-flex d-md-block justify-content-center">
                                <img src="{{asset('images/branding.jpg')}}" alt="">
                            </div>
                            <div data-scroll-speed="1.5" class="info-header my-0">
                                <span class="gs gs_fromTop font-family-header my-0">
                                    <h3 class="my-0 link-bracket-display link-move">Produkty cyfrowe</h3>
                                </span>
                            </div>
                        </div>
                        <div class="info mt-3 mt-md-3 mt-lg-4 pe-3 pe-md-0">
                            <p class="gs gs_fromLeft font-color-dark">Tworzymy i rozwijamy, strony internetowe, aplikacje, wizualizacje, grafiki, projekty UI i UX adekwatnie pod Twoje potrzeby, tak abyś otrzymał najlepiej dostosowany produkt który pracuje dla Ciebie.</p>
                            <ul class="text-uppercase font-color-darker">
                                <li data-scroll-speed="0.5"><span class="gs gs_fromFadeIn">Strony internetowe</span> </li>
                                <li data-scroll-speed="0.75"><span class="gs gs_fromFadeIn">E-commerce</span> </li>
                                <li data-scroll-speed="1.0"><span class="gs gs_fromFadeIn">UI / UX </span> </li>
                                <li data-scroll-speed="1.25"><span class="gs gs_fromFadeIn">Projekty graficzne</span> </li>
                                <li data-scroll-speed="1.5"><span class="gs gs_fromFadeIn">Wizualizacje 3D</span> </li>
                                <li data-scroll-speed="1.75"><span class="gs gs_fromFadeIn">Modelowanie 3D</span> </li>
                                <li data-scroll-speed="2.0"><span class="gs gs_fromFadeIn">Aplikacje</span> </li>
                                <li data-scroll-speed="2.25"><span class="gs gs_fromFadeIn">Gry</span> </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 px-0 px-md-3 px-lg-5 link-activate-wrapper">
                        <div data-scroll-speed="3" class="offer-wrapper">
                            <div class="d-flex d-md-block justify-content-center">
                                <img src="{{asset('images/branding.jpg')}}" alt="">
                            </div>
                            <div data-scroll-speed="1.5" class="info-header">
                                <span class="gs gs_fromTop font-family-header my-0">
                                    <h3 class="my-0 link-bracket-display link-move">Branding</h3>
                                </span>
                            </div>
                        </div>
                        <div class="info mt-3 mt-md-3 mt-lg-4 pe-3 pe-md-0">
                            <p class="gs gs_fromLeft font-color-dark">Dziś branding jest najważniejszym elementem każdego dobrze prosperującego biznesu, łatwe do zapamiętania  logo, charakterystyczna identyfikacja wizualna czy dobrze obrana strategia marketingowa, ma ogromne znaczenie w jaki sposób będziesz odbierany na    rynku</p>
                            <ul class="text-uppercase font-color-darker">
                                <li data-scroll-speed="0.5"><span class="gs gs_fromFadeIn">Nazewnictwo</span> </li>
                                <li data-scroll-speed="0.75"><span class="gs gs_fromFadeIn">Identyfikacja wizualna</span> </li>
                                <li data-scroll-speed="1.0"><span class="gs gs_fromFadeIn">Logotypy</span> </li>
                                <li data-scroll-speed="1.25"><span class="gs gs_fromFadeIn">Marketing</span> </li>
                                <li data-scroll-speed="1.5"><span class="gs gs_fromFadeIn">Strategie biznesowe w social mediach</span> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5">
                <a data-scroll-speed="1.5" href="/kontakt" class="gs gs_fromLeft underline-primary link-arrow">
                    Napisz do nas i stwórzmy coś razem
                </a>
            </div>
        </section>

        
        <section id="process">
            <div class="container">
                <h3 class="headerline">Nasz proces</h3>
            </div>
        </section>
        
        <x-clients/>

        <x-footer/>
        </div>
@endsection