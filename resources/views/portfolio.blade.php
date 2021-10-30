<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="{{asset('images/logos/logo_white.svg')}}" />
    <link rel="stylesheet" href="/css/app.css" />
    <link rel="stylesheet" href="/css/portfolio.css" />
    <title>Portfolio</title>
</head>
<body class="antialiased">

    <!-- WEBGL -->
    <canvas id="web_gl"></canvas>
    
    <x-loader/>
    
    <x-navbar/>

    <div id="web-content" class="smooth-locomotive-scroll">
        <section data-scroll-section id="landing-page">
            <div id="landing-content" class="container landing-page-content">
                <h1 data-scroll data-scroll-speed="3" class="anim-stagger0">
                    Portfolio  "{{ $portfolios }}"
                </h1>

                <div class="img-wrapper">
                    <img class="img_landing" src="{{asset('images')}}/portfolio/{{ $portfolios }}_portfolio.png" alt="">
                </div>

            </div>
        </section>



        <x-footer/>



    <x-global-js-variables/>

    <script src="/js/app.js"></script>
    <script src="/js/portfolio.js"></script>
</body>
</html>