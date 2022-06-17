@extends('layouts.master')
@section('title', 'Buzon Studio - Nasze prace ')

@section('meta')
<meta name="description" content=''>
<link rel="canonical" href="https://www.buzon.studio/portfolio"/>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('css/project.css') }}">
@endsection

@section('js')
    <!-- <script src="{{ asset('js/portfolio.js') }}"></script> -->
@endsection

@section('content')

    <section data-scroll-section g-component="Locomotive" id="landing-page">
        <div class="container">
            <div>
                <h1>{{$name}}</h1>
                <div class="image-wrapper">
                    <img src="{{ asset('images/portfolio/' . $name . '/' . $name . '_portfolio.jpg') }}" alt="">
                </div>
            </div>
        </div>
    </section>
    
    <section data-scroll-section id="info" class="mb-4 mb-md-5">
        <div class="container">
            <div class="row mb-3 mb-md-5">
                <h3 class="headerline font-family-header">Podsumowanie realizacji</h3>
                <div class="col-md-6">
                    <div class="pe-1 pe-sm-3 pe-md-5">
                        <h4 class="font-family-primary font-color-primary my-0">Opis</h4>
                        <p>
                            {{$info}}
                        </p>
                    </div>
                </div>

                @if (!empty($responsibilities))
                
                <div class="col-md-3">
                    <div class="pe-5">
                        <h4 class="font-family-primary font-color-primary my-0">Nasze zadanie</h4>
                        <ul>
                        @foreach($responsibilities as $responsibility)
                            <li class="font-color-dark">{{$responsibility->responsibility}}</li>
                        @endforeach
                        </ul>
                    </div>
                </div>
                
                @endif

                @if (!empty($goals))

                <div class="col-md-3">
                    <div class="pe-5">
                        <h4 class="font-family-primary font-color-primary my-0">Cel</h4>
                        <ul>
                        @foreach($goals as $goal)
                            <li>{{$goal->goal}}</li>
                        @endforeach
                        </ul>
                    </div>
                </div>

                @endif

            </div>
            @if (!empty($website))
            <span class="text-uppercase website font-color-dark">Sprawdź stronę <a target="_blank" rel="noopener" href="{{$website}}" class="link-primary underline-primary text-uppercase">{{$name}}</a></span>
            @endif
        </div>
    </section>
    
    @if (!empty($images))
    <section data-scroll-section id="images">
        <div class="container">
            @foreach($images as $image)
            <div class="portfolio_image_wrapper">
                <img src="{{asset('images/portfolio/' . $name . '/' . $image->image . '.jpg')}}" alt="">
            </div>
            @endforeach
        </div>
    </section>
    @endif

    <x-footer/>

@endsection