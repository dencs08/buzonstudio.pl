<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="images/logos/logo_white-cropped.svg" />
        <link rel="stylesheet" href="css/app.css" />
        <!-- <link rel="stylesheet" href="css/start.css" /> -->
        <title>bisonstudio</title>
    </head>

    <style>
        body {
            font-family: sans-serif;
            padding: 0;
            margin: 0;
            height: 100vh;
            width: 100vw;
            overflow-x: hidden;
        }

        .asd {
            /* width: 300%; */
            /* height: 100vh; */
            /* display: flex; */
            /* flex-wrap: nowrap; */
            text-align: center;
        }
        .panel {
            display: grid;
            place-content: center;
            height: 100vh;
        }

        h1 {
            padding: 0;
            margin: 0;
        }

        .a {
            background: #1652f0;
            color: white;
        }

        .b {
            background: #ff5555;
            color: white;
        }

        .c {
            background: #fffc02;
        }
    </style>

    <body class="antialiased">
        <x-navbar/>
        <div class="smooth-locomotive-scroll">
            <div class="asd">
                <section class="a panel">
                    <h1>GSAP ScrollTrigger Demo</h1>
                </section>
                <section class="b panel">
                    <h3>Pretty cool right?</h3>
                </section>
                <section class="c panel">
                    <h1>FIN</h1>
                </section>
            </div>
        </div>
        <script src="js/start.js"></script>
    </body>
</html>
