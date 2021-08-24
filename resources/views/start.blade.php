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

        <nav id="navbar">
            <img src="images/logo_white.svg" class="img-nav" alt="" />
            <input type="checkbox" id="active" />
            <label for="active" class="menu-btn"><span></span></label>
            <div class="wrapper">
                <ul>
                    <li><a href="#">Start</a></li>
                    <li><a href="#">Oferta</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </div>
        </nav>

        <!-- Landing Page -->

        <div id="landing-page-section">
            <div class="container fluid-margin">
                <p class="landing-page_content_text">Cześć, jesteśmy</p>
                <h1 class="gsap-left-to-right-slide-in">bisonstudio.</h1>
                <p class="gsap-fade-in landing-page_content_text_second">
                    Twoje kompleksowe rozwiązanie na wszystkie technologiczne
                    potrzeby!
                </p>
                <a href="#"
                    ><button class="btn btn-outline-primary mt-4 gsap-top-to-bottom-slide-in">
                        Porozmawiajmy!
                    </button></a
                >
            </div>
        </div>

        <!-- WEBGL -->
        <canvas id="web_gl"></canvas>

        <!-- We Create Section -->

        <div id="we-create-section" class="container fluid-margin row">
            <div class="col-lg-6">
                <h2 class="section-header we-create-section-header">
                    Tworzymy wspaniałe <span id="typed"></span>
                </h2>
            </div>
            <div class="col-lg-6">
                <div class="card mb-card-we-create text-left">
                    <h2 class="card-header">Koncept</h2>
                    <hr />
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi commodi culpa, unde corrupti nam perferendis
                        molestiae, ipsum soluta vitae cupiditate aliquid
                        voluptatibus voluptatum explicabo. Delectus harum odio
                        sed cumque. Odit!
                    </p>
                </div>
                <div class="card mb-card-we-create text-left">
                    <h2 class="card-header">Design</h2>
                    <hr />
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi commodi culpa, unde corrupti nam perferendis
                        molestiae, ipsum soluta vitae cupiditate aliquid
                        voluptatibus voluptatum explicabo. Delectus harum odio
                        sed cumque. Odit!
                    </p>
                </div>
                <div class="card mb-card-we-create text-left">
                    <h2 class="card-header">Kod</h2>
                    <hr />
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi commodi culpa, unde corrupti nam perferendis
                        molestiae, ipsum soluta vitae cupiditate aliquid
                        voluptatibus voluptatum explicabo. Delectus harum odio
                        sed cumque. Odit!
                    </p>
                </div>
            </div>
        </div>

        <!-- Portfolio -->

        <div id="portfolio-section" class="container-md mx-auto">
            <h2 class="section-header text-center">
                Kochamy rozmawiać, ale niech nasze portfolio wypowie się za nas.
            </h2>
            <div class="row">
                <div class="col-lg-6 text-center">
                    <img
                        src="images/portfolio1.png"
                        class="portfolio-img"
                        alt=""
                    />
                </div>
                <div class="col-lg-6 text-center">
                    <img
                        src="images/portfolio2.png"
                        class="portfolio-img"
                        alt=""
                    />
                </div>
            </div>
            <a href="#"
                ><button class="btn btn-primary fw-bold mt-5">
                    Portfolio
                </button></a
            >
        </div>

        <!-- Footer Contact -->

        <footer>
            <div id="contact-section">
                <img src="images/footer.svg" class="footer-svg" alt="" />
                <div class="contact-content container text-center">
                    <h2 class="section-header">
                        Zatrudnij nas a my zajmiemy się resztą ✌
                    </h2>
                    <div class="button-trail mt-5">
                        <form>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Porozmawiajmy!
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </footer>

        <script src="js/app.js"></script>
    </body>
</html>
