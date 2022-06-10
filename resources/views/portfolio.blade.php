@extends('layouts.master')
@section('title', 'Buzon Studio - Nasze prace ')

@section('meta')
<meta name="description" content=''>
<link rel="canonical" href="https://www.buzon.studio/portfolio"/>
@endsection

@section('css')
    <link rel="stylesheet" href="{{ asset('css/portfolio.css') }}">
@endsection

@section('js')
    <!-- <script src="{{ asset('js/portfolio.js') }}"></script> -->
@endsection

@section('content')

    <div id="fullpage">

    	    <div section> 
                <div anim-stagger-0 class="row mt-5 mt-lg-0">
                    
                    @foreach ($portfolio_row_first as $project)
                        <div class="col-lg-6 mb-3 mb-md-5 mb-lg-0 link-activate-wrapper">
                            <a href="/portfolio/{{$project->name}}">
                                <div class="portfolio-wrapper">
                                    <a href="/portfolio/{{$project->name}}" class="portfolio-item">
                                        <img src="{{ asset('images/portfolio/' . $project->name . '/' . $project->name . '_portfolio.jpg') }}" alt="tworzenie logo i brandingu dla marki danfit" class="portfolio_image-item">
                                    </a>
    
                                    <div class="info-header my-0">
                                        <a href="/portfolio/{{$project->name}}" class="gs gs_fromTop font-family-header my-0">
                                            <h3 class="my-0 link-bracket-display link-move">{{$project->name}}</h3>
                                        </a>
                                    </div>
                                </div>
                                <div class="info mt-3 mt-md-3 mt-lg-4 pe-3 pe-md-0 ps-1 ps-lg-2">
                                    <p class="font-color-secondary">{{$project->info}}</p>
                                    <p class="font-color-dark">{{$project->category}}</p>
                                </div>
                            </a>
                        </div>
                    @endforeach

                </div>
            </div>

    	    <div section> 
                <div anim-stagger-1 class="row">

                    @foreach ($portfolio_row_second as $project)
                        <div class="col-lg-6 mb-3 mb-md-5 mb-lg-0 link-activate-wrapper">
                            <a href="/portfolio/{{$project->name}}">
                                <div class="portfolio-wrapper">
                                    <a href="/portfolio/{{$project->name}}" class="portfolio-item">
                                        <img src="{{ asset('images/portfolio/' . $project->name . '/' . $project->name . '_portfolio.jpg') }}" alt="tworzenie logo i brandingu dla marki danfit" class="portfolio_image-item">
                                    </a>
    
                                    <div class="info-header my-0">
                                        <a href="/portfolio/{{$project->name}}" class="gs gs_fromTop font-family-header my-0">
                                            <h3 class="my-0 link-bracket-display link-move">{{$project->name}}</h3>
                                        </a>
                                    </div>
                                </div>
                                <div class="info mt-3 mt-md-3 mt-lg-4 pe-3 pe-md-0 ps-1 ps-lg-2">
                                    <p class="font-color-secondary">{{$project->info}}</p>
                                    <p class="font-color-dark">{{$project->category}}</p>
                                </div>
                            </a>
                        </div>
                    @endforeach

                </div>
            </div>

    	    <div section> 
                <div anim-stagger-2 class="row">

                    @foreach ($portfolio_row_third as $project)
                        <div class="col-lg-6 mb-3 mb-md-5 mb-lg-0 link-activate-wrapper">
                            <a href="/portfolio/{{$project->name}}">
                                <div class="portfolio-wrapper">
                                    <a href="/portfolio/{{$project->name}}" class="portfolio-item">
                                        <img src="{{ asset('images/portfolio/' . $project->name . '/' . $project->name . '_portfolio.jpg') }}" alt="tworzenie logo i brandingu dla marki danfit" class="portfolio_image-item">
                                    </a>
    
                                    <div class="info-header my-0">
                                        <a href="/portfolio/{{$project->name}}" class="gs gs_fromTop font-family-header my-0">
                                            <h3 class="my-0 link-bracket-display link-move">{{$project->name}}</h3>
                                        </a>
                                    </div>
                                </div>
                                <div class="info mt-3 mt-md-3 mt-lg-4 pe-3 pe-md-0 ps-1 ps-lg-2">
                                    <p class="font-color-secondary">{{$project->info}}</p>
                                    <p class="font-color-dark">{{$project->category}}</p>
                                </div>
                            </a>
                        </div>
                    @endforeach

                </div>
            </div>

    	    <div section> 
                <div anim-stagger-3 class="row">

                    @foreach ($portfolio_row_fourth as $project)
                        <div class="col-lg-6 mb-3 mb-md-5 mb-lg-0 link-activate-wrapper">
                            <a href="/portfolio/{{$project->name}}">
                                <div class="portfolio-wrapper">
                                    <a href="/portfolio/{{$project->name}}" class="portfolio-item">
                                        <img src="{{ asset('images/portfolio/' . $project->name . '/' . $project->name . '_portfolio.jpg') }}" alt="tworzenie logo i brandingu dla marki danfit" class="portfolio_image-item">
                                    </a>
    
                                    <div class="info-header my-0">
                                        <a href="/portfolio/{{$project->name}}" class="gs gs_fromTop font-family-header my-0">
                                            <h3 class="my-0 link-bracket-display link-move">{{$project->name}}</h3>
                                        </a>
                                    </div>
                                </div>
                                <div class="info mt-3 mt-md-3 mt-lg-4 pe-3 pe-md-0 ps-1 ps-lg-2">
                                    <p class="font-color-secondary">{{$project->info}}</p>
                                    <p class="font-color-dark">{{$project->category}}</p>
                                </div>
                            </a>
                        </div>
                    @endforeach

                </div>
            </div>
        
        <div section> 
            <div anim-stagger-4>
                <x-footer/>
            </div>
        </div>
    </div>
@endsection