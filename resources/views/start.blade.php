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
            <label for="active" class="menu-btn"
                ><span id="nav-closer"></span
            ></label>
            <div class="wrapper">
                <ul>
                    <li>
                        <a href="#landing-page-section" class="nav-item"
                            >Start</a
                        >
                    </li>
                    <li>
                        <a href="#we-create-section" class="nav-item">Oferta</a>
                    </li>
                    <li>
                        <a href="#portfolio-section" class="nav-item"
                            >Portfolio</a
                        >
                    </li>
                    <li>
                        <a href="#contact-section" class="nav-item">Kontakt</a>
                    </li>
                </ul>
            </div>
        </nav>

        <!-- Landing Page -->

        <section id="landing-page-section">
            <div class="container fluid-margin">
                <p class="landing-page_content_text">Cześć, jesteśmy</p>
                <h1 class="gsap-left-to-right-slide-in">bisonstudio.</h1>
                <p class="gsap-fade-in landing-page_content_text_second">
                    Twoje kompleksowe rozwiązanie na wszystkie technologiczne
                    potrzeby!
                </p>
                <a href="#portfolio-section"
                    ><button
                        class="
                            btn btn-outline-primary
                            mt-4
                            gsap-top-to-bottom-slide-in
                        "
                    >
                        Portfolio
                    </button></a
                >
            </div>
        </section>

        <!-- WEBGL -->
        <canvas id="web_gl"></canvas>

        <!-- We Create Section -->

        <section id="we-create-section" class="container fluid-margin row">
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
        </section>

        <!-- Portfolio -->

        <section id="portfolio-section" class="container-md mx-auto">
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
        </section>

        <!-- Footer Contact -->

        <footer>
            <section id="contact-section">
                <img src="images/footer.svg" class="footer-svg" alt="" />
                <div class="contact-content container text-center">
                    <h2 class="section-header">
                        Zatrudnij nas a my zajmiemy się resztą ✌
                    </h2>
                    <div id="trigger" class="button-trail mt-5">
                        <form>
                            <a href="#contact">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Porozmawiajmy!
                            </a>
                        </form>
                    </div>
                </div>
            </section>
        </footer>

        <!-- Modal -->

        <div id="modal-content" class="modal-container">
            <h3>Porozmawiajmy!</h3>
            <p class="modal-p">
                Odezwiemy się tak szybko jak to możliwe, pamiętaj, żeby w razie
                czego sprawdzić folder spam!
            </p>

            <div id="form-main">
                <div id="form-div">
                  <form class="form" id="form1">
                    
                    <p class="name">
                      <input name="name" type="text" class="feedback-input" placeholder="Name" id="name" />
                    </p>
                    
                    <p class="email">
                      <input name="email" type="text" class="feedback-input" id="email" placeholder="Email" />
                    </p>
                    
                    <p class="text">
                      <textarea name="text" class="feedback-input" id="comment" placeholder="Message"></textarea>
                    </p>
                    
                    
                    <div class="submit">
                        <button class="btn btn-primary mt-5">Wyślij</button>
                      <div class="ease"></div>
                    </div>
                  </form>
                </div>

        </div>

        <script src="js/app.js"></script>
    </body>
</html>
