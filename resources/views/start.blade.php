<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="images/logo_white.svg" />
        <link rel="stylesheet" href="css/app.css" />
        <title>bisonstudio</title>
    </head>
    <body class="antialiased">
        <!-- Navbar -->

        <input type="checkbox" id="active" />
        <label for="active" class="menu-btn"><span></span></label>
        <div class="wrapper">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
        </div>

        <!-- Landing Page -->

        <div class="landing-page">
            <div class="container-fluid fluid-margin">
                <p class="landing-page_content_text">Cześć, jesteśmy</p>
                <h1>bisonstudio.</h1>
                <p class="landing-page_content_text_second">
                    Twoje kompleksowe rozwiązanie na wszystkie technologiczne
                    potrzeby!
                </p>
            </div>
        </div>

        <!-- WEBGL -->
        <canvas id="web_gl"></canvas>

        <!-- Section1 -->

        <div class="contaner-fluid fluid-margin">
            <h2 class="we-create-header">
                Tworzymy wspaniałe <span id="typed"></span>
            </h2>
        </div>

        <script src="js/app.js"></script>
    </body>
</html>
