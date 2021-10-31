<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="{{ $portfolioName }} jest jedną z prac wykonanych przez bisonstudio dla {{ $portfolioName }} a w naszych obowiązkach było m.in. @foreach($portfolioResponsibilities as $responsibility)
                {{ $responsibility }}, 
            @endforeach">
        <link rel="canonical" href="https://www.bisonstudio.pl/portfolio/{{ $portfolioName }}"/>
        <link rel="shortcut icon" href="{{asset('images/logos/logo_white.svg')}}" />
        <link rel="apple-touch-icon" href="{{asset('images/logos/logo_white.svg')}}">
        <link rel="stylesheet" href="/css/app.css" />
        <link rel="stylesheet" href="/css/portfolio.css" />
        <title>Bison Studio - {{ $portfolioName }}</title>

        <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-M2VGTFKH7L"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-M2VGTFKH7L');
</script>
    </head>
    <body class="antialiased">

    <canvas id="web_gl"></canvas>

        <x-loader/>

        <x-navbar/>

        <div id="nav-floater">
        </div>
        
        <div id="web-content" class="smooth-locomotive-scroll">
        <section data-scroll data-scroll-section id="landing-page">
            <div id="landing-content" class="container landing-page-content">
                <h1 data-scroll data-scroll-speed="3" class="">
                    Portfolio  "{{ $portfolioName }}"
                </h1>

                <div class="img-wrapper ">
                    <img class="img_landing" src="{{asset('images')}}/portfolio/{{ $portfolioName }}/{{ $portfolioName }}_portfolio.jpg" alt="{{$portfolioAlts}}">
                </div>
            </div>
        </section>

        <section data-scroll data-scroll-section id="responsibilites">
            <div class="container">
                <h3 data-scroll data-scroll-speed="2" class="headerline gs gs_fromLeft">Podsumowanie realizacji</h3>
                <div class="row">
                    <div class="col-md-6">
                        <h2 data-scroll data-scroll-speed="1.25" class="gs gs_fromLeft">Opis</h2>
                        <p data-scroll data-scroll-speed="0.8" class="gs gs_fromLeft">{{$portfolioInfo}}</p>
                    </div>
                    <div class="col-md-3">
                        <h2 data-scroll data-scroll-speed="1.25" class="gs gs_fromLeft">Nasze zadanie</h2>
                        <ul data-scroll data-scroll-speed="0.8"> 
                        @php
                        $i = 1;
                        $i_2 = 1;
                        $i_3 = 1;
                        @endphp
                        @foreach($portfolioResponsibilities as $responsibility)
                            <li data-scroll data-scroll-speed="{{$i++ / 3}}" class="gs gs_fromLeft">
                                {{ $responsibility }}
                            </li>
                        @endforeach
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h2 data-scroll data-scroll-speed="1.25" class="gs gs_fromRight">Cel</h2>
                        <ul data-scroll data-scroll-speed="0.8">
                        @foreach($portfolioGoals as $goal)
                            <li data-scroll data-scroll-speed="{{$i_2++ / 3}}" class="gs gs_fromRight">
                                {{ $goal }}
                            </li>
                        @endforeach
                        </ul>
                    </div>
                    <div class="websites">
                        @foreach($portfolioLinks as $link)
                            <a class="underline gs gs_fromLeft" href="//{{$link}}" target="_blank">{{$link}}</a>
                        @endforeach
                    </div>
                </div>
            </section>

            <section data-scroll data-scroll-section id="other_images">
                <div class="container">
                    @php
                    $imageId = 1;
                    @endphp
                    @foreach($portfolioImages as $portfolioImage)
                    <div data-scroll class="portfolio_image_wrapper">
                        <img src="{{asset('images/portfolio/')}}/{{ $portfolioImage }}/{{ $portfolioImage }}{{$imageId++}}.jpg" class="portfolio_image" alt="{{$portfolioAlts}}">
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

