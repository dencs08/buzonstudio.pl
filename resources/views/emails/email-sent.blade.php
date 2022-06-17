@extends('layouts.master')
@section('title', 'Buzon Studio - Dziękujemy za kontakt')

@section('meta')
<meta name="description" content='Dziękujemy za kontakt z nami, wkrótcę się odezwiemy!'>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('css/contact.css') }}">
@endsection

@section('js')
    <!-- <script src="{{ asset('js/contact.js') }}"></script> -->
@endsection

@section('content')

    <section data-scroll-section g-component="Locomotive" id="landing-page">
        <div data-scroll data-scroll-speed="3" class="container landing-page-content">
            <h1>Udało się! Email został wysłany,</h1>
            <h2 class="fw-normal font-family-primary">Odezwiemy się do Ciebie poprzez email podany w formularzu.</h2>
            <x-arrow/>
        </div>
    </section>

    <section data-scroll-section id="thanks-email">
        <div class="container">
            <div data-gs data-gs_fromBottom>
                <p >Dziękujemy za zaufanie, do usłyszenia wkrótce!</p>
            </div>
            <div data-gs data-gs_fromBottom>
                <a class="font-family-primary link-primary underline-primary link-arrow" href="start">Powrót na stronę główną</a>
            </div>
        </div>
    </section>

    <x-footer/>

@endsection
