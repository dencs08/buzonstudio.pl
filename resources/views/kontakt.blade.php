<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="images/logo_white.svg" />
        <link rel="stylesheet" href="css/app.css" />
        <link rel="stylesheet" href="css/contact.css" />

        <title>bisonstudio</title>
    </head>
    <body class="antialiased">

        <!-- WEBGL -->
        <canvas id="web_gl"></canvas>
            
        <x-loader/>

        <x-navbar/>

        <div id="web-content" class="smooth-locomotive-scroll">
        <section data-scroll-section id="landing-page">
            <div data-scroll data-scroll-speed="3" class="container landing-page-content">
                <h1>Zacznijmy owocną współpracę!</h1>

                <h2 class="mb-5 w-50">
                    Powiedz nam co jest dla Ciebie najważniejsze, a my zrealizujemy to od A do Z.
                </h2>

                <x-arrow/>
            </div>
        </section>

        <!-- Contact -->

        <section data-scroll-section id="Contact">
            <div class="container text-center">
                <h3 data-scroll data-scroll-speed="1.25" class="gs gs_fromLeft">Co możemy dla ciebie zrobić?</h3>
            </div>
            <form data-scroll data-scroll-speed="1.5" name="contact-form" class="contact-form validate-form" action="{{ route('send.email') }}" method="post">
            @csrf
            @if(session()->has('message'))
                <div class="alert alert-success">
            {{ session()->get('message') }}
                </div>
            @endif
            <div data-scroll data-scroll-speed="1.5" class="contact-buttons">
                <div class="control-group">
                    <input class="gs gs_fromBottom" type="checkbox" id="talk" name="talk">
                    <label for="talk">
                      <span class="label-name">Chcę porozmawiać</span>
                    </label>

                    <input class="gs gs_fromBottom" type="checkbox" id="website" name="website">
                    <label for="website">
                      <span class="label-name">Strona Internetowa</span>
                    </label>

                    <input class="gs gs_fromBottom" type="checkbox" id="app" name="app">
                    <label for="app">
                      <span class="label-name">Aplikacja</span>
                    </label>

                    <input class="gs gs_fromBottom" type="checkbox" id="branding" name="branding">
                    <label for="branding">
                      <span class="label-name">Branding</span>
                    </label>

                    <input class="gs gs_fromBottom" type="checkbox" id="other" name="other">
                    <label for="other">
                      <span class="label-name">Coś Innego</span>
                    </label>
                </div>
            </div>

            <hr class="section-divider mt-5" />

                <div class="row">
                    <div class="col-md-6 gs gs_fromLeft">
                        <div class="form-field validate-input" data-validate = "Imie jest wymagane">
                            <input id="name" name="name" class="input-text js-input" type="text" required>
                            <label class="label" for="name">Imię</label>
                         </div>
                    </div>
                    <div class="col-md-6 gs gs_fromRight">
                        <div class="form-field">
                            <input id="email" name="email" class="input-text js-input" type="email" required>
                            <label class="label" for="email">E-mail</label>
                         </div>
                    </div>
                </div>
                <div class="form-field gs gs_fromBottom">
                    <textarea id="message" name="message" class="input-text js-input" cols="30" rows="10" required></textarea>
                   <label class="label" for="message">Wiadomość</label>
                </div>
                <div class="form-field text-center submit-container gs gs_fromBottom">
                   <input type="submit" value="WYŚLIJ" class="btn btn-submit color"></input>
                </div>
             </form>

        </section>

        <x-footer/>
        </div>

        <script src="js/app.js"></script>
        <script src="js/contact.js"></script>
    </body>
</html>
