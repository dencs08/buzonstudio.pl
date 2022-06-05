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

        <section section data-scroll-section id="landing-page">
            <div data-scroll data-scroll-speed="3" class="container landing-page-content">
                <h1>Zacznijmy owocną współpracę!</h1>

                <h2 class="mb-5 w-50">
                    Powiedz nam co jest dla Ciebie najważniejsze, a my zrealizujemy to od A do Z.
                </h2>

                <x-arrow/>
            </div>
        </section>

        <!-- Contact -->

        <section data-scroll-section id="Contact">
            <div class="container text-center">
                <div data-scroll data-scroll-speed="1.25">
                    <h3 class="gs gs_fromBottom">Co możemy dla Ciebie zrobić?</h3>
                </div>
            </div>
            <form id="contact-form" name="myForm" name="contact-form" class="contact-form validate-form" action="{{ route('send.email') }}" method="post">
            @csrf
            @if(session()->has('message'))
                <div class="alert alert-success">
            {{ session()->get('message') }}
                </div>
            @endif
            <div data-scroll data-scroll-speed="1.5">
                <div class="contact-buttons gs gs_fromBottom">
                    <div class="control-group-error">
                        <h3 class="control-group-error-text">Wybierz conajmniej jedną z poniższych opcji:</h3>
                    </div>
                    <div class="gs gs_fromBottom control-group ">
                        <input class="form_subject" type="checkbox" id="talk" name="controlInfo[]" value="Chcę porozmawiać">
                        <label for="talk">
                            <span class="label-name">Chcę porozmawiać</span>
                        </label>

                        <input class="form_subject" type="checkbox" id="website" name="controlInfo[]" value="Strona Internetowa">
                        <label for="website">
                            <span class="label-name">Strona Internetowa</span>
                        </label>

                        <input class="form_subject" type="checkbox" id="app" name="controlInfo[]" value="Aplikacja">
                        <label for="app">
                            <span class="label-name">Aplikacja</span>
                        </label>

                        <input class="form_subject" type="checkbox" id="branding" name="controlInfo[]" value="Branding">
                        <label for="branding">
                            <span class="label-name">Branding</span>
                        </label>

                        <input class="form_subject" type="checkbox" id="other" name="controlInfo[]" value="Coś Innego">
                        <label for="other">
                            <span class="label-name">Coś Innego</span>
                        </label>
                    </div>
                </div>
            </div>


            <hr class="gs gs_fromBottom section-divider mt-5" />

                <div class="row contact_main_row">
                    <div data-scroll data-scroll-speed="1.0" class="col-md-6">
                        <div class="gs gs_fromLeft">
                            <div class="form-field validate-input" data-validate = "To pole jest wymagane!">
                                <input id="name" name="name" class="input-text js-input" type="text" required>
                                <label class="label" for="name">Imię</label>
                                @error('name')
                                <span class="mt-3 text-alert"> {{ $message }} </span>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <div data-scroll data-scroll-speed="1.0" class="col-md-6">
                        <div class="gs gs_fromRight">
                            <div class="form-field validate-input" data-validate = "To pole jest wymagane!">
                                <input id="email" name="email" class="input-text js-input" type="email" required>
                                <label class="label" for="email">E-mail</label>
                                @error('email')
                                <span class="mt-3 text-alert"> {{ $message }} </span>
                                @enderror
                            </div>
                        </div>
                    </div>
                </div>
                <div data-scroll data-scroll-speed="1.5">
                    <div class="form-field validate-input gs gs_fromBottom" data-validate = "To pole jest wymagane!">
                        <textarea id="content" name="content" class="input-text js-input" cols="30" rows="10" required></textarea>
                        <label class="label" for="message">Wiadomość</label>
                        @error('content')
                        <span class="mt-3 text-alert"> {{ $message }} </span>
                        @enderror
                    </div>
                </div>
                <div data-scroll data-scroll-speed="1.75">
                    <div class="form-field text-center submit-container gs gs_fromBottom">
                        <input type="submit" value="WYŚLIJ" class="btn btn-submit color"></input>
                    </div>
                </div>
            </form>

        </section>

        <x-footer/>
        </div>

@endsection