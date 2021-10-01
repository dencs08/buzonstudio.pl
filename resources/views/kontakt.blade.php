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

        <x-navbar/>

        <section id="landing-page">
            <div class="container landing-page-content">
                <h1>Zacznijmy owocną współpracę!</h1>

                <h2 class="mb-5 w-50">
                    Powiedz nam co jest dla Ciebie najważniejsze, a my zrealizujemy to od A do Z.
                </h2>

                <svg
                    width="24"
                    height="102"
                    viewBox="0 0 24 102"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.9393 101.061C11.5251 101.646 12.4749 101.646 13.0607 101.061L22.6066 91.5147C23.1924 90.9289 23.1924 89.9792 22.6066 89.3934C22.0208 88.8076 21.0711 88.8076 20.4853 89.3934L12 97.8787L3.51472 89.3934C2.92893 88.8076 1.97918 88.8076 1.39339 89.3934C0.807608 89.9792 0.807607 90.9289 1.39339 91.5147L10.9393 101.061ZM10.5 -6.55671e-08L10.5 100L13.5 100L13.5 6.55671e-08L10.5 -6.55671e-08Z"
                        class="arrow-down-icon"
                    />
                </svg>
            </div>
        </section>

        <!-- Contact -->

        <section id="Contact">
            <div class="container text-center">
                <h3>Co możemy dla ciebie zrobić?</h3>
            </div>
            <div class="contact-buttons">
                <div class="control-group">
                    <input type="checkbox" id="talk" name="talk">
                    <label for="talk">
                      <span class="label-name">Chcę porozmawiać</span>
                    </label>

                    <input type="checkbox" id="website" name="website">
                    <label for="website">
                      <span class="label-name">Strona Internetowa</span>
                    </label>

                    <input type="checkbox" id="app" name="app">
                    <label for="app">
                      <span class="label-name">Aplikacja</span>
                    </label>

                    <input type="checkbox" id="branding" name="branding">
                    <label for="branding">
                      <span class="label-name">Branding</span>
                    </label>

                    <input type="checkbox" id="other" name="other">
                    <label for="other">
                      <span class="label-name">Coś Innego</span>
                    </label>
                </div>

            </div>

            <hr class="section-divider mt-5" />

            <form name="contact-form" class="contact-form">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-field">
                            <input id="name" name="name" class="input-text js-input" type="text" required>
                            <label class="label" for="name">Imię</label>
                         </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-field">
                            <input id="email" name="email" class="input-text js-input" type="email" required>
                            <label class="label" for="email">E-mail</label>
                         </div>
                    </div>
                </div>
                <div class="form-field">
                    <textarea id="message" name="message" class="input-text js-input" cols="30" rows="10" required></textarea>
                   <label class="label" for="message">Wiadomość</label>
                </div>
                <div class="form-field text-center mt-5">
                   <input type="submit" value="WYŚLIJ" class="btn btn-submit mt-5 w-25 color"></input>
                </div>
             </form>

        </section>

        <x-footer/>

        <script src="js/app.js"></script>
    </body>
</html>
