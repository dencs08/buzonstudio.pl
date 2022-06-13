@extends('layouts.master')
@section('title', 'Buzon Studio')

@section('meta')
<meta name="description" content='Przebudowa strony'>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('css/privacy.css') }}">
@endsection

@section('js')
    <!-- <script src="{{ asset('js/privacy.js') }}"></script> -->
@endsection

@section('content')

    <div id="landing-page">
        <div data-scroll-section class="container">
        <h1>Strona {{config("app.name")}} jest aktualnie w przebudowie</h1>
        <a
                            href="mailto:{{config('app.mail')}}?subject = Oferta&body = Wiadomość"
                            class="underline-primary mail-link fw-medium font-color-secondary"
                            >{{config('app.mail')}}</a
                        >

        <p class="my-0">{{config("app.phone")}}</p>
    </div>

@endsection