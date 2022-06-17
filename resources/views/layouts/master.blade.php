<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @yield('meta')
        <link rel="canonical" href="https://www.bisonstudio.pl"/>
        <link rel="apple-touch-icon" href="{{asset('images/logos/favicon/buzonstudio_favicon_green.png')}}">
        <link rel="shortcut icon" href="{{asset('images/logos/favicon/buzonstudio_favicon_green.png')}}" />
        <link rel="stylesheet" href="{{asset('css/app.css')}}" />

        @yield('css')
        <title>@yield('title')</title>
    </head>
    <body class="antialiased">
        <x-navbar/>
        <div data-page-content data-locomotive-scroll id="swup" class="transition-fade">
            <canvas id="web_gl"></canvas>
            @yield('content')
            @yield('js')
        </div>
    </body>
    <script src="{{asset('js/app.js')}}"></script>
</html>
