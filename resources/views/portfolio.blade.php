<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="{{asset('images/logos/logo_white.svg')}}" />
        <link rel="stylesheet" href="/css/app.css" />
        <link rel="stylesheet" href="/css/portfolio.css" />
        <title>Bison Studio - Portfolio</title>
    </head>
    <body class="antialiased">

    <canvas id="web_gl"></canvas>

        <x-loader/>

        <x-navbar/>

        <div id="nav-floater">
        </div>
        
        <div id="web-content" class="smooth-locomotive-scroll">
        <section data-scroll-section id="landing-page">
            <div id="landing-content" class="container landing-page-content">
                <h1 data-scroll data-scroll-speed="3" class="">
                    Portfolio  "{{ $portfolioName }}"
                </h1>

                <div class="img-wrapper">
                    <img class="img_landing" src="{{asset('images')}}/portfolio/{{ $portfolioName }}/{{ $portfolioName }}_portfolio.jpg" alt="">
                </div>
            </div>
        </section>

        <section data-scroll-section id="responsibilites">
            <div class="container">
                <h3 data-scroll data-scroll-speed="2" class="headerline">Podsumowanie realizacji</h3>
                <div class="row">
                    <div class="col-md-6">
                        <h2 data-scroll data-scroll-speed="1.25">Opis</h2>
                        <p data-scroll data-scroll-speed="0.8">{{$portfolioInfo}}</p>
                    </div>
                    <div class="col-md-3">
                        <h2 data-scroll data-scroll-speed="1.25">Nasze zadanie</h2>
                        <ul data-scroll data-scroll-speed="0.8"> 
                        @php
                        $i = 1;
                        $i_2 = 1;
                        $i_3 = 1;
                        @endphp
                        @foreach($portfolioResponsibilities as $responsibility)
                            <li data-scroll data-scroll-speed="{{$i++ / 3}}">
                                {{ $responsibility }}
                            </li>
                        @endforeach
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h2 data-scroll data-scroll-speed="1.25">Cel</h2>
                        <ul data-scroll data-scroll-speed="0.8">
                        @foreach($portfolioGoals as $goal)
                            <li data-scroll data-scroll-speed="{{$i_2++ / 3}}">
                                {{ $goal }}
                            </li>
                        @endforeach
                        </ul>
                    </div>
                    <div class="websites">
                        @foreach($portfolioLinks as $link)
                            <a class="underline" href="//{{$link}}" target="_blank">{{$link}}</a>
                        @endforeach
                    </div>
                </div>
            </section>

            <section data-scroll-section id="other_images">
                <div class="container">
                    @php
                    $imageId = 1;
                    @endphp
                    @foreach($portfolioImages as $portfolioImage)
                    <div data-scroll data-scroll-speed="{{$i_3++ / 2}}" class="portfolio_image_wrapper">
                        <img src="{{asset('images/portfolio/')}}/{{ $portfolioImage }}/{{ $portfolioImage }}{{$imageId++}}.jpg" class="portfolio_image" alt="">
                    </div>
                    @endforeach
                </div>
            </section>

            <x-footer/>
        </div>

        <x-global-js-variables/>

        <script src="/js/app.js"></script>
        <script src="/js/portfolio.js"></script>
    </body>
</html>

