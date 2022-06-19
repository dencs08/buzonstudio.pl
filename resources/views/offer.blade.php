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

        <section data-scroll-section g-component="Locomotive" id="landing-page">
            <div data-scroll data-scroll-speed="3" class="container mt-3 mt-lg-0 mt-xl-4 pt-5 pt-md-6">
                <h1>
                    <div>
                        <span g-component="TypedOffer" id="typed"></span> 
                    </div>
                    <div>
                        Pod Twoje potrzeby.
                    </div>
                </h1>

                <h2 class="fw-normal">W naszym studio kreujemy prace które, działają, zdobywają serca użytkowników i zapadają w pamięć. Tworzymy wszystko od A do Z, tak jak chcesz.
                </h2>
                <x-arrow/>
            </div>
        </section>

        <x-offer-columns/>

        <section data-scroll-section id="process" class="section-mb">
            <div class="container">
                <div class="row mb-3 mb-md-5">
                    <div data-scroll data-scroll-speed="0.5" class="col-12 col-md-6 text-uppercase">
                        <div data-gs data-gs_fromBottom>
                            <h3 class="headerline my-0 lh-1">Nasz</h3>
                        </div>
                        <div data-gs data-gs_fromBottom>
                            <h3 class="my-0 lh-1">Proces</h3>
                        </div>
                    </div>
                    <div data-scroll data-scroll-speed="5" class="col-md-6">
                        <div data-gs data-gs_fromBottom class="link-activate-wrapper">
                            <h4 class="font-family-header font-color-secondary link-bracket-display link-move">Dialog</h4>
                            <p class="font-color-dark mt-0 pe-2 pe-sm-5 pe-md-2 pe-lg-5">Podstawą każdego dobrze zrealizowanego projektu jest zrozumienie Twoich potrzeb w celu realizacji odpowiedniej wizji i wymagań. Wspólnie analizujemy podstawy i kryteria, które muszą być spełnione.</p>
                        </div>
                        <div data-gs data-gs_fromBottom class="link-activate-wrapper">
                            <h4 class="font-family-header font-color-secondary link-bracket-display link-move">Koncepcja</h4>
                            <p class="font-color-dark mt-0 pe-2 pe-sm-5 pe-md-2 pe-lg-5">Opracowujemy środowisko i wykonanie technicznege w celu przygotowania szczegółowej strategii dla projektu. Tworzymy koncepcje wizualne w celu ożywienia doświadczenia, nad którym pracujemy.</p>
                        </div>
                        <div data-gs data-gs_fromBottom class="link-activate-wrapper">
                            <h4 class="font-family-header font-color-secondary link-bracket-display link-move">Realizacja</h4>
                            <p class="font-color-dark mt-0 pe-2 pe-sm-5 pe-md-2 pe-lg-5">Gdy wszystko jest gotowe, zaczynamy techniczne prace nad projektem, zgodnie z wcześniej ustalonymi kryteriami tak aby produkt był dostosowany do Twoich potrzeb.</p>
                        </div>
                        <div data-gs data-gs_fromBottom class="link-activate-wrapper">
                            <h4 class="font-family-header font-color-secondary link-bracket-display link-move">Dystrybucja</h4>
                            <p class="font-color-dark mt-0 pe-2 pe-sm-5 pe-md-2 pe-lg-5">Wykonujemy końcową analizę naszej pracy i upewniamy się, że uzgodnione warunki zostały spełnione. Ostatnim krokiem jest wdrożenie Twojego nowego produktu w życie.</p>
                        </div>
                    </div>
                </div>
                <div data-gs data-gs_fromLeft class="link-activate-wrapper contact">
                    <a href="/kontakt">Jeśli jesteś zainteresowany
                        <a data-scroll-speed="1.5" href="/kontakt" class="underline-primary font-color-primary">
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