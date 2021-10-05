<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="images/logo_white.svg" />
        <link rel="stylesheet" href="css/app.css" />
        <link rel="stylesheet" href="css/privacy.css" />
        <title>bisonstudio</title>
    </head>
    <body class="antialiased">

        <!-- WEBGL -->
        <canvas id="web_gl"></canvas>

        <x-navbar/>
        
        <div data-scroll-container id="web-content">
            
            <x-footer/>

        </div>
        <script src="js/app.js"></script>
        <script src="js/privacy.js"></script>
    </body>
</html>