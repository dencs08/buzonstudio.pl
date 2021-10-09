<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="images/logo_white.svg" />
        <link rel="stylesheet" href="css/app.css" />
        <link rel="stylesheet" href="css/offer.css" />
        <title>bisonstudio</title>
    </head>
    <body class="antialiased">
        <!-- WEBGL -->
        <canvas id="web_gl"></canvas>

        <x-navbar/>

        <div id="web-content" class="smooth-locomotive-scroll">
        <section data-scroll-section id="landing-page">
            <div data-scroll data-scroll-speed="3" class="container landing-page-content">
                <h1>
                    Dla was budujemy <br> wspaniałe <span id="typed"></span>
                </h1>

                <h2 class="mb-5">W naszym studio kreujemy prace które, działają, zdobywają serca użytkowników i zapadają w pamięć</h2>


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

        <section data-scroll-section id="offer">
            <div class="container">
                <h2 data-scroll class="headerline">Działamy po to abyś się rozwijał</h2>
                <div class="row">
                    <div data-scroll class="col-md-6 d-flex justify-content-center">
                        <div class="col-content1">
                            <h3>Produkty cyfrowe</h3>
                            <p>Tworzymy i rozwijamy, strony internetowe, aplikacje, wizualizacje, grafiki, projekty UI i UX adekwatnie pod Twoje potrzeby, tak abyś otrzymał najlepiej dostosowany produkt który działa. </p>
                            <ul>
                                <li>Strony internetowe</li>
                                <li>E-commerce</li>
                                <li>UI / UX </li>
                                <li>Projekty graficzne</li>
                                <li>Wizualizacje 3D</li>
                                <li>Modelowanie 3D</li>
                                <li>Aplikacje</li>
                                <li>Gry</li>
                            </ul>
                        </div>
                    </div>
                    <div data-scroll class="col-md-6 d-flex justify-content-center">
                        <div class="col-content2">
                            <h3>Branding</h3>
                            <p>Dziś branding jest najważniejszym elementem każdego dobrze prosperującego biznesu, łatwe do zapamiętania logo, charakterystyczna identyfikacja wizualna czy dobrze obrana strategia marketingowa, to wszystko ma znaczenie w jaki sposób odbierze Ciebie przyszły klient.</p>
                            <ul>
                                <li>Nazewnictwo</li>
                                <li>Identyfikacja wizualna</li>
                                <li>Logotypy</li>
                                <li>Marketing</li>
                                <li>Strategie biznesowe w social mediach</li>
                            </ul>
                        </div>
                    </div>
                </div>

                    <a href="kontakt" class="contact-us underline">Napisz do nas i stwórzmy coś razem.</a>
            </div>
        </section>

        <section data-scroll-section id="works">
            <div class="container">
                <h3 data-scroll data-scroll-speed="1" class="headerline">Nasze prace</h3>
                <div class="navigation-wrapper">
      <div class="project-preview-wrapper">
        <div class="project-preview"></div>
      </div>
      <ul class="navigation-list">
        <li class="navigation-item">
          <a class="navigation-link navigation-link-1" href="#">
            <span data-text="ZIELONEWIDOKI">ZIELONEWIDOKI</span>
          </a>
        </li>
        <div class="project-overlay"></div>
        <li class="navigation-item">
          <a class="navigation-link navigation-link-2" href="#">
            <span data-text="ATSKONSULTING">ATSKONSULTING</span>
          </a>
        </li>
        <li class="navigation-item">
            <a class="navigation-link navigation-link-4" href="#">
                <span data-text="DANFIT">DANFIT</span>
            </a>
        </li>
        <li class="navigation-item">
          <a class="navigation-link navigation-link-3" href="#">
            <span data-text="KOMB">KOMB</span>
          </a>
        </li>
      </ul>
    </div>
            </div>
        </section>

        <x-footer/>
        </div>
        <script src="js/app.js"></script>
        <script src="js/offer.js"></script>

    </body>
</html>