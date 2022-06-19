@extends('layouts.master')
@section('title', 'Buzon Studio - Kontakt')

@section('meta')
<meta name="description" content='Skontaktuj się z nami w sprawie oferty lub jeśli masz jakiekolwiek wątpliwości, na pewno je rozwiejemy!'>
<link rel="canonical" href="https://www.buzon.studio/kontakt"/>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('css/contact.css') }}">
@endsection

@section('js')
    <!-- <script src="{{ asset('js/contact.js') }}"></script> -->
@endsection

@section('content')

        <section data-scroll-section g-component="Locomotive" id="landing-page">
            <div data-scroll data-scroll-speed="3" class="container mt-3 mt-lg-0 mt-xl-4 pt-5 pt-md-6">
                <h1 class="lh-1">Zacznijmy owocną współpracę!</h1>

                <h2 class="mb-5 fw-medium">
                    Powiedz nam czego potrzebujesz, a my zrealizujemy to od A do Z.
                </h2>

                <x-arrow/>
            </div>
        </section>

        <!-- Contact -->

        <section data-scroll-section g-component="ContactForm" id="Contact">
            <div class="container text-center">
                <div data-scroll data-scroll-speed="1.25">
                    <h3 data-gs data-gs_fromTop>Co możemy dla Ciebie zrobić?</h3>
                </div>
            <form id="contact-form" name="contact-form" class="contact-form validate-form" action="{{ route('send.email') }}" method="post">
                @csrf
                @if(session()->has('message'))
                    <div class="alert alert-success">
                {{ session()->get('message') }}
                    </div>
                @endif
                <div data-scroll data-scroll-speed="1.5">
                    <div data-gs data-gs_fromFadeIn>
                        <div class="control-group-error">
                            <h3 class="control-group-error-text font-color-dark">Wybierz conajmniej jedną z poniższych opcji:</h3>
                        </div>
                        <div class="control-group">
                            <input class="form_subject" type="checkbox" id="talk" name="controlInfo[]" value="Chcę porozmawiać">
                            <label cursor-shrink for="talk">
                                <span class="label-name">Chcę porozmawiać</span>
                            </label>
    
                            <input class="form_subject" type="checkbox" id="website" name="controlInfo[]" value="Strona Internetowa">
                            <label cursor-shrink for="website">
                                <span class="label-name">Strona Internetowa</span>
                            </label>
    
                            <input class="form_subject" type="checkbox" id="app" name="controlInfo[]" value="Aplikacja">
                            <label cursor-shrink for="app">
                                <span class="label-name">Aplikacja</span>
                            </label>
    
                            <input class="form_subject" type="checkbox" id="branding" name="controlInfo[]" value="Branding">
                            <label cursor-shrink for="branding">
                                <span class="label-name">Branding</span>
                            </label>
    
                            <input class="form_subject" type="checkbox" id="other" name="controlInfo[]" value="Coś Innego">
                            <label cursor-shrink for="other">
                                <span class="label-name">Coś Innego</span>
                            </label>
                        </div>
                    </div>
                </div>

            <hr data-gs data-gs_fromFadeIn class="section-divider my-3 my-md-4 my-lg-4" />

                <div class="row">
                    <div data-scroll data-scroll-speed="1.0" class="col-md-6">
                        <div data-gs data-gs_fromFadeIn>
                            <div class="form-field validate-input" data-validate = "To pole jest wymagane!">
                                <input id="name" name="name" class="input-text js-input" type="text" required>
                                <label for="name">Imię</label>
                                @error('name')
                                <span class="mt-3 text-alert"> {{ $message }} </span>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <div data-scroll data-scroll-speed="1.0" class="col-md-6">
                        <div data-gs data-gs_fromFadeIn>
                            <div class="form-field validate-input" data-validate = "To pole jest wymagane!">
                                <input id="email" name="email" class="input-text js-input" type="email" required>
                                <label for="email">E-mail</label>
                                @error('email')
                                <span class="mt-3 text-alert"> {{ $message }} </span>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
                <div data-scroll data-scroll-speed="1.5">
                    <div data-gs data-gs_fromFadeIn class="form-field validate-input " data-validate = "To pole jest wymagane!">
                        <textarea id="content" name="content" class="input-text js-input" cols="30" rows="10" required></textarea>
                        <label for="message">Wiadomość</label>
                        @error('content')
                        <span class="mt-3 text-alert"> {{ $message }} </span>
                        @enderror
                    </div>
                </div>
                <div data-scroll data-scroll-speed="1.75">
                    <div data-gs data-gs_fromBottom class="form-field text-center submit-container mt-2 mt-md-4 mt-lg-5 mb-3 mb-md-5">
                        <input cursor-action data-cursor-label="⟶" type="submit" value="WYŚLIJ" class="btn btn-submit color"></input>
                    </div>
                </div>
            </form>
        </section>

        <x-footer/>

@endsection