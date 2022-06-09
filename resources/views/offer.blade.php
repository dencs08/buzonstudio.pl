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

        <x-offer-columns/>

        <section id="process" class="section-mb">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 text-uppercase">
                        <div>
                            <h3 class="headerline my-0 lh-1">Nasz</h3>
                        </div>
                        <div>
                            <h3 class="my-0 lh-1">Proces</h3>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="link-activate-wrapper">
                            <h4 class="font-family-header font-color-secondary link-bracket-display link-move">Dialog</h4>
                            <p class="font-color-dark mt-0 pe-2 pe-sm-5 pe-md-2 pe-lg-5">Podstawą każdego dobrze zrealizowanego projektu jest zrozumienie Twoich potrzeb w celu realizacji odpowiedniej wizji i wymagań. Wspólnie analizujemy podstawy i kryteria, które muszą być spełnione.</p>
                        </div>
                        <div class="link-activate-wrapper">
                            <h4 class="font-family-header font-color-secondary link-bracket-display link-move">Koncepcja</h4>
                            <p class="font-color-dark mt-0 pe-2 pe-sm-5 pe-md-2 pe-lg-5">Opracowujemy środowisko i wykonanie technicznege w celu przygotowania szczegółowej strategii dla projektu. Tworzymy koncepcje wizualne w celu ożywienia doświadczenia, nad którym pracujemy.</p>
                        </div>
                        <div class="link-activate-wrapper">
                            <h4 class="font-family-header font-color-secondary link-bracket-display link-move">Realizacja</h4>
                            <p class="font-color-dark mt-0 pe-2 pe-sm-5 pe-md-2 pe-lg-5">Gdy wszystko jest gotowe, zaczynamy techniczne prace nad projektem, zgodnie z wcześniej ustalonymi kryteriami tak aby produkt był dostosowany do Twoich potrzeb.</p>
                        </div>
                        <div class="link-activate-wrapper">
                            <h4 class="font-family-header font-color-secondary link-bracket-display link-move">Dystrybucja</h4>
                            <p class="font-color-dark mt-0 pe-2 pe-sm-5 pe-md-2 pe-lg-5">Wykonujemy końcową analizę naszej pracy i upewniamy się, że uzgodnione warunki zostały spełnione. Ostatnim krokiem jest wdrożenie Twojego nowego produktu w życie.</p>
                        </div>
                    </div>
                </div>
                <div class="link-activate-wrapper">
                    <a href="/kontakt">Jeśli jesteś zainteresowany
                        <a data-scroll-speed="1.5" href="/kontakt" class="gs gs_fromLeft underline-primary mt-3 mt-md-5 font-color-primary">
                            zdzwońmy się
                        </a>
                    </a>
                </div>

            </div>


        </section>
        
        <x-clients/>

        <x-footer/>
        </div>
@endsection