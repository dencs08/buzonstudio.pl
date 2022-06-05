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

                <h2 class="mb-5">W naszym studio kreujemy prace które, działają, zdobywają serca użytkowników i zapadają w pamięć. Tworzymy wszystko od A do Z, tak jak chcesz.
                </h2>
                <x-arrow/>
            </div>
        </section>

        <section data-scroll-section id="offer">
            <div class="container">
                <div data-scroll data-scroll-speed="2">
                    <h3 class="gs gs_fromLeft headerline">Działamy po to abyś się rozwijał</h3>
                </div>
                <div class="row">
                    <div data-scroll class="col-md-6 d-flex justify-content-center">
                        <div data-scroll data-scroll-speed="1" class="col-content1">
                            <div data-scroll data-scroll-speed="1.5">
                                <h2 class="gs gs_fromTop">Produkty cyfrowe</h2>
                            </div>
                            <div data-scroll data-scroll-speed="1.25">
                                <p class="gs gs_fromLeft">Tworzymy i rozwijamy, strony internetowe, aplikacje, wizualizacje, grafiki, projekty UI i UX adekwatnie pod Twoje potrzeby, tak abyś otrzymał najlepiej dostosowany produkt który działa. </p>
                            </div>
                            <ul data-scroll data-scroll-speed="1">
                                <li data-scroll-speed="0.5"><span class="gs gs_fromFadeIn">Strony internetowe</span></li>
                                <li data-scroll-speed="0.75"><span class="gs gs_fromFadeIn">E-commerce</span></li>
                                <li data-scroll-speed="1.0"><span class="gs gs_fromFadeIn">UI / UX </span></li>
                                <li data-scroll-speed="1.25"><span class="gs gs_fromFadeIn">Projekty graficzne</span></li>
                                <li data-scroll-speed="1.5"><span class="gs gs_fromFadeIn">Wizualizacje 3D</span></li>
                                <li data-scroll-speed="1.75"><span class="gs gs_fromFadeIn">Modelowanie 3D</span></li>
                                <li data-scroll-speed="2.0"><span class="gs gs_fromFadeIn">Aplikacje</span></li>
                                <li data-scroll-speed="2.25"><span class="gs gs_fromFadeIn">Gry</span></li>
                            </ul>
                        </div>
                    </div>
                    <div data-scroll class="col-md-6 d-flex justify-content-center">
                        <div data-scroll data-scroll-speed="3" class="col-content2">
                            <div data-scroll data-scroll-speed="1.5">
                                <h2 class="gs gs_fromTop">Branding</h2>
                            </div>
                            <div data-scroll data-scroll-speed="1.25">
                                <p class="gs gs_fromLeft">Dziś branding jest najważniejszym elementem każdego dobrze prosperującego biznesu, łatwe do zapamiętania logo, charakterystyczna identyfikacja wizualna czy dobrze obrana strategia marketingowa, to wszystko ma znaczenie w jaki sposób odbierze Ciebie przyszły klient.</p>
                            </div>
                            <ul>
                                <li data-scroll-speed="0.5"><span class="gs gs_fromFadeIn">Nazewnictwo</span> </li>
                                <li data-scroll-speed="0.75"><span class="gs gs_fromFadeIn">Identyfikacja wizualna</span> </li>
                                <li data-scroll-speed="1.0"><span class="gs gs_fromFadeIn">Logotypy</span> </li>
                                <li data-scroll-speed="1.25"><span class="gs gs_fromFadeIn">Marketing</span> </li>
                                <li data-scroll-speed="1.5"><span class="gs gs_fromFadeIn">Strategie biznesowe w social mediach</span> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="liquid"></div>
                    <a data-scroll-speed="1.5" href="kontakt" class="contact-us underline gs gs_fromLeft">Napisz do nas i stwórzmy coś razem.</a>
            </div>
        </section>

        <section data-scroll-section id="works">
            <div class="container">
            <div data-scroll data-scroll-speed="1.5">
                <h3 class="gs gs_fromLeft headerline">Nasze prace</h3>
            </div>
            <div class="project-preview d-sm-block d-none"></div>
            <div class="navigation-wrapper">
                <div class="project-overlay"></div>
                    <ul id="works_images" class="navigation-list">

                    </ul>
                </div>
            </div>
        </section>

        <x-footer/>
        </div>
@endsection