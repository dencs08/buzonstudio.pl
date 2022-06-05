<!-- Navbar -->
<nav id="navbar">
    <div class="">
    <input data-stick-cursor type="checkbox" id="active" />
    <label data-stick-cursor id="nav-burger" for="active" class="menu-btn"
        ><span id="nav-closer"></span
    ></label>
    <div id="nav-bg"></div>
    <div id="nav-wrapper" class="wrapper">
        <div class="nav-container container">
            <div id="nav-content-outlined">
                <a href="/start" class="img-nav-a">
                    <img src="{{asset('images/logos/buzonstudio_white.svg')}}" class="img-nav" alt="buzonstudio logo (branding)" />
                </a>
            </div>

            <div id="scaled-content" class="nav-main-content">
                <div class="row">
                    <div
                        class="
                            col-lg-6
                            d-flex
                            justify-content-start justify-content-lg-center
                            align-items-center
                        "
                    >
                        <ul id="nav-ul">
                            <li class="nav-li">
                                <span class="nav-number">01</span
                                ><a href="/start" class="nav-item">Strona Główna</a>
                            </li>
                            <li class="nav-li">
                                <span class="nav-number">02</span
                                ><a href="/oferta" class="nav-item">Oferta</a>
                            </li>
                            <li class="nav-li">
                                <span class="nav-number">03</span
                                ><a href="/portfolio" class="nav">Portfolio</a>
                            </li>
                            <li class="nav-li">
                                <span class="nav-number">04</span
                                ><a href="/kontakt" class="nav-item">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                    <div
                        class="
                            col-lg-6
                            d-flex
                            justify-content-start justify-content-lg-center
                            align-items-center
                            mt-lg-0 mt-5
                        "
                    >
                        <div id="nav-info" class="nav-info d-none d-sm-block">
                            <p class="my-0 p1">
                                Studio które działa po to abyś Ty mógł rozwijać
                            </p>
                            <p class="my-0 p2">
                                Tworzymy dla marek, pracujemy dla ludzi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="
                    nav-icons-container
                    mx-auto
                    d-flex
                    justify-content-center
                    align-items-end
                "
            >
            <a href="{{config('app.fb')}}" rel="noreferrer" target="_blank">                
                <div class="nav-icon-div cursor_expand">
                    <img class="footer-icon" src="{{asset('images/social/facebook.svg')}}" alt="">
                </div>
            </a>

                <a href="{{config('app.ig')}}" rel="noreferrer" target="_blank">
                    <div class="nav-icon-div cursor_expand">
                        <img class="footer-icon" src="{{asset('images/social/ig.svg')}}" alt="">
                    </div>
                </a>
            </div>
        </div>
        <div class="nav-copyright-container container">
            <span class="nav-copyright">
                        Wykorzystujemy pliki cookies. W związku z tym, korzystając z naszej strony decydujesz się na ich wykorzystanie zgodnie z ustawieniami przeglądarki. Więcej możesz przeczytać w naszej polityce prywatności. <br>
            </span>
        </div>
    </div>    
    </div>
</nav>

<div id="nav-floater">
</div>
