<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="css/app.css" />
        <title>bisonstudio</title>
    </head>
    <body class="antialiased">
        <!-- Navbar -->

        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Info</li></a>
                    <a href="#"><li>Contact</li></a>
                    <a href="https://erikterwan.com/" target="_blank"
                        ><li>Show me more</li></a
                    >
                </ul>
            </div>
        </nav>

        <!-- Navbar -->

        <div class="landing-page">
            <!-- <div class="container-fluid landing-page_content"> -->
            <h1>Jesteśmy bisonstudio.</h1>
            <!-- <p>Twoje kompletne rozwiązanie IT</p> -->
            <!-- </div> -->
        </div>

        <canvas id="web_gl"></canvas>
        <section class="scroller"></section>

        <script src="js/app.js"></script>
    </body>
</html>
