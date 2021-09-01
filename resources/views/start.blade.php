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
        
        <!-- WEBGL -->
        <canvas id="web_gl"></canvas>

        <!-- Landing Page -->

        <section id="landing-page-section">
            <div class="container fluid-margin landing-page-content">
                <p class="landing-page_content_text">Cześć, jesteśmy</p>
                <h1 class="">bisonstudio.</h1>
                <p class="landing-page_content_text_second">
                    Tworzymy wspaniałe
                    <span id="typed"></span>
                </p>
                <a href="#portfolio-section"
                    ><button
                        class="btn btn-outline-primary"
                    >
                        Portfolio
                    </button></a
                >
            </div>
        </section>


        <!-- We Create Section -->

        <section id="we-create-section" class="container fluid-margin row">
            <div class="col-lg-6">
                <h2 class="section-header we-create-section-header">
                    Jesteśmy Twoim <span class="green-highlight">kompleksowym</span> rozwiązaniem na <span class="green-highlight">wszystkie</span> technologiczne
                    potrzeby!
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
                <span class="green-highlight">Kochamy</span> rozmawiać, ale niech nasze <span class="green-highlight">portfolio</span> wypowie się za nas.
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
            <img src="images/modal.svg" id="modal-bg" class="modal-bg" alt="">
            <img src="images/modal-full.svg" id="modal-bg" class="modal-bg2" alt="">

            <section class="modal-content">
                <h3>Porozmawiajmy!</h3>
                <p class="mb-5">
                    Odezwiemy się tak szybko jak to możliwe, pamiętaj, żeby w razie
                    czego sprawdzić folder spam!
                </p>       
    
                <!-- Contact form -->
    
                    <form name="contact-form" class="contact-form">
                       <div class="form-field">
                          <input id="name" name="name" class="input-text js-input" type="text" required>
                          <label class="label" for="name">Imię</label>
                       </div>
                       <div class="form-field">
                          <input id="email" name="email" class="input-text js-input" type="email" required>
                          <label class="label" for="email">E-mail</label>
                       </div>
                       <div class="form-field">
                        <input id="subject" name="subject" class="input-text js-input" type="text" required>
                        <label class="label" for="subject">Temat</label>
                     </div>
                       <div class="form-field">
                           <textarea id="message" name="message" class="input-text js-input" cols="30" rows="5" required></textarea>
                          <label class="label" for="message">Wiadomość</label>
                       </div>
                       <div class="form-field">
                          <input type="submit" value="Wyślij" class="btn btn-primary mt-5 w-100"></input>
                       </div>
                    </form>
            </section>
        </div>



        <script src="js/app.js"></script>
    </body>
</html>
